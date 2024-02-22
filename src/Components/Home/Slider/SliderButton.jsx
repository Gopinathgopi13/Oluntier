import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";
const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute top-[39%] z-50 flex justify-between">
      <div
        onClick={() => swiper.slidePrev()}
        className="shadow-xl w-auto h-12 px-3 py-5 rounded-e-xl flex justify-center items-center bg-[#40A2E3] text-white"
      >
        <FaArrowLeft size={20} />
      </div>
      <div
        onClick={() => swiper.slideNext()}
        className="shadow-xl w-auto h-12 px-3 py-5 rounded-s-xl flex justify-center items-center bg-[#40A2E3] text-white"
      >
        <FaArrowRight size={20} />
      </div>
    </div>
  );
};

export default SliderButton;
