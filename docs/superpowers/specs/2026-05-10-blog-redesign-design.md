# Blog Redesign — Branding, Footer, Favicon, Comments

- **Date**: 2026-05-10
- **Owner**: SeongYeon (sung@brain-crew.com)
- **Status**: Draft (awaiting user review)

## 1. Goal

브랜딩(저자가 누구인지)을 메인 페이지의 1순위 시그널로 끌어올리고, 헤더/푸터/파비콘을 동일한 정체성으로 통일하며, 포스트 본문 하단에 댓글 기능을 추가한다.

부가 목표:

- 메인 페이지에서 메타적/장식적 섹션을 제거해 "내가 누구인지 → 어떤 글을 쓰는지" 두 단계로 단순화한다.
- 외부 의존을 늘리지 않는다. 댓글은 정적 사이트에 잘 맞는 GitHub Discussions 기반 위젯(Giscus)을 사용한다.

## 2. Scope

In:

- `src/app/page.tsx` 메인 페이지 재구성
- `src/components/layout/Header.tsx` 워드마크 교체
- `src/components/layout/Footer.tsx` 3-컬럼 확장
- `src/app/icon.png` / `apple-icon.png` 추가 (favicon)
- `src/components/blog/Comments.tsx` 신규 (Giscus)
- `src/components/layout/PostLayout.tsx` 댓글 마운트
- `src/components/blog/SocialLinks.tsx` 신규 (Hero/Footer 공용)
- `public/images/avatar.png` (이미 존재)

Out:

- 색상 팔레트 / 폰트 시스템 변경 (Pretendard + JetBrains Mono 유지)
- 다크모드 토글 동작 (그대로)
- 포스트 카드(`PostCard`), 시리즈 페이지, 태그 페이지 (그대로)
- 메인 페이지 외 다른 페이지의 Hero (변경 없음)

## 3. Non-Goals

- 검색, 좋아요, 조회수 같은 신규 동적 기능
- 인증·DB 도입
- 다국어

## 4. Brand Identity

| Token | Value |
| --- | --- |
| Wordmark | `sy/dev` (`/dev`만 primary 컬러 액센트) |
| Avatar | `public/images/avatar.png` (1024×1024 픽셀아트) |
| Favicon source | 같은 avatar.png를 다운스케일 |
| Wordmark font | JetBrains Mono (이미 로드됨, `var(--font-jetbrains)`) |
| Pixel rendering | `image-rendering: pixelated` (모든 사이즈에서 픽셀감 보존) |

## 5. Information Architecture — Main Page

Before:

```
Hero (작은) → Stats(4) → Featured → Categories(4) → Series(grid) → Recent(grid)
```

After:

```
Hero (크고 2단, 아바타 + Now + 소셜)
  ↓
Featured Post (현행 매거진 레이아웃 유지)
  ↓
Series (가로 스크롤 carousel)
  ↓
Recent Posts (현행 2-col grid 유지)
```

제거 대상: Stats strip, Categories.
압축 대상: Series → carousel.

### 5.1 Hero (구체)

레이아웃: 데스크탑 `grid lg:grid-cols-[1fr_240px]`, 모바일 단일 컬럼(아바타 상단).

좌측 (텍스트 컬럼):

1. 살아있음 점 + `SeongYeon · AI Engineer` 라벨 (현행 유지)
2. h1 그래디언트 타이틀 (현행 유지)
3. 한 줄 설명 (현행 유지)
4. **Now 라인** — `📍 Now: 최근엔 "<latest post title>"에 대해 쓰고 있습니다 →` 클릭 시 해당 포스트로 이동
5. **소셜 칩 4개**: GitHub / LinkedIn / Email / RSS

우측 (아바타 컬럼, 모바일 hidden):

- 240px 정사각형 아바타, `rounded-full` 마스크
- `image-rendering: pixelated`
- 외곽: 미세한 ring (light: zinc-200/60, dark: zinc-700/60) + soft glow (primary-400/20 → blur-3xl)

### 5.2 Now 도출 규칙

`src/lib/posts.ts`의 `getAllPosts()` 첫 항목을 사용. 데이터가 없을 때(엣지 케이스): Now 라인 자체를 렌더링하지 않는다.

