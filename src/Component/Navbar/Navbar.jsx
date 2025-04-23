import React from "react";
import logo from "../../img/logo.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="navbar-start">
        <img src={logo} alt="" />
        <a className=" text-3xl font-bold">Phudu</a>
      </div>
      <div className="navbar-center  ">
        <ul className="menu menu-horizontal flex gap-5 items-center text-xl font-medium text-gray-800">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-indigo-500 text-white underline px-4 py-2 rounded-lg"
                : ""
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-indigo-500 text-white underline px-4 py-2 rounded-lg"
                : ""
            }
            to="/booking"
          >
            My-Bookings
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-indigo-500 text-white underline px-4 py-2 rounded-lg"
                : ""
            }
            to="/blog"
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-indigo-500 text-white underline px-4 py-2 rounded-lg"
                : ""
            }
            to="/contact"
          >
            Contact Us
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn px-6 py-5 bg-indigo-500 rounded-full text-xl text-white font-medium">
          Emergency
        </a>
      </div>
    </div>
  );
};

export default Navbar;
