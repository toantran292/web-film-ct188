import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import shangri from "../assets/imgs/anime/Shangri-La.avif";
import jujutsu from "../assets/imgs/anime/JujutsuKaisen.webp";
import haikyuu from "../assets/imgs/anime/haikyuu-haikyuu-hinata-shouyou-kageyama-tobio-azumane-asahi-hd-wallpaper-preview-2.jpg";
import drStone from "../assets/imgs/anime/DrStone.jpeg";
import ragnarok from "../assets/imgs/anime/Record-of-Ragnarok.jpg";
import myhero from "../assets/imgs/anime/BokuHeroacademia.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import ScrollToTop from "../components/ScrollToTop";
import Trailer from "../components/Trailer";
import Category from "../components/Categories";
import New from "../components/New";

const Anime = () => {
  const { t } = useTranslation();
  const arr = [
    {
      src: shangri,
      category: t("Adventure"),
      title: t("ShangriLaFrontier"),
      status: (
        <Box backgroundColor="red" borderRadius="base" px="5px" py="2px">
          <Text>{t("New")}</Text>
        </Box>
      ),
    },
    {
      src: haikyuu,
      category: t("Emotional"),
      title: t("haikyuu"),
      status: (
        <Box backgroundColor="green" borderRadius="base" px="5px" py="2px">
          <Text>{t("Broadcast")}</Text>
        </Box>
      ),
    },
    {
      src: drStone,
      category: t("School"),
      title: t("DrStone"),
      status: (
        <Box backgroundColor="blue" borderRadius="base" px="5px" py="2px">
          <Text>{t("Finish")}</Text>
        </Box>
      ),
    },
    {
      src: myhero,
      category: t("Action"),
      title: t("MyHero"),
      status: (
        <Box backgroundColor="green" borderRadius="base" px="5px" py="2px">
          <Text>{t("Broadcast")}</Text>
        </Box>
      ),
    },
    {
      src: ragnarok,
      category: t("Fiction"),
      title: t("DrStone"),
      status: (
        <Box backgroundColor="blue" borderRadius="base" px="5px" py="2px">
          <Text>{t("Finish")}</Text>
        </Box>
      ),
    },
    {
      src: jujutsu,
      category: t("Action"),
      title: t("Jujutsu"),
      status: (
        <Box backgroundColor="red" borderRadius="base" px="5px" py="2px">
          <Text>{t("New")}</Text>
        </Box>
      ),
    },
  ];
  return (
    <>
      <Box color={useColorModeValue("#000", "#fff")}>
        <Box id="#top" w="100%" p={4} height="40%">
          <Trailer arr={arr}></Trailer>
        </Box>
        <Box w="100%" p={4} height="700px">
          <Box h="50px" fontSize="27px" fontWeight="700">
            {t("Category")}
          </Box>
          <Box>
            <Category arr={arr} />
          </Box>
          <Box h="50px" fontSize="27px" fontWeight="700">
            Anime 2023
          </Box>
          <New arr={arr} />
          <ScrollToTop />
        </Box>
      </Box>
    </>
  );
};

export default Anime;
