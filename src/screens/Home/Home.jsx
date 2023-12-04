import { useTranslation } from "react-i18next";
import HomeCategories from "./HomeCategories";
import HomeSlider from "./HomeSlider";
import { GridItem, Grid, Box, Heading, Flex, Text } from "@chakra-ui/react";
import HomePartners from "./HomePartners";
import { useEffect } from "react";
import "./Home.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="scrolling">
        <Flex gap={10}>
          <Text color="fg.muted" fontWeight={600}>
            Nguyễn Tuấn Đạt
          </Text>
          <Text color="fg.muted" fontWeight={600}>
            Trần Thái Toàn
          </Text>
          <Text color="fg.muted" fontWeight={600}>
            Khưu Thị Bích Ngọc
          </Text>
          <Text color="fg.muted" fontWeight={600}>
            Trần Minh Trí
          </Text>
        </Flex>
      </div>
    </div>
  );
};

const Home = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(i18n.language);
  }, [i18n]);
  return (
    <Grid
      templateAreas={`"popular"
        "categories"
        "rating"
        `}
      gap={5}
    >
      <GridItem area="popular" overflow="hidden">
        <Box>
          <Banner />
          <Heading fontSize="4xl" marginBottom={2}>
            {t("MostPopular")}
          </Heading>
          <HomeSlider />
        </Box>
      </GridItem>
      <GridItem area="categories" overflow="hidden">
        <Box>
          <Heading fontSize="4xl" marginBottom={2}>
            {t("Categories")}
          </Heading>
          <HomeCategories />
        </Box>
      </GridItem>
      <GridItem area="rating">
        <Box>
          <Heading fontSize="4xl" marginBottom={2}>
            {t("Partners")}
          </Heading>
          <HomePartners />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Home;
