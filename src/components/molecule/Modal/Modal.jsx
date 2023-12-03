import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const Modal = (props) => {
  const {
    isOpen,
    onOpen,
    onClose,
    cancelRef,
    title,
    header,
    typeBtn = true,
    children,
  } = props;
  return (
    <>
      {typeBtn ? (
        <Button onClick={onOpen}>{title}</Button>
      ) : (
        <Link
          onClick={onOpen}
          color={useColorModeValue("#000", "#fff")}
          fontWeight="bold"
          textDecoration="underline"
        >
          {title}
        </Link>
      )}

      <AlertDialog
        motionPreset="slideInTop"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>{header}</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>{children}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Modal;
