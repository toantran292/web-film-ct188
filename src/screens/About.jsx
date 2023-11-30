import {
  Grid,
  GridItem,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Content = [
  {
    id: "intro",
    title: "Introduce",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.",
  },
  {
    id: "services",
    title: "Services",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.",
  },
  {
    id: "contact",
    title: "Contact",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.",
  },
  {
    id: "help",
    title: "Help",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque rerum, perferendis dolorum quia ducimus? Nostrum quia, quis, mollitia voluptate quae neque dicta quidem quo qui, necessitatibus a delectus iusto.",
  },
];

const About = () => {
  const { t, i18n } = useTranslation();
  const handleScroll = (event, id) => {
    const ele = document.getElementById(id);
    if (ele) ele.scrollIntoView();
  };
  return (
    <Grid
      templateAreas={`"nav main"`}
      gridTemplateRows={"1fr"}
      gridTemplateColumns={"20% 1fr"}
      gap="1"
      color={useColorModeValue("#000", "#fff")}
    >
      <GridItem pl="2" area={"nav"} pos="fixed">
        <Grid templateRows="repeat(1fr)" gap={1}>
          {Content.map((content, i) => {
            return (
              <GridItem w="100%" p={2} key={i}>
                <Link
                  opacity="0.5"
                  _hover={{ opacity: 1 }}
                  onClick={(event) => handleScroll(event, content.id)}
                >
                  {t(content.title)}
                </Link>
              </GridItem>
            );
          })}
        </Grid>
      </GridItem>
      <GridItem pl="2" area={"main"}>
        <Grid templateRows="repeat(1fr)" gap={5}>
          {Content.map((content, i) => {
            return (
              <Stack id={content.id} spacing={1} key={i}>
                <Text className="font-bold" fontSize="3xl">
                  {t(content.title)}
                </Text>
                <Text align={"justify"}>{t(content.text)}</Text>
              </Stack>
            );
          })}
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default About;
