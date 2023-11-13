import { Container } from "@chakra-ui/react";

import Nav from "../components/Nav"
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return <Container maxW='6xl' fontSize="16px">
        <Nav />
        <Outlet />
    </Container >
}

export default DefaultLayout;