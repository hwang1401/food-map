"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";
type SystemTheme = "system01" | "system02";

interface ThemeContextType {
  theme: Theme;
  systemTheme: SystemTheme;
  toggleTheme: () => void;
  toggleSystemTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const [systemTheme, setSystemTheme] = useState<SystemTheme>("system02");

  useEffect(() => {
    // localStorage에서 저장된 테마들 불러오기
    const savedTheme = localStorage.getItem("theme") as Theme;
    const savedSystemTheme = localStorage.getItem("systemTheme") as SystemTheme;
    
    if (savedTheme) {
      setTheme(savedTheme);
    }
    if (savedSystemTheme) {
      setSystemTheme(savedSystemTheme);
    }
  }, []);

  useEffect(() => {
    // HTML 태그의 data-theme 속성 업데이트
    document.documentElement.setAttribute("data-theme", theme);
    // HTML 태그에 시스템 테마 클래스 추가
    document.documentElement.className = `lumir-${systemTheme}`;
    
    // localStorage에 테마들 저장
    localStorage.setItem("theme", theme);
    localStorage.setItem("systemTheme", systemTheme);
  }, [theme, systemTheme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  const toggleSystemTheme = () => {
    setSystemTheme(prevSystemTheme => prevSystemTheme === "system01" ? "system02" : "system01");
  };

  return (
    <ThemeContext.Provider value={{ theme, systemTheme, toggleTheme, toggleSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
} 