# 블로그 편집 계획 (Editorial Plan)

> 새 글 기획·발행 일정·아이디어를 한 곳에서 관리하는 개인용 메모. 빌드에는 포함되지 않는다(`docs/`).
> 스프레드시트로 보고 싶으면 `docs/editorial-plan.csv`를 열면 된다 (백로그 표와 같은 컬럼).
> 백로그 표는 위에서부터 **곧 발행 → 나중 → 아이디어** 순으로 정렬해두면 한눈에 보인다.
>
> ⚠️ `docs/posting-plan.md` / `posting-plan.csv`는 이 파일과 별개다 — 그쪽은 `scripts/publish-post.sh`가 쓰는 **기존 글 자동 발행 스케줄**(날짜별로 content 파일을 commit·push). *새 글을 기획하는 곳은 여기*.

## 운영 원칙 _(취향대로 조정)_

- **주기**: **매일 1편, 월~일 전부**. 빵꾸보다 일관성 — 못 쓰면 짧은 메모성 글이라도.
- **시리즈 연속 금지**: 같은 시리즈 **2일 연속 발행 금지**. 카테고리(`study`/`project`/…)도 가능하면 사이사이에 섞기.
- **시리즈는 끊지 않기**: 시작한 시리즈는 *다음 편 한 칸*을 항상 백로그 상단에 올려둔다.
- **버퍼 7편**: 매주 일요일 밤 기준, **다음 주 월~일 7편이 전부 `예약` 상태**로 들어가 있을 것. 토·일에 batch 검토·예약하는 게 가장 안전 (= "주말 sprint").
- **워크플로**: `아이디어` → `/new-post`로 초안(`draft: true`) → `작성중` → `/review-post` → `검토` → `draft` 제거 → `예약`/`발행완료`. (아래 표의 **상태** 컬럼이 그대로 이 단계.)
- **작성 마일스톤**: 발행일 기준 **D-7** = `/new-post`로 초안 시작 → **D-3** = `/review-post` 검토 → **D-1** = `draft` 제거하고 `예약` → **D** = 발행. 시리즈 1편 작성할 때 다음 편 outline 까지 잡아둘 것 — 매일 cadence 라 별도 outline 시간 없음.

## 백로그 / 일정

상태값: `아이디어` · `작성중` · `검토` · `예약` · `발행완료`

