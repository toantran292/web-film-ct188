import { Center, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { PiFilmReelFill } from "react-icons/pi";

const Category = () => {
  const { t } = useTranslation();
  return (
    <Flex
      color={useColorModeValue("#fff", "teal.900")}
      direction={"column"}
      padding={5}
      bgGradient={["linear(to-t, green.500, teal.500)"]}
    >
      <Center>
        <Icon as={PiFilmReelFill} fontSize={"xx-large"}></Icon>
      </Center>
      <Center>
        <Text fontSize={"larger"}>{t("Categories")}</Text>
      </Center>
    </Flex>
  );
};

export default Category;
