import React from "react";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-white rounded-full px-10">
      <div className="flex h-20 items-center justify-between">
        <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          {/* <!-- Logo --> */}
          <p className="text-[#5c5c5c] text-sm flex flex-shrink-0 items-center mr-4">
            © 2024 - 2025 jumba'a-art.com. All rights reserved.
          </p>
        </div>

        {/* Pages link */}
        <div className="flex flex-2 items-center justify-center">
          <NavLink
            className="flex flex-shrink-0 items-center mx-2 px-4 py-2 font-semibold text-sm text-[#343434]"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="flex flex-shrink-0 items-center mx-2 px-4 py-2 font-semibold text-sm text-[#343434]"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className="flex flex-shrink-0 items-center mx-2 px-4 py-2 font-semibold text-sm text-[#343434]"
            to="/help"
          >
            Help
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
