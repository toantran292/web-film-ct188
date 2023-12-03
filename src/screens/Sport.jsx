import { Box, useColorModeValue } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ScrollToTop from "../components/ScrollToTop";
import { useTranslation } from "react-i18next";
import Trailer from "../components/Trailer";
import Category from "../components/Categories";
import New from "../components/New";
import { movieList } from "../constants/movieList";
const Sport = () => {
  const { t } = useTranslation();

  const sportList = movieList.filter((item) => item.movie === "sport");

  return (
    <>
      <Box color={useColorModeValue("#000", "#fff")}>
        <Box id="#top" w="100%" p={4} height="40%">
          <Trailer arr={sportList} />
        </Box>
        <Box w="100%" p={4} height="700px">
          <Box h="50px" fontSize="27px" fontWeight="700">
            {t("Category")}
          </Box>
          <Box>
            <Category arr={sportList} />
          </Box>
          <Box h="50px" fontSize="27px" fontWeight="700">
            {t("Live")}
          </Box>
          <New arr={sportList}></New>
          <ScrollToTop />
        </Box>
      </Box>
    </>
  );
};

export default Sport;
