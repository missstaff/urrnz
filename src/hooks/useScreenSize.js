import { useClosestMedia } from "./useClosestMedia";
import { useMediaQuery } from "./useMediaQuery";
import { sizes, sizesArr } from "../config/constants";


export const useScreenSize = () => {

    const closestMedia = useClosestMedia({
        queries: sizesArr,
    });

    const is2XLScreen = useMediaQuery(sizes[5]) && closestMedia === sizes[5];
    const isXLScreen = useMediaQuery(sizes[4]) && closestMedia === sizes[4];
    const isLargeScreen = useMediaQuery(sizes[3]) && closestMedia === sizes[3];
    const isMediumScreen = useMediaQuery(sizes[2]) && closestMedia === sizes[2];
    const isSmallScreen = useMediaQuery(sizes[1]) && closestMedia === sizes[1];
    const isExtraSmallScreen = useMediaQuery(sizes[0]) && closestMedia === sizes[0];

    let screenSize = "default";

    switch (true) {
        case is2XLScreen:
            screenSize = sizes[5];
            return screenSize;
        case isXLScreen:
            screenSize = sizes[4];
            return screenSize;
        case isLargeScreen:
            screenSize = sizes[3];
            return screenSize;
        case isMediumScreen:
            screenSize = sizes[2];
            return screenSize;
        case isSmallScreen:
            screenSize = sizes[1];
            return screenSize;
        case isExtraSmallScreen:
            screenSize = sizes[0];
            return screenSize;
        default:
            return screenSize;
    };
};