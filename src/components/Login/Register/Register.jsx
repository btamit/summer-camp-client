import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";
import app from "../../../firebase/firebase.config";
import { useForm } from "react-hook-form";

const Register = () => {
   const { createUser, updateUserProfile } = useContext(AuthContext);
   const auth = getAuth(app);
   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();

   const [error, setError] = useState("");
   const [success, setSuccess] = useState("");
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

const onSubmit= data => {
  console.log(data);
  createUser(data.email, data.password)
   .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateUserProfile(data.name, data.photoURL)
        .then(() =>{
            console.log('User profile info updated');
            const savedUser = {name: data.name, email:data.email}
            fetch("https://summer-camp-school-server-smoky.vercel.app/users",{
              method:'POST',
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(savedUser)
            })
            .then(res => res.json())
            .then(data =>{
              if(data.insertedId){
                 reset();
                 Swal.fire({
                   position: "top-end",
                   icon: "success",
                   title: "User created successfully",
                   showConfirmButton: false,
                   timer: 1500,
                 });
                 navigate('/')
              }
            })
        })
        .catch(error => console.log(error))
        navigate(from, { replace: true });
        setError('');
        // e.target.reset();
        setSuccess('user has been successfully created');
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
         console.log(user);
         navigate(from, { replace: true });
       })
       .catch((error) => {
         console.log(error.message);
       });
   };
   const handleGithubSignIn = () => {
     signInWithPopup(auth, githubProvider)
       .then((result) => {
         const loggedUser = result.user;
         console.log(loggedUser);
         navigate(from, { replace: true });
       })
       .catch((error) => {
         console.log(error);
       });
   };



  return (
    <>
      <Helmet>
        <title>Martial Arts | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Please Sign Up !</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-700">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must have one lower case, one number, one uppercase
                    and one special character
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", { required: true })}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                />
                {errors.confirmPassword && (
                  <span className="text-red-600">
                    Confirm Password is required
                  </span>
                )}
                <label className="label">
                  <Link to="/login" className="underline">
                    Already have an account?
                  </Link>
                </label>
                <div className="flex p-5 gap-2">
                  <p
                    onClick={handleGoogleSignIn}
                    className="border rounded-lg cursor-pointer p-2 flex items-center"
                  >
                    <FaGoogle className="mr-2" />
                    Google
                  </p>
                  <p
                    onClick={handleGithubSignIn}
                    className="border rounded-lg cursor-pointer p-2 flex items-center"
                  >
                    <FaGithub className="mr-2" />
                    Github
                  </p>
                </div>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary border-none" type="submit" value="Sign Up"/>
              </div>
              <p className="text-amber-400">{error}</p>
              <p className="text-emerald-500">{success}</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
