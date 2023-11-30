import { Box } from "@chakra-ui/react";
import { Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./temp.css";

const HomeCategories = () => {
  return (
    <Swiper
      slidesPerView={2}
      grid={{
        rows: 1,
      }}
      spaceBetween={30}
      modules={[Grid]}
    >
      <SwiperSlide>
        <Box bgColor={"red.500"}>Slide 1</Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box bgColor={"red.500"}>Slide 1</Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box bgColor={"red.500"}>Slide 1</Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box bgColor={"red.500"}>Slide 1</Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box bgColor={"red.500"}>Slide 1</Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box bgColor={"red.500"}>Slide 1</Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box bgColor={"red.500"}>Slide 1</Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeCategories;
