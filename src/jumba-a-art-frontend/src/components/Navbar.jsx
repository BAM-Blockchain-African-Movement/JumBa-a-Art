import React from "react";
import logo  from "../assets/logo-jumba-miniature.svg";

const Navbar = () => {
  return (
    <div className="mb-4">
      <nav className="bg-white rounded-full px-10">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <a className="flex flex-shrink-0 items-center mr-4" href="/">
              <img className="h-10 w-auto" src={logo} alt="Logo Jumba'a art" />
            </a>
          </div>

          {/* Pages link */}
          <div className="flex flex-2 items-center justify-center">
            <a
              className="flex flex-shrink-0 items-center mx-2 px-4 py-2 font-semibold text-sm text-[#343434]"
              href="/"
            >Jumba'a Market</a>
            <a
              className="flex flex-shrink-0 items-center mx-2 px-4 py-2 font-semibold text-sm text-[#343434]"
              href="/"
            >Create Jumba'a Art</a>
            <a
              className="flex flex-shrink-0 items-center mx-2 px-4 py-2 font-semibold text-sm text-[#343434]"
              href="/"
            >My Jumba'a</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
