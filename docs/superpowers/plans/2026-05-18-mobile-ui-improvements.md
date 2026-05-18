# Mobile UI Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mobile-first reflow of the entire blog (Home, Blog list, Post detail, Series, Tags) plus must-have mobile UX additions (TOC bottom sheet, reading progress bar, back-to-top FAB).

**Architecture:** Mobile-first responsive Tailwind classes layered on the existing component tree. New mobile-only components (ReadingProgress, BackToTop, MobileTOC) mount inside PostLayout and use `sm:hidden`. Shared hooks (`useActiveHeading`, `useScrollProgress`) extract scroll/intersection logic so both desktop TOC and the new MobileTOC stay in sync without duplication.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript (strict), Tailwind CSS, MDX. No new dependencies. No test framework in this repo — verification is `npm run typecheck` + `npm run lint` + `npm run build` + manual viewport check.

**Spec:** `docs/superpowers/specs/2026-05-18-mobile-ui-improvements-design.md`

---

## File Map

**New files (5):**
- `src/lib/useActiveHeading.ts` — IntersectionObserver hook returning active heading id
- `src/lib/useScrollProgress.ts` — scroll progress (0–100) hook
- `src/components/blog/ReadingProgress.tsx` — top-edge progress bar (mobile only)
- `src/components/blog/BackToTop.tsx` — floating back-to-top button (mobile only)
- `src/components/blog/MobileTOC.tsx` — FAB + bottom sheet (mobile only)

**Modified files (9):**
- `src/lib/date.ts` — add `formatDateShort`
- `src/components/blog/TOC.tsx` — refactor to consume shared hooks
- `src/app/globals.css` — prose line-height + code font-size responsive overrides
- `src/components/layout/Header.tsx` — mobile menu tap targets + divider
- `src/components/layout/Footer.tsx` — outer mt + inner py
- `src/components/layout/PostLayout.tsx` — container py, breadcrumb, h1 sizes, mount new components
- `src/app/page.tsx` — Hero mobile avatar + sizes, Featured card stripe + meta cleanup
- `src/components/blog/PostCard.tsx` — meta row dot-separator layout, padding
- `src/components/blog/SeriesNav.tsx` — px-5 mobile, title size
- `src/app/blog/page.tsx` — tag filter show-more toggle

---

## Verification After Every Task

Each task ends with:

```bash
npm run typecheck
npm run lint
```

Both must pass with zero output (or "no errors"). If they fail, fix before committing.

A final task runs `npm run build` and a manual viewport sweep.

---

## Task 1: Add `formatDateShort` helper

**Files:**
- Modify: `src/lib/date.ts`

- [ ] **Step 1: Add the helper at the bottom of the file**

Append to `src/lib/date.ts`:

```typescript
const shortFormatter = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Seoul",
  month: "2-digit",
  day: "2-digit",
});

export const formatDateShort = (iso: string) => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const parts = shortFormatter.formatToParts(d);
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? "";
  return `${get("month")}.${get("day")}`;
};
```

- [ ] **Step 2: Verify**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/lib/date.ts
git commit -m "feat(date): add formatDateShort (MM.DD, KST)"
```

---

## Task 2: Create `useActiveHeading` hook

**Files:**
- Create: `src/lib/useActiveHeading.ts`

- [ ] **Step 1: Write the hook**

Create `src/lib/useActiveHeading.ts`:

```typescript
"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/types/post";

export const useActiveHeading = (headings: Heading[]) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

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

    return () => observer.disconnect();
  }, [headings]);

  return activeId;
};
```

- [ ] **Step 2: Verify**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/lib/useActiveHeading.ts
git commit -m "feat(hooks): add useActiveHeading"
```

---

## Task 3: Create `useScrollProgress` hook

**Files:**
- Create: `src/lib/useScrollProgress.ts`

- [ ] **Step 1: Write the hook**

Create `src/lib/useScrollProgress.ts`:

```typescript
"use client";

import { useEffect, useState } from "react";

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
};
```

- [ ] **Step 2: Verify**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/lib/useScrollProgress.ts
git commit -m "feat(hooks): add useScrollProgress"
```

---

## Task 4: Refactor desktop TOC to use shared hooks

**Files:**
- Modify: `src/components/blog/TOC.tsx`

- [ ] **Step 1: Replace the file contents**

Replace `src/components/blog/TOC.tsx` with:

```typescript
"use client";

