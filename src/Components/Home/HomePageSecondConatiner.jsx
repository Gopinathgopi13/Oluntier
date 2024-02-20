import React from "react";

import Slider from "./Slider/Slider";

function HomePageSecondConatiner() {
  return (
    <div className="lg:w-[1280px]  mx-auto px-4 md:py-10 space-y-10 text-[#282936] z-30">
      <div className="md:text-6xl font-bold text-center">
        Lorem ipsum dolor consectetur.
      </div>
      <div className="text-center text-lg">
        Lorem ipsum dolor sit amet adipisicing elit. Enim impedit
        laborum animi eum cumque .
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
}

export default HomePageSecondConatiner;