| 상태 | 발행 예정일 | 제목 (가안) | 카테고리 | 시리즈 | # | 메모 |
| --- | --- | --- | --- | --- | --- | --- |
| 발행완료 | 2026-05-10 | 정적 블로그에 댓글 시스템 도입하기 (Giscus 편) | tutorial | 블로그 만들기 | 1 | — |
| 발행완료 | 2026-05-11 | GitHub Pages 블로그를 구글 검색에 노출시키기 (Search Console 편) | tutorial | 블로그 만들기 | 2 | — |
| 발행완료 | 2026-05-25 | 브랜치, 제대로 — 만들고 옮기고 합치고 지우기 | study | Git 시리즈 | 3 | 발행 — `2026-05-25-git-branching.mdx` (Pro Git ch.3.1–3.4) |
| 작성중 | 2026-05-18 | 블로그 SEO 마감 — OG 이미지 자동 생성 · RSS · JSON-LD | tutorial | 블로그 만들기 | 3 | 2편 "다음 편 예고"에 이미 공개함. `opengraph-image`, `/rss.xml`, `Article` JSON-LD |
| 작성중 | 2026-05-19 (화) | [논문 리뷰] A-RAG: Agentic RAG가 2026년의 기본기가 된 이유 | paper-review | RAG 논문 리뷰 시리즈 | 3 | 초안 작성 — `2026-05-19-agentic-rag-review.mdx` (A-RAG arXiv 2602.03442) |
| 작성중 | 2026-05-20 (수) | merge냐 rebase냐 — 히스토리를 어떻게 그릴 것인가 | study | Git 시리즈 | 4 | 초안 작성 — `2026-05-20-git-merge-vs-rebase.mdx` (Pro Git ch.3.5–3.6) |
| 발행완료 | 2026-05-21 (목) | Attention 이해하기 시리즈 마무리 (디코딩·추론 or 전체 정리) | study | Attention 이해하기 | 6 | `2026-05-21-attention-complete-guide.mdx` |
| 예약 | 2026-05-22 (금) | [논문 리뷰] DeepSeek-V4 — 1M Context에서 KV Cache 10% 수준으로 압축한 Hybrid Attention | paper-review | 논문 리뷰 | | Attention 시리즈 마무리(FFN) 다음. Q/K/V·Multi-Head와 연결. `2026-05-22-deepseek-v4-paper-review.mdx` |
| 아이디어 | 2026-05-23 (토) | 리모트와 협업 — fetch / pull / push를 정확히 | study | Git 시리즈 | 5 | Pro Git ch.2.5, 3.5 / 1편의 remote·push·pull을 깊게 |
| 아이디어 | 2026-05-24 (일) | Harness 만들기 1편 — 왜 만들고 어떻게 짰나 (skills · agents · hooks 구조) | project | Harness 만들기 | 1 | `harness/braincrew` — 25 skills · 24 agents · 36 rules · 21 hooks · 15 commands |
| 아이디어 | 2026-05-25 (월) | 되돌리기 총정리 — reset · revert · restore · reflog · stash | study | Git 시리즈 | 6 | Pro Git ch.2.4, 7.3, 7.7 / 세 개의 트리 그림 |
| 아이디어 | 2026-05-25 (월) | RPG 포트폴리오 만들기 — Kaboom.js 픽셀 RPG 단일 페이지 (NDA 마스킹 메커니즘) | project | | | `harness/public-portfolio` — No-Build · Kaboom.js 3000 · `PUBLIC_MODE` 한 줄 토글 |
| 아이디어 | 2026-05-26 (화) | GitHub 활용 — fork · PR · issue · Actions 맛보기 | study | Git 시리즈 | 7 | Pro Git ch.6 / 이 블로그 `deploy.yml`을 예시로 |
| 아이디어 | 2026-05-27 (수) | Harness 만들기 2편 — 듀얼 메모리 + `sy` 글로벌 CLI 워크플로 | project | Harness 만들기 | 2 | global `~/.sy/memory/` ↔ project `.sy-memory/`, `sy` 가 `claude --plugin-dir` 로 부팅 |
| 아이디어 | 2026-05-28 (목) | Git 내부 — `.git` 디렉토리를 열어보면 | study | Git 시리즈 | 8 | 옵션·마지막 / Pro Git ch.10 / 7편 발행 시 포함 여부 최종 결정 |
| 아이디어 | 2026-05-29 (금) | Braincrew Wiki — Obsidian으로 쓰고 AI Routine이 정제하는 팀 위키 | project | | | `harness/braincrew-wiki` — Karpathy LLM-wiki 패턴 팀 확장. raw → routine → 정제 PR |
| 예약 | 2026-05-30 (토) | Container와 Docker 기초 — 왜 필요하고 어떻게 작동하는가 | study | 배포 환경 이해하기 | 1 | `2026-05-30-docker-container-basics.mdx` — Image·Container·Registry, VM vs Container |
| 예약 | 2026-05-31 (일) | Kubernetes 핵심 — Pod, Service, Deployment가 하는 일 | study | 배포 환경 이해하기 | 2 | `2026-05-31-kubernetes-fundamentals.mdx` — Pod·Service·Deployment, 선언형 배포, YAML |
| 예약 | 2026-06-01 (월) | AWS 핵심 서비스 — EC2, S3, RDS, VPC로 클라우드 인프라 구성하기 | study | 배포 환경 이해하기 | 3 | `2026-06-01-aws-core-services.mdx` — EC2·S3·RDS·VPC, 프리티어, 실전 아키텍처 |
| 예약 | 2026-06-02 (화) | 배포 전략 — Blue-Green, Canary, Rolling Deployment 무중단 배포의 기술 | study | 배포 환경 이해하기 | 4 | `2026-06-02-deployment-strategies.mdx` — 3가지 전략 비교, Kubernetes 구현, GitHub Actions 예제 |
| 아이디어 | 2026-06-03 (수) | GitOps와 CI/CD — GitHub Actions에서 Kubernetes까지 | study | 배포 환경 이해하기 | 5 | 자동 배포 파이프라인. 이 블로그 deploy.yml 연계. |
| 아이디어 | 2026-06-04 (목) | 모니터링·로깅 — Prometheus, ELK Stack 기초 | study | 배포 환경 이해하기 | 6 | 성능 모니터링, 로그 수집. 기초 개념. |
| 아이디어 | 2026-06-05 (금) | 블로그 만들기 4편 — 배포 자동화 (빌드 캐시 / 프리뷰) | tutorial | 블로그 만들기 | 4 | 3편 끝나고. (Actions 기초는 Git 7편에서 다룸) |

