# Blog Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 메인 페이지를 브랜딩 중심으로 재구성하고, 헤더/푸터/파비콘을 통일된 정체성(`sy/dev` + 픽셀 아바타)으로 갈아끼우며, Giscus 기반 댓글을 포스트 본문 하단에 추가한다.

**Architecture:** 데이터는 빌드 타임 `getAllPosts()`로 모두 정적 처리(RSC). 클라이언트 컴포넌트는 다크모드 토글이 필요한 `Header`(기존)와 IntersectionObserver/MutationObserver를 쓰는 신규 `Comments` 둘뿐. 소셜 링크는 Hero/Footer 공용 `SocialLinks` 컴포넌트로 DRY. 픽셀 아바타는 `next/image` + `image-rendering: pixelated`로 렌더, favicon은 Next.js App Router의 `icon.png`/`apple-icon.png` 컨벤션 사용.

**Tech Stack:** Next.js 15 (App Router) · React 19 · TypeScript strict · Tailwind CSS · MDX · Giscus (외부 위젯)

**Verification model:** 이 프로젝트는 단위 테스트 러너가 없다. CLAUDE.md 규칙대로 컴포넌트 변경 후 매번 `npm run typecheck`로 게이트하고, 마지막에 `npm run lint` + `npm run build`로 회귀를 막는다. 시각 검증은 `npm run dev` + 브라우저로 진행한다.

**Spec:** `docs/superpowers/specs/2026-05-10-blog-redesign-design.md`

---

## File Map

### Create
- `src/components/blog/SocialLinks.tsx` — Hero/Footer 공용 소셜 링크 (variant="hero"|"footer")
- `src/components/blog/Comments.tsx` — Giscus 클라이언트 컴포넌트 (lazy mount + 다크모드 동기화)
- `src/app/icon.png` — 32×32 favicon (avatar 다운스케일)
- `src/app/apple-icon.png` — 180×180 apple touch icon (avatar 다운스케일)

### Modify
- `src/app/page.tsx` — Hero 2단 재구성, Stats/Categories 제거, Series carousel
- `src/components/layout/Header.tsx` — 워드마크 `[avatar] sy/dev`로 교체
- `src/components/layout/Footer.tsx` — 3-column 확장 (EXPLORE / RECENT / CONNECT)
- `src/components/layout/PostLayout.tsx` — Tags 푸터 아래 Comments 섹션 추가
- `src/app/globals.css` — `.scrollbar-hide`, `.image-pixelated` 유틸 추가

### Untouched (참고용)
- `src/lib/posts.ts` — `getAllPosts()` 그대로 사용
- `public/images/avatar.png` — 이미 존재 (1024×1024)

---

## Task 1: Add CSS utilities (scrollbar-hide, image-pixelated)

여러 태스크가 이 두 클래스를 사용하므로 먼저 깔아둔다.

**Files:**
- Modify: `src/app/globals.css` (파일 끝에 추가)

- [ ] **Step 1: 유틸 추가**

`src/app/globals.css` 파일 끝에 다음을 추가:

```css

/* ─── Custom utilities ──────────────────────────── */
@layer utilities {
  /* 가로 스크롤 carousel용 — 스크롤바 숨김 */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* 픽셀 아바타가 모든 사이즈에서 선명하게 — bilinear 필터 비활성 */
  .image-pixelated {
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
  }
}
```

- [ ] **Step 2: typecheck**

Run: `npm run typecheck`
Expected: 에러 없음 (CSS 변경이라 타입엔 영향 없음, 단순 sanity check)

- [ ] **Step 3: 커밋**

```bash
git add src/app/globals.css
git commit -m "style: add scrollbar-hide and image-pixelated utilities"
```

---

## Task 2: Create SocialLinks component

Hero와 Footer가 공용으로 쓰는 단일 소스. variant 한 개로 두 사용처를 분기.

**Files:**
- Create: `src/components/blog/SocialLinks.tsx`

- [ ] **Step 1: 컴포넌트 작성**

`src/components/blog/SocialLinks.tsx`:

