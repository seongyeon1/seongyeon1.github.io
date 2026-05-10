# 블로그 포스팅 계획

> 발행 일정 · 백로그 · 아이디어를 한 곳에서 관리하는 개인용 메모. 빌드에는 포함되지 않는다(`docs/`).
> 스프레드시트로 보고 싶으면 `docs/posting-plan.csv`를 열면 된다 (백로그 표와 같은 컬럼).
> 백로그 표는 위에서부터 **곧 발행 → 나중 → 아이디어** 순으로 정렬해두면 한눈에 보인다.

## 운영 원칙 _(취향대로 조정)_

- **주기**: 주 1편, **매주 월요일** 발행 목표. 바쁜 주는 격주로 떨어뜨려도 OK — 빵꾸보다 일관성.
- **카테고리 섞기**: 한 달 기준 `study`/`tutorial` 2~3편 + `paper-review` 1편 + `project` 1편 정도 감각으로.
- **시리즈는 끊지 않기**: 시작한 시리즈는 *다음 편 한 칸*을 항상 백로그 상단에 올려둔다.
- **버퍼 1편**: 항상 `검토` 또는 `예약` 상태인 글이 최소 하나 있게 → 바쁜 주에도 발행이 멈추지 않음.
- **워크플로**: `아이디어` → `/new-post`로 초안(`draft: true`) → `작성중` → `/review-post` → `검토` → `draft` 제거 → `예약`/`발행완료`. (아래 표의 **상태** 컬럼이 그대로 이 단계.)

## 백로그 / 일정

상태값: `아이디어` · `작성중` · `검토` · `예약` · `발행완료`

| 상태 | 발행 예정일 | 제목 (가안) | 카테고리 | 시리즈 | # | 메모 |
| --- | --- | --- | --- | --- | --- | --- |
| 발행완료 | 2026-05-10 | 정적 블로그에 댓글 시스템 도입하기 (Giscus 편) | tutorial | 블로그 만들기 | 1 | — |
| 발행완료 | 2026-05-11 | GitHub Pages 블로그를 구글 검색에 노출시키기 (Search Console 편) | tutorial | 블로그 만들기 | 2 | — |
| 작성중 | 2026-05-18 | 블로그 SEO 마감 — OG 이미지 자동 생성 · RSS · JSON-LD | tutorial | 블로그 만들기 | 3 | 2편 "다음 편 예고"에 이미 공개함. `opengraph-image`, `/rss.xml`, `Article` JSON-LD |
| 아이디어 | 2026-05-25 | (RAG 논문 리뷰 시리즈 다음 편) | paper-review | RAG 논문 리뷰 시리즈 | 3 | 후보 논문 정해서 채우기 (→ 아래 시리즈 로드맵의 큐) |
| 아이디어 | 2026-06-01 | (프롬프트 최적화 or 신규 study 한 편) | study | | | — |
| 아이디어 | 2026-06-08 | Attention 이해하기 시리즈 마무리 (디코딩·추론 or 전체 정리) | study | Attention 이해하기 | 6 | 시리즈가 5편쯤에서 멈춰 있음 — 한 편으로 닫기 |
| 아이디어 | 2026-06-15 | (프로젝트 후기 한 편) | project | | | 최근에 만든 거 회고 — bc-ppt 후속? |
| 아이디어 | | 블로그 만들기 4편 — 배포 자동화 (GitHub Actions / 빌드 캐시 / 프리뷰) | tutorial | 블로그 만들기 | 4 | 옵션 — 3편 끝나고 |

## 시리즈 로드맵

### 블로그 만들기 — 진행 중 (2/3 발행)
1. ✅ Giscus 댓글 사전 설정 — `2026-05-10-giscus-comments-setup`
2. ✅ Google Search Console 등록 — `2026-05-11-google-search-console-github-pages`
3. ⬜ SEO 마감 — OG 이미지(`opengraph-image`) / RSS 점검 / JSON-LD `Article`
4. ⬜ _(옵션)_ 배포 자동화 — `deploy.yml` 뜯어보기, 빌드 캐시, PR 프리뷰
5. ⬜ _(옵션)_ 글쓰기 워크플로 — `/new-post`·`/review-post` 스킬, 이미지 파이프라인, frontmatter 규칙

### Attention 이해하기 — 멈춤 (5편)
- Q·K·V → 3 attentions → positional encoding → layernorm/residual → FFN 까지 옴.
- 디코더/추론 단계 한 편 또는 "전체 그림 한 장으로 정리" 한 편으로 마무리하면 깔끔.

### RAG 논문 리뷰 시리즈 — 진행 중 (2편)
- 발행: Seismic(sparse retrieval), Enterprise RAG Bench.
- 다음 후보 논문 큐:
  - 
  - 

### 프롬프트 최적화 시리즈 — 일단락 (3편: MetaSPO / GEPA / 비교)
- 새 기법·논문 나오면 추가편으로.

### 완료/유지보수 모드 시리즈
- Markdown 시리즈 · Git 시리즈 · 리눅스 명령어 시리즈 — 필요할 때 보강편만.

## 아이디어 풀 _(일정 미정 — 떠오르면 그냥 한 줄씩 적기)_

- 
- 
- 

## 발행 전 체크리스트 _(요약 — 자세히는 `/review-post`)_

- [ ] frontmatter: `title` / `date` / `category` / `tags` / `summary` 채움, **`draft` 제거**
- [ ] `summary` 150자 이내 + 본문 요약과 일치
- [ ] 첫 헤딩이 `##`
- [ ] 코드블록 언어 명시 / 이미지는 `<Figure>` 또는 `next/image`
- [ ] 시리즈면 `seriesOrder` + 이전·다음 편 연결 자연스러운지
- [ ] `paper-review`면 `<Paper>` 컴포넌트
- [ ] `npm run build` 통과
