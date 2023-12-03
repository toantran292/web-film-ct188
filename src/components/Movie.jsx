import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import shy from "../assets/imgs/shy.jpg";

const Movie = (props) => {
  const { badges, banner_url, title } = props;
  return (
    <Flex
      w={{ base: "180px", sm: "30vw", md: "225px" }}
      direction="column"
      aspectRatio={9 / 16}
    >
      <Box position="relative" w="100%" h="80%">
        <HStack
          position="absolute"
          top="5px"
          left="5px"
          gap="5px"
          fontSize="0.75rem"
          fontWeight="bold"
          whiteSpace="nowrap"
          flexWrap="wrap"
          color="#fff"
        >
          <Box backgroundColor="red" borderRadius="base" px="5px" py="2px">
            <Text>Mới</Text>
          </Box>
          <Box backgroundColor="green" borderRadius="base" px="5px" py="2px">
            <Text>Đang phát sóng</Text>
          </Box>
          <Box backgroundColor="blue" borderRadius="base" px="5px" py="2px">
            <Text>Hoàn thành</Text>
          </Box>
        </HStack>
        <Box w="100%" h="100%">
          <Image
            w="100%"
            h="100%"
            borderRadius="base"
            objectFit="cover"
            src={shy}
          />
        </Box>
      </Box>
      <Box py="20px" fontWeight="bold" fontSize="0.925rem">
        <Text noOfLines={2}>
          Shangri-La Frontier: Thợ Săn Game Rác Thách Thức Game Cấp Thánh
        </Text>
      </Box>
    </Flex>
  );
};

export default Movie;
