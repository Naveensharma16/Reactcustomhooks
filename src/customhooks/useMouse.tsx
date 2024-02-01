import { useEffect, useRef, useState } from "react";

const useMouse = () => {
  const [pos, setPos] = useState({ x: 0, y: 0, elementX: 0, elementY: 0 });
  const elementRef = useRef<HTMLElement>(null!);
  useEffect(() => {
    document.body.addEventListener("mousemove", (event) => {
      const bound = elementRef?.current?.getBoundingClientRect();
      console.log(bound);
      const mouseposxrelative = event.clientX - bound.left;
      const mouseposyrelative = event.clientY - bound.top;

      if (elementRef.current == null) {
        setPos({ ...pos, x: event.clientX, y: event.clientY });
      } else {
        setPos({
          x: event.clientX,
          y: event.clientY,
          elementX: mouseposxrelative,
          elementY: mouseposyrelative,
        });
      }
    });
    return () => {
      document.body.removeEventListener("mousemove", () => {});
    };
  }, []);

  return [pos, elementRef];
};

export { useMouse };
