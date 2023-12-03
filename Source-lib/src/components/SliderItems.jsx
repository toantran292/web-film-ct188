import { FaRegHeart } from "react-icons/fa";
import { FaShare, FaHeart } from "react-icons/fa";
import { Box, Button, Flex, Icon, IconButton, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SliderImg from "../assets/imgs/slider-img.jpg";

const SliderItems = () => {
  const { t, i18n } = useTranslation();
  const [liked, setLiked] = useState(false);
  return (
    <Box pos="relative">
      <img src={SliderImg} alt="slider image" />
      <Flex pos="absolute" bottom={5} left={5} w={"90%"}>
        <Button as="a" href="#" colorScheme="teal">
          {t("Watch")}
        </Button>
        <Spacer />
        <Flex gap={"2"}>
          {liked ? (
            <IconButton
              colorScheme="gray"
              onClick={() => setLiked(!liked)}
              color="red.500"
              icon={<Icon as={FaHeart} />}
            />
          ) : (
            <IconButton
              colorScheme="gray"
              onClick={() => setLiked(!liked)}
              icon={<Icon as={FaRegHeart} />}
            />
          )}
          <IconButton colorScheme="gray" icon={<Icon as={FaShare} />} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SliderItems;