```tsx
type Variant = "hero" | "footer";

type Social = {
  id: "github" | "linkedin" | "email" | "rss";
  label: string;
  href: string;
  external: boolean;
  icon: React.ReactNode;
};

const SOCIALS: Social[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/seongyeon1",
    external: true,
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/seongyeon1/",
    external: true,
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:ksy974498@gmail.com",
    external: false,
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    id: "rss",
    label: "RSS",
    href: "/rss.xml",
    external: false,
    icon: (
      <svg className="h-4 w-4 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M3.429 5.1v3.193A12.514 12.514 0 0 1 15.857 20.7H19.05A15.6 15.6 0 0 0 3.429 5.1Zm0 6.385v3.193a6.13 6.13 0 0 1 6.043 6.022h3.193a9.323 9.323 0 0 0-9.236-9.215ZM5.554 17.45a2.121 2.121 0 1 0 .017 0Z" />
      </svg>
    ),
  },
];

const SocialLinks = ({ variant = "hero" }: { variant?: Variant }) => {
  if (variant === "footer") {
    return (
      <ul className="flex flex-col gap-2">
        {SOCIALS.map((s) => (
          <li key={s.id}>
            <a
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener noreferrer" : undefined}
              aria-label={s.label}
              className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {s.icon}
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {SOCIALS.map((s) => (
        <a
          key={s.id}
          href={s.href}
          target={s.external ? "_blank" : undefined}
          rel={s.external ? "noopener noreferrer" : undefined}
          aria-label={s.label}
          className="inline-flex items-center gap-2 rounded-full bg-white pl-4 pr-5 py-2 text-sm font-medium text-zinc-700 shadow-border transition-[box-shadow,scale] duration-150 ease-out-expo hover:shadow-border-hover active:scale-[0.96] dark:bg-zinc-900 dark:text-zinc-300"
        >
          {s.icon}
          {s.label}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
```

- [ ] **Step 2: typecheck**

Run: `npm run typecheck`
Expected: 에러 없음

- [ ] **Step 3: 커밋**

```bash
git add src/components/blog/SocialLinks.tsx
git commit -m "feat(blog): add SocialLinks component (hero/footer variants)"
```

---

## Task 3: Update Header — replace wordmark with [avatar] sy/dev

**Files:**
- Modify: `src/components/layout/Header.tsx` (현재 81–91 라인의 좌측 브랜드 블록만 교체)

- [ ] **Step 1: import 추가**

`src/components/layout/Header.tsx`의 상단 import 블록을 다음으로 교체:

```tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
```

- [ ] **Step 2: 좌측 브랜드 블록 교체**

`Header.tsx`에서 다음 블록(현재 좌측 로고/워드마크):

```tsx
<Link
  href="/"
  className="flex items-center gap-2.5 rounded-lg transition-transform duration-150 ease-out-expo active:scale-[0.96]"
>
  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 text-sm font-bold text-white shadow-border">
    AI
  </div>
  <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
    Tech Blog
  </span>
</Link>
```

를 다음으로 교체:

```tsx
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
```

- [ ] **Step 3: typecheck + lint**

Run: `npm run typecheck && npm run lint`
Expected: 에러 없음

- [ ] **Step 4: 시각 확인**

Run: `npm run dev`
Browser: `http://localhost:3000`
확인:
- 헤더 좌측에 32px 픽셀 아바타가 동그라미로 보임 (확대해도 픽셀 또렷)
- 워드마크가 `sy/dev`이고 `/dev` 부분이 primary 컬러
- 다크모드 토글했을 때 ring 색상이 변함

- [ ] **Step 5: 커밋**

```bash
git add src/components/layout/Header.tsx
git commit -m "feat(header): replace AI/Tech Blog wordmark with sy/dev + pixel avatar"
```

---

## Task 4: Generate favicon files (icon.png, apple-icon.png)

Next.js App Router는 `src/app/icon.png`/`apple-icon.png`가 있으면 자동으로 `<link rel="icon">` 헤드 태그를 생성한다. 별도 메타데이터 작성 불필요.

**Files:**
- Create: `src/app/icon.png` (32×32)
- Create: `src/app/apple-icon.png` (180×180)

- [ ] **Step 1: macOS sips로 다운스케일**

