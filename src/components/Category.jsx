/* eslint-disable react/prop-types */
import { Box, Center } from "@chakra-ui/react";
import { Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Category = (props) => {
  // eslint-disable-next-line react/prop-types
  const { arr } = props;
  return (
    <Swiper
      slidesPerView={5}
      grid={{
        rows: 1,
      }}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Grid, Pagination]}
    >
      {arr.map((obj, i) => (
        <SwiperSlide key={i}>
          <Box bgImage={obj.src} bgSize="100%" w="100%">
            <Center w="100%" fontSize={20} fontWeight={750} h={"110px"}>
              {obj.category}
            </Center>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Category;
