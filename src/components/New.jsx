/* eslint-disable react/prop-types */
import {
  Box,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Keyboard, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const New = (props) => {
  // eslint-disable-next-line react/prop-types

  const { arr } = props;
  const { t } = useTranslation();
  return (
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
            <Box
              backgroundColor={`${
                obj.status === "New"
                  ? "red"
                  : obj.status === "Broadcast"
                  ? "green"
                  : "blue"
              }`}
              borderRadius="base"
              px="5px"
              py="2px"
            >
              {t(`${obj.status}`)}
            </Box>
          </HStack>
          <Box width="95%">
            <LinkBox>
              <LinkOverlay href={`#/${obj.movie}/${obj.id}`}>
                <Box>
                  <Image src={obj.src}></Image>
                </Box>
                <Box py="20px" fontWeight="bold" fontSize="0.925rem">
                  <Text noOfLines={2}> {t(`${obj.title}`)}</Text>
                </Box>
              </LinkOverlay>
            </LinkBox>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default New;
