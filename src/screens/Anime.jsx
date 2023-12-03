import { Box, useColorModeValue } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import ScrollToTop from "../components/ScrollToTop";
import Trailer from "../components/Trailer";
import Category from "../components/Categories";
import New from "../components/New";
import { movieList } from "../constants/movieList";

const Anime = () => {
  const { t } = useTranslation();

  const animeList = movieList.filter((item) => item.movie === "anime");

  return (
    <>
      <Box color={useColorModeValue("#000", "#fff")}>
        <Box id="#top" w="100%" p={4} height="40%">
          <Trailer arr={animeList}></Trailer>
        </Box>
        <Box w="100%" p={4} height="700px">
          <Box h="50px" fontSize="27px" fontWeight="700">
            {t("Category")}
          </Box>
          <Box>
            <Category arr={animeList} />
          </Box>
          <Box h="50px" fontSize="27px" fontWeight="700">
            Anime 2023
          </Box>
          <New arr={animeList} />
          <ScrollToTop />
        </Box>
      </Box>
    </>
  );
};

export default Anime;
