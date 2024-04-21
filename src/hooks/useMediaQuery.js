import { useEffect, useState } from "react";
import { SIZES } from "../config/constants";

/**
 * A custom hook that returns a boolean value indicating whether the current screen matches the specified media query.
 *
 * @param {string} screen - The screen size to match the media query against.
 * @returns {boolean} - A boolean value indicating whether the current screen matches the media query.
 */
export const useMediaQuery = (screen) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(min-width: ${SIZES[screen]})`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    /**
     * Event listener callback function that updates the state of `matches` based on the media query result.
     */
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, screen]);

  return matches;
};
