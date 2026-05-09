import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AI Tech Blog",
    template: "%s | AI Tech Blog",
  },
  description: "AI 공부기록, 논문 리뷰, 프로젝트 후기를 담는 기술 블로그",
};

const ThemeScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        try {
          const theme = localStorage.getItem('theme');
          if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
          }
        } catch {}
      `,
    }}
  />
);

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko" className={jetbrainsMono.variable} suppressHydrationWarning>
      <head>
        {/* Pretendard variable font (CDN, dynamic subset) */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <ThemeScript />
      </head>
      <body className="min-h-screen font-sans">
        <Header />
        <main className="min-h-[calc(100vh-12rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