Run:
```bash
sips -Z 32 --setProperty format png /Users/sungyeon/Desktop/teddynote-lab/my-blog/public/images/avatar.png \
  --out /Users/sungyeon/Desktop/teddynote-lab/my-blog/src/app/icon.png

sips -Z 180 --setProperty format png /Users/sungyeon/Desktop/teddynote-lab/my-blog/public/images/avatar.png \
  --out /Users/sungyeon/Desktop/teddynote-lab/my-blog/src/app/apple-icon.png
```

Expected: 두 파일 생성, 크기 정보 출력

- [ ] **Step 2: 파일 검증**

Run:
```bash
file /Users/sungyeon/Desktop/teddynote-lab/my-blog/src/app/icon.png /Users/sungyeon/Desktop/teddynote-lab/my-blog/src/app/apple-icon.png
```

Expected:
- `icon.png: PNG image data, 32 x 32, ...`
- `apple-icon.png: PNG image data, 180 x 180, ...`

- [ ] **Step 3: 빌드로 자동 link 태그 생성 확인**

Run: `npm run build`
Expected: 빌드 성공. (Next.js가 빌드 시점에 icon 라우트 자동 등록)

- [ ] **Step 4: 시각 확인**

Run: `npm run dev`
Browser: `http://localhost:3000`
확인:
- 브라우저 탭의 favicon이 픽셀 아바타로 변경됨 (캐시 문제 시 강제 새로고침 또는 시크릿창)
- 페이지 소스에서 `<link rel="icon" href="/icon.png?...">` 보임

- [ ] **Step 5: 커밋**

```bash
git add src/app/icon.png src/app/apple-icon.png
git commit -m "feat(brand): add favicon and apple-icon from pixel avatar"
```

---

## Task 5: Rewrite Hero section in page.tsx (2-column with avatar)

여기서 Stats strip과 Categories 섹션도 함께 제거한다 (스펙 §5).

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: import 정리**

`src/app/page.tsx`의 상단 import 블록을 다음으로 교체:

```tsx
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import { getAllSeries } from "@/lib/series";
import PostCard from "@/components/blog/PostCard";
import CategoryBadge from "@/components/blog/CategoryBadge";
import TagBadge from "@/components/blog/TagBadge";
import SocialLinks from "@/components/blog/SocialLinks";
import type { Category } from "@/types/post";
```

(`getAllTags`, `GITHUB_URL` 상수, `StatCard` 컴포넌트 import/정의는 모두 제거 — 이후 단계에서 사용처가 사라짐)

- [ ] **Step 2: categoryMeta 유지하되 사용처 정리**

`categoryMeta` 객체는 Featured Post의 우측 비주얼에서 여전히 사용하므로 그대로 둔다. `formatDate` 헬퍼도 유지.

- [ ] **Step 3: HomePage 본문에서 미사용 변수 제거**

`HomePage` 함수의 변수 선언부를 다음으로 교체:

```tsx
const HomePage = () => {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 7);
  const series = getAllSeries();

  const featuredMeta = featuredPost ? categoryMeta[featuredPost.category] : null;
```

(`tagsMap`, `tags`, `totalTags`, `categoryCounts`는 사용처가 사라지므로 모두 제거)

- [ ] **Step 4: Hero 섹션 교체**

기존 Hero `<section>` (현재 72–119 라인)을 다음으로 교체:

```tsx
{/* Hero */}
<section className="relative pt-20 pb-16 sm:pt-28 sm:pb-20">
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-40 right-0 h-72 w-72 rounded-full bg-primary-400/10 blur-3xl dark:bg-primary-600/10" />
    <div className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-primary-300/10 blur-3xl dark:bg-primary-500/10" />
  </div>
  <div className="grid animate-fade-in-up items-center gap-10 lg:grid-cols-[1fr_240px]">
    {/* Left: text */}
    <div>
      <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-primary-600 dark:text-primary-400">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-500" />
        </span>
        SeongYeon · AI Engineer
      </p>
      <h1 className="mb-6 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
        AI 엔지니어 SeongYeon의
        <br />
        <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-cyan-400 bg-clip-text text-transparent dark:from-primary-400 dark:via-primary-300 dark:to-cyan-300">
          학습 노트
        </span>
      </h1>
      <p className="max-w-xl text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        LLM · 논문 리뷰 · 프로젝트 회고를 쓰고 공유합니다.
      </p>

      {featuredPost && (
        <Link
          href={`/blog/${featuredPost.slug}`}
          className="group mt-6 inline-flex max-w-xl items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm shadow-border transition-[box-shadow,transform] duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-border-hover dark:bg-zinc-900"
        >
          <span className="text-base">📍</span>
          <span className="text-zinc-500 dark:text-zinc-400">Now ·</span>
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

    {/* Right: avatar — hidden on mobile */}
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
```

