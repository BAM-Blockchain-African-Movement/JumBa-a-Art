import React from "react";
import logo from "../assets/logo-jumba-miniature.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white rounded-full px-10 mb-11">
      <div className="flex h-20 items-center justify-between">
        <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          {/* <!-- Logo --> */}
          <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
            <img className="h-10 w-auto" src={logo} alt="Logo Jumba'a art" />
          </NavLink>
        </div>

        {/* Pages link */}
        <div className="flex flex-2 items-center justify-center">
          <NavLink
            className="flex flex-shrink-0 items-center mx-2 px-4 py-2 font-semibold text-sm text-[#343434]"
            to="/jumbamarket"
          >
            Jumba'a Market
          </NavLink>
          <NavLink
            className="flex flex-shrink-0 items-center mx-2 px-4 py-2 font-semibold text-sm text-[#343434]"
            to="/createjumba"
          >
            Create Jumba'a Art
          </NavLink>
          <NavLink
            className="flex flex-shrink-0 items-center mx-2 px-4 py-2 font-semibold text-sm text-[#343434]"
            to="/myjumba"
          >
            My Jumba'a
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
