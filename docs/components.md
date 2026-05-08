# 컴포넌트 문서

## MDX 컴포넌트 (`src/components/mdx/`)

### Callout
```tsx
// 타입: note | warning | tip | danger
<Callout type="note">내용</Callout>
```

### Paper
```tsx
// 논문 정보 카드 — paper-review 포스트 상단에 필수 사용
<Paper
  title="논문 제목"
  authors="저자 et al."   // 또는 authors={["저자1", "저자2"]}
  year={2024}
  venue="NeurIPS"         // 학회명
  arxiv="2401.00000"      // arXiv ID (선택)
  github="user/repo"      // GitHub (선택)
/>
```

### Figure
```tsx
// next/image 기반, 캡션 지원
<Figure
  src="/images/파일명.png"
  alt="대체 텍스트"
  caption="이미지 설명"
  width={800}   // 선택, 기본값 800
  height={450}  // 선택, 기본값 450
/>
```

### Math (인라인 강조용)
```tsx
// KaTeX 인라인 수식 강조 박스
<Math>x^2 + y^2 = z^2</Math>
```

---

## 블로그 UI 컴포넌트 (`src/components/blog/`)

### PostCard
```tsx
// 블로그 목록에서 포스트 카드 표시
<PostCard post={post} />
// post: Post 타입 (slug, title, date, summary, tags, category, readingTime)
```

### TOC (Table of Contents)
```tsx
// 포스트 상세 페이지 사이드바에 자동 삽입
// 수동으로 사용할 경우:
<TOC headings={headings} />
// headings: { id, text, level }[]
```

### SeriesNav
```tsx
// 시리즈 포스트 네비게이션 (이전/다음 편)
<SeriesNav
  series="시리즈명"
  currentOrder={2}
  posts={seriesPosts}
/>
```

### TagBadge
```tsx
<TagBadge tag="transformer" />
// 클릭 시 /tags/transformer 로 이동
```

### CategoryBadge
```tsx
<CategoryBadge category="paper-review" />
// study | paper-review | project | tutorial
```

---

## 레이아웃 컴포넌트 (`src/components/layout/`)

### Header
- 블로그 제목, 네비게이션 (Blog, Series, About)
- 다크모드 토글

### PostLayout
```tsx
// 포스트 상세 페이지 전체 레이아웃
// 좌: 본문 (max-w-2xl), 우: 사이드바 (TOC)
<PostLayout post={post}>
  {mdxContent}
</PostLayout>
```

---

## 컴포넌트 추가 시 규칙
1. 파일 생성: `src/components/{mdx|blog|layout}/ComponentName.tsx`
2. MDX 컴포넌트면 `src/components/mdx/index.ts`에 export 추가
3. 이 문서 하단에 항목 추가
4. props는 TypeScript interface로 정의, JSDoc 주석 추가
