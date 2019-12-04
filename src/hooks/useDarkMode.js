import React, { useEffect } from "react";
import  useLocalStorage  from "./useLocalStorage.1";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("dark", "true");

  useEffect(() => {
    var body = document.getElementsByTagName("BODY");
    storedValue ? body.classList.toggle("dark-mode") : null;
  }, [storedValue]);
};

export default useDarkMode;
