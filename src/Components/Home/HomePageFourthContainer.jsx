import React from "react";
import data from "../../Utilities/Offer.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "./Slider.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
} from "swiper/modules";
function HomePageFourthContainer() {
  return (
    <div className="lg:w-[1280px]  mx-auto px-4 md:py-10 space-y-10 text-[#282936] border-t-2">
      <div className="lg:text-6xl text-3xl text-center">Current Offers</div>
      <div className="lg:space-y-5 space-y-20">
        {data.map((data, i) => {
          return (
            <div className="md:flex gap-5" key={i}>
              <div className="md:w-[50%]">
                <Swiper
                  modules={[
                    Navigation,
                    Pagination,
                    Scrollbar,
                    A11y,
                    Autoplay,
                    Mousewheel,
                  ]}
                  // spaceBetween={50}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  className="rounded-none"
                >
                  <SwiperSlide>
                    <img src={data.img1} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={data.img2} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="md:w-[50%] px-10 flex items-center">
                <div className="space-y-5">
                  <div className="font-semibold text-3xl">{data.heading1}</div>
                  <div>{data.content}</div>
                  <div className="flex gap-5">
                    <div className="w-auto p-1">
                      <s>{data.CurrentPrice}</s>
                    </div>
                    <div className="w-auto bg-[#40A2E3] py-1 px-3 font-bold">
                      {data.offerPrice}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePageFourthContainer;
