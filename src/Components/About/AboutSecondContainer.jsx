import React from "react";
import about from "../../assets/about.svg";
import phase1 from '../../../public/phase1.png'
import phase2 from '../../../public/phase2.png'
import phase3 from '../../../public/phase3.png'
import phase4 from '../../../public/phase4.png'
function AboutSecondContainer() {
  return (
    <div className="lg:w-[1280px] px-3 mx-auto space-y-20 md:py-10 py-20">
      <div className="md:text-4xl text-4xl font-medium text-center">
        Our Process From Concept to Completion
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="flex flex-col gap-3 items-center">
          <div className="w-auto">
            <img className="h-12 w-12" src={phase1} alt="" />
          </div>
          <div className="md:text-xl text-xl text-center font-semibold text-[#40A2E3]">
            Initial Consulation
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="w-auto">
            <img className="h-12 w-12" src={phase2} alt="" />
          </div>
          <div className="md:text-xl text-xl text-center font-semibold text-[#40A2E3]">
            Design Phase
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="w-auto">
            <img className="h-12 w-12" src={phase3} alt="" />
          </div>
          <div className="md:text-xl text-xl text-center font-semibold text-[#40A2E3]">
            Execution Phase
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="w-auto">
            <img className="h-12 w-12" src={phase4} alt="" />
          </div>
          <div className="md:text-xl text-xl text-center font-semibold text-[#40A2E3]">
            Post Completion
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSecondContainer;
