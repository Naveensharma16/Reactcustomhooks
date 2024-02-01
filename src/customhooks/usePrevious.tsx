import { useRef } from "react";

export const usePrevious = (value) => {
  const count = useRef(0);
  const prev = useRef(value);

  if (count.current === 0) {
    count.current = 1;
    return "";
  }

  const valuetosend = prev.current;
  prev.current = value;
  return valuetosend;
};
