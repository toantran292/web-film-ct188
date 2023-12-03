/* eslint-disable react/prop-types */
import { Image } from "@chakra-ui/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Trailer = (props) => {
  // eslint-disable-next-line react/prop-types
  const { arr } = props;

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
    >
      {arr.map((obj, i) => (
        <SwiperSlide key={i}>
          <Image
            w="100%"
            h="100%"
            borderRadius="base"
            objectFit="cover"
            src={obj.src}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Trailer;
