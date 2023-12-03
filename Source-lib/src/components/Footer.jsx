import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"} alignItems="center">
            <ListHeader>{t("Company")}</ListHeader>
            <Box as="a" href={"#"}>
              {t("About")}
            </Box>
            <Box as="a" href={"#"}>
              {t("Blog")}
            </Box>
            <Box as="a" href={"#"}>
              {t("Careers")}
            </Box>
            <Box as="a" href={"#"}>
              {t("Contact")}
            </Box>
          </Stack>

          <Stack align={"flex-start"} alignItems="center">
            <ListHeader>{t("Support")}</ListHeader>
            <Box as="a" href={"#"}>
              {t("HelpCenter")}
            </Box>
            <Box as="a" href={"#"}>
              {t("SafetyCenter")}
            </Box>
            <Box as="a" href={"#"}>
              {t("CommunityGuidelines")}
            </Box>
          </Stack>

          <Stack align={"flex-start"} alignItems="center">
            <ListHeader>{t("Legal")}</ListHeader>
            <Box as="a" href={"#"}>
              {t("CookiesPolicy")}
            </Box>
            <Box as="a" href={"#"}>
              {t("PrivacyPolicy")}
            </Box>
            <Box as="a" href={"#"}>
              {t("TermsOfService")}
            </Box>
            <Box as="a" href={"#"}>
              {t("LawEnforcement")}
            </Box>
          </Stack>

          <Stack align={"flex-start"} alignItems="center">
            <ListHeader>{t("Install")}</ListHeader>
            <Box
              as="a"
              href="#"
              bg={useColorModeValue("blackAlpha.900", "")}
              padding={1}
            >
              <img
                src="../src/assets/imgs/_GooglePlay.webp"
                width={130}
                alt=""
              />
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justifyContent={{ base: "center", md: "space-between" }}
          alignItem="center"
        >
          <Text textAlign="center">© 12/2023 CTU.BúnĐậuNướcLèo</Text>
          <Stack direction={"row"} spacing={6} justifyContent="center">
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
