# Mobile UI Improvements — Design Spec

**Date**: 2026-05-18
**Status**: Approved (pending implementation)
**Scope**: Mobile-first redesign across all pages + must-have mobile UX additions, with companion desktop improvements where structural changes apply.

---

## 1. Goals & Non-Goals

### Goals
- Resolve "답답함" on mobile across all primary pages (Home, Blog list, Post detail, Series, Tags).
- Tighten spacing/typography for mobile while preserving the current Vercel-inspired aesthetic.
- Restructure card components (Featured, PostCard) so meta rows fit a 375px viewport cleanly.
- Add missing mobile UX primitives: TOC bottom sheet, reading progress bar, back-to-top FAB.
- Improve desktop incidentally where structural changes (token system, card meta layout) help.

### Non-Goals
- Visual identity refresh (colors, fonts, brand stay the same).
- New navigation paradigm (no bottom nav, no swipe gestures).
- Performance / bundle work (out of scope).
- Content / copy changes.
- New page templates.

---

## 2. Design Tokens (mobile-first)

The blog currently uses single-value spacing/typography; this spec introduces an explicit mobile-first scale.

| Token | Current | New |
|---|---|---|
| Container x-padding | `px-6` | `px-5 sm:px-6 lg:px-8` |
| Hero h1 size | `text-4xl sm:text-5xl lg:text-6xl` | `text-[32px] sm:text-5xl lg:text-6xl` + `leading-[1.15]` |
| Hero body p | `text-lg` | `text-base sm:text-lg` |
| Section top padding | `pt-20 sm:pt-28` | `pt-12 sm:pt-20 lg:pt-28` |
| Section mb | `mb-20` | `mb-14 sm:mb-20` |
| Card inner padding | `p-6` | `p-5 sm:p-6` |
| Card grid gap | `gap-5` | `gap-4 sm:gap-5` |
| prose h2 mt | `mt-12` | `mt-10 sm:mt-12` |
| prose p line-height | `leading-[1.8]` | `leading-[1.75] sm:leading-[1.8]` |
| PostLayout container py | `py-10` | `py-6 sm:py-10` |
| Footer top mt | `mt-20` | `mt-14 sm:mt-20` |
| Code block font-size | `text-[13px]` | `text-[12.5px] sm:text-[13px]` |

**Principle**: one tick smaller on mobile, current value at `sm` (640px) and above. `lg` unchanged.

---

## 3. Header

**File**: `src/components/layout/Header.tsx`

Current behavior is acceptable. Targeted polish only:

