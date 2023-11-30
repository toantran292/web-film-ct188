import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/anime",
    title: "Anime",
  },
  {
    url: "/series",
    title: "Series",
  },
  {
    url: "/sport",
    title: "Sport",
  },
  {
    url: "/about",
    title: "About",
  },
];

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === "vi" ? "en" : "vi");
  };

  return (
    <Flex p="10px" color={useColorModeValue("#000", "#fff")}>
      <HStack>
        {Links.map((link) => {
          return (
            <Box
              key={link.url}
              px="10px"
              w="120px"
              textAlign="center"
              fontSize="16px"
            >
              <Link
                as={NavLink}
                to={link.url}
                opacity="0.5"
                _hover={{ opacity: 1 }}
                _activeLink={{ opacity: 1, fontWeight: "bold" }}
              >
                {t(link.title)}
              </Link>
            </Box>
          );
        })}
      </HStack>
      <Spacer />
      <HStack>
        <Button
          aria-label="Change Language"
          onClick={handleChangeLanguage}
          _focus={{ boxShadow: true }}
          w="fit-content"
        >
          <FaLanguage />
        </Button>
        <Button
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
          _focus={{ boxShadow: true }}
          w="fit-content"
        >
          {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
        </Button>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </HStack>
    </Flex>
  );
};

export default Nav;
