import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
const HomeSixthContainer = () => {
  return (
    <div className="lg:w-[1280px]  mx-auto px-4 md:py-10 space-y-10 text-[#282936] z-30">
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-2  border-gray-400 text-center lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className=" space-y-3 py-5">
            <div className="text-gray-900 font-bold text-xl ">
              Our Happiness Guarantee
            </div>
            <p className="text-gray-700 text-base">
              <p className="inline w-auto">
                "Customer satisfaction is our top priority. We understand that
                designing your home can feel daunting, so if there's anything
                about your design that doesn't meet your expectations, simply
                reach out to us, and we'll ensure it's corrected to your
                satisfaction."
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSixthContainer;