import type { Heading } from "@/types/post";
import { useActiveHeading } from "@/lib/useActiveHeading";
import { useScrollProgress } from "@/lib/useScrollProgress";

const TOC = ({ headings }: { headings: Heading[] }) => {
  const activeId = useActiveHeading(headings);
  const progress = useScrollProgress();

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24">
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
```

- [ ] **Step 2: Verify**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/blog/TOC.tsx
git commit -m "refactor(TOC): consume shared hooks (no behavior change)"
```

---

## Task 5: Update globals.css (prose + code)

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Update prose paragraph line-height**

Find the block:

```css
.prose p {
  @apply leading-[1.8];
}

.prose li {
  @apply leading-[1.8];
}
```

Replace with:

```css
.prose p {
  @apply leading-[1.75] sm:leading-[1.8];
}

.prose li {
  @apply leading-[1.75] sm:leading-[1.8];
}
```

- [ ] **Step 2: Update code block font-size**

Find:

```css
[data-rehype-pretty-code-figure] code {
  @apply grid text-[13px] leading-relaxed;
}
```

Replace with:

```css
[data-rehype-pretty-code-figure] code {
  @apply grid text-[12.5px] leading-relaxed sm:text-[13px];
}
```

- [ ] **Step 3: Verify**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css
git commit -m "style(globals): mobile-first prose leading and code font-size"
```

---

## Task 6: Header mobile polish

**Files:**
- Modify: `src/components/layout/Header.tsx`

- [ ] **Step 1: Add divider between ThemeToggle and hamburger on mobile**

Find (around line 118-119):

```typescript
        {/* Mobile menu button */}
        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle isDark={isDark} onToggle={toggleDark} />
          <button
```

Replace with:

```typescript
        {/* Mobile menu button */}
        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle isDark={isDark} onToggle={toggleDark} />
          <div className="mx-1 h-5 w-px bg-zinc-200 dark:bg-zinc-700" />
          <button
```

- [ ] **Step 2: Larger tap targets on mobile menu items**

Find the mobile menu nav block:

```typescript
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-600 transition-[color,background-color,scale] duration-150 ease-out-expo hover:bg-zinc-100 hover:text-zinc-900 active:scale-[0.96] dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              >
                {item.label}
              </Link>
```

Change `py-3` to `py-3.5`:

```typescript
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-3 py-3.5 text-sm font-medium text-zinc-600 transition-[color,background-color,scale] duration-150 ease-out-expo hover:bg-zinc-100 hover:text-zinc-900 active:scale-[0.96] dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              >
                {item.label}
              </Link>
```

- [ ] **Step 3: Verify**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/Header.tsx
git commit -m "style(Header): mobile divider + larger menu tap targets"
```

---

## Task 7: Footer spacing

**Files:**
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Adjust outer mt and inner py**

Find:

```typescript
    <footer className="mt-20 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="mx-auto max-w-5xl px-6 py-14">
```

Replace with:

```typescript
    <footer className="mt-14 border-t border-zinc-200/60 sm:mt-20 dark:border-zinc-800/60">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-14">
```

- [ ] **Step 2: Verify**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "style(Footer): tighter mobile spacing"
```

---

## Task 8: PostCard meta row redesign

**Files:**
- Modify: `src/components/blog/PostCard.tsx`

- [ ] **Step 1: Replace the file contents**

Replace `src/components/blog/PostCard.tsx` with:

```typescript
import Link from "next/link";
import type { Post, Category } from "@/types/post";
import { formatDateShort, formatDateTime } from "@/lib/date";
import TagBadge from "./TagBadge";
import CategoryBadge from "./CategoryBadge";

const categoryGradients: Record<Category, string> = {
  study: "from-blue-500/20 to-indigo-500/20 dark:from-blue-500/10 dark:to-indigo-500/10",
  "paper-review": "from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10",
  project: "from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/10 dark:to-teal-500/10",
  tutorial: "from-orange-500/20 to-amber-500/20 dark:from-orange-500/10 dark:to-amber-500/10",
};

const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-border transition-[box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-border-hover dark:bg-zinc-900">
      <div className={`h-1 bg-gradient-to-r sm:h-1.5 ${categoryGradients[post.category]}`} />

      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-2">
          <CategoryBadge category={post.category} />
          <span className="h-[3px] w-[3px] rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="inline-flex items-center gap-1 text-[11px] tabular-nums text-zinc-400 sm:text-xs dark:text-zinc-500">
            <span className="sm:hidden">{formatDateShort(post.date)}</span>
            <span className="hidden sm:inline">{formatDateTime(post.date)}</span>
          </span>
          <span className="h-[3px] w-[3px] rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="inline-flex items-center gap-1 text-[11px] text-zinc-400 sm:text-xs dark:text-zinc-500">
            {post.readingTime}
          </span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h2 className="mb-2 text-balance text-[17px] font-bold leading-snug tracking-tight text-zinc-900 transition-colors group-hover:text-primary-600 sm:text-lg dark:text-zinc-100 dark:group-hover:text-primary-400">
            {post.title}
          </h2>
          <p className="mb-4 line-clamp-2 text-pretty text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {post.summary}
          </p>
        </Link>

        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
          {post.tags.length > 3 && (
            <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs tabular-nums text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500">
              +{post.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default PostCard;
```

- [ ] **Step 2: Verify**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/blog/PostCard.tsx
git commit -m "style(PostCard): mobile meta row with dot separators, tighter padding"
```

---

## Task 9: SeriesNav mobile padding

**Files:**
- Modify: `src/components/blog/SeriesNav.tsx`

- [ ] **Step 1: Replace inner paddings and title size**

Find:

```typescript
      <div className="border-b border-zinc-100 px-6 py-4 dark:border-zinc-800/50">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
          Series
        </p>
        <Link
          href={`/series/${encodeURIComponent(series)}`}
          className="text-balance text-lg font-bold text-zinc-900 transition-colors duration-150 hover:text-primary-600 dark:text-zinc-100 dark:hover:text-primary-400"
        >
```

Replace with:

```typescript
      <div className="border-b border-zinc-100 px-5 py-4 sm:px-6 dark:border-zinc-800/50">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
          Series
        </p>
        <Link
          href={`/series/${encodeURIComponent(series)}`}
          className="text-balance text-base font-bold text-zinc-900 transition-colors duration-150 hover:text-primary-600 sm:text-lg dark:text-zinc-100 dark:hover:text-primary-400"
        >
```

Find the two `px-6` occurrences in list items (current item div + Link):

```typescript
                <div className="flex items-center gap-3 bg-primary-50/50 px-6 py-3 dark:bg-primary-900/10">
```

Replace with:

```typescript
                <div className="flex items-center gap-3 bg-primary-50/50 px-5 py-3 sm:px-6 dark:bg-primary-900/10">
```

And:

```typescript
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-3 px-6 py-3 transition-[background-color] duration-150 ease-out-expo hover:bg-zinc-50 dark:hover:bg-zinc-800/30"
                >
```

Replace with:

```typescript
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-3 px-5 py-3 transition-[background-color] duration-150 ease-out-expo hover:bg-zinc-50 sm:px-6 dark:hover:bg-zinc-800/30"
                >
```

- [ ] **Step 2: Verify**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/blog/SeriesNav.tsx
git commit -m "style(SeriesNav): tighter mobile padding, smaller title on mobile"
```

---

## Task 10: ReadingProgress component

**Files:**
- Create: `src/components/blog/ReadingProgress.tsx`

- [ ] **Step 1: Write the component**

Create `src/components/blog/ReadingProgress.tsx`:

```typescript
"use client";

import { useScrollProgress } from "@/lib/useScrollProgress";

const ReadingProgress = () => {
  const progress = useScrollProgress();

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
      className="fixed inset-x-0 top-0 z-[60] h-[2px] sm:hidden"
    >
      <div
        className="h-full bg-gradient-to-r from-primary-500 to-primary-400 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;
```

- [ ] **Step 2: Verify**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/blog/ReadingProgress.tsx
git commit -m "feat(blog): add mobile reading progress bar"
```

---

## Task 11: BackToTop component

**Files:**
- Create: `src/components/blog/BackToTop.tsx`

- [ ] **Step 1: Write the component**

Create `src/components/blog/BackToTop.tsx`:

```typescript
"use client";

import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-[5.5rem] right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-zinc-700 shadow-border-hover transition-[opacity,transform] duration-200 ease-out-expo active:scale-[0.96] sm:hidden dark:bg-zinc-800 dark:text-zinc-200 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
      }`}
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
      </svg>
    </button>
  );
};

export default BackToTop;
```

- [ ] **Step 2: Verify**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/blog/BackToTop.tsx
git commit -m "feat(blog): add mobile back-to-top FAB"
```

---

## Task 12: MobileTOC component (FAB + bottom sheet)

**Files:**
- Create: `src/components/blog/MobileTOC.tsx`

- [ ] **Step 1: Write the component**

Create `src/components/blog/MobileTOC.tsx`:

```typescript
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
```

- [ ] **Step 2: Verify**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/blog/MobileTOC.tsx
git commit -m "feat(blog): add mobile TOC bottom sheet"
```

---

## Task 13: Wire new mobile components into PostLayout

**Files:**
- Modify: `src/components/layout/PostLayout.tsx`

- [ ] **Step 1: Replace the file contents**

Replace `src/components/layout/PostLayout.tsx` with:

```typescript
import type { ReactNode } from "react";
import Link from "next/link";
import type { Post, Heading } from "@/types/post";
import { formatDateTime } from "@/lib/date";
import TOC from "@/components/blog/TOC";
import MobileTOC from "@/components/blog/MobileTOC";
import ReadingProgress from "@/components/blog/ReadingProgress";
import BackToTop from "@/components/blog/BackToTop";
import TagBadge from "@/components/blog/TagBadge";
import CategoryBadge from "@/components/blog/CategoryBadge";
import SeriesNav from "@/components/blog/SeriesNav";
import Comments from "@/components/blog/Comments";

const PostLayout = ({
  post,
  headings,
  seriesPosts,
  children,
}: {
  post: Post;
  headings: Heading[];
  seriesPosts?: Post[];
  children: ReactNode;
}) => {
  return (
    <>
      <ReadingProgress />
      <div className="mx-auto max-w-5xl px-5 py-6 sm:px-6 sm:py-10 lg:px-8">
        <article>
          {/* Breadcrumb */}
          <nav className="mb-6 flex min-w-0 items-center gap-2 text-xs text-zinc-400 sm:mb-8 sm:text-sm dark:text-zinc-500">
            <Link href="/" className="transition-[color] duration-150 ease-out-expo hover:text-zinc-600 dark:hover:text-zinc-300">
              Home
            </Link>
            <svg className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <Link href="/blog" className="transition-[color] duration-150 ease-out-expo hover:text-zinc-600 dark:hover:text-zinc-300">
              Blog
            </Link>
            <svg className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <span className="min-w-0 truncate text-zinc-600 dark:text-zinc-400">{post.title}</span>
          </nav>

          <header className="mb-8 sm:mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <CategoryBadge category={post.category} />
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 sm:text-sm dark:text-zinc-500">
                <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <time className="tabular-nums" dateTime={post.date}>{formatDateTime(post.date)}</time>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 sm:text-sm dark:text-zinc-500">
                <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readingTime}</span>
              </div>
            </div>
            <h1 className="mb-4 text-balance text-[26px] font-extrabold leading-[1.2] tracking-tight text-zinc-900 sm:text-3xl md:text-4xl dark:text-zinc-100">
              {post.title}
            </h1>
            <p className="text-pretty text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400">
              {post.summary}
            </p>
          </header>

          {post.series && seriesPosts && (
            <SeriesNav
              series={post.series}
              currentOrder={post.seriesOrder ?? 1}
              posts={seriesPosts}
            />
          )}

          <div className="lg:flex lg:gap-12">
            <div className="min-w-0 flex-1 prose prose-zinc max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-primary-400">
              {children}
            </div>
            <aside className="hidden w-60 shrink-0 lg:block">
              <TOC headings={headings} />
            </aside>
          </div>

          <footer className="mt-16 border-t border-zinc-200/60 pt-8 dark:border-zinc-800/60">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Tags
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          </footer>

          <section className="mt-16 border-t border-zinc-200/60 pt-8 dark:border-zinc-800/60">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Comments
            </h2>
            <Comments />
          </section>
        </article>
      </div>
      <MobileTOC headings={headings} />
      <BackToTop />
    </>
  );
};

export default PostLayout;
```

- [ ] **Step 2: Verify**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/PostLayout.tsx
git commit -m "feat(PostLayout): mobile typography + mount progress/TOC/back-to-top"
```

---

## Task 14: Home page — Hero + Featured + grid

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace the file contents**

Replace `src/app/page.tsx` with:

```typescript
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import { getAllSeries } from "@/lib/series";
import PostCard from "@/components/blog/PostCard";
import CategoryBadge from "@/components/blog/CategoryBadge";
import TagBadge from "@/components/blog/TagBadge";
import SocialLinks from "@/components/blog/SocialLinks";
import { formatDateShort, formatDateTime } from "@/lib/date";
import type { Category } from "@/types/post";

const categoryMeta: Record<Category, { label: string; icon: string; tone: string; stripe: string }> = {
  study: {
    label: "Study",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    tone: "from-blue-500/15 to-blue-500/0 text-blue-600 dark:text-blue-400",
    stripe: "from-blue-500/40 via-indigo-500/40 to-blue-500/40",
  },
  "paper-review": {
    label: "Paper Review",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    tone: "from-purple-500/15 to-purple-500/0 text-purple-600 dark:text-purple-400",
    stripe: "from-purple-500/40 via-pink-500/40 to-purple-500/40",
  },
  project: {
    label: "Project",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
    tone: "from-emerald-500/15 to-emerald-500/0 text-emerald-600 dark:text-emerald-400",
    stripe: "from-emerald-500/40 via-teal-500/40 to-emerald-500/40",
  },
  tutorial: {
    label: "Tutorial",
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342",
    tone: "from-amber-500/15 to-amber-500/0 text-amber-600 dark:text-amber-400",
    stripe: "from-amber-500/40 via-orange-500/40 to-amber-500/40",
  },
};

const HomePage = () => {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 7);
  const series = getAllSeries();

  const featuredMeta = featuredPost ? categoryMeta[featuredPost.category] : null;

  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="relative pb-12 pt-12 sm:pb-16 sm:pt-20 lg:pt-28 lg:pb-20">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 right-0 h-72 w-72 rounded-full bg-primary-400/10 blur-3xl dark:bg-primary-600/10" />
          <div className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-primary-300/10 blur-3xl dark:bg-primary-500/10" />
        </div>
        <div className="grid animate-fade-in-up items-center gap-10 lg:grid-cols-[1fr_240px]">
          {/* Left: text */}
          <div>
            <div className="flex items-start gap-4 lg:block">
              <div className="min-w-0 flex-1">
                <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-primary-600 dark:text-primary-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-500" />
                  </span>
                  SeongYeon · AI Engineer
                </p>
                <h1 className="mb-6 text-balance text-[30px] font-extrabold leading-[1.15] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-100">
                  AI 엔지니어 SeongYeon의
                  <br />
                  <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-cyan-400 bg-clip-text text-transparent dark:from-primary-400 dark:via-primary-300 dark:to-cyan-300">
                    학습 노트
                  </span>
                </h1>
              </div>
              {/* Mobile-only small avatar */}
              <Image
                src="/images/avatar.png"
                alt=""
                width={64}
                height={64}
                priority
                className="image-pixelated h-16 w-16 shrink-0 rounded-full ring-1 ring-zinc-200/70 lg:hidden dark:ring-zinc-700/70"
              />
            </div>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
              LLM · 논문 리뷰 · 프로젝트 회고를 쓰고 공유합니다.
            </p>

            {featuredPost && (
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group mt-6 inline-flex max-w-xl items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm shadow-border transition-[box-shadow,transform] duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-border-hover dark:bg-zinc-900"
              >
                <span className="text-base">📍</span>
                <span className="shrink-0 text-zinc-500 dark:text-zinc-400">Now ·</span>
                <span className="truncate font-medium text-zinc-700 dark:text-zinc-300">
                  최근엔 &ldquo;{featuredPost.title}&rdquo;에 대해 쓰고 있어요
                </span>
                <svg
                  className="ml-auto h-4 w-4 shrink-0 text-primary-600 transition-transform duration-200 ease-out-expo group-hover:translate-x-1 dark:text-primary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            )}

            <div className="mt-8">
              <SocialLinks variant="hero" />
            </div>
          </div>

          {/* Right: large avatar — desktop only */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 -z-10 rounded-full bg-primary-400/20 blur-3xl dark:bg-primary-500/20" />
            <Image
              src="/images/avatar.png"
              alt="SeongYeon avatar"
              width={240}
              height={240}
              priority
              className="image-pixelated h-60 w-60 rounded-full ring-1 ring-zinc-200/70 dark:ring-zinc-700/70"
            />
          </div>
        </div>
      </section>

      {/* Featured Post — magazine layout */}
      {featuredPost && featuredMeta && (
        <section className="mb-14 animate-fade-in-up delay-200 sm:mb-20">
          <article className="group relative grid overflow-hidden rounded-3xl bg-white shadow-border transition-[box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-border-hover lg:grid-cols-[1fr_320px] dark:bg-zinc-900">
            {/* Mobile-only gradient stripe */}
            <div className={`h-1.5 bg-gradient-to-r lg:hidden ${featuredMeta.stripe}`} />

            {/* Left: text */}
            <div className="p-5 sm:p-8 lg:p-12">
              <div className="relative z-10 mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
                  Latest
                </span>
                <CategoryBadge category={featuredPost.category} />
              </div>
              <h2 className="mb-3 text-balance text-[22px] font-bold leading-tight tracking-tight text-zinc-900 transition-colors group-hover:text-primary-600 sm:mb-4 sm:text-3xl dark:text-zinc-100 dark:group-hover:text-primary-400">
                <Link href={`/blog/${featuredPost.slug}`} className="before:absolute before:inset-0 before:content-['']">
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="mb-5 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-600 sm:mb-6 sm:text-base dark:text-zinc-400">
                {featuredPost.summary}
              </p>
              <div className="relative z-10 mb-4 flex flex-wrap gap-1.5 sm:mb-6">
                {featuredPost.tags.slice(0, 3).map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
                {featuredPost.tags.slice(3, 5).map((tag) => (
                  <span key={tag} className="hidden sm:inline-flex">
                    <TagBadge tag={tag} />
                  </span>
                ))}
              </div>
              {featuredPost.series && (
                <p className="mb-4 text-xs text-zinc-400 dark:text-zinc-500">
                  Series · {featuredPost.series}
                  {typeof featuredPost.seriesOrder === "number" ? ` · #${featuredPost.seriesOrder}` : ""}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-4 border-t border-zinc-100 pt-5 text-sm text-zinc-500 dark:border-zinc-800/60 dark:text-zinc-400">
                <span className="inline-flex items-center gap-1.5 tabular-nums">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  <span className="sm:hidden">{formatDateShort(featuredPost.date)}</span>
                  <span className="hidden sm:inline">{formatDateTime(featuredPost.date)}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {featuredPost.readingTime}
                </span>
                <span className="ml-auto inline-flex items-center gap-2 font-medium text-primary-600 dark:text-primary-400">
                  <span className="sm:hidden">Read</span>
                  <span className="hidden sm:inline">Read more</span>
                  <svg className="h-4 w-4 transition-transform duration-200 ease-out-expo group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Right: visual (hidden on mobile) — decorative, clicks fall through to the card link */}
            <div
              className={`pointer-events-none relative hidden overflow-hidden bg-gradient-to-br ${featuredMeta.tone} lg:block`}
            >
              <div
                className={`absolute inset-0 flex items-center justify-center ${featuredMeta.tone.split(" ").filter((c) => c.startsWith("text-")).join(" ")}`}
              >
                <svg className="h-32 w-32 opacity-40 transition-transform duration-500 ease-out-expo group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={featuredMeta.icon} />
                </svg>
              </div>
              <span className="absolute bottom-6 right-6 font-mono text-7xl font-black leading-none tracking-tighter text-zinc-900/[0.06] dark:text-white/[0.06]">
                {String(posts.length).padStart(2, "0")}
              </span>
            </div>
          </article>
        </section>
      )}

      {/* Series */}
      {series.length > 0 && (
        <section className="mb-14 animate-fade-in-up delay-400 sm:mb-20">
          <div className="mb-6 flex items-center justify-between sm:mb-8">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Series
            </h2>
            <Link
              href="/series"
              className="rounded-md text-sm font-medium text-zinc-500 transition-[color,scale] duration-150 ease-out-expo hover:text-primary-600 active:scale-[0.96] dark:text-zinc-400 dark:hover:text-primary-400"
            >
              View all →
            </Link>
          </div>
          <div className="scrollbar-hide -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:px-6">
            {series.map((s) => (
              <Link
                key={s.name}
                href={`/series/${encodeURIComponent(s.name)}`}
                className="group w-[260px] shrink-0 snap-start rounded-2xl bg-white p-5 shadow-border transition-[box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-border-hover sm:w-[280px] sm:p-6 dark:bg-zinc-900"
              >
                <div className="mb-2 flex items-center gap-2">
                  <svg className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                  </svg>
                  <span className="text-xs font-medium tabular-nums text-primary-600 dark:text-primary-400">
                    {s.totalCount} posts
                  </span>
                </div>
                <h3 className="text-balance font-bold text-zinc-900 transition-colors group-hover:text-primary-600 dark:text-zinc-100 dark:group-hover:text-primary-400">
                  {s.name}
                </h3>
                {s.posts[s.posts.length - 1] && (
                  <p className="mt-2 text-pretty text-sm text-zinc-500 dark:text-zinc-400">
                    Latest · {s.posts[s.posts.length - 1].title}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="mb-14 animate-fade-in-up delay-400 sm:mb-20">
          <div className="mb-6 flex items-center justify-between sm:mb-8">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Recent Posts
            </h2>
            <Link
              href="/blog"
              className="rounded-md text-sm font-medium text-zinc-500 transition-[color,scale] duration-150 ease-out-expo hover:text-primary-600 active:scale-[0.96] dark:text-zinc-400 dark:hover:text-primary-400"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;
```

- [ ] **Step 2: Verify**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(home): mobile-first Hero + Featured stripe + scaled spacing"
```

---

## Task 15: Blog list page — tag filter show-more + spacing

**Files:**
- Modify: `src/app/blog/page.tsx`

- [ ] **Step 1: Create a client component for the tag filter**

Create `src/components/blog/TagFilter.tsx`:

```typescript
"use client";

import { useState } from "react";
import TagBadge from "./TagBadge";

const COLLAPSED_LIMIT = 12;

const TagFilter = ({ tags }: { tags: { tag: string; count: number }[] }) => {
  const [expanded, setExpanded] = useState(false);
  const showToggle = tags.length > COLLAPSED_LIMIT;
  const visibleTags = expanded || !showToggle ? tags : tags.slice(0, COLLAPSED_LIMIT);

  return (
    <div className="mb-10">
      <div className="flex flex-wrap gap-2">
        {visibleTags.map(({ tag, count }) => (
          <span key={tag} className="flex items-center gap-1">
            <TagBadge tag={tag} />
            <span className="text-xs tabular-nums text-zinc-300 dark:text-zinc-600">
              {count}
            </span>
          </span>
        ))}
      </div>
      {showToggle && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-3 inline-flex items-center gap-1 rounded-md text-xs font-medium text-zinc-500 transition-[color,scale] duration-150 ease-out-expo hover:text-primary-600 active:scale-[0.96] dark:text-zinc-400 dark:hover:text-primary-400"
        >
          {expanded ? "Show less" : `Show ${tags.length - COLLAPSED_LIMIT} more`}
          <svg
            className={`h-3 w-3 transition-transform duration-200 ease-out-expo ${expanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default TagFilter;
```

- [ ] **Step 2: Update blog list page**

Replace `src/app/blog/page.tsx` with:

```typescript
import { getAllPosts } from "@/lib/posts";
import { getTagList } from "@/lib/tags";
import PostCard from "@/components/blog/PostCard";
import TagFilter from "@/components/blog/TagFilter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "All blog posts",
};

const BlogPage = () => {
  const posts = getAllPosts();
  const tags = getTagList();

  return (
    <div className="mx-auto max-w-5xl px-5 py-6 sm:px-6 sm:py-10 lg:px-8">
      <div className="mb-8 sm:mb-10">
        <h1 className="mb-2 text-balance text-[26px] font-extrabold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
          All Posts
        </h1>
        <p className="text-pretty text-zinc-500 dark:text-zinc-400">
          <span className="tabular-nums">{posts.length}</span> articles published
        </p>
      </div>

      <TagFilter tags={tags} />

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800">
            <svg className="h-8 w-8 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400">
            No posts yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
```

- [ ] **Step 3: Verify**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 4: Commit**

```bash
git add src/components/blog/TagFilter.tsx src/app/blog/page.tsx
git commit -m "feat(blog): tag filter show-more + mobile spacing"
```

---

## Task 16: Series and Tags pages — container padding parity

The list pages `/series`, `/series/[name]`, and `/tags/[tag]` use the same outer container pattern as Blog. Apply the same `px-5 py-6 sm:px-6 sm:py-10 lg:px-8` container.

**Files:**
- Modify: `src/app/series/page.tsx`
- Modify: `src/app/series/[name]/page.tsx`
- Modify: `src/app/tags/[tag]/page.tsx`

- [ ] **Step 1: Read each file and identify container divs**

Run:

```bash
grep -n "max-w-5xl px-6" src/app/series/page.tsx src/app/series/[name]/page.tsx src/app/tags/[tag]/page.tsx
```

- [ ] **Step 2: Update container classes in each file**

For each match (one per file), replace:

```typescript
className="mx-auto max-w-5xl px-6 py-10"
```

with:

```typescript
className="mx-auto max-w-5xl px-5 py-6 sm:px-6 sm:py-10 lg:px-8"
```

If a file uses slightly different padding, normalize to the same pattern. Also update the page heading from `text-3xl` to `text-[26px] sm:text-3xl` if present.

- [ ] **Step 3: Verify**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 4: Commit**

```bash
git add src/app/series src/app/tags
git commit -m "style(pages): mobile spacing parity for series and tags pages"
```

---

## Task 17: Final verification

- [ ] **Step 1: Production build**

```bash
npm run build
```

Expected: completes with no errors. Inspect output for any warnings about unused imports introduced during refactoring.

- [ ] **Step 2: Manual viewport sweep**

Run dev server:

```bash
npm run dev
```

In a browser (Chrome DevTools device toolbar), check these viewports:

| Viewport | Pages to verify |
|---|---|
| 360px | Home (hero+avatar, featured stripe, post grid), Blog list (tag filter, post grid), Post detail (progress bar, TOC FAB, sheet open/close, back-to-top after 400px scroll) |
| 390px | Same as 360 (iPhone 14 width) |
| 768px | Verify `sm:` breakpoint kicks in (post grid becomes 2 columns, tags row shows long date format) |
| 1024px | Verify `lg:` shows desktop TOC sidebar, hero right-side avatar (240px) |
| 1440px | Full desktop, all sections render |

Also toggle dark mode on each viewport — verify no color regressions.

- [ ] **Step 3: If everything passes, no commit needed (this is verification only)**

If a regression is found, fix it as a follow-up task with its own commit.

---

## Self-Review (completed by author)

**Spec coverage:**
- §2 Tokens → Tasks 5, 7, 13, 14, 15, 16 (applied throughout) ✓
- §3 Header → Task 6 ✓
- §4 Hero → Task 14 ✓
- §5 Featured → Task 14 ✓
- §6 PostCard → Task 8 ✓
- §7.1 PostLayout container/heading → Task 13 ✓
- §7.2 ReadingProgress → Task 10, mounted in 13 ✓
- §7.3 MobileTOC → Task 12, mounted in 13 ✓
- §7.4 BackToTop → Task 11, mounted in 13 ✓
- §7.5 Desktop TOC unchanged → Task 4 (refactor with same behavior) ✓
- §7.6 SeriesNav → Task 9 ✓
- §8 Blog list → Task 15 ✓
- §9 Series/Tags → Task 16 ✓
- §10 Footer → Task 7 ✓
- §11 Globals → Task 5 ✓
- §12 New files map → Tasks 1, 2, 3, 10, 11, 12 (+ TagFilter added in 15) ✓
- §13 Component dependencies → Task 13 (PostLayout integration) ✓
- §14 Accessibility → Tasks 10 (role=progressbar), 11 (aria-label), 12 (dialog/aria-modal/Esc/focus order) ✓
- §15 Verification → Task 17 ✓

**No placeholders.** Every step includes the actual code or command.

**Type consistency.** `useActiveHeading(headings: Heading[])` and `useScrollProgress()` are referenced identically across TOC, MobileTOC, and ReadingProgress.

---

## Notes for the implementing agent

- **Commit style**: This repo uses Conventional Commits (`feat:`, `style:`, `refactor:`). No Co-Authored-By trailer (see user memory).
- **Trust strict mode**: This repo uses TypeScript strict; no `any`. If you reach for `any`, stop and find the proper type.
- **Don't introduce new dependencies.** All of this is doable with React + Tailwind primitives.
- **Don't touch tests.** No test framework is configured; verification is `typecheck` + `lint` + `build` + visual sweep.
- **If a task's exact `Edit` `old_string` doesn't match** (because someone else changed the file between this plan and execution), re-read the file and adapt rather than forcing the edit.
