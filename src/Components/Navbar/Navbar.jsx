import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/oluntier logo.png";
import logo2 from "../../assets/oluntier_logo_BlueBG.png";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Bind the event listener
    window.addEventListener("click", handleClickOutside);

    // Unbind the event listener on cleanup
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const navItems = [
    { id: 1, path: "/", text: "Home" },
    { id: 2, path: "/service", text: "Services" },
    { id: 4, path: "/Project", text: "Project" },
    { id: 4, path: "/about", text: "About" },
    { id: 5, path: "/contact", text: "Contact" },
  ];

  return (
    <nav className="w-full border">
      <div className="max-w-[1280px]  px-4 py-10 mx-auto text-white drop-shadow-lg shadow-black flex justify-between items-center overflow-hidden">
        <div className="lg:w-[13%] w-[40%]">
          <Link to="/">
            <img src={logo2} alt="Company_Logo" />
          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex  w-[680px] font-medium h-full items-center justify-between">
          <div className="menu relative text-md text-end cursor-pointer  ">
            <Link to="/" className="flex items-center gap-2">
              <div>Home</div>
            </Link>
          </div>
          <div className="menu relative text-md text-end cursor-pointer  ">
            <Link to="/service" className="flex items-center gap-2">
              <div>Service</div>
              {/* <div>
                  <FaAngleDown />
                </div> */}
            </Link>
          </div>
          <div className="menu relative text-md text-end cursor-pointer  ">
            <Link to="/project" className="flex items-center gap-2">
              <div>Project</div>
              {/* <div>
                  <FaAngleDown />
                </div> */}
            </Link>
          </div>

          <div className="menu relative text-md text-end cursor-pointer  ">
            <Link to="/about" className="flex items-center gap-2">
              <div>About Us</div>
            </Link>
          </div>

          <div className="menu relative text-md text-end cursor-pointer  ">
            <Link to="/contact" className="flex items-center gap-2">
              <div>Contact</div>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="inline h-[80%] w-[10%] lg:hidden text-center ">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile Navigation menu */}
        <div
          className={
            nav
              ? "fixed lg:hidden left-0 top-0 w-[50%] space-y-5 bg-[#C7C8CC] p-8 ease-in-out duration-500"
              : "ease-in duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <div className="logo_div object-contain ">
            <Link to="/">
              <img src={logo2} alt="Company_Logo" />
            </Link>
          </div>
          <div className="space-y-5 ">
            <div className=" lg:flex text-white w-[60%] flex flex-col items-center space-y-5 mx-auto">
              {navItems.map(({ id, text, path }) => {
                return (
                  <Link to={path} key={id}>
                    <div className="menu text-lg font-medium h-full flex items-center cursor-pointer  gap-2">
                      <div>{text}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
