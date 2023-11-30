import HomeCategories from "../components/HomeCategories";
import HomeSwiper from "../components/HomeSwiper";
import { GridItem, Grid, Box, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <Grid
        templateAreas={`"popular"
                      "categories"
                      "rating"
                      "tv"`}
        gap={2}
      >
        <GridItem area="popular" minW="100%">
          {/* <Box w="100%"> */}
          <HomeSwiper />
          {/* </Box> */}
        </GridItem>
        <GridItem area="categories">
          <Box>
            <Heading fontSize="2xl">Categories</Heading>
            <HomeCategories />
          </Box>
        </GridItem>
        <GridItem area="rating">
          <Heading fontSize="2xl">Rating</Heading>
        </GridItem>
        <GridItem area="tv">
          <Heading fontSize="2xl">TV</Heading>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
