import { HStack } from "@chakra-ui/react";
import BadgeItem from "./BadgeItem";

const Badges = (props) => {
  const { badges } = props;
  return (
    <HStack
      position="absolute"
      zIndex="100"
      top="5px"
      left="5px"
      gap="5px"
      fontSize="0.75rem"
      fontWeight="bold"
      whiteSpace="nowrap"
      flexWrap="wrap"
      color="#fff"
    >
      {badges.map((varient, i) => (
        <BadgeItem key={i} varient={varient} />
      ))}
    </HStack>
  );
};

export default Badges;
