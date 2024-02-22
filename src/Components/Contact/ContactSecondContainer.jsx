import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaTwitter, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
function ContactSecondContainer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lblleig", "template_kbwnk5v", form.current, {
        publicKey: "ltQVksKLfZ8gq4WN0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

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
            <div className="space-y-3">
              <p className="leading-relaxed text-xl text-gray-900 space-x-3">
                <span className="inline-block w-auto">
                  <FaLocationDot />
                </span>
                <span>
                  1303, Buckingham Street, Egattur, OMR, Chennai - 600130
                </span>
              </p>
              <p className="leading-relaxed text-xl text-gray-900 space-x-3">
                <FaPhoneAlt className="inline-block w-auto" />
                <span> 9087637777</span>
              </p>
            </div>
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
            <form ref={form} onSubmit={sendEmail}>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required=""
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required=""
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
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
