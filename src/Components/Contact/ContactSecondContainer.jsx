import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
function ContactSecondContainer() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div
          className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section"
          id="contact-form"
        >
          <div className="md:w-1/3 w-full pt-10">
              {/* <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">
                Contact
              </h1> */}
            <p className="leading-relaxed text-xl text-gray-900">
              We're here to assist you! If you have any questions or need
              assistance, please feel free to reach out to us.
            </p>
            <p className="leading-relaxed text-xl text-gray-900 mt-8">
              Connect with us on social media:
            </p>
            <span className="inline-flex mt-6 justify-center sm:justify-start">
              <a
                className="text-sky-500 hover:text-sky-900"
                target="_blank"
                href="https://twitter.com/example"
              >
                <FaTwitter />
              </a>
              <a
                className="text-sky-500 hover:text-sky-900"
                href="https://www.instagram.com/example/"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                className="text-sky-500 hover:text-sky-900"
                href="https://www.instagram.com/example/"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                className="text-sky-500 hover:text-sky-900"
                href="https://www.instagram.com/example/"
                target="_blank"
              >
                <FaWhatsapp />
              </a>
            </span>
          </div>
          <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
            <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">
              We’d Love To Hear From You.
            </h1>
            <form action="" method="post">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="name"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required=""
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required=""
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required=""
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex text-white bg-sky-500 border-0 py-4 px-6 focus:outline-none hover:bg-sky-600 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha"
                >
                  Send Message ✉
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSecondContainer;
