import {
  Box,
  Center,
  Image,
  Text,
  HStack,
  LinkBox,
  LinkOverlay,
  Button,
} from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import shangri from "../assets/imgs/anime/Shangri-La.avif";
import jujutsu from "../assets/imgs/anime/JujutsuKaisen.webp";
import haikyuu from "../assets/imgs/anime/haikyuu-haikyuu-hinata-shouyou-kageyama-tobio-azumane-asahi-hd-wallpaper-preview-2.jpg";
import drStone from "../assets/imgs/anime/DrStone.jpeg";
import conan from "../assets/imgs/anime/conan.webp";
import ragnarok from "../assets/imgs/anime/Record-of-Ragnarok.jpg";
import myhero from "../assets/imgs/anime/BokuHeroacademia.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import "styles.css";
import {
  FreeMode,
  Pagination,
  Navigation,
  Autoplay,
  Grid,
  Keyboard,
  Scrollbar,
} from "swiper/modules";

import Movie from "../components/Movie";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
const Anime = () => {
  return (
    <>
      This is Anime page
      <Box id="#top" w="100%" p={4} color="white" height="40%">
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
          <SwiperSlide>
            <Image
              w="100%"
              h="100%"
              borderRadius="base"
              objectFit="cover"
              src={shangri}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              w="100%"
              h="100%"
              borderRadius="base"
              objectFit="cover"
              src={conan}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              w="100%"
              h="100%"
              borderRadius="base"
              objectFit="cover"
              src={drStone}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              w="100%"
              h="100%"
              borderRadius="base"
              objectFit="cover"
              src={haikyuu}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              w="100%"
              h="100%"
              borderRadius="base"
              objectFit="cover"
              src={jujutsu}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box w="100%" p={4} color="white" height="700px">
        <Box h="50px" fontSize="27px" fontWeight="700">
          Thể Loại
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
            <SwiperSlide>
              <Box bgImage={myhero} bgSize="100%" w="100%">
                <Center w="100%" fontSize={20} fontWeight={750} h={"110px"}>
                  Hành Động
                </Center>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box bgImage={shangri} bgSize="100%" w="100%">
                <Center w="100%" fontSize={20} fontWeight={750} h={"110px"}>
                  Phiêu lưu
                </Center>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box bgImage={ragnarok} bgSize="100%" w="100%">
                <Center w="100%" fontSize={20} fontWeight={750} h={"110px"}>
                  Viễn tưởng
                </Center>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box bgImage={haikyuu} bgSize="100%" w="100%">
                <Center w="100%" fontSize={20} fontWeight={750} h={"110px"}>
                  Tình cảm
                </Center>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box bgImage={drStone} bgSize="100%" w="100%">
                <Center w="100%" fontSize={20} fontWeight={750} h={"110px"}>
                  Học đường
                </Center>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box h="50px" fontSize="27px" fontWeight="700">
          Anime Mùa Thu 2023
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
          className="mySwiper"
        >
          <SwiperSlide>
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
              <Box backgroundColor="red" borderRadius="base" px="5px" py="2px">
                <Text>Mới</Text>
              </Box>
            </HStack>
            <Box width="95%">
              <LinkBox>
                <LinkOverlay href="#">
                  <Box>
                    <Image src={shangri}></Image>
                  </Box>
                  <Box py="20px" fontWeight="bold" fontSize="0.925rem">
                    <Text noOfLines={2}>
                      Shangri-La Frontier: Thợ Săn Game Rác Thách Thức Game Cấp
                      Thánh
                    </Text>
                  </Box>
                </LinkOverlay>
              </LinkBox>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
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
                <Text>Đang phát sóng</Text>
              </Box>
            </HStack>
            <Box width="95%">
              <LinkBox>
                <LinkOverlay href="#">
                  <Box>
                    <Image src={haikyuu}></Image>
                  </Box>
                  <Box py="20px" fontWeight="bold" fontSize="0.925rem">
                    <Text noOfLines={2}>Vua Bóng Chuyền (Phần 1)</Text>
                  </Box>
                </LinkOverlay>
              </LinkBox>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
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
                <Text>Đang phát sóng</Text>
              </Box>
            </HStack>
            <Box width="95%">
              <LinkBox>
                <LinkOverlay href="#">
                  <Box>
                    <Image src={drStone}></Image>
                  </Box>
                  <Box py="20px" fontWeight="bold" fontSize="0.925rem">
                    <Text noOfLines={2}>Hồi Sinh Thế Giới (Phần 3B)</Text>
                  </Box>
                </LinkOverlay>
              </LinkBox>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
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
              <Box backgroundColor="blue" borderRadius="base" px="5px" py="2px">
                <Text>Hoàn thành</Text>
              </Box>
            </HStack>
            <Box width="95%">
              <LinkBox>
                <LinkOverlay href="#">
                  <Box>
                    <Image src={jujutsu}></Image>
                  </Box>
                  <Box py="20px" fontWeight="bold" fontSize="0.925rem">
                    <Text noOfLines={2}>Chú thuật Hồi Chiến</Text>
                  </Box>
                </LinkOverlay>
              </LinkBox>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
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
              <Box backgroundColor="blue" borderRadius="base" px="5px" py="2px">
                <Text>Hoàn thành</Text>
              </Box>
            </HStack>
            <Box width="95%">
              <LinkBox>
                <LinkOverlay href="#">
                  <Box>
                    <Image src={myhero}></Image>
                  </Box>
                  <Box py="20px" fontWeight="bold" fontSize="0.925rem">
                    <Text noOfLines={2}>Học Viện anh hùng</Text>
                  </Box>
                </LinkOverlay>
              </LinkBox>
            </Box>
          </SwiperSlide>
        </Swiper>
        <ScrollToTop />
      </Box>
    </>
  );
};

export default Anime;
