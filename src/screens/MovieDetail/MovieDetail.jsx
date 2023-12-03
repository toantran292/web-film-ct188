import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  IconButton,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { movieList } from "../../constants/movieList";
import { useTranslation } from "react-i18next";
import { New } from "../../components/organism";
import { useTimer } from "react-timer-hook";
import { RANDOM_SECOND } from "../../constants/global";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

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
  const [liked, setLiked] = useState();
  const { t } = useTranslation();
  const { id } = useParams();
  const movie = movieList[id - 1];
  const [comments, setComments] = useState([
    {
      text: "nice",
      timestamp: "11:10",
      user: {
        name: "User1",
        avatar: "",
      },
    },
  ]);

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

  const getCurrentTimestamp = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    const timestamp = `${hours}:${minutes}`;
    return timestamp;
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      text: e.target.comment.value,
      timestamp: getCurrentTimestamp(),
      user: {
        name: "Anonymous",
        avatar: "",
      },
    };
    e.target.comment.value = "";
    setComments((prevComments) => [newComment, ...prevComments]);
  };

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
          <Flex gap={10}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
            >
              {t(`${movie.title}`)}
            </Heading>
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
          </Flex>

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
      <Stack spacing={{ base: 3, md: 4 }}>
        <Heading
          marginBottom={3}
          borderRadius="100px"
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
        >
          {t("Comment")}
        </Heading>

        <form onSubmit={handleCommentSubmit}>
          <Textarea
            name="comment"
            placeholder={t("CommentContent")}
            size="sm"
            resize="none"
            mb={2}
          />
          <Button type="submit" colorScheme="teal" size="sm">
            {t("Submit")}
          </Button>
        </form>

        {/* Displaying comments */}
        <Stack spacing={4}>
          {comments.map((comment, index) => (
            <Box
              key={index}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
            >
              <Flex align="center" mb={2}>
                <Avatar alt={comment.user.name} mr={2} />
                <Text fontWeight="bold">{comment.user.name}</Text>
              </Flex>
              <Text>{comment.text}</Text>
              <Text fontSize="sm" color="gray.500">
                {comment.timestamp || "Anonymous"}
              </Text>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Grid>
  );
};

export default MovieDetail;