- [ ] **Step 5: Stats strip 섹션 제거**

기존 `{/* Stats strip */}` `<section>`을 통째로 삭제 (현재 121–129 라인 근처).

- [ ] **Step 6: Categories 섹션 제거**

기존 `{/* Categories */}` `<section>`을 통째로 삭제 (현재 203–235 라인 근처).

- [ ] **Step 7: typecheck + lint**

Run: `npm run typecheck && npm run lint`
Expected: 에러 없음. 사용하지 않는 import가 남아 있으면 lint 경고 — 모두 제거할 것.

- [ ] **Step 8: 시각 확인**

Run: `npm run dev`
Browser: `http://localhost:3000`
확인:
- Hero 좌측에 텍스트, 우측에 240px 픽셀 아바타 (lg 이상)
- 모바일 폭에서는 아바타 숨겨짐 (Chrome DevTools로 360px 확인)
- "📍 Now ·" 박스에 최근 포스트 제목이 들어가고 클릭 시 포스트 페이지로 이동
- GitHub/LinkedIn/Email/RSS 4개 칩이 한 줄로 보임 (좁아지면 wrap)
- Stats / Categories 섹션이 사라짐
- Featured Post → Series → Recent Posts 순서로 이어짐

- [ ] **Step 9: 커밋**

```bash
git add src/app/page.tsx
git commit -m "feat(home): rebuild hero with avatar+now+socials, drop stats and categories"
```

---

## Task 6: Convert Series section to horizontal carousel

**Files:**
- Modify: `src/app/page.tsx` (Series `<section>` 내부)

- [ ] **Step 1: Series 그리드를 carousel로 교체**

`page.tsx`에서 다음 블록(현재 Series 섹션의 `grid` 컨테이너):

```tsx
<div className="grid gap-4 sm:grid-cols-2">
  {series.map((s) => (
    <Link
      key={s.name}
      href={`/series/${encodeURIComponent(s.name)}`}
      className="group rounded-2xl bg-white p-6 shadow-border transition-[box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-border-hover dark:bg-zinc-900"
    >
      ...
    </Link>
  ))}
</div>
```

를 다음으로 교체 (Link 내부 마크업은 유지, 외부 컨테이너만 변경, 카드에 폭 고정 클래스 추가):

```tsx
<div className="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2">
  {series.map((s) => (
    <Link
      key={s.name}
      href={`/series/${encodeURIComponent(s.name)}`}
      className="group w-[280px] shrink-0 snap-start rounded-2xl bg-white p-6 shadow-border transition-[box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-border-hover dark:bg-zinc-900"
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
```

핵심 변경점:
- `grid sm:grid-cols-2` → `flex overflow-x-auto snap-x snap-mandatory scrollbar-hide`
- `-mx-6 px-6` 로 컨테이너 좌우 패딩을 상쇄해 화면 끝까지 스크롤 가능
- 카드에 `w-[280px] shrink-0 snap-start` 추가

- [ ] **Step 2: typecheck**

Run: `npm run typecheck`
Expected: 에러 없음

- [ ] **Step 3: 시각 확인**

Run: `npm run dev`
Browser: `http://localhost:3000`
확인:
- Series 섹션이 가로 스크롤 carousel로 보임
- 시리즈가 5개 이상이면 우측이 잘리고 스크롤 가능
- 스크롤바 숨겨짐
- snap 동작 확인 (마우스 휠 + Shift 또는 트랙패드 가로 스와이프)

- [ ] **Step 4: 커밋**

