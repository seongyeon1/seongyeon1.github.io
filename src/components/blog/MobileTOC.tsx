"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/types/post";
import { useActiveHeading } from "@/lib/useActiveHeading";
import { useScrollProgress } from "@/lib/useScrollProgress";

const MobileTOC = ({ headings }: { headings: Heading[] }) => {
  const [open, setOpen] = useState(false);
  const activeId = useActiveHeading(headings);
  const progress = useScrollProgress();

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (headings.length === 0) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open table of contents"
        aria-expanded={open}
        aria-controls="mobile-toc-sheet"
        className="fixed bottom-6 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white shadow-border-hover transition-transform duration-150 ease-out-expo active:scale-[0.96] sm:hidden dark:bg-zinc-100 dark:text-zinc-900"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        {activeId && (
          <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full bg-primary-500 ring-2 ring-white dark:ring-zinc-900" />
        )}
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-200 ease-out-expo sm:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sheet */}
      <div
        id="mobile-toc-sheet"
        role="dialog"
        aria-modal="true"
        aria-label="Table of contents"
        className={`fixed inset-x-0 bottom-0 z-50 max-h-[65vh] overflow-y-auto rounded-t-3xl bg-white px-6 pb-7 pt-3 shadow-border-hover transition-transform duration-300 ease-out-expo sm:hidden dark:bg-zinc-900 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto mb-4 h-1 w-9 rounded-full bg-zinc-300 dark:bg-zinc-700" />

        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            On this page
          </h3>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="-mr-2 inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-[color,background-color] duration-150 ease-out-expo hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-4 h-0.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-400 transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <ul className="space-y-0.5 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
            >
              <a
                href={`#${heading.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-2.5 py-2 transition-[color,background-color] duration-150 ease-out-expo ${
                  activeId === heading.id
                    ? "bg-primary-50 font-medium text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
                    : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-200"
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileTOC;
