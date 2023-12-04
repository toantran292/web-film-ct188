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

import GGPlay from "../assets/imgs/_GooglePlay.webp";

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

const FooterItem = [
  {
    list: "Company",
    box: ["About", "Blog", "Careers", "Contact"],
  },
  {
    list: "Support",
    box: ["HelpCenter", "SafetyCenter", "CommunityGuidelines"],
  },
  {
    list: "Legal",
    box: ["CookiesPolicy", "PrivacyPolicy", "TermsOfService", "LawEnforcement"],
  },
];
"Twitter", "YouTube", "Instagram";
const FooterIcon = [
  {
    label: "Twitter",
    Icon: FaTwitter,
  },
  {
    label: "YouTube",
    Icon: FaYoutube,
  },
  {
    label: "Instagram",
    Icon: FaInstagram,
  },
];

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          {FooterItem.map((Item) => (
            <Stack align={"flex-start"} alignItems="center">
              <ListHeader>{t(Item.list)}</ListHeader>
              {Item.box.map((box) => (
                <Box as="a" href={"#"}>
                  {t(box)}
                </Box>
              ))}
            </Stack>
          ))}

          <Stack align={"flex-start"} alignItems="center">
            <ListHeader>{t("Install")}</ListHeader>
            <Box
              as="a"
              href="#"
              bg={useColorModeValue("blackAlpha.900", "")}
              padding={1}
            >
              <img src={GGPlay} width={130} alt="" />
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          py={4}
          spacing={4}
          maxW="6xl"
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "space-between" }}
          alignItem="center"
        >
          <Text textAlign="center">© 12/2023 CTU.BúnĐậuNướcLèo</Text>
          <Stack direction={"row"} spacing={6} justifyContent="center">
            {FooterIcon.map((lb) => (
              <SocialButton label={lb.label} href="#">
                <lb.Icon />
              </SocialButton>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
