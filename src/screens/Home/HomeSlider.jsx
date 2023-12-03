import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import SliderItems from "../../components/SliderItems";

const HomeSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      effect={"coverflow"}
      grabCursor={false}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[Autoplay, EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {Array(10)
        .fill(0)
        .map((_, i) => {
          return (
            <SwiperSlide key={i}>
              <SliderItems />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default HomeSlider;
