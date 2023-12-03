import {
  Box,
  Center,
  Flex,
  Image,
  useBreakpoint,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FreeMode, Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Category = (props) => {
  const { t } = useTranslation();
  const { arr } = props;
  return (
    <>
      <Box h="50px" fontSize="27px" fontWeight="bold">
        {t("Category")}
      </Box>
      <Swiper
        slidesPerView="auto"
        freeMode={true}
        spaceBetween={10}
        modules={[FreeMode]}
      >
        {arr.map((obj, i) => (
          <SwiperSlide key={i}>
            <Box
              position="relative"
              w={{ base: "180px", sm: "30vw", md: "225px" }}
              h="100%"
              cursor="pointer"
            >
              <Box>
                <Image
                  w="100%"
                  h="100%"
                  borderRadius="base"
                  objectFit="cover"
                  src={obj.src}
                />
              </Box>
              <Flex
                top="0"
                w="100%"
                h="100%"
                position="absolute"
                bgColor={useColorModeValue("#0000008a", "#0000008a")}
                justifyContent="center"
                alignItems="center"
                fontWeight="bold"
                fontSize="1.2rem"
              >
                {t(`${obj.category}`)}
              </Flex>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Category;
