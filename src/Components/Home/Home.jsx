import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HomePageMainContainer from "./HomePageMainContainer";
import HomePageSecondConatiner from "./HomePageSecondConatiner";
import HomePageThirdContainer from "./HomePageThirdContainer";

function Home() {
  
  return (
    <div
      className={`w-full bg-HomePageBG3 bg-fixed bg-cover bg-center bg-no-repeat h-[100vh]`}
    >
      <div className="fixed top-0 z-50">
        <Navbar />
      </div>
      <div className="w-full">
        <HomePageMainContainer />
      </div>
      <div>
        <HomePageSecondConatiner />
      </div>
      <div>
        <HomePageThirdContainer />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
