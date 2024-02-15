import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="w-full">
      <div className={`w-full bg-HomePageBG3 md:bg-cover  bg-no-repeat h-[100vh]`}>
        <Navbar/>
        <div className="h-[500px] w-full"></div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
