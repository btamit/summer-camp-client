import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  FaShoppingCart,
  FaHome,
  FaListAlt,
  FaRegIdCard,
  FaWallet,
  FaUsers,
} from "react-icons/fa";
import useCart from '../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart();
    // TODO:
    const isAdmin = true;
    return (
      <div className="my-container">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-gray-700 text-base-content">
              {isAdmin ? (
                <>
                  <li>
                    <NavLink to="/dashboard/home">
                      <FaHome></FaHome>Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/addclass">
                      <FaListAlt></FaListAlt> Add Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/classes">
                      <FaRegIdCard></FaRegIdCard> Manage Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/allusers">
                      <FaUsers></FaUsers> Manage Users
                    </NavLink>
                  </li>
                  <div className="divider"></div>
                  <li>
                    <NavLink to="/">
                      <FaHome></FaHome> Home
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/dashboard/home">
                      <FaHome></FaHome>User Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/selectedclass">
                      <FaListAlt></FaListAlt> My Selected Class
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/enrolledclass">
                      <FaRegIdCard></FaRegIdCard> My Enrolled Class
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/mycart">
                      <FaShoppingCart></FaShoppingCart> My Cart
                      <span className="badge inl badge-secondary">
                        +{cart?.length || 0}
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/paymenthistory">
                      <FaWallet></FaWallet> Payment History
                    </NavLink>
                  </li>
                  <div className="divider"></div>
                  <li>
                    <NavLink to="/">
                      <FaHome></FaHome> Home
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;