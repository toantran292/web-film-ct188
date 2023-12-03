import {
  Button,
  HStack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { InputField } from "../../atom/Field";
import Modal from "../../molecule/Modal";

const NavRegisterModal = () => {
  const toast = useToast();
  const stateModal = useDisclosure();
  const cancelRef = useRef();
  const { t } = useTranslation();

  const validateRePass = (values, props) => {
    const errors = {};
    if (values.password !== values.repass) {
      errors.repass = "INVALID_REPASS";
    }

    return errors;
  };

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
      toast({
        position: "bottom-right",
        title: t("REGISTER_SUCCESS"),
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      actions.setSubmitting(false);
      stateModal.onClose();
    }, 1000);
  };

  return (
    <Modal
      title={t("REGISTER")}
      header={t("REGISTER")}
      cancelRef={cancelRef}
      typeBtn={false}
      {...stateModal}
    >
      <Formik
        initialValues={{ email: "", password: "", repass: "" }}
        onSubmit={handleSubmit}
        validate={validateRePass}
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
              placeholder={t("PASSWORD")}
              type="password"
              mt={5}
            >
              {t("PASSWORD")}
            </InputField>
            <InputField
              name="repass"
              validate={validatePassword}
              placeholder={t("REPASSWORD")}
              type="password"
              mt={5}
            >
              {t("REPASSWORD")}
            </InputField>
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
                {t("REGISTER")}
              </Button>
            </HStack>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default NavRegisterModal;