## 작성 마일스톤 _(매일 cadence — "주말 sprint" 룰)_

> 매주 **토·일** 에 다음 주(월~일) 7편을 batch 처리. 토요일 = 7편 초안, 일요일 = 검토 · `draft` 제거 · `예약` 등록. 평일은 발행 결과 확인 + 다음 sprint outline 수집만.

### 첫 주만 압축 모드 _(2026-05-14 목 ~ 2026-05-17 일)_

5/18 발행 첫날까지 4일밖에 없어 D-7 못 맞춤. 4일 안에 다음 6편(5/18~5/24)을 압축 작성 (Git 3편은 이미 발행됨). **5/23(토) 부터 정규 sprint 진입.**

| 발행일 | 글 | 작성 가이드 |
| --- | --- | --- |
| 2026-05-18 (월) | SEO 마감 | 이미 `작성중` (PR #14) — 5/17(일)까지 검토·예약 완료 |
| 2026-05-19 (화) | RAG 3 | ⚠️ **후보 논문 확정 먼저** → 압축 작성 (`5/15~17` 안에 1편 통째로) |
| 2026-05-20~24 | Git 4 / Attention 마무리 / Git 5 / Harness 1편 / Git 6 | 정상 D-7 가능 — 5/14 부터 매일 1편 초안 |

### 정규 sprint _(2026-05-23 토 부터)_

5/23~24 sprint = 5/25~31 발행분(RPG / Git 7 / Harness 2 / Git 8 / Wiki / 신규 study / 프로젝트 후기) 책임. 이후 매 주말 동일 패턴.

## 시리즈 로드맵

### 블로그 만들기 — 진행 중 (2/3 발행)
1. ✅ Giscus 댓글 사전 설정 — `2026-05-10-giscus-comments-setup`
2. ✅ Google Search Console 등록 — `2026-05-11-google-search-console-github-pages`
3. ⬜ SEO 마감 — OG 이미지(`opengraph-image`) / RSS 점검 / JSON-LD `Article`
4. ⬜ _(옵션)_ 배포 자동화 — 빌드 캐시, PR 프리뷰 (Actions 기초는 Git 7편에서)
5. ⬜ _(옵션)_ 글쓰기 워크플로 — `/new-post`·`/review-post` 스킬, 이미지 파이프라인, frontmatter 규칙

### Git 시리즈 — 입문 끝, 심화 코스 예정 (Pro Git 기반)
상세 아웃라인 + 편별 실무 팁: `docs/superpowers/specs/2026-05-11-git-series-design.md`
(각 편에 `## 실무에서 — 알아두면 좋은 것들` 섹션: alias·유용한 config·`gh` CLI·rerere/autosquash·"방금 망쳤을 때" 처방 등)
1. ✅ Git 시작하기 — 명령어 9개 — `2026-02-26-git-basics`
2. ✅ 혼자 써도 따라야 할 Git Convention — `2026-03-05-git-convention`
3. ✅ 브랜치, 제대로 — `2026-05-25-git-branching` (ch.3.1–3.4)
4. ⬜ merge냐 rebase냐 (ch.3.5–3.6)
5. ⬜ 리모트와 협업 — fetch/pull/push (ch.2.5, 3.5)
6. ⬜ 되돌리기 총정리 — reset/revert/restore/reflog/stash (ch.2.4, 7.3, 7.7)
7. ⬜ GitHub 활용 — fork/PR/issue/Actions 맛보기 (ch.6)
8. ⬜ _(옵션)_ Git 내부 — `.git` 디렉토리 (ch.10)

### Attention 이해하기 — 완료 (5편 + 1 논문리뷰)
- ✅ Q·K·V → 3 attentions → positional encoding → layernorm/residual → FFN 까지 옴.
- ✅ [논문 리뷰] DeepSeek-V4로 마무리 — Hybrid Attention · KV Cache 최적화

### RAG 논문 리뷰 시리즈 — 진행 중 (2편)
- 발행: Seismic(sparse retrieval), Enterprise RAG Bench.
- 다음 후보 논문 큐:
  - 
  - 

### 프롬프트 최적화 시리즈 — 일단락 (3편: MetaSPO / GEPA / 비교)
- 새 기법·논문 나오면 추가편으로.

### 배포 환경 이해하기 — 진행 중 (6편)
기초부터 실무까지: Container → Kubernetes → AWS → 배포 전략 → GitOps/CI-CD → 모니터링
1. ⬜ Container와 Docker 기초 — `2026-05-30-docker-container-basics` (Image·Container·Registry)
2. ⬜ Kubernetes 핵심 (Pod · Service · Deployment)
3. ⬜ AWS 핵심 서비스 (EC2 · S3 · RDS · VPC)
4. ⬜ 배포 전략 (Blue-Green / Canary / Rolling)
5. ⬜ GitOps와 CI/CD (GitHub Actions → Kubernetes)
6. ⬜ 모니터링·로깅 (Prometheus / ELK Stack)

### Harness 만들기 — 예정 (2편)
대상: `harness/braincrew` — Claude Code 를 위한 multi-agent orchestration harness.
1. ⬜ 왜 만들고 어떻게 짰나 — 25 skills · 24 agents · 36 rules · 21 hooks · 15 commands 의 역할 분리. **skill description 은 매 turn 주입** vs **path-gated rule** 의 boundary 가 핵심 설계 결정.
2. ⬜ 듀얼 메모리 + `sy` CLI — global `~/.sy/memory/` (user·tech·lesson·feedback) ↔ project `.sy-memory/` (arch·decision…). `sy` 가 `claude --plugin-dir` 로 부팅하는 한 줄짜리 글로벌 진입점.
- _(옵션 후속)_ skill 작성법 · agent 디자인 패턴 · hook 트리거 카탈로그.

### 단편 (project)
- **RPG 포트폴리오 만들기** — `harness/public-portfolio`. Top-down 픽셀 RPG 형식의 인터랙티브 이력서. Kaboom.js 3000 + No-Build (단일 HTML + ES Modules + CDN). NDA 보호용 `PUBLIC_MODE` 한 줄 토글 마스킹 메커니즘 (`game/data/redaction.js`) — 회사명·KPI·스크린샷이 자동 일반화. Live: `seongyeon1.github.io/portfolio-rpg/`.
- **Braincrew Wiki — 제작기** — `harness/braincrew-wiki`. [Karpathy LLM-wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) 패턴을 팀 단위로 확장. Obsidian 또는 `/bc-wiki-add` 로 `raw/` 에 자유 메모 → GitHub Action (`wiki-curator`) 이 정제된 위키 페이지 PR 자동 생성 → `main` push 시 Vercel 배포. Next.js 16 + Bun. **사람 vs AI 의 git author 분리** 가 핵심.

### 완료/유지보수 모드 시리즈
- Markdown 시리즈 · 리눅스 명령어 시리즈 — 필요할 때 보강편만.

## 아이디어 풀 _(일정 미정 — 떠오르면 그냥 한 줄씩 적기)_

- _(현재 비어 있음 — 직전 항목들은 위 백로그·시리즈 로드맵으로 이동)_

## 발행 전 체크리스트 _(요약 — 자세히는 `/review-post`)_

- [ ] frontmatter: `title` / `date` / `category` / `tags` / `summary` 채움, **`draft` 제거**
- [ ] `summary` 150자 이내 + 본문 요약과 일치
- [ ] 첫 헤딩이 `##`
- [ ] 코드블록 언어 명시 / 이미지는 `<Figure>` 또는 `next/image`
- [ ] 시리즈면 `seriesOrder` + 이전·다음 편 연결 자연스러운지
- [ ] `paper-review`면 `<Paper>` 컴포넌트
- [ ] `npm run build` 통과
