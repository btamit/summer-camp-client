import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { AuthContext } from "../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../hooks/useCart";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  const [cart] = useCart();
  return (
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <div className="flex gap-5 items-center">
              <img
                className="w-24 h-16"
                src="https://napleskarate.com/upload/AMA-Logo-clean.png"
                alt=""
              />
              <h2 className="text-white text-2xl font-bold">Martial Arts</h2>
            </div>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instructors"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/classes"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Classes
              </NavLink>
            </li>
            {/* <li>
              {user && (
                <div className="flex gap-5 items-center">
                  <div>
                    <NavLink
                      to="/AdminDashboard"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      AdminDashboard
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/InstructorDashboard"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      InstructorDashboard
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/StudentDashboard"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      StudentDashboard
                    </NavLink>
                  </div>
                  <div className="tooltip" data-tip={user?.displayName}>
                    <NavLink className="text-4xl" to="#">
                      <img
                        className="h-12 rounded-full hover:bg-sky-800"
                        src={user.photoURL}
                        alt="User-photo"
                      />
                    </NavLink>
                  </div>
                </div>
              )}
            </li> */}
            <li>
              <Link to="/dashboard/mycart">
                <button className="btn">
                  <FaShoppingCart/>
                  <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
              </Link>
            </li>
            <div className="flex flex-col items-center md:flex-row">
              {user ? (
                <>
                  {/* <span className="text-2xl mr-2 text-gray-300">
                    {user?.displayName}
                  </span> */}
                  <Link
                    onClick={handleLogOut}
                    to=""
                    className="btn md:w-auto md:mr-4 border-none"
                  >
                    <div className="inline-flex items-center justify-center w-full h-full">
                      <p className="mr-3">Logout</p>
                    </div>
                  </Link>
                </>
              ) : (
                <Link to="/login" className="btn md:w-auto md:mr-4 border-none">
                  <div className="inline-flex items-center justify-center w-full h-full">
                    <p className="mr-3">Login</p>
                  </div>
                </Link>
              )}
            </div>
          </ul>
          {/* Mobile Navbar Section */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars3Icon className="w-5 text-gray-600" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-gray-600 border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <span className="text-xl font-bold tracking-wide text-white uppercase">
                          Summer Camp School
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className="w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link to="/" className="default">
                          Home
                        </Link>
                      </li>
                      <li>
                        <NavLink
                          to="/instructors"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Instructors
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/classes"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Classes
                        </NavLink>
                      </li>
                      <li>
                        {user && (
                          <div>
                            <div>
                              <NavLink
                                to="/myToys"
                                className={({ isActive }) =>
                                  isActive ? "active" : "default"
                                }
                              >
                                My Toys
                              </NavLink>
                            </div>
                            <div>
                              <NavLink
                                to="/addAToy"
                                className={({ isActive }) =>
                                  isActive ? "active" : "default"
                                }
                              >
                                Add A Toy
                              </NavLink>
                            </div>
                            <div
                              className="tooltip"
                              data-tip="Bishojit Toppo Amit"
                            >
                              <NavLink className="text-4xl" to="#">
                                <img
                                  className="h-12 rounded-full hover:bg-sky-800"
                                  src={user.photoURL}
                                  alt="User-photo"
                                />
                              </NavLink>
                            </div>
                          </div>
                        )}
                      </li>
                      <div className="flex flex-col md:flex-row">
                        {user ? (
                          <Link
                            onClick={handleLogOut}
                            to=""
                            className="btn md:w-auto md:mr-4 border-none"
                          >
                            <div className="inline-flex items-center justify-center w-full h-full">
                              <p className="mr-3">Logout</p>
                            </div>
                          </Link>
                        ) : (
                          <Link
                            to="/login"
                            className="btn md:w-auto md:mr-4 border-none"
                          >
                            <div className="inline-flex items-center justify-center w-full h-full">
                              <p className="mr-3">Login</p>
                            </div>
                          </Link>
                        )}
                      </div>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
