import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { movieList } from "../../constants/movieList";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const Episode = ({ value }) => {
  const { t } = useTranslation();
  return (
    <Button aria-label="Toggle Color Mode" w="fit-content" component={Link}>
      {t("Episode")} {value}
    </Button>
  );
};

const MovieDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const movie = movieList[id - 1];

  return (
    <Grid
      templateAreas={`"video"
        "detail"
        "selectEpisode"
        "comment"
        "relatedContent"
        `}
      gap={10}
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
      <GridItem area="selectEpisode" overflow="hidden">
        <Stack spacing={{ base: 3, md: 4 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
          >
            {t(`selectEpisode`)}
          </Heading>

          <Flex gap={4}>
            {(() => {
              const episodes = [];
              for (let i = 0; i < movie.id + 1; i++) {
                episodes.push(<Episode key={i + 1} value={i + 1} />);
              }
              return episodes;
            })()}
          </Flex>
        </Stack>
      </GridItem>
      <GridItem area="comment" overflow="hidden">
        <Stack spacing={{ base: 3, md: 4 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
          >
            {t("Comment")} (0)
          </Heading>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default MovieDetail;
