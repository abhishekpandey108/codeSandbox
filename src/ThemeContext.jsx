import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();
const ThemeUpdate = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdate);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggle = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdate.Provider value={toggle}>{children}</ThemeUpdate.Provider>
    </ThemeContext.Provider>
  );
}
