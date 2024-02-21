import React from "react";
import data from "../../Utilities/Designs.json";
import "./Service.css";
import { Link } from "react-router-dom";
function ServiceMainContainer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="lg:w-[1280px] px-3 mx-auto space-y-10 md:py-10 py-10">
      <div className="text-4xl font-semibold text-center">
        Design Categories
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 overflow-hidden">
        {data.map((data, i) => {
          return (
            <Link to={`/categories/${data.id}`} key={i} onClick={scrollToTop}>
              <div className="relative mx-auto container group cursor-pointer md:group overflow-hidden text-gray-50 w-[400px] h-[300px] md:hover:duration-700 duration-700">
                <div className="w-full h-full text-gray-800">
                  <img src={data.img} className="h-full" alt="" />
                </div>
                <div className="absolute bg-gray-50 md:-left-80 w-auto bg-transparent md:group-hover:left-5 top-5 md:group-hover:duration-600 duration-500">
                  <span className="text-white font-bold text-2xl text border-b-2 border-white md:border-none md:pl-5 ">
                    {data.name}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceMainContainer;
