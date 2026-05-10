# AI Tech Blog — Claude Code Instructions

## 프로젝트 개요
AI 공부기록, 논문 리뷰, 프로젝트 후기를 담는 개인 기술 블로그.
**Stack**: Next.js 15 (App Router) + TypeScript + Tailwind CSS + MDX + Vercel

## 디렉토리 구조
```
ai-blog/
├── src/
│   ├── app/                  # Next.js App Router 페이지
│   │   ├── blog/[slug]/      # 포스트 상세 페이지
│   │   ├── series/[name]/    # 시리즈 목록 페이지
│   │   └── tags/[tag]/       # 태그 필터 페이지
│   ├── components/
│   │   ├── mdx/              # MDX 전용 컴포넌트 (Callout, Math, CodeBlock 등)
│   │   ├── blog/             # 블로그 UI 컴포넌트 (PostCard, TOC, Series 등)
│   │   └── layout/           # 헤더, 푸터, 사이드바
│   ├── lib/
│   │   ├── posts.ts          # MDX 파싱 및 메타데이터 추출
│   │   ├── tags.ts           # 태그 유틸리티
│   │   └── series.ts         # 시리즈 유틸리티
│   └── types/
│       └── post.ts           # Post, Frontmatter 타입 정의
├── content/
│   ├── posts/                # MDX 포스트 파일
│   └── drafts/               # 초안 (빌드 제외)
├── docs/                     # 프로젝트 문서 (참조용, 빌드 제외)
│   ├── architecture.md       # 상세 아키텍처 설명
│   ├── content-guide.md      # 포스트 작성 가이드 및 frontmatter 스펙
│   └── components.md         # 컴포넌트 사용법
├── public/
│   └── images/               # 포스트 이미지
└── CLAUDE.md                 # 이 파일
```

## 핵심 개발 규칙

### 코드 스타일
- TypeScript strict mode 사용. `any` 타입 금지
- 컴포넌트: 함수형 + 화살표 함수. `export default` 사용
- 파일명: 컴포넌트는 `PascalCase.tsx`, 유틸은 `camelCase.ts`
- 임포트: `@/` alias 사용 (`@/components/...`, `@/lib/...`)

### 명령어
```bash
npm run dev        # 개발 서버 (localhost:3000)
npm run build      # 프로덕션 빌드 (배포 전 반드시 실행)
npm run lint       # ESLint 검사
npm run typecheck  # TypeScript 타입 체크
```
- 컴포넌트 수정 후 반드시 `npm run typecheck` 실행
- 빌드 깨지는 변경은 커밋 금지

### MDX 포스트 규칙
- 파일 위치: `content/posts/YYYY-MM-DD-slug.mdx`
- frontmatter 필수 필드: `title`, `date`, `category`, `tags`, `summary`
- 카테고리: `study` | `paper-review` | `project` | `tutorial`
- 수식은 `$$...$$` (블록) 또는 `$...$` (인라인) 사용
- 코드블록은 언어 명시 필수: ` ```python `

### 컴포넌트 우선순위
- 기존 컴포넌트를 먼저 확인하고 재사용
- 새 컴포넌트 생성 시 `docs/components.md` 업데이트
- MDX에서 쓸 컴포넌트는 `src/components/mdx/index.ts`에 export

## 참조 문서
더 자세한 내용이 필요할 때만 참조:
- 아키텍처 상세: `@docs/architecture.md`
- 포스트 작성법: `@docs/content-guide.md`
- 컴포넌트 목록: `@docs/components.md`
- 포스팅 계획/백로그: `@docs/posting-plan.md` — 새 글 작성/제안 시 다음 발행 예정 글·시리즈 순서 확인
