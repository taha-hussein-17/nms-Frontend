import { createContext, useContext } from "react";

export type Mode = "light" | "dark" | "system";
export type ThemeType = "default" | "kids" | "programmers" | "azhari" | "uni";

export interface ThemeProviderState {
  theme: ThemeType;
  mode: Mode;
  setTheme: (theme: ThemeType) => void;
  setMode: (mode: Mode) => void;
}

export const initialState: ThemeProviderState = {
  theme: "default",
  mode: "system",
  setTheme: () => null,
  setMode: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
