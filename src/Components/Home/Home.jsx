import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HomePageMainContainer from "./HomePageMainContainer";
import HomePageSecondConatiner from "./HomePageSecondConatiner";
import HomePageThirdContainer from "./HomePageThirdContainer";
import HomePageFourthContainer from "./HomePageFourthContainer";
import HomePageFifthContainer from "./HomePageFifthContainer";
import HomeSixthContainer from "./HomeSixthContainer";

function Home() {
  return (
    <div className={`h-screen bg-HomePageBG3 bg-fixed bg-cover  bg-no-repeat`}>
      <div className="fixed top-0 z-50">
        <Navbar />
      </div>
      <div className="w-full">
        <HomePageMainContainer />
      </div>
      <div className="my-20">
        <HomePageThirdContainer />
      </div>
      <div>
        <HomePageSecondConatiner />
      </div>
      <div>
        <HomePageFifthContainer />
      </div>
      <div>
        <HomePageFourthContainer />
      </div>
      {/* <div className="my-20">
        <HomeSixthContainer/>
      </div> */}
      <div className="w-screen bg-[#40A2E3]">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
