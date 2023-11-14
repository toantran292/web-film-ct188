import Movie from "../components/Movie";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
const Home = () => {
  return (
    <>
      This is Home page
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
      >
        {Array(100)
          .fill(0)
          .map((_, i) => (
            <SwiperSlide key={i}>
              <Movie />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Home;
