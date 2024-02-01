import { useEffect, useState } from "react";

export const useOrientation = (type: "landscape" | "portrait"): boolean => {
  const [status, setStatus] = useState(
    window.matchMedia(`(orientation:${type})`).matches
  );

  useEffect(() => {
    window
      .matchMedia(`(orientation:${type})`)
      .addEventListener("change", (event) => {
        setStatus(event.matches);
      });
  }, []);

  return status;
};
