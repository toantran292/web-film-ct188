import { Box, Flex, Image, Skeleton } from "@chakra-ui/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../molecule/MovieCard";
import { useTimer } from "react-timer-hook";
import { RANDOM_SECOND } from "../../constants/global";
import { useEffect } from "react";

const Trailer = (props) => {
  const { arr } = props;
  const time = new Date();
  time.setSeconds(
    time.getSeconds() + Math.floor(Math.random() * RANDOM_SECOND)
  );
  const { restart, isRunning } = useTimer({
    expiryTimestamp: time,
  });

  useEffect(() => {
    restart(time);
  }, [arr]);
  return (
    <Box w="100%" overflow="hidden">
      <Skeleton w="100%" isLoaded={!isRunning}>
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
              <MovieCard {...obj} type="banner" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Skeleton>
    </Box>
  );
};
export default Trailer;
