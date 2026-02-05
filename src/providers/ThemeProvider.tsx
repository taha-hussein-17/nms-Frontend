import { useEffect, useState } from "react";
import {
  ThemeProviderContext,
  type ThemeType,
  type Mode,
} from "./ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeType;
  defaultMode?: Mode;
  storageKeyTheme?: string;
  storageKeyMode?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = "default",
  defaultMode = "system",
  storageKeyTheme = "vite-ui-theme",
  storageKeyMode = "vite-ui-mode",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeType>(
    () => (localStorage.getItem(storageKeyTheme) as ThemeType) || defaultTheme
  );
  const [mode, setMode] = useState<Mode>(
    () => (localStorage.getItem(storageKeyMode) as Mode) || defaultMode
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all possible theme classes and mode classes
    root.classList.remove(
      "light",
      "dark",
      "kids",
      "coders",
      "azhari",
      "uni",
      "default"
    );
    root.removeAttribute("data-theme");

    // Apply Mode
    let effectiveMode = mode;
    if (mode === "system") {
      effectiveMode = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    root.classList.add(effectiveMode);

    // Apply Theme
    if (theme !== "default") {
      root.classList.add(theme);
      root.setAttribute("data-theme", theme);
    } else {
      root.setAttribute("data-theme", "default");
    }
  }, [theme, mode]);

  const value = {
    theme,
    mode,
    setTheme: (theme: ThemeType) => {
      localStorage.setItem(storageKeyTheme, theme);
      setTheme(theme);
    },
    setMode: (mode: Mode) => {
      localStorage.setItem(storageKeyMode, mode);
      setMode(mode);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
