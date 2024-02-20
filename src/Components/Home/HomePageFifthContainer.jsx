import React from "react";
import data from "../../Utilities/Designs.json";
function HomePageFifthContainer() {
  return (
    <div className="lg:w-[1280px]  mx-auto px-4 md:py-10 text-[#282936]">
      <div className="grid md:grid-cols-3 gap-10">
        {data.map((data, i) => {
          return (
            <div
              class="relative group cursor-pointer group overflow-hidden text-gray-50 w-[400px] h-[250px] hover:duration-700 duration-700"
              key={i}
            >
              <div class="w-full h-full text-gray-800">
                <img src={data.img} className="h-full" alt="" />
              </div>
              <div class="absolute bg-gray-50 -bottom-24  p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span class="text-gray-800 font-bold text-xl">{data.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePageFifthContainer;
