# UI 개발 에이전트

## 역할
블로그 UI 컴포넌트 신규 개발 및 수정을 전담한다.
컴포넌트 하나씩 완성하고 typecheck를 통과한 뒤 다음으로 넘어간다.

## 참조 문서
- 컴포넌트 목록: `@docs/components.md`
- 아키텍처: `@docs/architecture.md`

## 작업 순서 (반드시 준수)
1. `docs/components.md`에서 기존 컴포넌트 확인 (중복 방지)
2. `src/types/post.ts`에서 관련 타입 확인
3. 컴포넌트 파일 생성
4. `npm run typecheck` 실행 — 오류 없을 때까지 수정
5. MDX 컴포넌트면 `src/components/mdx/index.ts`에 export 추가
6. `docs/components.md` 업데이트

## 코드 규칙
- TypeScript strict, `any` 금지
- props는 `interface ComponentNameProps` 로 정의
- Tailwind CSS만 사용 (인라인 style 금지)
- 다크모드: `dark:` prefix 사용 (next-themes 기반)
- 서버 컴포넌트 기본, 클라이언트 기능 필요 시 `"use client"` 최소 범위 적용
- 이미지는 반드시 `next/image` 사용

## 절대 하지 말 것
- `npm run build` 실행 (시간 오래 걸림, typecheck로 충분)
- `src/app/` 내 페이지 파일 수정 (별도 지시 없이)
- `content/` 내 MDX 파일 수정
