# AI 글쓰기 자동화 Flow

> 목적: AI 트렌드, 신기술 소개, 논문 리뷰, 실무 적용 아이디어를 자동으로 발굴하고 블로그 초안까지 생성한다.  
> 원칙: **자동 생성은 `draft: true`까지만**, 공개 발행/푸시는 사람이 승인한다.

## 0. 산출물 위치

- 아이디어/소스 큐: `docs/ai-writing-inbox.md`
- 편집 일정: `docs/editorial-plan.md`
- 자동 생성 초안: `content/posts/YYYY-MM-DD-slug.mdx` (`draft: true`)
- 글 작성 규칙: `docs/content-guide.md`

## 1. 전체 파이프라인

```mermaid
flowchart LR
  A[Trend Radar] --> B[Topic Scoring]
  B --> C[Editorial Queue]
  C --> D[Outline]
  D --> E[MDX Draft]
  E --> F[QA Review]
  F --> G[Human Approval]
  G --> H[Publish]
```

## 2. 단계별 역할

### 1) Trend Radar — 주제 후보 수집

수집 범위:

- 최신 AI 논문: arXiv, Papers with Code, 주요 랩 블로그
- AI 트렌드: OpenAI/Anthropic/Google DeepMind/Meta/Mistral 등 릴리즈
- 개발자 관점 신기술: agent framework, eval, memory, RAG, inference, deployment
- 성연 블로그에 맞는 실무형 주제: “기술 원리 + 실제 써먹는 방법 + 내 의견”이 가능한 것

산출물:

- `docs/ai-writing-inbox.md`에 후보 5~10개 추가
- 각 후보는 아래 필드로 기록

```md
### YYYY-MM-DD — 제목 후보
- type: paper | trend | tech | project-idea
- source: URL 또는 arXiv ID
- why-now: 지금 다룰 이유
- angle: 성연 블로그에서 잡을 관점
- difficulty: low | medium | high
- freshness: 1~5
- practicality: 1~5
- confidence: 1~5
- suggested-category: paper-review | study | tutorial | project
- suggested-tags: [...]
- status: idea | drafting | drafted | skipped
- draft: content/posts/YYYY-MM-DD-slug.mdx  # drafted일 때만
```

### 2) Topic Scoring — 쓸 만한 후보 선별

점수 기준:

| 기준 | 설명 |
| --- | --- |
| Freshness | 최근성, 지금 읽을 이유 |
| Technical Depth | 원리·구현·수식으로 깊게 쓸 수 있는가 |
| Practicality | 개발자가 바로 써먹을 수 있는가 |
| Blog Fit | 기존 블로그 시리즈/취향과 맞는가 |
| Source Quality | 원문/논문/공식 문서가 충분한가 |

기본 선택 규칙:

1. 논문 리뷰는 원문 링크/arXiv가 있어야 한다.
2. 신기술 소개는 공식 문서/릴리즈 노트가 있어야 한다.
3. 단순 뉴스 요약은 제외하고, “기술적으로 무엇이 달라졌나”가 보이는 것만 채택한다.
4. 같은 주제군이 2회 연속 나오지 않게 섞는다.

### 3) Editorial Queue — 편집 계획 반영

- 선별된 후보는 `docs/editorial-plan.md`의 백로그에 `아이디어` 또는 `작성중`으로 추가한다.
- 기존 시리즈와 충돌하면 새 단편보다 시리즈 연속성을 우선한다.
- 단, 최신성이 중요한 논문/릴리즈는 “트렌드 슬롯”으로 끼워 넣는다.

추천 주간 구성:

| 요일 | 주제 타입 |
| --- | --- |
| 월 | AI 트렌드/신기술 소개 |
| 수 | 논문 리뷰 |
| 금 | 실무 적용/튜토리얼 |
| 일 | 회고/프로젝트/생각 정리 |

### 4) Outline — 초안 전 개요 생성

글 타입별 템플릿:

#### 논문 리뷰

1. 한 줄 요약
2. 왜 지금 중요한가
3. 기존 방법의 한계
4. 핵심 아이디어
5. 방법론/아키텍처
6. 실험 결과
7. 실무 적용 포인트
8. 내 의견/한계
9. 참고 자료

#### 신기술 소개

