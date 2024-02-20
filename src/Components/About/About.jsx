import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function About() {
  return (
    <div className="bg-HomePageBG2 bg-cover bg-center">
      <div>
        <Navbar />
      </div>
      <div className="h-[50vh]"></div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}

export default About;
