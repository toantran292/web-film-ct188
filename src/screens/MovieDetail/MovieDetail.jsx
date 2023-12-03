import {
  Box,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <Grid
      templateAreas={`"video"
        "detail"
        "comment"
        `}
      gap={10}
      color={useColorModeValue("#000", "#fff")}
      p={5}
    >
      <GridItem area="video" overflow="hidden">
        <video width="100%" controls></video>
      </GridItem>
      <GridItem area="detail" overflow="hidden">
        <Stack spacing={{ base: 3, md: 4 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
          >
            Dr. stone
          </Heading>

          <Text
            color={useColorModeValue("gray.900", "gray.400")}
            fontWeight={600}
            fontSize={"lg"}
          >
            Hài hước, khoa học
          </Text>

          <Text
            color={useColorModeValue("gray.900", "gray.400")}
            fontWeight={400}
            fontSize={"lg"}
          >
            Gặp Joe Black: Một ông trùm truyền thông ở tuổi gần đất xa trời bất
            ngờ gặp được một người đàn ông bí ẩn, anh ta giúp ông nhận ra những
            bài học lớn về cuộc đời trước phút lâm chung.
          </Text>
        </Stack>
      </GridItem>
      <GridItem area="comment" overflow="hidden">
        <Stack spacing={{ base: 3, md: 4 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
          >
            Comment (0)
          </Heading>
          <Box p={5} />
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default MovieDetail;
