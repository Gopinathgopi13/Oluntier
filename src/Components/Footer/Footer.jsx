import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import logo from "../../assets/oluntier logo.png";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-[#40A2E3] text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="lg:flex lg:gap-8  ">
          <div className="mt-8 grid grid-cols-2 gap-8  lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2 sm:col-span-1">
              <div>
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium dark:text-white">Contact</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="transition hover:opacity-75 dark:text-gray-200 flex gap-2">
                  <div>
                    99, Rajiv Gandhi Salai, Industrial Estate, Perungudi,
                    Chennai, Tamil Nadu 600096
                  </div>
                </li>

                <li className=" transition hover:opacity-75 dark:text-gray-200 flex items-center gap-2">
                  <div>asdfghjkl@gmail.com.in</div>
                </li>

                <li className=" transition hover:opacity-75 dark:text-gray-200 flex items-center gap-2">
                  <div>9087637777</div>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium dark:text-white">Design Categories</p>

              <ul className="mt-6 space-y-4 text-sm lg:text-center">
                <li>
                  <a
                    href="#"
                    className=" transition hover:opacity-75 dark:text-gray-200"
                  >
                    Modular Kitchen
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className=" transition hover:opacity-75 dark:text-gray-200"
                  >
                    Bedrooms Unit
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className=" transition hover:opacity-75 dark:text-gray-200"
                  >
                    Tv Units
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className=" transition hover:opacity-75 dark:text-gray-200"
                  >
                    Pooja Room
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium  dark:text-white">Other Links</p>

              <ul className="mt-6 space-y-4 lg:text-center text-sm">
                <li>
                  <a
                    href="#"
                    className=" transition hover:opacity-75 dark:text-gray-200"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className=" transition hover:opacity-75 dark:text-gray-200"
                  >
                    Teams & Condition
                  </a>
                </li>
              </ul>
              <ul className="flex mt-6 text-sm">
                <li>
                  <a href="">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
          <div className="sm:flex sm:justify-between">
            <p className="text-lg  dark:text-gray-400">
              &copy; 2024.{" "}
              <strong>
                <Link to="#">Oluntier</Link>
              </strong>
              . All rights reserved.
            </p>

            {/* <ul className="mt-8 flex justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="#"
                  className=" transition hover:opacity-75 dark:text-gray-400"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className=" transition hover:opacity-75 dark:text-gray-400"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className=" transition hover:opacity-75 dark:text-gray-400"
                >
                  Cookies
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
