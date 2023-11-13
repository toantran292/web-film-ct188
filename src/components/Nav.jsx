import { Avatar, Box, Button, Flex, HStack, Link, Spacer, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from 'react-icons/bs'
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
    const { colorMode, toggleColorMode } = useColorMode()

    return <Flex p="10px" color={useColorModeValue("#000", "#fff")} fontWeight="bold">
        <HStack>
            {Links.map((link) => {
                return (
                    <Link
                        key={link.url}
                        as={NavLink}
                        to={link.url}
                        opacity="0.5"
                        _hover={{ opacity: 1 }}
                        _activeLink={{ opacity: 1 }}
                    >
                        {link.title}
                    </Link>
                )
            })}
        </HStack>
        <Spacer />
        <HStack>
            <Button
                aria-label="Toggle Color Mode"
                onClick={toggleColorMode}
                _focus={{ boxShadow: true }}
                w='fit-content'>
                {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
            </Button>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </HStack>
    </Flex>;
}

export default Nav;