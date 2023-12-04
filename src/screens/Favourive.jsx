import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTimer } from "react-timer-hook";
import { useEffect, useState } from "react";
import { MovieCard } from "../components/molecule";
import { RANDOM_SECOND } from "../constants/global";
import { movieList } from "../constants/movieList";
import { InfoIcon } from "@chakra-ui/icons";

const Favourite = () => {
  const { t } = useTranslation();

  const [list, setList] = useState(() => {
    const fav = localStorage.getItem("favourite");
    const favs = JSON.parse(fav) ?? [];
    const ans = movieList.filter((item) => favs.includes(`${item.id}`));

    return ans;
  });

  const time = new Date();
  time.setSeconds(
    time.getSeconds() + Math.floor(Math.random() * RANDOM_SECOND)
  );
  const { restart, isRunning } = useTimer({
    expiryTimestamp: time,
  });

  useEffect(() => {
    restart(time);
  }, [list]);

  return (
    <Box w="100%" overflow="hidden">
      <Box h="50px" fontSize="27px" fontWeight="bold">
        {t("FAVOURITE")}
      </Box>
      <Skeleton w="100%" isLoaded={!isRunning}>
        {list.length == 0 ? (
          <Box textAlign="center" py={10} px={6}>
            <InfoIcon boxSize={"50px"} color={"blue.500"} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
              {t("NOT_FOUND")}
            </Heading>
          </Box>
        ) : (
          <Swiper
            slidesPerView="auto"
            freeMode={true}
            spaceBetween={10}
            modules={[FreeMode]}
          >
            {list.map((obj, i) => (
              <SwiperSlide key={i}>
                <LinkBox>
                  <LinkOverlay href={`#/page/${obj.movie}/${obj.id}`}>
                    <MovieCard {...obj} />
                  </LinkOverlay>
                </LinkBox>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Skeleton>
    </Box>
  );
};
export default Favourite;
