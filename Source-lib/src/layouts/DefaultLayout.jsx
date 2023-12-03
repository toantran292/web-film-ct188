import { Container } from "@chakra-ui/react";

import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const DefaultLayout = () => {
  return (
    <Container maxW="6xl" fontSize="16px">
      <Nav />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default DefaultLayout;
