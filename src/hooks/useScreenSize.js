import { useClosestMedia } from "./useClosestMedia";
import { useMediaQuery } from "./useMediaQuery";

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