```bash
git add src/app/page.tsx
git commit -m "feat(home): convert series section to horizontal snap carousel"
```

---

## Task 7: Expand Footer to 3-column (EXPLORE / RECENT / CONNECT)

**Files:**
- Modify: `src/components/layout/Footer.tsx` (전면 교체)

- [ ] **Step 1: Footer 전면 교체**

`src/components/layout/Footer.tsx` 전체를 다음으로 교체:

```tsx
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import SocialLinks from "@/components/blog/SocialLinks";

const ColumnHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
    {children}
  </h3>
);

const Footer = () => {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <footer className="mt-20 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/images/avatar.png"
                alt=""
                width={32}
                height={32}
                className="image-pixelated h-8 w-8 rounded-full ring-1 ring-zinc-200/70 dark:ring-zinc-700/70"
              />
              <span className="font-mono text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                sy<span className="text-primary-600 dark:text-primary-400">/dev</span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              AI 엔지니어 SeongYeon의 학습 노트.
            </p>
          </div>

          {/* Explore + Recent in one column on small, two on sm+ */}
          <div>
            <ColumnHeading>Explore</ColumnHeading>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/blog" className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/series" className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                  Series
                </Link>
              </li>
              <li>
                <Link href="/tags" className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                  Tags
                </Link>
              </li>
            </ul>

            {recentPosts.length > 0 && (
              <>
                <ColumnHeading>
                  <span className="mt-8 block">Recent</span>
                </ColumnHeading>
                <ul className="flex flex-col gap-2">
                  {recentPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="line-clamp-1 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                      >
                        · {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Connect */}
          <div>
            <ColumnHeading>Connect</ColumnHeading>
            <SocialLinks variant="footer" />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-zinc-100 pt-6 sm:flex-row dark:border-zinc-800/50">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} SeongYeon · Built with Next.js
          </p>
          <a
            href="/rss.xml"
            className="text-xs text-zinc-400 transition-colors hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
          >
            RSS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

- [ ] **Step 2: typecheck + lint**

Run: `npm run typecheck && npm run lint`
Expected: 에러 없음

- [ ] **Step 3: 시각 확인**

Run: `npm run dev`
Browser: `http://localhost:3000`
스크롤을 끝까지 내려서 확인:
- 푸터가 3-column (Brand / Explore+Recent / Connect)
- Recent에 최신 3개 포스트 제목이 한 줄씩 표시되고 클릭 시 해당 포스트로 이동
- Connect 섹션에 GitHub/LinkedIn/Email/RSS 4개가 세로 정렬
- 모바일 폭 (Chrome DevTools 360px)에서는 1-column 스택

- [ ] **Step 4: 커밋**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat(footer): expand to 3-column with brand, recent posts, social links"
```

---

## Task 8: Create Comments component (Giscus, lazy + theme sync)

스펙 §10. 클라이언트 컴포넌트, IntersectionObserver로 lazy mount, MutationObserver로 다크모드 동기화.

**Files:**
- Create: `src/components/blog/Comments.tsx`

- [ ] **Step 1: 컴포넌트 작성**

`src/components/blog/Comments.tsx`:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

const GISCUS_REPO = "seongyeon1/seongyeon1.github.io";
const GISCUS_REPO_ID = "R_kgDOSX5tLA";
const GISCUS_CATEGORY = "Announcements";
const GISCUS_CATEGORY_ID = "DIC_kwDOSX5tLM4C8sKD";
const GISCUS_ORIGIN = "https://giscus.app";

const resolveTheme = () =>
  document.documentElement.classList.contains("dark") ? "dark_dimmed" : "light";

const Comments = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = useState(false);

  // Lazy mount when user scrolls within 200px of the container.
  useEffect(() => {
    const node = containerRef.current;
    if (!node || shouldMount) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldMount]);

  // Inject Giscus script once mounted, with the current theme.
  useEffect(() => {
    if (!shouldMount || !containerRef.current) return;
    const node = containerRef.current;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", GISCUS_REPO);
    script.setAttribute("data-repo-id", GISCUS_REPO_ID);
    script.setAttribute("data-category", GISCUS_CATEGORY);
    script.setAttribute("data-category-id", GISCUS_CATEGORY_ID);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-lang", "ko");
    script.setAttribute("data-loading", "lazy");
    script.setAttribute("data-theme", resolveTheme());
    node.appendChild(script);

    return () => {
      node.innerHTML = "";
    };
  }, [shouldMount]);

  // Sync theme on <html class="dark"> changes.
  useEffect(() => {
    if (!shouldMount) return;

    const sync = () => {
      const iframe = document.querySelector<HTMLIFrameElement>("iframe.giscus-frame");
      if (!iframe?.contentWindow) return;
      iframe.contentWindow.postMessage(
        { giscus: { setConfig: { theme: resolveTheme() } } },
        GISCUS_ORIGIN
      );
    };

    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, [shouldMount]);

  return <div ref={containerRef} className="giscus min-h-[200px]" />;
};

export default Comments;
```

