import { Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Category from "../../components/Category";

const HomeCategories = () => {
  return (
    <Swiper
      slidesPerView={4}
      grid={{
        rows: 2,
        fill: "row",
      }}
      spaceBetween={10}
      modules={[Grid]}
      className="myCategories"
    >
      {Array(20)
        .fill(0)
        .map((_, i) => {
          return (
            <SwiperSlide key={i}>
              <Category />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default HomeCategories;
