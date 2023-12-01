import {
  Box,
  Center,
  Image,
  Text,
  HStack,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
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
import {
  Pagination,
  Navigation,
  Autoplay,
  Grid,
  Keyboard,
  Scrollbar,
} from "swiper/modules";
import ScrollToTop from "../components/ScrollToTop";
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
        This is Anime page
        <Box id="#top" w="100%" p={4} height="40%">
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
        </Box>
        <Box w="100%" p={4} height="700px">
          <Box h="50px" fontSize="27px" fontWeight="700">
            {t("Category")}
          </Box>
          <Box>
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
          </Box>
          <Box h="50px" fontSize="27px" fontWeight="700">
            Anime 2023
          </Box>
          <Swiper
            slidesPerView={3}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
            }}
            scrollbar={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          >
            {arr.map((obj, i) => (
              <SwiperSlide key={i}>
                <HStack
                  position="absolute"
                  zIndex="100"
                  top="5px"
                  left="5px"
                  gap="5px"
                  fontSize="0.75rem"
                  fontWeight="bold"
                  whiteSpace="nowrap"
                  flexWrap="wrap"
                >
                  {obj.status}
                </HStack>
                <Box width="95%">
                  <LinkBox>
                    <LinkOverlay href="#">
                      <Box>
                        <Image src={obj.src}></Image>
                      </Box>
                      <Box py="20px" fontWeight="bold" fontSize="0.925rem">
                        <Text noOfLines={2}>{obj.title}</Text>
                      </Box>
                    </LinkOverlay>
                  </LinkBox>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
          <ScrollToTop />
        </Box>
      </Box>
    </>
  );
};

export default Anime;
