import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 p-8 font-sans overflow-hidden">
      <div className="flex flex-wrap justify-between gap-6 mb-6">
        {/* Footer Column 1 */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg font-bold mb-3">Contact</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Visit Our Showroom</li>
            <li className="hover:underline cursor-pointer">Store Hours</li>
            <li className="hover:underline cursor-pointer">Chat with an Expert</li>
            <li className="hover:underline cursor-pointer">800-358-2469</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Footer Column 2 */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg font-bold mb-3">Company</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Our Story</li>
            <li className="hover:underline cursor-pointer">Finishes</li>
            <li className="hover:underline cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Footer Column 3 */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg font-bold mb-3">Help</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">FAQs</li>
            <li className="hover:underline cursor-pointer">Shipping Policy</li>
            <li className="hover:underline cursor-pointer">Return Policy</li>
          </ul>
        </div>

        {/* Footer Column 4 */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg font-bold mb-3">Account</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Sign In</li>
            <li className="hover:underline cursor-pointer">Register</li>
            <li className="hover:underline cursor-pointer">Become a Baldwin Pro</li>
            <li className="hover:underline cursor-pointer">My Projects</li>
            <li className="hover:underline cursor-pointer">Order Status</li>
          </ul>
        </div>

        {/* Footer Column 5 */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg font-bold mb-3">Stay Informed</h4>
          <p className="mb-3">Subscribe and receive product updates and news.</p>
          <div className="flex gap-2 mb-3 bg-white border-b-2 border-stone-900">
            <input
              type="email"
              placeholder="Email"
              className="p-2 flex-1"
            />
            <button className="text-black px-4 py-2 hover:underline">
              Subscribe
            </button>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4">
            <div className="w-7 h-7 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full hover:bg-white">
              <FaFacebookF />
            </div>
            <div className="w-7 h-7 flex items-center justify-center bg-gray-300 text-gray-800 rounded-full hover:bg-white">
              <FaInstagram />
            </div>
            <div className="w-7 h-7 flex items-center justify-center bg-gray-300 text-gray-800 rounded-full hover:bg-white">
              <FaXTwitter />
            </div>
            <div className="w-7 h-7 flex items-center justify-center bg-gray-300 text-gray-800 rounded-full hover:bg-white">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 pt-4 flex flex-col sm:flex-row justify-between text-sm">
        <p>Copyright 2024 © Baldwin Hardware Direct</p>
        <div className="space-x-3">
          <a href="/terms" className="hover:underline">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
