import {
  Grid,
  GridItem,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import logos from "../../constants/logoPartners";
const HomePartners = () => {
  const templateColumns = useBreakpointValue({
    base: "repeat(3, 1fr)",
    sm: "repeat(4, 1fr)",
    md: "repeat(6, 1fr)",
  });

  return (
    <Grid templateColumns={templateColumns} gap={1}>
      {logos.map((logo, i) => {
        return (
          <GridItem
            key={i}
            w="100%"
            padding={2}
            bg={useColorModeValue("gray.900", "")}
          >
            <img src={logo.link} alt={logo.name} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default HomePartners;
