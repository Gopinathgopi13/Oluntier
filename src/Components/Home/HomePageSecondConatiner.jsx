import React from "react";

import Slider from "./Slider/Slider";

function HomePageSecondConatiner() {
  return (
    <div className="lg:w-[1280px]  mx-auto px-4 md:py-10 space-y-10 text-[#282936] border-t-2">
      <div className="md:text-6xl text-3xl font-bold text-center">
        Enhancing Your Home's Finishing Touches
      </div>
      <div className="text-center text-lg md:w-[80%] mx-auto">
        With a vast array of home decor options available, our store provides
        everything you need to infuse personality and style into your living
        spaces.
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
}

export default HomePageSecondConatiner;
