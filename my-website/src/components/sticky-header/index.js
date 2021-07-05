import { useCallback, useEffect, useRef, useState } from "react";

const StickyHeader = (defaultSticky = false) => {
  const [isSticky, setIsSticky] = useState(defaultSticky);
  const pageRef = useRef(null);
  const toggleSticky = useCallback(
    ({ top, bottom }) => {
      if (top <= 0 && bottom > 2 * 68) {
        !isSticky && setIsSticky(true);
      } else {
        isSticky && setIsSticky(false);
      }
    },
    [isSticky]
  );
  useEffect(() => {
    const handleScroll = () => {
      toggleSticky(pageRef.current.getBoundingClientRect());
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toggleSticky]);
  return { pageRef, isSticky };
};
export default StickyHeader;