설계 메모:
- `shouldMount` state로 IntersectionObserver와 script 주입을 분리. 첫 effect는 관찰만, 두번째 effect는 부착만.
- cleanup에서 `node.innerHTML = ""`로 script + iframe 제거 (StrictMode 이중 mount 방어).
- 초기 theme은 `resolveTheme()`로 mount 시점 1회 동기화. 이후 변화는 MutationObserver가 처리.
- `min-h-[200px]`로 lazy mount 트리거가 너무 빠르지 않게 placeholder 높이 확보.

- [ ] **Step 2: typecheck + lint**

Run: `npm run typecheck && npm run lint`
Expected: 에러 없음. (이 시점에서 Comments는 아직 import되지 않으므로 unused 경고는 없음)

- [ ] **Step 3: 커밋**

```bash
git add src/components/blog/Comments.tsx
git commit -m "feat(comments): add Giscus client component with lazy mount and theme sync"
```

---

## Task 9: Mount Comments in PostLayout

**Files:**
- Modify: `src/components/layout/PostLayout.tsx`

- [ ] **Step 1: import 추가**

`PostLayout.tsx` 상단 import 블록에 추가:

```tsx
import Comments from "@/components/blog/Comments";
```

- [ ] **Step 2: Comments 섹션 추가**

`PostLayout.tsx`의 `<footer>` (Tags 블록) 닫는 태그 `</footer>` 바로 아래, `</article>` 닫는 태그 위에 다음을 추가:

```tsx
        <section className="mt-16 border-t border-zinc-200/60 pt-8 dark:border-zinc-800/60">
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Comments
          </h2>
          <Comments />
        </section>
```

이후 마크업 구조:

```tsx
        <footer className="mt-16 border-t border-zinc-200/60 pt-8 dark:border-zinc-800/60">
          ...tags...
        </footer>

        <section className="mt-16 border-t border-zinc-200/60 pt-8 dark:border-zinc-800/60">
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Comments
          </h2>
          <Comments />
        </section>
      </article>
```

- [ ] **Step 3: typecheck + lint**

Run: `npm run typecheck && npm run lint`
Expected: 에러 없음

- [ ] **Step 4: 시각 확인 (가장 중요)**

Run: `npm run dev`
Browser: 아무 포스트 진입 (예: `http://localhost:3000/blog/2026-04-30-seismic-sparse-retrieval`)

확인:
1. **lazy mount 동작**: 페이지 진입 직후 DevTools Network 탭을 열어 `client.js`가 즉시 안 뜨는지 확인. Tags 섹션 근처까지 스크롤하면 그제서야 `client.js` + `giscus.app` iframe이 로드됨.
2. **댓글 영역 렌더**: "Sign in with GitHub to comment" 폼이 보임.
3. **다크모드 동기화**: 헤더의 다크모드 토글을 누르면 Giscus iframe이 `dark_dimmed`로 즉시 전환되고, 다시 누르면 `light`로 복귀.
4. **다른 포스트 진입**: 두 번째 포스트로 이동했을 때 별도의 토론으로 잡힘 (URL pathname이 다르므로).
5. **테스트 댓글 작성** (선택): GitHub 로그인 후 댓글 1개 작성 → `seongyeon1/seongyeon1.github.io`의 Discussions → Announcements 카테고리에 새 토론이 자동 생성됐는지 확인.

