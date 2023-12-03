import {
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { movieList } from "../../constants/movieList";
import { useTranslation } from "react-i18next";
import New from "../../components/New";

const MovieDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const movie = movieList[id - 1];

  return (
    <Grid
      templateAreas={`"video"
        "detail"
        "relatedContent"
         "comment"
        `}
      gap={20}
      color={useColorModeValue("#000", "#fff")}
      p={5}
    >
      <GridItem area="video" overflow="hidden">
        <video width="100%" controls poster={movie.src}></video>
      </GridItem>
      <GridItem area="detail" overflow="hidden">
        <Stack spacing={{ base: 3, md: 4 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
          >
            {t(`${movie.title}`)}
          </Heading>

          <Text
            color={useColorModeValue("gray.900", "gray.400")}
            fontWeight={600}
            fontSize={"lg"}
          >
            {t(`${movie.category}`)}
          </Text>

          <Text
            color={useColorModeValue("gray.900", "gray.400")}
            fontWeight={400}
            fontSize={"lg"}
          >
            {t("MovieDetail")}
          </Text>
        </Stack>
      </GridItem>
      <GridItem area="relatedContent" overflow="hidden">
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
          marginBottom={4}
        >
          {t("RelatedContent")}
        </Heading>
        <New arr={movieList} />
      </GridItem>
      <GridItem area="comment" overflow="hidden">
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
        >
          {t("Comment")} (0)
        </Heading>
      </GridItem>
    </Grid>
  );
};

export default MovieDetail;
