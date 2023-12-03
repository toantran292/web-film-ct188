import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useTranslation } from "react-i18next";

const InputField = (props) => {
  const {
    name,
    type = "text",
    validate,
    placeholder,
    children,
    ...rest
  } = props;
  const { t } = useTranslation();

  return (
    <Field name={name} validate={validate} autoComplete="new-password">
      {({ field, form }) => (
        <FormControl
          isInvalid={form.errors[name] && form.touched[name]}
          {...rest}
        >
          <FormLabel>{children}</FormLabel>
          <Input
            {...field}
            type={type}
            placeholder={placeholder}
            autoComplete="new-password"
          />
          <FormErrorMessage>{t(form.errors[name])}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default InputField;
