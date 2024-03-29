import { useEffect, useState } from "react";
import { SIZES } from "../config/constants";

export const useMediaQuery = (screen) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(min-width: ${SIZES[screen]})`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, screen]);

  return matches;
};
