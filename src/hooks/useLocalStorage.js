import React, { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse and return stored json or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = initialValue => {
    window.localStorage.setItem(key, JSON.stringify(initialValue));

    setStoredValue(initialValue);
  };
  return [storedValue, setValue];
};

export default useLocalStorage;
