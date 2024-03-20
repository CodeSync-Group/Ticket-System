import React, { useState, createContext, useContext } from "react";

export const ThemeContext = createContext({});

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [contextTheme, setContextTheme] = useState<string>("Light");
  const values = { contextTheme, setContextTheme };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  return context;
};
