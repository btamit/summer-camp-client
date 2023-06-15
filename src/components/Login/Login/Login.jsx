import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [error, setError] = useState("");
  const githubProvider = new GithubAuthProvider();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

    const {
      register,
      handleSubmit,
      reset
    } = useForm();

    const onSubmit = (data) => {
      console.log(data);
        signIn(data.email, data.password)
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            reset();
            Swal.fire({
              title: "User login successful",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
            navigate(from, { replace: true });
            setError("");
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          });
    };
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
         const savedUser = { name: user.displayName, email: user.email };
        console.log(user);
                  fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(savedUser),
                  })
                    .then((res) => res.json())
                    .then(() => {
                      navigate(from, { replace: true });
                    });
       
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, { replace: true });
    })
    .catch(error =>{
      console.log(error)
    })
  };
  return (
    <>
      <Helmet>
        <title>Martial Arts | Login</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col bg-gray-700">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Please Login !</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-700">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                  })}
                  name="password"
                  placeholder="password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a
                    href="#"
                    className="underline label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
                <p className="text-amber-400">{error}</p>
              </div>
              <div className="form-control mt-4">
                <input
                  className="btn btn-primary border-none"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="flex p-5 gap-2">
              <p
                onClick={handleGoogleSignIn}
                className="border rounded-lg cursor-pointer p-2 flex items-center"
              >
                <FaGoogle />
                Login with google
              </p>
              <p
                onClick={handleGithubSignIn}
                className="border rounded-lg cursor-pointer p-2 flex items-center"
              >
                <FaGithub />
                Login with github
              </p>
            </div>
            <Link to="/register" className="underline p-5">
              Do not have an account? Please Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
