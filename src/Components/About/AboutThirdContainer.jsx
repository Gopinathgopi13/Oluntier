import React from "react";
import about from "../../assets/about.svg";
function AboutThirdContainer() {
  return (
    <div className="lg:w-[1280px] px-3 mx-auto space-y-20 md:py-10 py-20">
      <div className="md:text-6xl text-4xl font-medium text-center">
        What makes us different
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        <div className="flex flex-col gap-3 items-center">
          <div className="w-auto">
            <img className="h-16 w-16" src={about} alt="" />
          </div>
          <div className="md:text-3xl text-xl text-center font-semibold">
            Lorem, ipsum.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque
            tempore ratione possimus soluta sapiente!
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="w-auto">
            <img className="h-16 w-16" src={about} alt="" />
          </div>
          <div className="md:text-3xl text-xl text-center font-semibold">
            Lorem, ipsum.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque
            tempore ratione possimus soluta sapiente!
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="w-auto">
            <img className="h-16 w-16" src={about} alt="" />
          </div>
          <div className="md:text-3xl text-xl text-center font-semibold">
            Lorem, ipsum.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque
            tempore ratione possimus soluta sapiente!
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutThirdContainer;
