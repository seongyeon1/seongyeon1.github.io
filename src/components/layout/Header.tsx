"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/blog", label: "Blog" },
  { href: "/series", label: "Series" },
];

const SunIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

// 두 아이콘을 모두 DOM에 두고 cross-fade.
// scale 0.25 → 1, opacity 0 → 1, blur 4px → 0px (skill의 정해진 값).
const ThemeToggle = ({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) => (
  <button
    onClick={onToggle}
    className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-500 transition-[color,background-color,scale] duration-150 ease-out-expo hover:bg-zinc-100 hover:text-zinc-700 active:scale-[0.96] dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
    aria-label="Toggle dark mode"
  >
    <span
      className={`absolute inset-0 flex items-center justify-center transition-[opacity,filter,scale] duration-300 ease-out-expo ${
        isDark ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]"
      }`}
      aria-hidden={!isDark}
    >
      <SunIcon className="h-[18px] w-[18px]" />
    </span>
    <span
      className={`flex items-center justify-center transition-[opacity,filter,scale] duration-300 ease-out-expo ${
        isDark ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-0"
      }`}
      aria-hidden={isDark}
    >
      <MoonIcon className="h-[18px] w-[18px]" />
    </span>
  </button>
);

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out-expo ${
        isScrolled
          ? "bg-white/80 shadow-border backdrop-blur-xl dark:bg-black/80"
          : "bg-white/50 backdrop-blur-md dark:bg-black/50"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg transition-transform duration-150 ease-out-expo active:scale-[0.96]"
          aria-label="sy/dev — home"
        >
          <Image
            src="/images/avatar.png"
            alt=""
            width={32}
            height={32}
            priority
            className="image-pixelated h-8 w-8 rounded-full ring-1 ring-zinc-200/70 dark:ring-zinc-700/70"
          />
          <span className="font-mono text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            sy<span className="text-primary-600 dark:text-primary-400">/dev</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2.5 text-sm font-medium text-zinc-600 transition-[color,background-color,scale] duration-150 ease-out-expo hover:bg-zinc-100 hover:text-zinc-900 active:scale-[0.96] dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2 h-5 w-px bg-zinc-200 dark:bg-zinc-700" />
          <div className="ml-1">
            <ThemeToggle isDark={isDark} onToggle={toggleDark} />
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle isDark={isDark} onToggle={toggleDark} />
          <div className="mx-1 h-5 w-px bg-zinc-200 dark:bg-zinc-700" />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-500 transition-[color,background-color,scale] duration-150 ease-out-expo hover:bg-zinc-100 active:scale-[0.96] dark:text-zinc-400 dark:hover:bg-zinc-800"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="relative h-5 w-5">
              <svg
                className={`absolute inset-0 transition-[opacity,filter,scale] duration-200 ease-out-expo ${
                  isMobileMenuOpen ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`absolute inset-0 transition-[opacity,filter,scale] duration-200 ease-out-expo ${
                  isMobileMenuOpen ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu: grid-rows trick → height transitions, exit animates */}
      <div
        className={`grid overflow-hidden bg-white/95 backdrop-blur-xl transition-[grid-template-rows,opacity] duration-200 ease-out-expo sm:hidden dark:bg-black/95 ${
          isMobileMenuOpen ? "grid-rows-[1fr] opacity-100 shadow-border" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="mx-auto min-h-0 w-full max-w-5xl px-6">
          <div className="flex flex-col py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-3 py-3.5 text-sm font-medium text-zinc-600 transition-[color,background-color,scale] duration-150 ease-out-expo hover:bg-zinc-100 hover:text-zinc-900 active:scale-[0.96] dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
