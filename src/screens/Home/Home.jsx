import { useTranslation } from "react-i18next";
import HomeCategories from "./HomeCategories";
import HomeSlider from "./HomeSlider";
import { GridItem, Grid, Box, Heading } from "@chakra-ui/react";
import HomePartners from "./HomePartners";

const Home = () => {
  const { t } = useTranslation();
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
