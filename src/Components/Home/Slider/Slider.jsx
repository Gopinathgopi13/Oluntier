import React from "react";
import data from "./CardDetails.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
} from "swiper/modules";
import SliderCard from "./SliderCard";
import SliderButton from "./SliderButton";
const Slider = () => {
  const swiper = useSwiper();

  return (
    <div>
      <Swiper
        className="py-10 relative"
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          Mousewheel,
        ]}
        spaceBetween={50}
        slidesPerView={4}
        // navigation
        mousewheel={true}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((card, i) => {
          return (
            <SwiperSlide key={i}>
              <SliderCard
                img={card.image}
                name={card.name}
                detail={card.detail}
              />
            </SwiperSlide>
          );
        })}
        <SliderButton />
      </Swiper>
    </div>
  );
};

export default Slider;
