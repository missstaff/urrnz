import { useClosestMedia } from "./useClosestMedia";
import { useMediaQuery } from "./useMediaQuery";

/**
 * Custom hook that returns the current screen size based on media queries.
 * @returns {string} The current screen size ("2xl", "xl", "lg", "md", "sm", "xs", or "default").
 */
export const useScreenSize = () => {
  const closestMedia = useClosestMedia({
    queries: ["xs", "sm", "md", "lg", "xl", "2xl"],
  });

  const is2XLScreen = useMediaQuery("2xl") && closestMedia === "2xl";
  const isXLScreen = useMediaQuery("xl") && closestMedia === "xl";
  const isLargeScreen = useMediaQuery("lg") && closestMedia === "lg";
  const isMediumScreen = useMediaQuery("md") && closestMedia === "md";
  const isSmallScreen = useMediaQuery("sm") && closestMedia === "sm";
  const isExtraSmallScreen = useMediaQuery("xs") && closestMedia === "xs";

  let screenSize = "default";

  switch (true) {
    case is2XLScreen:
      screenSize = "2xl";
      return screenSize;
    case isXLScreen:
      screenSize = "xl";
      return screenSize;
    case isLargeScreen:
      screenSize = "lg";
      return screenSize;
    case isMediumScreen:
      screenSize = "md";
      return screenSize;
    case isSmallScreen:
      screenSize = "sm";
      return screenSize;
    case isExtraSmallScreen:
      screenSize = "xs";
      return screenSize;
    default:
      return screenSize;
  }
};
