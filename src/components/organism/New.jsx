import { Box, LinkBox, LinkOverlay, Skeleton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { MovieCard } from "../molecule";
import { useTimer } from "react-timer-hook";
import { RANDOM_SECOND } from "../../constants/global";
import { useEffect } from "react";

const New = (props) => {
  const { arr } = props;
  const { t } = useTranslation();

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
      <Box h="50px" fontSize="27px" fontWeight="700">
        {t("Broadcast")}
      </Box>
      <Skeleton w="100%" isLoaded={!isRunning}>
        <Swiper
          slidesPerView="auto"
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {arr.map((obj, i) => (
            <SwiperSlide key={i}>
              <LinkBox>
                <LinkOverlay href={`#/page/${obj.movie}/${obj.id}`}>
                  <MovieCard {...obj} />
                </LinkOverlay>
              </LinkBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </Skeleton>
    </Box>
  );
};
export default New;
