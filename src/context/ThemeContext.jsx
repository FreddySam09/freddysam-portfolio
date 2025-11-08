// src/context/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // ✅ Always default to light mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ✅ On mount, check localStorage (ignore system preference)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark-theme");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark-theme");
    }
  }, []);

  // ✅ Watch mode change and apply theme + persist preference
  useEffect(() => {
    const html = document.documentElement;

    // Smooth transition effect
    html.style.transition = "background-color 0.3s ease, color 0.3s ease";

    if (isDarkMode) {
      html.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
