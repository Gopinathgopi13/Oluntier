import React, { useState } from "react";
import HomePageSuccess from "../../assets/HomePageSuccess.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function HomePageThirdContainer() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="lg:w-[1280px] h-[65vh] mx-auto flex justify-center md:py-16 px-4 text-[#282936] z-30">
      <div className="w-full grid md:grid-cols-5">
        <div className="md:col-span-2 flex flex-col justify-center md:gap-20 gap-10 items-center pb-5">
          <div className="px-10 md:text-6xl text-3xl w-[80%] font-semibold">
            Trust is the process.
          </div>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            // onExit={() => setCounterOn(false)}
          >
            <div className="flex gap-2">
              <div className="space-y-3">
                {counterOn && (
                  <CountUp
                    delay={0}
                    start={0}
                    end={100}
                    duration={4}
                    className="text-center md:text-5xl text-2xl font-semibold"
                  />
                )}
                <span className="text-[#40A2E3] text-3xl font-bold">+</span>
                <span className="block md:text-lg text-sm font-medium">
                  Project Completed
                </span>
              </div>
              <div className="space-y-3">
                {counterOn && (
                  <CountUp
                    delay={0}
                    start={0}
                    end={100}
                    duration={4}
                    className="text-center md:text-5xl text-2xl font-semibold"
                  />
                )}
                <span className="text-[#40A2E3] text-3xl font-bold">+</span>
                <span className="block md:text-lg text-sm font-medium">
                  Satisfied Client
                </span>
              </div>
              <div className="space-y-3">
                {counterOn && (
                  <CountUp
                    delay={0}
                    start={0}
                    end={100}
                    duration={4}
                    className="text-center md:text-5xl text-2xl font-semibold"
                  />
                )}
                <span className="text-[#40A2E3] text-3xl font-bold">+</span>
                <span className="block  md:text-lg text-sm font-medium">
                  Unique Style
                </span>
              </div>
            </div>
          </ScrollTrigger>
        </div>
        <div className="md:col-span-3 flex -z-30">
          <div className="relative space-y-3">
            <div className="md:block hidden border-2 rounded-lg  border-[#738873] h-36 w-36 absolute left-0 top-0"></div>
            <div className="rounded-xl overflow-hidden md:flex justify-center items-center md:absolute md:w-[90%] md:h-[90%] top-2 left-9 z-50">
              <img
                src={HomePageSuccess}
                className="h-[100%] w-[100%] object-cover overflow-hidden"
                alt=""
              />
            </div>
            <div className="md:block hidden border-2 rounded-lg border-[#738873] h-36 w-36 absolute right-0 -bottom-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageThirdContainer;
