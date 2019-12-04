import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("dark", "initial");

  useEffect(() => {
    var body = document.querySelector("body");
    darkMode
      ? body.classList.toggle("dark-mode")
      : body.classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
