import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Badges, Image } from "../atom";
import { useTranslation } from "react-i18next";

const MovieCategoryCard = (props) => {
  const { category, src, t } = props;
  return (
    <Flex
      position="relative"
      w={{ base: "180px", sm: "30vw", md: "225px" }}
      cursor="pointer"
      aspectRatio={16 / 9}
    >
      <Image src={src} />
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
        color="white"
      >
        {t(`${category}`)}
      </Flex>
    </Flex>
  );
};

const MovieBanner = (props) => {
  const { src } = props;
  return (
    <Flex
      w={{ base: "380px", sm: "100vw", lg: "1080px" }}
      aspectRatio={16 / 9}
      alignItems="center"
    >
      <Box w="100%" h="100%">
        <Image
          w="100%"
          h="100%"
          borderRadius="base"
          objectFit="cover"
          src={src}
        />
      </Box>
    </Flex>
  );
};

const MovieItemCard = (props) => {
  const { status, src, title, t } = props;
  return (
    <Flex
      position="relative"
      w={{ base: "180px", sm: "30vw", md: "225px" }}
      direction="column"
      cursor="pointer"
      aspectRatio={16 / 9}
    >
      <Badges badges={status} />
      <Image src={src} />
      <Box py="20px" fontWeight="bold" fontSize="0.925rem">
        <Text noOfLines={2}> {t(`${title}`)}</Text>
      </Box>
    </Flex>
  );
};

const MovieCard = (props) => {
  const { type, ...remain } = props;
  const { t } = useTranslation();
  switch (type) {
    case "category":
      return <MovieCategoryCard {...remain} t={t} />;
      break;
    case "banner":
      return <MovieBanner {...remain} />;
      break;
    default:
      return <MovieItemCard {...remain} t={t} />;
      break;
  }
};

export default MovieCard;
