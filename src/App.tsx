import { useState } from "react";

import { useCheckOnline } from "./customhooks/useCheckOnline";
// import useLocalSessionStorage from "./customhooks/useLocalSessionStorage";
// import useMemoize from "./customhooks/useMemoize";
// import useOrientation from "./customhooks/useOrientation";
import { usePrevious } from "./customhooks/usePrevious";
import { useMouse } from "./customhooks/useMouse";

function App() {
  const result = useCheckOnline();

  const [mouse, elemRef] = useMouse();

  console.log(mouse);

  // const handleChange = (n) => {
  //   if (n === 1) {
  //     setFirst({ name: "ravi" });
  //   } else {
  //     console.log("second fun");
  //     setFirst({ name: "yogesh" });
  //   }
  // };

  const random = () => {
    return Math.random();
  };

  const handlechange = () => {
    setFirst(random());
  };

  const [first, setFirst] = useState(random());

  console.log("first", first);

  const previousvalue = usePrevious(first);

  // const [storagevalue, remove, update] = useLocalSessionStorage(
  //   "first",
  //   { name: "naveen", age: 26 },
  //   "session"
  // );

  // const multiply = useMemoize((a, b) => {
  //   console.log("value", a * b);
  //   return a * b;
  // });

  // hook to check device orientation it can mostly be used in mobile device
  // const orientation = useOrientation("portrait");

  // console.log(orientation);

  // console.log(multiply(2, 4));
  // console.log(multiply(2, 4));
  // console.log(multiply(7, 4));

  // console.log(storagevalue());
  // update("value changed");
  // console.log("after", storagevalue());
  // remove();
  // console.log("after", storagevalue());

  return (
    <>
      <h1>custom hooks</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        eaque illo consequuntur qui! Eos ab impedit rem enim accusamus molestiae
        atque laudantium maxime. Labore iste incidunt tempora, dolore voluptates
        dignissimos!
      </p>

      <div ref={elemRef} className="cust-container">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ab
        excepturi error, quisquam nisi voluptatum officia vitae amet sapiente
        assumenda quis explicabo vero, sint dolores earum cumque repellendus.
        Est, ipsam.
      </div>

      <h2>user online: {result ? "online" : "offline"}</h2>

      <p>---------------------------------------------------</p>

      <h2>local storage and session storage</h2>

      <p>---------------------------------------------------</p>

      <h2>memoization</h2>

      <p>---------------------------------------------------</p>

      <h2>screen orientation</h2>

      <p>---------------------------------------------------</p>

      <button onClick={() => handlechange()}>useprevious</button>

      <h3>previous value {previousvalue}</h3>
    </>
  );
}

export default App;
