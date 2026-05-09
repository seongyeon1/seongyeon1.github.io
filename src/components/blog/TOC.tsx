"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/types/post";

const TOC = ({ headings }: { headings: Heading[] }) => {
  const [activeId, setActiveId] = useState<string>("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24">
      {/* Progress bar */}
      <div className="mb-4 h-0.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-400 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
        On this page
      </h3>
      <ul className="space-y-0.5 text-[13px]">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
          >
            <a
              href={`#${heading.id}`}
              className={`block rounded-md py-1.5 px-2.5 transition-[color,background-color] duration-150 ease-out-expo ${
                activeId === heading.id
                  ? "bg-primary-50 font-medium text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
                  : "text-zinc-400 hover:bg-zinc-50 hover:text-zinc-700 dark:text-zinc-500 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-300"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TOC;
