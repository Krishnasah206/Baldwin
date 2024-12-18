import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BsCart3, Bs1CircleFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { FaMobileScreenButton } from "react-icons/fa6";
import { SiLivechat } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";

const Navbar = ({ isLoggedIn, setCurrentPage, handleLogout }) => {
  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50 overflow-hidden">
      {/* Contact Section */}
      <div className="bg-black text-gray-300 flex justify-between items-center px-4 py-1 text-xs border-b border-gray-700">
        {/* Left Section */}
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-1">
            Need Help? <FaMobileScreenButton className="text-teal-400" />
            800-358-2469
          </span>
          <span className="flex items-center gap-1">
            <SiLivechat className="text-teal-400" /> Live Chat
          </span>
          <span className="flex items-center gap-1">
            <MdEmail className="text-teal-400" /> Contact Us
          </span>
        </div>

        {/* Center Section */}
        <div className="flex items-center gap-2">
          <MdLocalShipping className="text-teal-400" />
          <span>FREE SHIPPING ON ALL ORDERS $99+</span>
        </div>

        {/* Right Section - Visible when not logged in */}
        {!isLoggedIn && (
          <div className="flex gap-4 items-center">
            <span>Are You a Baldwin Pro?</span>
            <button
              onClick={() => setCurrentPage('login')}
              className="text-teal-400 hover:underline"
            >
              Sign In
            </button>
            <span>or</span>
            <button
              onClick={() => setCurrentPage('signup')}
              className="text-teal-400 hover:underline"
            >
              Sign Up
            </button>
          </div>
        )}
        {/* Right Section - Visible when logged in */}
        {isLoggedIn && (
          <div className="flex gap-4 items-center">
            <span>Hello, User</span>
            <button onClick={handleLogout} className="text-teal-400 hover:underline">
              Log Out
            </button>
          </div>
        )}
      </div>

      {/* Navbar Section */}
      <nav className="bg-black text-white fixed top-[25px] left-0 w-full z-40">
        {/* Top Section */}
        <div className="flex flex-row items-center border-b border-gray-700">
          {/* Search */}
          <div className="flex items-center border-r border-gray-700 px-4 py-2">
            <input
              type="text"
              placeholder="Search by product name, item # or keyword"
              className="bg-transparent text-sm placeholder-gray-400 focus:outline-none"
            />
            <button className="ml-2 text-gray-400 hover:text-white">
              <IoIosSearch size={20} />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-grow text-center py-2 border-r border-gray-700 text-lg font-semibold">
            BALDWIN HARDWARE DIRECT
          </div>

          {/* Icons */}
          <div className="flex items-center">
            {/* My Projects */}
            <div className="flex items-center border-r border-gray-700 px-4 py-2 cursor-pointer">
              <span className="mr-2 text-sm">My Projects</span>
              <Bs1CircleFill size={16} />
            </div>

            {/* Profile */}
            <div className="flex items-center border-r border-gray-700 px-4 py-2 cursor-pointer">
              <CgProfile size={20} />
              <FaAngleDown className="ml-1" size={12} />
            </div>

            {/* Cart */}
            <div className="flex items-center px-4 py-2 cursor-pointer">
              <BsCart3 size={20} />
              <span className="ml-1 text-sm">1</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;