import { useEffect, useState } from "react";
import { findClosest } from "../utility/utils";

/**
 * Hook to manage the closest media size.
 *
 * @returns {Array} An array containing the closest media size and a function to update it.
 */
export const useClosestMedia = ({ queries }) => {
  const [closest, setClosest] = useState("xs");

  useEffect(() => {
    const listener = () => setClosest(findClosest(queries));
    listener();
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [queries]);

  return closest;
};
