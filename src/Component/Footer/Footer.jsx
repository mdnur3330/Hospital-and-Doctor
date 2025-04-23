import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../../img/logo.png";
import { NavLink } from 'react-router';
const Footer = () => {
    return (
       <div className='text-center px-30 py-20 bg-white'>
         <div className='flex gap-3 justify-center items-center '>
                <img src={logo} alt="" />
                <h2 className=" text-3xl font-bold">Phudu</h2>
              </div>
              <div>
        <ul className="menu menu-horizontal flex gap-5 mx-auto items-center text-xl font-medium text-gray-800 py-7">
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
      <div className='border-t border-dashed border-gray-300 flex gap-4 justify-center text-3xl py-10'>
      
      <a href="https://www.facebook.com/profile.php?id=100067795436674" target='_blank' rel='noopener noreferrer'><FaFacebook /></a>

      <a href="https://www.linkedin.com/in/nur-alom1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>

      <a href="https://www.youtube.com/@hmnurulalom9359" target='_blank' rel='noopener noreferrer'><FaYoutube /></a>
      <a href="https://github.com/mdnur3330" target='_blank' rel='noopener noreferrer'><FaGithub /></a>
      
      
      
      </div>
       </div>
    );
};

export default Footer;