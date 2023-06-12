import { useContext, useState,useEffect } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/firebase.config";

const Login = () => {
  const auth = getAuth(app);
    useEffect(() => {
      document.title = "Toy-Shop | Login";
    }, []);
  const [error, setError] = useState('');
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        setError('');
      })
      .catch((error) => {
        console.log(error);
        setError(error.message)
      });
  };
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
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
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col bg-gray-700">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Login !</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-700">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
              <button className="btn btn-primary border-none">Login</button>
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
  );
};

export default Login;
