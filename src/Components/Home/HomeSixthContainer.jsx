import React from "react";

const HomeSixthContainer = () => {
  return (
    <div className="lg:w-[1280px]  mx-auto px-4 md:py-10 space-y-10 text-[#282936] z-30">
      <div className="md:text-6xl font-bold text-center">Happy Customer</div>

      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div
          className="h-52 lg:h-auto w-full lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          title="Woman holding a mug"
        >
          <img src="r1.png" className="h-full w-full" alt="" />
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              Can coffee make you a better developer?
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSixthContainer;
