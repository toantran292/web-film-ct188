import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";

const logos = [
  {
    name: "TCL",
    link: "../src/assets/imgs/_TCL.webp",
  },
  {
    name: "Sony",
    link: "../src/assets/imgs/_Sony.webp",
  },
  {
    name: "Samsung",
    link: "../src/assets/imgs/_Samsung.webp",
  },

  {
    name: "Mobifone",
    link: "../src/assets/imgs/_Mobifone.webp",
  },
  {
    name: "LG",
    link: "../src/assets/imgs/_LG.webp",
  },
  {
    name: "GooglePlay",
    link: "../src/assets/imgs/_GooglePlay.webp",
  },
  {
    name: "FPT",
    link: "../src/assets/imgs/_FPT.webp",
  },
  {
    name: "Dolby",
    link: "../src/assets/imgs/_Dolby.webp",
  },
  {
    name: "Casper",
    link: "../src/assets/imgs/_Casper.webp",
  },
  {
    name: "Asanzo",
    link: "../src/assets/imgs/_Asanzo.webp",
  },
  {
    name: "MyTV",
    link: "../src/assets/imgs/_MyTV.webp",
  },
  {
    name: "AppStore",
    link: "../src/assets/imgs/_AppStore.webp",
  },
];
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
