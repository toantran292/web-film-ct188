import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const HomeTV = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={1}>
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

export default HomeTV;