1. 무엇이 나왔나
2. 기존 방식과 차이
3. 핵심 구조/동작 원리
4. 개발자가 바로 확인할 수 있는 예제
5. 어디에 쓰면 좋은가
6. 한계/주의점
7. 다음에 볼 것

#### AI 트렌드 분석

1. 이번 변화의 요약
2. 배경 맥락
3. 기술적 변화
4. 생태계 영향
5. 개발자/팀 관점 액션 아이템
6. 내 해석

### 5) MDX Draft — 블로그 초안 생성

필수 규칙:

- 파일: `content/posts/YYYY-MM-DD-slug.mdx`
- frontmatter에 반드시 `draft: true`
- `summary`는 150자 이내
- 본문 첫 헤딩은 `##`
- `paper-review`면 `<Paper />` 컴포넌트 포함
- MDX 숫자 props는 문자열로 쓴다. 예: `year="2026"`
- 외부 주장에는 원문 링크를 단다.

### 6) QA Review — 자동 검토

체크리스트:

- [ ] frontmatter 필수 필드 존재
- [ ] `draft: true` 유지
- [ ] 제목/요약/본문 관점 일치
- [ ] MDX 특수문자 오류 없음
- [ ] 논문/공식 문서 링크 포함
- [ ] “뉴스 요약”이 아니라 기술적 설명이 있음
- [ ] 성연 블로그 톤: 개발자 대상, 핵심 위주, 실무 관점
- [ ] `npm run typecheck` 통과
- [ ] 가능하면 `npm run build` 확인

## 3. Cron 자동화 구성

현재 권장 구성은 3개다.

| Job | Schedule | 역할 | 공개 발행 여부 |
| --- | --- | --- | --- |
| `ai-blog-trend-radar` | 매주 월 09:10 KST | 최신 주제 수집 + inbox 업데이트 | 없음 |
| `ai-blog-draft-writer` | 화/목/토 09:30 KST | 후보 1개를 MDX 초안으로 생성 | 없음, `draft: true` |
| `ai-blog-draft-review` | 일 20:00 KST | 생성 초안 리뷰 + 발행 후보 보고 | 없음 |

## 4. 운영 현황

2026-06-15 기준 smoke test 결과:

- `ai-blog-trend-radar`: `docs/ai-writing-inbox.md`에 AI 글감 후보 큐 생성/확장 완료
- `ai-blog-draft-writer`: 아래 초안 2개 생성 완료
  - `content/posts/2026-06-15-hypertool-agent-tool-call-granularity.mdx` (`draft: true`, 검토 대기)
  - `content/posts/2026-06-15-github-agentic-workflows-repo-native-agents.mdx` (`draft: true`, 검토 대기)
- `docs/editorial-plan.md`: 생성 초안은 `검토`, 후속 후보는 `아이디어` 상태로 반영
- 검증 기준: frontmatter check + `npm run typecheck` + `npm run build`

## 5. 운영 규칙

- 자동화는 “쓰기 시작 비용”을 줄이는 용도다. 최종 발행은 성연 승인 후 진행한다.
- 트렌드 글은 오래된 자료보다 최신 원문 우선.
- 논문 글은 abstract만 읽고 쓰지 말고, 방법론/실험/한계까지 최소 확인한다.
- 글의 기본 톤은 “개념 설명 + 왜 중요한지 + 실무에서 어떻게 볼지”.
- 생성한 초안은 Slack에 파일명, 주제, 핵심 링크, 다음 액션을 짧게 보고한다.
- `draft: true` 초안 검증을 위해 `npm run build`를 실행하면 `public/rss.xml`이 갱신될 수 있다. draft-only 변경이면 커밋 전 RSS 변경분은 되돌린다.

## 6. 수동 명령으로 쓸 때의 프롬프트

```text
~/ai-blog에서 docs/ai-writing-automation-flow.md와 docs/content-guide.md를 기준으로,
docs/ai-writing-inbox.md의 status: idea 후보 중 하나를 골라
content/posts/YYYY-MM-DD-slug.mdx에 draft: true 초안을 작성해줘.
논문/공식 문서 원문 링크를 확인하고, MDX 빌드 오류가 나지 않게 작성한 뒤 typecheck/build 결과까지 보고해줘.
```
