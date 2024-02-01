import { useState, useEffect } from "react";

export const useCheckOnline = (): boolean => {
  // setting a state wih the default value of internet status using navigator object onLine value
  const [result, setResult] = useState(navigator.onLine);

  // used predefined effect hook to create eventlistner for listning online and offfline event to update state
  useEffect(() => {
    const handleChangeValue = (status: boolean): void => {
      setResult(status);
    };

    // below event listner will be called when we get network connection back
    window.addEventListener("online", (): void => {
      handleChangeValue(true);
    });
    // below event listner will be called when we loose connection to internet
    window.addEventListener("offline", (): void => {
      handleChangeValue(false);
    });

    // removing event listner when component is removed from dom
    return () => {
      window.removeEventListener("online", (): void => {
        handleChangeValue(true);
      });

      window.removeEventListener("offline", (): void => {
        handleChangeValue(false);
      });
    };
  }, []);

  // returning the state value so whenever this value is updated component using it will get updated value
  return result;
};
