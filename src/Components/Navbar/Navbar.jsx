import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/oluntier_logo_BlueBG.png";
import { IoCloseSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const TOP_OFFSET = 900;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`${
        showBackground ? "bg-[#2393DD] text-white" : "bg-transparent"
      } "text-white hover:bg-[#2393DD] hover:text-white transition-all ease-in duration-75 z-50`}
    >
      <div className="lg:w-[1280px] mx-auto flex items-center justify-between font-medium">
        <div className="z-50 p-5 lg:w-auto w-full flex justify-between">
          <a href="/" className="lg:w-[100%] w-[40%]">
            <img
              src={Logo}
              alt="logo"
              className="md:cursor-pointer h-12 z-50"
            />
          </a>
          <div
            className="text-3xl md:hidden flex items-center justify-end w-[10%] text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoCloseSharp /> : <TiThMenu />}
          </div>
        </div>
        <ul className="md:flex hidden items-center  font-semibold justify-center font-[Poppins] lg:w-[60%]">
          <li>
            <Link to="/" className="py-7 block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/service" className="py-7 block">
              Service
            </Link>
          </li>
          {/* <li>
            <Link to="/blogs" className="py-7 block">
              Blogs
            </Link>
          </li> */}
          <li>
            <Link to="/about" className="py-7 block">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="py-7 block">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-[#2393DD] fixed w-full top-0 overflow-y-auto py-20 pl-4 space-y-4 z-30 text-white
        duration-500 ${open ? "top-0" : "top-[-100%]"}
        `}
        >
          <li className="border-b-2">
            <Link to="/" className="py-3 px-3 inline-block">
              Home
            </Link>
          </li>
          <li className="border-b-2">
            <Link to="/Service" className="py-3 px-3 inline-block">
              Service
            </Link>
          </li>
          {/* <li className="border-b-2">
            <Link to="/blogs" className="py-3 px-3 inline-block">
              Blogs
            </Link>
          </li> */}

          <li className="border-b-2">
            <Link to="/about" className="py-3 px-3 inline-block">
              About Us
            </Link>
          </li>
          <li className="border-b-2">
            <Link to="/contact" className="py-3 px-3 inline-block">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
