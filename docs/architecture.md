# 아키텍처 상세 문서

## 데이터 흐름

```
content/posts/*.mdx
  └─▶ lib/posts.ts (파싱 + frontmatter 추출)
        └─▶ app/blog/[slug]/page.tsx (정적 생성)
              └─▶ MDXRemote (컴포넌트 렌더링)
```

## 포스트 시스템

### Frontmatter 타입 (`src/types/post.ts`)
```typescript
type Frontmatter = {
  title: string
  date: string          // YYYY-MM-DD
  summary: string       // 150자 이내 요약
  category: 'study' | 'paper-review' | 'project' | 'tutorial'
  tags: string[]
  series?: string       // 시리즈명 (선택)
  seriesOrder?: number  // 시리즈 내 순서 (선택)
  draft?: boolean       // true면 빌드 제외
  math?: boolean        // KaTeX 필요 여부 (true면 KaTeX CSS 로드)
  thumbnail?: string    // OG 이미지 경로 (/images/...)
}
```

### 포스트 파싱 (`src/lib/posts.ts`)
- `gray-matter`로 frontmatter 파싱
- `reading-time`으로 읽기 시간 계산
- `draft: true` 포스트는 production 빌드에서 제외
- `getAllPosts()`, `getPostBySlug()`, `getPostsBySeries()`, `getPostsByTag()` 함수 제공

## MDX 렌더링 파이프라인

```
remark plugins:
  - remark-math          (수식 파싱)
  - remark-gfm           (GFM 테이블, 체크박스)

rehype plugins:
  - rehype-katex         (수식 → KaTeX HTML)
  - rehype-pretty-code   (코드 하이라이팅, Shiki 기반)
  - rehype-slug          (헤딩 id 자동 추가)
  - rehype-autolink-headings (헤딩 앵커 링크)
```

## 커스텀 MDX 컴포넌트

| 컴포넌트 | 용도 | 사용법 |
|---|---|---|
| `Callout` | 강조 박스 (Note/Warning/Tip) | `<Callout type="warning">...</Callout>` |
| `CodeBlock` | 파일명 표시 코드블록 | 자동 적용 |
| `Figure` | 캡션 있는 이미지 | `<Figure src="..." caption="..." />` |
| `Paper` | 논문 정보 카드 | `<Paper title="..." authors="..." year={2024} arxiv="..." />` |
| `Math` | 인라인 수식 강조 | `<Math>x^2</Math>` |
| `Series` | 시리즈 네비게이션 | 자동 삽입 |
| `TOC` | 목차 | 사이드바에 자동 삽입 |

## 페이지 구조

### 메인 (`/`)
- 최신 포스트 6개
- 카테고리별 포스트 수
- 진행 중인 시리즈

### 블로그 목록 (`/blog`)
- 전체 포스트 목록, 태그 필터
- 무한 스크롤 or 페이지네이션

### 포스트 상세 (`/blog/[slug]`)
- MDX 렌더링
- 우측 사이드바: TOC, 시리즈 네비게이션
- 하단: 이전/다음 글, 태그 목록

### 시리즈 (`/series/[name]`)
- 시리즈 내 포스트 목록 (완독률 표시)

### 태그 (`/tags/[tag]`)
- 태그별 포스트 목록

## 성능 전략
- `generateStaticParams`로 모든 포스트 정적 생성 (SSG)
- `next/image`로 이미지 자동 최적화
- KaTeX CSS는 `math: true` 포스트에서만 로드
- Shiki는 서버 사이드 렌더링 (JS 번들 미포함)

## SEO
- `generateMetadata`로 포스트별 메타태그 생성
- `@vercel/og`로 OG 이미지 자동 생성 (`/api/og?title=...`)
- `next-sitemap`으로 sitemap.xml + robots.txt 생성
- RSS 피드: `/feed.xml`

## 배포
- **플랫폼**: Vercel (무료 플랜)
- **브랜치 전략**: `main` → 자동 배포, `dev` → preview 배포
- **환경변수**: Vercel 대시보드에서 관리 (현재 없음)
