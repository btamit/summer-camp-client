import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
   useEffect(() => {
     document.title = "Toy-Shop | Sign Up";
   }, []);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
  const handleRegister = (e) => {
    e.preventDefault();
    setSuccess("");
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        navigate(from, { replace: true });
        setError('');
        e.target.reset();
        setSuccess('user has been successfully created');
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Sign Up !</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-700">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                required
                className="input input-bordered"
              />
            </div>
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              required
              className="input input-bordered"
            />
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
                <Link to="/login" className="underline">
                  Already have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary border-none">Sign Up</button>
            </div>
            <p className="text-amber-400">{error}</p>
            <p className="text-emerald-500">{success}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
