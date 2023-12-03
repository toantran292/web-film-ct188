import { Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const bgColorBadge = {
  New: "red",
  Broadcast: "green",
  Finish: "blue",
};
const BadgeItem = (props) => {
  const { varient } = props;
  const { t } = useTranslation();
  return (
    <Box
      backgroundColor={bgColorBadge[varient]}
      borderRadius="base"
      px="5px"
      py="2px"
    >
      {t(varient)}
    </Box>
  );
};

export default BadgeItem;
