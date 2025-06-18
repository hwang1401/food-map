"use client";

import { useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Surface } from "lumir-design-system-shared";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const { theme } = useTheme();

  useEffect(() => {
    // body의 기본 스타일 설정 (margin, padding 제거)
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    // Surface 컴포넌트가 배경을 담당하므로 body 배경은 투명하게
    document.body.style.backgroundColor = "transparent";
  }, [theme]);

  return (
    <Surface
      background="secondary-system02-2-rest"
      style={{
        minHeight: "100vh",
        width: "100%"
      }}
    >
      {children}
    </Surface>
  );
} 