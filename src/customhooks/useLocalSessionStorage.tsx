type storageData = {
  name: string;
  data: unknown;
  type: "local" | "session";
};

export const useLocalSessionStorage = (name, data, type) => {
  // condition for localstorage
  if (type === "local") {
    // storing the value in local storage
    localStorage.setItem(name, JSON.stringify(data));

    // function to get the value
    const getStorageValue = () => {
      return JSON.parse(localStorage.getItem(name));
    };

    //  function to remove the value
    const removeStorageValue = () => {
      localStorage.removeItem(name);
    };

    // function to update the value
    const updateStorageValue = (value) => {
      localStorage.setItem(name, JSON.stringify(value));
    };

    return [getStorageValue, removeStorageValue, updateStorageValue];
  }

  // condition for session storage
  if (type === "session") {
    sessionStorage.setItem(name, JSON.stringify(data));

    // function to get the value
    const getStorageValue = () => {
      return JSON.parse(sessionStorage.getItem(name));
    };

    //  function to remove the value
    const removeStorageValue = () => {
      sessionStorage.removeItem(name);
    };

    // function to update the value
    const updateStorageValue = (value) => {
      sessionStorage.setItem(name, JSON.stringify(value));
    };

    return [getStorageValue, removeStorageValue, updateStorageValue];
  }
};
