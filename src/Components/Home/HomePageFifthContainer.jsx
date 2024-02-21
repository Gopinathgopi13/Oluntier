import React from "react";
import data from "../../Utilities/Designs.json";
import { Link } from "react-router-dom";
function HomePageFifthContainer() {
  return (
    <div className="lg:w-[1280px]  mx-auto py-20 text-[#282936] overflow-hidden flex flex-col items-center gap-10 border-t-2">
      <div className="text-center md:text-6xl text-3xl w-[70%]">
        Infusing Homes with Desire
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {data.slice(0, 6).map((data, i) => {
          return (
            <div
              class="relative mx-auto group cursor-pointer group overflow-hidden text-gray-50 w-[400px] h-[250px] hover:duration-700 duration-700"
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
      <Link
        to="/service"
        className=" w-auto bg-[#40A2E3] p-2 rounded-sm text-white text-xl "
      >
        {" "}
        View More
      </Link>
    </div>
  );
}

export default HomePageFifthContainer;
