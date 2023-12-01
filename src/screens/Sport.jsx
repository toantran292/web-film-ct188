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
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import footballwomen from "../assets/imgs/sport/13-1695616044-anh-24.jpg";
import messi from "../assets/imgs/sport/messi.jpg";
import euro from "../assets/imgs/sport/vongloaieuro.jpg";
import bakeball from "../assets/imgs/sport/design-1701342476039.jpg";
import dtcl from "../assets/imgs/sport/dtcl-tat-tan-tat-ve-ti-le-5.jpg";
import all from "../assets/imgs/sport/design-1701345413192.jpg";

import {
  Pagination,
  Navigation,
  Autoplay,
  Grid,
  Keyboard,
  Scrollbar,
} from "swiper/modules";
import ScrollToTop from "../components/ScrollToTop";
import { useTranslation } from "react-i18next";
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
      src: all,
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
        This is Sport page
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
            className="mySwiper"
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
              className="mySwiper"
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
            {t("Live")}
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
            {Array(5)
              .fill(0)
              .map((_, i) => (
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
                    <Box
                      backgroundColor="green"
                      borderRadius="base"
                      px="5px"
                      py="2px"
                    >
                      <Text>{t("Broadcast")}</Text>
                    </Box>
                    <Box
                      backgroundColor="red"
                      borderRadius="base"
                      px="5px"
                      py="2px"
                    >
                      <Text>{t("New")}</Text>
                    </Box>
                  </HStack>
                  <Box width="95%">
                    <LinkBox>
                      <LinkOverlay href="#">
                        <Box>
                          <Image src={footballwomen}></Image>
                        </Box>
                        <Box py="20px" fontWeight="bold" fontSize="0.925rem">
                          <Text noOfLines={2}>{t("football")}</Text>
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

export default Sport;
