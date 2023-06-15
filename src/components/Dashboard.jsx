import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  FaShoppingCart,
  FaHome,
  FaListAlt,
  FaRegIdCard,
  FaWallet,
} from "react-icons/fa";
const Dashboard = () => {
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
              {/* Sidebar content here */}
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
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;