문제 발생 시:
- iframe 안 뜸 → DevTools Console에서 Giscus 에러 메시지 확인 (보통 "repo not found" 또는 "category not found" — 그러면 ID가 틀림)
- 다크모드 동기화 안 됨 → `MutationObserver` 가 attach됐는지 확인. iframe 셀렉터 `iframe.giscus-frame`가 일치하는지 확인.

- [ ] **Step 5: 커밋**

```bash
git add src/components/layout/PostLayout.tsx
git commit -m "feat(post): mount Giscus comments below tags footer"
```

---

## Task 10: Final regression check

전체 플로우가 깨지지 않았는지 확인하고 PR-ready 상태로 만든다.

**Files:** none

- [ ] **Step 1: lint**

Run: `npm run lint`
Expected: 0 errors, 0 warnings

- [ ] **Step 2: typecheck**

Run: `npm run typecheck`
Expected: 에러 없음

- [ ] **Step 3: production build**

Run: `npm run build`
Expected: 빌드 성공. 모든 라우트가 SSG로 prerender됨. icon/apple-icon이 자동 라우트로 등록되는 로그가 보임.

- [ ] **Step 4: 정상 동작 마지막 확인**

Run: `npm run start`
Browser: `http://localhost:3000`
점검 체크리스트:
- [ ] 헤더: `[avatar] sy/dev` 워드마크
- [ ] 탭 favicon: 픽셀 아바타
- [ ] Hero: 좌측 텍스트 + 우측 240px 아바타 (lg+)
- [ ] Hero "📍 Now ·" 박스에 최신 포스트 제목, 클릭 → 해당 포스트
- [ ] 소셜 칩 4개 (GitHub/LinkedIn/Email/RSS)
- [ ] Stats / Categories 섹션 없음
- [ ] Featured Post 카드 정상
- [ ] Series 가로 스크롤 carousel
- [ ] Recent Posts 그리드 정상
- [ ] Footer: Brand / Explore+Recent / Connect 3-column, 모바일에서 스택
- [ ] 포스트 진입 → Tags 아래 Comments 섹션, lazy 로드, 다크모드 동기화
- [ ] 다크모드 토글 시 모든 섹션이 일관된 다크 팔레트

- [ ] **Step 5: 최종 커밋(없으면 스킵)**

추가 변경이 있으면:

```bash
git add -A
git commit -m "chore: final regression fixes after blog redesign"
```

없으면 다음 단계로.

---

## Self-Review Notes

(작성자 본인 확인 — 이 섹션은 실행 시 무시)

- ✅ 스펙 §4 Brand identity: Task 3 (header), Task 4 (favicon), Task 5 (hero), Task 7 (footer)에서 모두 사용
- ✅ 스펙 §5 IA: Task 5에서 Stats/Categories 제거, Task 6에서 Series carousel
- ✅ 스펙 §6 Header: Task 3
- ✅ 스펙 §7 Footer: Task 7
- ✅ 스펙 §8 SocialLinks: Task 2 (정의), Task 5/7 (사용)
- ✅ 스펙 §9 Favicon: Task 4
- ✅ 스펙 §10 Comments: Task 8 (정의), Task 9 (마운트)
- ✅ 스펙 §11 Data flow: page.tsx + Footer.tsx 모두 RSC에서 `getAllPosts()` 호출 (Task 5/7)
- ✅ 스펙 §13 Edge cases: Task 5에서 `featuredPost` undefined 시 Now 라인 미렌더, Task 7에서 `recentPosts.length > 0` 가드
- ✅ 스펙 §14 Acceptance criteria: Task 10 체크리스트로 매핑

타입/시그니처 일관성:
- `SocialLinks`의 `variant` prop: Task 2 정의 = `"hero" | "footer"`, Task 5/7 사용 일치
- `GISCUS_*` 상수명: Task 8에서 정의된 그대로 사용, 외부 노출 없음
- `categoryMeta` / `formatDate`: Task 5 Step 2에서 유지됨을 명시 (Featured 섹션에서 계속 사용)

Placeholder 스캔: 없음. 모든 코드 블록 완성, 모든 명령 구체.
