import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import logos from "../../constants/logoPartners";
const HomePartners = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={1}>
      {logos.map((logo) => {
        return (
          <GridItem w="100%" padding={2} bg={useColorModeValue("gray.900", "")}>
            <img src={logo.link} alt={logo.name} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default HomePartners;