### 5.3 Series Carousel

- 컨테이너: `flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4`
- 카드: 폭 280px 고정, `snap-start`, `shrink-0`
- 카드 내부 디자인: 현행 `Series` 카드와 동일 (재사용)
- 우상단 "View all →" 링크 유지

## 6. Header

```
[avatar 28px round] sy/dev          Blog  Series  ┊  🌙
```

- "AI" 그래디언트 칩 제거
- 28px 원형 아바타 + 워드마크 `<span>sy</span><span class="text-primary-...">/dev</span>`
- 워드마크 폰트는 JetBrains Mono
- 모바일 메뉴/스크롤 백드롭 동작 그대로

## 7. Footer

3-column 그리드(`sm:grid-cols-[1.2fr_1fr_1fr]`), 모바일에서는 스택.

```
┌──────────────────────────────────────────────────────────────┐
│  [avatar] sy/dev                                              │
│  AI 엔지니어의 학습 노트                                      │
│                                                                │
│  EXPLORE             RECENT                  CONNECT          │
│  Blog                · [최근 글 1]            GitHub          │
│  Series              · [최근 글 2]            LinkedIn        │
│  Tags                · [최근 글 3]            Email           │
│                                                                │
│  ──────────────────────────────────────────                   │
│  © 2026 SeongYeon · Built with Next.js · RSS                  │
└──────────────────────────────────────────────────────────────┘
```

- RECENT 3 = `getAllPosts().slice(0, 3)`
- CONNECT는 `SocialLinks` 컴포넌트 재사용 (variant="footer")
- `Footer.tsx`는 React Server Component로 유지 → `getAllPosts()` 직접 호출

## 8. SocialLinks Component

`src/components/blog/SocialLinks.tsx`

```ts
type Props = {
  variant?: "hero" | "footer";  // hero: 칩(라벨+아이콘), footer: 아이콘만
};
```

내부 상수:

```ts
const SOCIALS = [
  { id: "github",   href: "https://github.com/seongyeon1",                label: "GitHub" },
  { id: "linkedin", href: "https://www.linkedin.com/in/seongyeon1/",      label: "LinkedIn" },
  { id: "email",    href: "mailto:ksy974498@gmail.com",                   label: "Email" },
  { id: "rss",      href: "/rss.xml",                                     label: "RSS" },
];
```

각 항목별 SVG 아이콘은 컴포넌트 내부 정의(외부 패키지 추가 없음). 외부 링크는 `target="_blank" rel="noopener noreferrer"`.

## 9. Favicon

Next.js App Router 규약 사용:

- `src/app/icon.png` (32×32, avatar 다운스케일, nearest-neighbor)
- `src/app/apple-icon.png` (180×180, avatar 다운스케일, nearest-neighbor)

이미지 변환: `sips`(macOS 기본) 또는 `sharp` 일회성 스크립트로 `public/images/avatar.png` → 위 두 파일 생성. 결과만 커밋.

빌드 시 Next.js가 자동으로 `<link rel="icon">` 헤드 태그를 생성한다. 별도 manifest는 추가하지 않는다.

## 10. Comments — Giscus

### 10.1 Configuration

GitHub 사전 작업 완료 (2026-05-10):

- Discussions 활성화 ✅
- `Announcements` 카테고리 (Announcement 타입) 사용 ✅
- Giscus GitHub App 설치 ✅

컴포넌트 상수:

```ts
const GISCUS_CONFIG = {
  repo: "seongyeon1/seongyeon1.github.io",
  repoId: "R_kgDOSX5tLA",
  category: "Announcements",
  categoryId: "DIC_kwDOSX5tLM4C8sKD",
  mapping: "pathname",
  strict: "0",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "bottom",
  lang: "ko",
  // theme은 런타임 동적 전환 (10.2 참조)
};
```

위 값은 모두 public 정보 → 환경변수로 숨길 필요 없음. 컴포넌트에 직접 박는다.

### 10.2 Component

`src/components/blog/Comments.tsx` (`"use client"`)

책임:

1. 마운트 시 `<script src="https://giscus.app/client.js">` 동적 삽입 — `IntersectionObserver`로 댓글 영역이 뷰포트 200px 이내 진입할 때만
2. `<html>`의 `dark` 클래스 변화를 `MutationObserver`로 감지 → iframe에 `postMessage({ giscus: { setConfig: { theme } } })` 전송
3. 리포 정보 등 설정값은 컴포넌트 내부 상수로 하드코딩 (env var 불필요 — 모두 public)
4. 마운트 컨테이너 `<div class="giscus" />` 1개만 노출

### 10.3 Mount Point

`src/components/layout/PostLayout.tsx`의 `<footer>` (Tags 블록) 바로 아래.

```tsx
<footer> ...tags... </footer>

<section className="mt-16 border-t border-zinc-200/60 pt-8 dark:border-zinc-800/60">
  <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
    Comments
  </h2>
  <Comments />
</section>
```

## 11. Data Flow

```
posts.ts::getAllPosts()
   ├─ page.tsx       → Featured(1) + Series carousel + Recent(2..7) + Hero Now(0)
   └─ Footer.tsx     → Recent 3
```

`Footer.tsx`는 RSC로 유지해 빌드 시점에 `getAllPosts()` 호출. `Comments.tsx`만 클라이언트 컴포넌트.

## 12. File Changes Summary

| Path | Change |
| --- | --- |
| `src/app/page.tsx` | Stats/Categories 제거, Hero 2단으로 재구성, Series carousel 화 |
| `src/components/layout/Header.tsx` | 워드마크 교체 |
| `src/components/layout/Footer.tsx` | 3-column 확장, Recent 3 + SocialLinks 통합 |
| `src/components/blog/SocialLinks.tsx` | 신규 |
| `src/components/blog/Comments.tsx` | 신규 |
| `src/components/layout/PostLayout.tsx` | Comments 섹션 추가 |
| `src/app/icon.png` | 신규 (avatar 32×32) |
| `src/app/apple-icon.png` | 신규 (avatar 180×180) |
| `public/images/avatar.png` | 이미 존재 |

## 13. Edge Cases

- **포스트 0개**: Hero Now 라인 미렌더, Featured/Recent 섹션 자체 미렌더 (현행 동작 유지)
- **Footer Recent < 3개**: 있는 만큼만 출력
- **Giscus 리포 미설정**: iframe 로드 실패 → 자리만 비어 있게(에러 토스트 없음)
- **다크모드 첫 진입**: `MutationObserver` 부착 전에 이미 dark 상태일 수 있음 → 마운트 시점에 1회 동기화
- **모바일 Hero**: 아바타 컬럼 hidden(`lg:` 이상에서만 표시), 좌측 텍스트 풀폭

## 14. Acceptance Criteria

- 메인 페이지에서 Stats / Categories 섹션이 사라지고, Series는 가로 스크롤로만 보인다.
- Hero 우측에 픽셀 아바타가 240px로 표시되고 픽셀이 흐려지지 않는다 (확대해도 선명).
- 헤더 좌측이 `[avatar] sy/dev`로 표기되며 `/dev`는 primary 컬러다.
- 브라우저 탭에 favicon이 픽셀 아바타로 표시된다 (32×32 / 180×180).
- 푸터에 EXPLORE / RECENT / CONNECT 3개 블록이 보이고, RECENT는 최신 3개 포스트를 링크한다.
- 포스트 상세 하단에 "Comments" 헤딩과 함께 Giscus iframe이 로드된다.
- 다크모드 토글 시 Giscus 테마가 함께 전환된다.
- `npm run build`, `npm run typecheck`, `npm run lint` 모두 통과한다.

## 15. Risks

- ~~**Giscus 리포 설정 누락**~~: 2026-05-10 사용자가 Discussions·Announcements 카테고리·Giscus App 설치 모두 완료. ID도 수집 완료.
- **avatar.png 용량 (784KB)**: Hero에서만 표시되더라도 LCP에 영향 가능. 빌드 시점에 작은 사이즈 webp/avif를 별도 생성하지 않으면 next/image의 자동 최적화에 의존. → next/image 사용으로 해결.
- **`getAllPosts()` 중복 호출**: page.tsx + Footer.tsx에서 각각 호출. 빌드 시점이라 성능 영향 없음. 모듈 레벨 메모이제이션이 이미 있으면 그대로 사용.
