import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import AboutMainContainer from "./AboutMainContainer";
import AboutSecondContainer from "./AboutSecondContainer";
import aboutPhoto from "../../assets/HomePageBG5.jpg";
import AboutThirdContainer from "./AboutThirdContainer";
function About() {
  return (
    <div>
      <div className="bg-HomePageBG2 bg-cover bg-center h-[40vh]  ">
        <Navbar />
        <div>
          <div className="text-5xl font-bold text-center mt-28">Who we are</div>
        </div>
      </div>
      <div>
        <AboutMainContainer />
      </div>
      <div>
        <AboutSecondContainer />
      </div>
      <div>
        <img src={aboutPhoto} alt="" />
      </div>
      <div>
        <AboutThirdContainer />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
