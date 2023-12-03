import {
  Button,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { movieList } from "../../constants/movieList";
import { useTranslation } from "react-i18next";
import { New } from "../../components/organism";
import { useTimer } from "react-timer-hook";
import { RANDOM_SECOND } from "../../constants/global";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Episode = ({ value }) => {
  const { t } = useTranslation();
  return (
    <Button
      fontWeight={700}
      aria-label="Toggle Color Mode"
      w="fit-content"
      component={Link}
    >
      {t("Episode")} {value}
    </Button>
  );
};

const MovieDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const movie = movieList[id - 1];

  const time = new Date();
  time.setSeconds(
    time.getSeconds() + Math.floor(Math.random() * RANDOM_SECOND)
  );
  const { restart, isRunning } = useTimer({
    expiryTimestamp: time,
  });

  useEffect(() => {
    restart(time);
  }, [id]);

  return (
    <Grid
      templateAreas={`
        "video"
        "detail"
        "selectEpisode"
        "relatedContent"
         "comment"
        `}
      gap={20}
      color={useColorModeValue("#000", "#fff")}
      p={5}
    >
      <GridItem area="video" overflow="hidden">
        <Skeleton w="100%" isLoaded={!isRunning}>
          <video width="100%" controls poster={movie.src}></video>
        </Skeleton>
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

          <SimpleGrid columns={[3, 5, 7, 11]} gap={4}>
            {(() => {
              const episodes = [];
              for (let i = 0; i < movie.id + 1; i++) {
                episodes.push(<Episode key={i + 1} value={i + 1} />);
              }
              return episodes;
            })()}
          </SimpleGrid>
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
          marginBottom={3}
          borderRadius="100px"
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
