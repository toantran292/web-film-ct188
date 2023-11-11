import { Box, HStack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Links = [{
    url: '/',
    title: 'Home',
}, {
    url: '/anime',
    title: 'Anime',
}, {
    url: '/series',
    title: 'Series',
}, {
    url: '/sport',
    title: 'Sport',
}, {
    url: '/about',
    title: 'About',
},]

const Nav = () => {
    return <Box>
        <HStack>
            {Links.map((link) => <NavLink key={link.url} to={link.url} style={({ isActive, isPending, isTransitioning }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                };
            }}>{link.title}</NavLink>)}
        </HStack>
    </Box>;
}

export default Nav;