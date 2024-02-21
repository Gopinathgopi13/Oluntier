import React from "react";
// import data from "../../Utilities/Designs.json";
import { Link, useParams } from "react-router-dom";
import data from "../../Utilities/Categories.json";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Categories() {
  let { id } = useParams();
  console.log("Categories", data[id].id);
  console.log(data[id].heading);
  console.log("Params", id);
  return (
    <div>
      <div className="w-full bg-[#40A2E3] fixed top-0 z-50">
        <Navbar />
      </div>
      <div className="lg:w-[1280px] mx-auto py-20 text-[#282936] mt-20">
        {data[id].id == id ? (
          <div className="space-y-5 px-3">
            <div className="text-center md:text-6xl text-3xl ">
              {data[id].heading}
            </div>
            <div className="text-xl mx-auto text-center md:w-[70%]">
              {data[id].Content}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 overflow-hidden">
              {data[id].img.map((data, i) => {
                return (
                  <div
                    className="relative mx-auto container group cursor-pointer group overflow-hidden text-gray-50 w-[400px] h-[300px] hover:duration-700 duration-700"
                    key={i}
                  >
                    <div className="w-full h-full text-gray-800">
                      <img src={data} className="h-full" alt="" />
                      {console.log(data)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <Link to="/service">Back</Link>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Categories;
