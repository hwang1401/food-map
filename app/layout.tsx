import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import { ClientLayout } from "./components/ClientLayout";

// Lumir Design System CSS 임포트 (exports 경로 사용)
import "lumir-design-system-shared/foundation-tokens";
import "lumir-design-system-01/styles";
import "lumir-design-system-01/tokens";
import "lumir-design-system-02/styles";
import "lumir-design-system-02/tokens";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Food Map",
  description: "Food Map Application",
  manifest: "/manifest.json",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" style={{ overflowX: "hidden", margin: 0, padding: 0 }}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          width: "100%",
          maxWidth: "100%"
        }}
      >
        <ThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
