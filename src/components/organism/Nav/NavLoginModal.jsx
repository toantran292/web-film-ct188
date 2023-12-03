import { Button, HStack, Text, useDisclosure } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { InputField } from "../../atom/Field";
import Modal from "../../molecule/Modal";
import NavRegisterModal from "./NavRegisterModal";

const NavLoginModal = ({ onLogin }) => {
  const stateModal = useDisclosure();
  const cancelRef = useRef();
  const { t } = useTranslation();

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "REQUIRED";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      error = "INVALID_EMAIL";
    }
    return error;
  };

  const validatePassword = (value) => {
    let error;
    if (!value) {
      error = "REQUIRED";
    } else if (value.length < 8) {
      error = "INVALID_PASSWORD";
    }
    return error;
  };

  const handleSubmit = (values, actions) => {
    setTimeout(() => {
      actions.setSubmitting(false);
      onLogin();
    }, 1000);
  };

  return (
    <Modal
      title={t("LOGIN")}
      header={t("LOGIN")}
      cancelRef={cancelRef}
      {...stateModal}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {(props) => (
          <Form autoComplete="new-password">
            <InputField
              name="email"
              validate={validateEmail}
              placeholder="Email"
            >
              Email
            </InputField>
            <InputField
              name="password"
              validate={validatePassword}
              placeholder="password"
              type="password"
              mt={5}
            >
              {t("PASSWORD")}
            </InputField>
            <HStack mt={3} gap={1} justifyContent="center">
              <Text>{t("DONT_HAVE_ACCOUNT")}?</Text>
              <NavRegisterModal />
            </HStack>
            <HStack gap="1" w="100%" justifyContent="flex-end" my={3}>
              <Button ref={cancelRef} mt={4} onClick={stateModal.onClose}>
                {t("CANCEL")}
              </Button>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                {t("LOGIN")}
              </Button>
            </HStack>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default NavLoginModal;
