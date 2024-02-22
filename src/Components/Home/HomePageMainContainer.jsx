import React from "react";
import "./button.css";
import { Link } from "react-router-dom";
function HomePageMainContainer() {
  return (
    <div className="lg:w-[1280px] h-[100vh] mx-auto flex justify-center items-center md:text-[#282936] text-white">
      <div className="flex flex-col items-center space-y-5">
        <div className="md:text-6xl text-3xl md:w-[60%] text-center font-semibold">
          Designing Timeless Spaces, Tailored To You.
        </div>
        {/* <div className=" md:w-[35%] text-lg font-light text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, omnis.
        </div> */}
        <div>
          <Link to="/contact" className="flex items-center justify-center"  >
            <button className="learn-more z-">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Start Project</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePageMainContainer;
