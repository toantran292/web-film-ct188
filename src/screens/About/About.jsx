import {
  Grid,
  GridItem,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Services from "./Services";
import Content from "../../constants/aboutContent";
import AboutContact from "./AboutContact";
import ScrollToTop from "../../components/ScrollToTop";

const About = () => {
  const { t } = useTranslation();
  const handleScroll = (event, id) => {
    const ele = document.getElementById(id);
    if (ele) ele.scrollIntoView();
  };
  return (
    <Grid
      id="top"
      w="100%"
      templateAreas={`"nav main"`}
      gridTemplateRows={"1fr"}
      gridTemplateColumns={{ base: "128px 1fr", sm: "20% 1fr" }}
      gap="1"
      color={useColorModeValue("#000", "#fff")}
    >
      <ScrollToTop />
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
      <GridItem pl="2" area={"main"} w="100%">
        <Grid templateRows="repeat(1fr)" gap={5}>
          {Content.map((content, i) => {
            return (
              <Stack
                id={content.id}
                spacing={1}
                key={i}
                w="100%"
                overflow="hidden"
              >
                <Text className="font-bold" fontSize="3xl">
                  {t(content.title)}
                </Text>
                <Text align={"justify"}>{t(content.text)}</Text>
                {content.id == "services" ? <Services /> : <></>}
                {content.id == "contact" ? <AboutContact /> : <></>}
              </Stack>
            );
          })}
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default About;