- Mobile menu item padding: `py-3` → `py-3.5` (larger tap targets).
- Add a 1px divider between dark-mode toggle and hamburger on mobile (mirrors desktop's `h-5 w-px` divider).
- No structural changes.

---

## 4. Hero (Home page)

**File**: `src/app/page.tsx`

**Selected variant: B — text + small avatar on mobile**

Changes:
- Show 64×64 avatar on mobile (currently `hidden lg:block`). Position: top-right of the text block via flex layout.
- h1 mobile: `text-[30px]` with `leading-[1.15]`, breaks intentionally into 3 lines ("AI 엔지니어 / SeongYeon의 / 학습 노트").
- Body p: `text-base sm:text-lg`.
- Hero section padding: `pt-12 sm:pt-20 lg:pt-28` and bottom padding scaled similarly.
- Desktop: keep 240×240 right-side avatar exactly as today (no regression).

**Layout (mobile)**:
```
┌──────────────────────────────┐
│ ● SeongYeon · AI Engineer    │
│                              │
│ AI 엔지니어        [avatar] │
│ SeongYeon의        64×64   │
│ <gradient>학습 노트</gradient> │
│                              │
│ LLM · 논문 리뷰 · …          │
│ ┌────────────────────────┐  │
│ │ 📍 Now · …             │  │
│ └────────────────────────┘  │
│ [🔗] [📧] [🐙]               │
└──────────────────────────────┘
```

---

## 5. Featured Card

**File**: `src/app/page.tsx` (inline) — extract to component is **out of scope** for this spec.

Changes:
- Add gradient stripe (h-1.5, primary→cyan) at the top of the card on mobile. The desktop right-side visual stays as-is.
- Inner padding: `p-8 sm:p-10 lg:p-12` → `p-5 sm:p-8 lg:p-10`.
- Title size: `text-2xl sm:text-3xl` → `text-[22px] sm:text-3xl`.
- Tags slice: 5 → 3 on mobile. Implement via pure CSS — render all 5 tags but mark the 4th and 5th with `hidden sm:inline-flex` so they only appear at `sm:` and above. Avoids a hydration mismatch from `useMediaQuery`-style runtime checks.
- Series badge: move from the top badge row to an inline meta line below tags (e.g., `Series · Git Workflow · #2/5`) to reduce top-row wrapping.
- Date format: render short variant on mobile via a small util (`formatDateShort` → `MM.DD`).
- "Read more →" → "Read →" on mobile.

---

## 6. PostCard

**File**: `src/components/blog/PostCard.tsx`

Current problem: `CategoryBadge + 📅 date + ⏱ time` row wraps to 2 lines on most viewports.

Changes:
- Meta row layout: `[Badge] [·] [date] [·] [time]` using thin dot separators (`w-[3px] h-[3px] rounded-full bg-zinc-300`).
- Render date in short form (`MM.DD`) on mobile, full form on `sm:` and above.
- Header strip: `h-1.5` → `h-1 sm:h-1.5`.
- Inner padding: `p-6` → `p-5 sm:p-6`.
- Title: `text-lg` → `text-[17px] sm:text-lg`, add `tracking-tight`.
- No changes to summary/tags structure (already responsive).

---

## 7. PostLayout (post detail)

**File**: `src/components/layout/PostLayout.tsx` plus new mobile components.

### 7.1 Container/heading

- Outer: `py-10` → `py-6 sm:py-10`.
- Breadcrumb: `text-sm` → `text-xs sm:text-sm`; truncate last segment with `truncate` and `min-w-0`.
- h1: `text-3xl sm:text-4xl` → `text-[26px] sm:text-3xl md:text-4xl` with tighter tracking.
- Summary p: `text-lg` → `text-base sm:text-lg`.

### 7.2 Reading progress bar (new)

**New component**: `src/components/blog/ReadingProgress.tsx` (`"use client"`).

- Fixed at top of viewport: `fixed top-0 left-0 right-0 h-[2px] z-[60]`.
- Gradient fill: `bg-gradient-to-r from-primary-500 to-primary-400`.
- Width tracked via scroll position: `width: ${(scrollTop / (docHeight - winHeight)) * 100}%`.
- Sits above sticky header (Header z-index is 50; progress bar uses 60).
- Mounted in PostLayout only (not on list/index pages) to keep it scoped.
- Mobile only: `sm:hidden` (desktop has the TOC sidebar with its own progress indicator).

### 7.3 Mobile TOC bottom sheet (new)

**New component**: `src/components/blog/MobileTOC.tsx` (`"use client"`).

- Reuses `IntersectionObserver` logic from existing `TOC` component (extract shared hook to `src/lib/useActiveHeading.ts` to avoid duplication).
- Floating action button: fixed bottom-right, `bottom-6 right-4 w-14 h-14`, dark surface (`bg-zinc-900 dark:bg-zinc-100`) with rounded-full and shadow.
- FAB shows a small `primary-500` dot (top-right corner, ring-2 white/dark) when there's an active heading.
- On tap: open bottom sheet (`fixed inset-x-0 bottom-0` with `translate-y` transition).
  - Backdrop: `bg-black/40 backdrop-blur-sm` covering rest of viewport.
  - Sheet: `rounded-t-3xl bg-white dark:bg-zinc-900`, `max-h-[65vh]`, `overflow-y-auto`, `px-6 pt-3 pb-7`.
  - Drag handle: `w-9 h-1 rounded-full bg-zinc-300` centered.
  - Header row: "On this page" label + close button.
  - Mini progress bar inside the sheet (re-derives scroll position locally via the same `useScrollProgress` hook — see §12).
  - Heading list: same structure as desktop TOC.
  - Closing on backdrop tap, close button tap, or heading link tap.
- Visible only on mobile (`sm:hidden`).
- Hidden if `headings.length === 0`.

### 7.4 Back-to-top FAB (new)

**New component**: `src/components/blog/BackToTop.tsx` (`"use client"`).

- Fixed bottom-right, `bottom-[5.5rem] right-4 w-12 h-12` (sits above TOC FAB).
- White surface (`bg-white dark:bg-zinc-800`) with shadow.
- Visible when `window.scrollY > 400`, otherwise hidden with opacity+translate transition.
- Tap: `window.scrollTo({ top: 0, behavior: "smooth" })`.
- Mobile only (`sm:hidden`). Desktop has the TOC sidebar that anchors all positions; FAB unnecessary.
- Mounted in PostLayout alongside MobileTOC + ReadingProgress.

### 7.5 Desktop TOC

No change. `src/components/blog/TOC.tsx` continues to render in the right sidebar at `lg:` and above.

### 7.6 SeriesNav

**File**: `src/components/blog/SeriesNav.tsx`

- On mobile, ensure prev/next buttons stack vertically if labels are long. Add `min-w-0` and `truncate` to inner label text.
- No structural changes.

---

## 8. Blog list page (`/blog`)

**File**: `src/app/blog/page.tsx`

- Container py: `py-10` → `py-6 sm:py-10`.
- Header h1: `text-3xl` → `text-[26px] sm:text-3xl`.
- Tag filter section: when `tags.length > 12`, wrap in a `max-h-32 overflow-hidden` container that expands via "Show more" toggle (`useState`). For ≤12 tags, behave as today.
- Card grid gap: `gap-5` → `gap-4 sm:gap-5`.

---

## 9. Series & Tags pages

- `/series` and `/series/[name]` (`src/app/series/`): inherit token changes; no component-specific work needed.
- `/tags/[tag]` (`src/app/tags/[tag]/`): inherits PostCard updates; no extra work.

---

## 10. Footer

**File**: `src/components/layout/Footer.tsx`

- Outer mt: `mt-20` → `mt-14 sm:mt-20`.
- Inner py: `py-14` → `py-10 sm:py-14`.
- No structural changes.

---

## 11. Globals (CSS)

**File**: `src/app/globals.css`

- `prose p`: `leading-[1.8]` → use responsive override:
  ```css
  .prose p { @apply leading-[1.75] sm:leading-[1.8]; }
  ```
  (and `.prose li` to match)
- Code block font-size: introduce mobile override
  ```css
  [data-rehype-pretty-code-figure] code {
    @apply text-[12.5px] leading-relaxed sm:text-[13px];
  }
  ```
- No other CSS changes. Animations, scrollbars, prose blockquote stay as-is.

---

## 12. New files / new exports

| Path | Purpose |
|---|---|
| `src/components/blog/MobileTOC.tsx` | Floating button + bottom sheet TOC for mobile |
| `src/components/blog/ReadingProgress.tsx` | Top-edge scroll progress bar (mobile only) |
| `src/components/blog/BackToTop.tsx` | Floating back-to-top button (mobile only) |
| `src/lib/useActiveHeading.ts` | Shared hook extracting IntersectionObserver logic from `TOC.tsx`. Consumed by both `TOC` and `MobileTOC`. |
| `src/lib/useScrollProgress.ts` | Shared hook returning current scroll progress (0–100). Consumed by `ReadingProgress` and `MobileTOC` (for the mini bar inside the sheet). |
| `src/lib/date.ts` (existing) | Add `formatDateShort(iso): string` returning `MM.DD` in Asia/Seoul. Existing `formatDateTime` unchanged. |

`TOC.tsx` (desktop) is refactored to consume `useActiveHeading`. No behavior change.

---

## 13. Component dependencies & integration

`PostLayout.tsx` becomes:

```
<PostLayout>
  <ReadingProgress />              ← new, sm:hidden
  <article>
    {breadcrumb}
    {header (with tighter mobile sizes)}
    {SeriesNav?}
    <div lg:flex lg:gap-12>
      <prose>{children}</prose>
      <aside lg:block>             ← desktop TOC unchanged
        <TOC headings={headings} />
      </aside>
    </div>
    {tags footer}
    {Comments}
  </article>
  <BackToTop />                    ← new, sm:hidden
  <MobileTOC headings={headings} /> ← new, sm:hidden
</PostLayout>
```

Z-index map (mobile additions, no conflicts with Header `z-50` since FABs occupy bottom):
- `z-40` — MobileTOC FAB (`fixed bottom-6 right-4 w-14 h-14`)
- `z-40` — BackToTop FAB (`fixed bottom-[5.5rem] right-4 w-12 h-12`, visually above TOC FAB by position, not z-stack)
- `z-50` — MobileTOC sheet + backdrop when open (overlays header)
- `z-[60]` — ReadingProgress (top edge, above the open sheet so it's always visible)

---

## 14. Accessibility

- TOC FAB / Back-to-top FAB: `aria-label`, `aria-expanded` (for TOC), `aria-controls` pointing to sheet id.
- Bottom sheet: `role="dialog"`, `aria-modal="true"`, traps focus while open; `Esc` key closes.
- Reading progress: `role="progressbar"` with `aria-valuenow` updates throttled to avoid AT spam.
- All new interactive elements: minimum 44×44 tap target on mobile.

---

## 15. Verification

After implementation:
1. `npm run typecheck` and `npm run lint` clean.
2. `npm run build` succeeds.
3. Manual viewport check at 360 / 390 / 414 / 768 / 1024 / 1440:
   - Home: hero layout, featured card stripe, post grid.
   - Post detail: progress bar, TOC FAB appears/disappears, sheet opens/closes, back-to-top appears past 400px.
   - Blog list: tag filter "Show more" toggle when tag count > 12.
4. Dark mode parity across all the above.

---

## 16. Out of scope (deferred)

- Extracting Featured card into its own component.
- Tag autocomplete / search.
- Bottom navigation pattern.
- Image lightbox / zoom on mobile.
- Comments component (Giscus) styling pass.
- Performance/bundle audit.
