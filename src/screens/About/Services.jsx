import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <TableContainer>
      <Table variant="simple" size={"sm"}>
        <TableCaption fontSize={"large"}>
          {t("ChargesAndCalculated")}
        </TableCaption>
        <Thead>
          <Tr>
            <Th>{t("TypesOfServices")}</Th>
            <Th>{t("ServicePack")}</Th>
            <Th>{t("ContentRental")}</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th>{t("ChargesServiceCharges")}</Th>
            <Td>{t("SFee")}</Td>
            <Td>{t("CFee")}</Td>
          </Tr>
          <Tr>
            <Th>{t("CaculateFee")}</Th>
            <Td>{t("CaculateSFee")}</Td>
            <Td>{t("CaculateCFee")}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Services;
