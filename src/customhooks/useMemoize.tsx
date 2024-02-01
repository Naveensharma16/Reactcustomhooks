export const useMemoize = (argfunction) => {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      console.log("cached result");
      return cache[key];
    } else {
      console.log("new entry");
      const result = argfunction(...args);
      cache[key] = result;
      return result;
    }
  };
};
