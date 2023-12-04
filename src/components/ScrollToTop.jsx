import { useEffect, useRef, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollButton = useRef();
  useEffect(() => {
    window.addEventListener("scroll", handleSrcoll);
    return () => window.removeEventListener("scroll", handleSrcoll);
  }, []);
  const handleSrcoll = () => {
    setIsVisible(window.scrollY > 100);
  };
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    scrollButton.current.blur();
  };
  return (
    <IconButton
      aria-label="scroll to top"
      icon={<ArrowUpIcon />}
      size="lg"
      fontSize="30px"
      variant="outline"
      ref={scrollButton}
      onClick={handleClick}
      position="fixed"
      bottom="10px"
      right="10px"
      zIndex="10"
      hidden={!isVisible}
    />
  );
};
export default ScrollToTop;
