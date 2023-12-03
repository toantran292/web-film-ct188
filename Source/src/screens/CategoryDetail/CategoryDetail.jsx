import { VStack, useColorModeValue } from "@chakra-ui/react";
import ScrollToTop from "../../components/ScrollToTop";
import { Trailer, Category, New } from "../../components/organism";
import { movieList } from "../../constants/movieList";
import { useLocation, useParams } from "react-router-dom";
import NotFound from "../NotFound";

const Page = ({ category }) => {
  const list = movieList.filter((item) => item.movie === category);

  return (
    <VStack color={useColorModeValue("#000", "#fff")} id="top" p={4} gap={10}>
      <Trailer arr={list} />
      <Category arr={list} />
      <New arr={list} />
      <ScrollToTop />
    </VStack>
  );
};

const CategoryDetail = (props) => {
  const { route } = useParams();
  switch (route) {
    case "anime":
    case "series":
    case "sport":
      return <Page category={route} />;
    default:
      return <NotFound />;
  }
};

export default CategoryDetail;
