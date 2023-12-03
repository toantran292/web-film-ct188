import { Box, Skeleton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieCard } from "../molecule";
import { useTimer } from "react-timer-hook";
import { RANDOM_SECOND } from "../../constants/global";
import { useEffect } from "react";

const Category = (props) => {
  const { t } = useTranslation();
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
      <Box h="50px" fontSize="27px" fontWeight="bold">
        {t("Category")}
      </Box>
      <Skeleton w="100%" isLoaded={!isRunning}>
        <Swiper
          slidesPerView="auto"
          freeMode={true}
          spaceBetween={10}
          modules={[FreeMode]}
        >
          {arr.map((obj, i) => (
            <SwiperSlide key={i}>
              <MovieCard {...obj} type="category" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Skeleton>
    </Box>
  );
};
export default Category;
