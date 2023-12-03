import { HStack, Icon, IconButton } from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail, IoLogoYoutube } from "react-icons/io";

const AboutContact = () => {
  return (
    <HStack justify={"center"}>
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Call Sage"
        fontSize="20px"
        icon={<Icon as={FaFacebookF} />}
      />
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Call Sage"
        fontSize="20px"
        icon={<Icon as={SiZalo} />}
      />
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Call Sage"
        fontSize="20px"
        icon={<Icon as={IoLogoInstagram} />}
      />
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Call Sage"
        fontSize="20px"
        icon={<Icon as={FaTwitter} />}
      />
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Call Sage"
        fontSize="20px"
        icon={<Icon as={IoIosMail} />}
      />
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Call Sage"
        fontSize="20px"
        icon={<Icon as={IoLogoYoutube} />}
      />
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Call Sage"
        fontSize="20px"
        icon={<Icon as={FaLinkedinIn} />}
      />
    </HStack>
  );
};

export default AboutContact;
