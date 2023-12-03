import { Box, Image as ImageChakra } from "@chakra-ui/react";

const Image = (props) => {
  const { src } = props;
  return (
    <Box w="100%" h="100%">
      <ImageChakra
        w="100%"
        h="100%"
        borderRadius="base"
        objectFit="cover"
        src={src}
      />
    </Box>
  );
};

export default Image;
