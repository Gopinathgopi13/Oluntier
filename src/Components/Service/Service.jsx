import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ServiceMainContainer from "./ServiceMainContainer";


function Service() {
  return (
    <div>
      <div className="bg-HomePageBG5 bg-cover bg-center h-[40vh]  ">
        <Navbar />
        <div>
          <div className="text-5xl font-bold text-center mt-20">Service</div>
        </div>
      </div>
      <div>
        <ServiceMainContainer />
      </div>
      <div>{/* <AboutSecondContainer /> */}</div>
      <div>{/* <img src={aboutPhoto} alt="" /> */}</div>
      <div>{/* <AboutThirdContainer /> */}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Service;
