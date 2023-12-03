import { Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Category from "../../components/Category";
import { useBreakpointValue } from "@chakra-ui/react";

const HomeCategories = () => {
  const sildesPerView = useBreakpointValue({
    base: 2,
    sm: 3,
    md: 4,
  });

  return (
    <Swiper
      slidesPerView={sildesPerView}
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
