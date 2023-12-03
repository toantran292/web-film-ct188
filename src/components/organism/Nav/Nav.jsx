import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import { NavLink as RouterLink } from "react-router-dom";
import { InputField } from "../../atom/Field";
import Modal from "../../molecule/Modal";
import NavLoginModal from "./NavLoginModal";

const Links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/page/anime",
    title: "Anime",
  },
  {
    url: "/page/series",
    title: "Series",
  },
  {
    url: "/page/sport",
    title: "Sport",
  },
  {
    url: "/about",
    title: "About",
  },
];

const NavLink = (props) => {
  const { url, title } = props;
  const { t } = useTranslation();
  return (
    <Box key={url} px="10px" w="120px" textAlign="center" fontSize="16px">
      <Link
        as={RouterLink}
        to={url}
        opacity="0.5"
        _hover={{ opacity: 1 }}
        _activeLink={{ opacity: 1, fontWeight: "bold" }}
      >
        {t(title)}
      </Link>
    </Box>
  );
};

const Nav = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [loged, setLoged] = useState(() => {
    const log = localStorage.getItem("log");
    if (log && log == "true") return true;
    return false;
  });
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = () => {
    const lang = i18n.language === "vi" ? "en" : "vi";
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
  };

  const handleLogin = () => {
    setLoged(true);
    toast({
      position: "bottom-right",
      title: t("LOGIN_SUCCESS"),
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    localStorage.setItem("log", true);
  };

  const handleLogout = () => {
    setLoged(false);
    toast({
      position: "bottom-right",
      title: t("LOG_OUT_SUCCESS"),
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    localStorage.setItem("log", false);
  };

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) i18n.changeLanguage(lang);
  }, []);

  return (
    <Box p="10px" color={useColorModeValue("#000", "#fff")}>
      <Flex justifyContent="space-between">
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack display={{ base: "none", md: "flex" }}>
          {Links.map((link) => {
            return <NavLink key={link.url} {...link} />;
          })}
        </HStack>
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
          {loged ? (
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    name="Dan Abrahmov"
                    src={"https://bit.ly/dan-abramov"}
                  />
                </MenuButton>
                <MenuList zIndex="99999">
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={handleLogout}>{t("LOG_OUT")}</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          ) : (
            <NavLoginModal onLogin={handleLogin} />
          )}
        </HStack>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4} alignItems="center">
            {Links.map((link) => (
              <NavLink key={link.url} {...link} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Nav;
