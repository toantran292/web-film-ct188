import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import footballwomen from "../assets/imgs/sport/13-1695616044-anh-24.jpg";
import messi from "../assets/imgs/sport/messi.jpg";
import euro from "../assets/imgs/sport/vongloaieuro.jpg";
import bakeball from "../assets/imgs/sport/design-1701342476039.jpg";
import dtcl from "../assets/imgs/sport/dtcl-tat-tan-tat-ve-ti-le-5.jpg";
import all from "../assets/imgs/sport/design-1701345413192.jpg";

import ScrollToTop from "../components/ScrollToTop";
import { useTranslation } from "react-i18next";
import Trailer from "../components/Trailer";
import Category from "../components/Categories";
import New from "../components/New";
const Sport = () => {
  const { t } = useTranslation();
  const arr = [
    {
      src: footballwomen,
      category: t("Adventure"),
      title: t("football"),
      status: (
        <Box backgroundColor="red" borderRadius="base" px="5px" py="2px">
          <Text>{t("New")}</Text>
        </Box>
      ),
    },
    {
      src: messi,
      category: t("Emotional"),
      title: t("haikyuu"),
      status: (
        <Box backgroundColor="green" borderRadius="base" px="5px" py="2px">
          <Text>{t("Broadcast")}</Text>
        </Box>
      ),
    },
    {
      src: euro,
      category: t("Hot"),
      title: t("DrStone"),
      status: (
        <Box backgroundColor="blue" borderRadius="base" px="5px" py="2px">
          <Text>{t("Finish")}</Text>
        </Box>
      ),
    },
    {
      src: footballwomen,
      category: t("All"),
      title: t("MyHero"),
      status: (
        <Box backgroundColor="green" borderRadius="base" px="5px" py="2px">
          <Text>{t("Broadcast")}</Text>
        </Box>
      ),
    },
    {
      src: bakeball,
      category: t("Bakeball"),
      title: t("DrStone"),
      status: (
        <Box backgroundColor="blue" borderRadius="base" px="5px" py="2px">
          <Text>{t("Review")}</Text>
        </Box>
      ),
    },
    {
      src: dtcl,
      category: t("dtcl"),
      title: t("Jujutsu"),
      status: (
        <Box backgroundColor="red" borderRadius="base" px="5px" py="2px">
          <Text>{t("Live")}</Text>
        </Box>
      ),
    },
  ];
  return (
    <>
      <Box color={useColorModeValue("#000", "#fff")}>
        <Box id="#top" w="100%" p={4} height="40%">
          <Trailer arr={arr} />
        </Box>
        <Box w="100%" p={4} height="700px">
          <Box h="50px" fontSize="27px" fontWeight="700">
            {t("Category")}
          </Box>
          <Box>
            <Category arr={arr} />
          </Box>
          <Box h="50px" fontSize="27px" fontWeight="700">
            {t("Live")}
          </Box>
          <New arr={arr}></New>
          <ScrollToTop />
        </Box>
      </Box>
    </>
  );
};

export default Sport;
