import React from "react";
import data from "../../Utilities/Designs.json";
import { Link } from "react-router-dom";
function HomePageFifthContainer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="lg:w-[1280px]  mx-auto py-20 text-[#282936] overflow-hidden flex flex-col items-center gap-10 border-t-2">
      <div className="text-center md:text-6xl text-3xl w-[70%]">
        Infusing Homes with Desire
      </div>
      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-10">
        {data.slice(0, 6).map((data, i) => {
          return (
            <Link to={`/categories/${data.id}`} key={i} onClick={scrollToTop}>
              <div className="relative mx-auto container group cursor-pointer md:group overflow-hidden text-gray-50 w-[400px] h-[300px] md:hover:duration-700 duration-700">
                <div className="w-full h-full text-gray-800">
                  <img src={data.img} className="h-full" alt="" />
                </div>
                <div className="absolute bg-gray-50 md:-left-80 w-auto bg-transparent md:group-hover:left-5 top-5 md:group-hover:duration-600 duration-500">
                  <span className="text-white font-bold text-2xl text border-b-2 border-white md:border-none pl-5 md:pl-0">
                    {data.name}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Link
        to="/service"
        className=" w-auto bg-[#40A2E3] p-2 rounded-sm text-white text-xl "
        onClick={scrollToTop}
      >
        {" "}
        View More
      </Link>
    </div>
  );
}

export default HomePageFifthContainer;
