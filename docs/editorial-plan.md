# 블로그 편집 계획 (Editorial Plan)

> 새 글 기획·발행 일정·아이디어를 한 곳에서 관리하는 개인용 메모. 빌드에는 포함되지 않는다(`docs/`).
> 스프레드시트로 보고 싶으면 `docs/editorial-plan.csv`를 열면 된다 (백로그 표와 같은 컬럼).
> 백로그 표는 위에서부터 **곧 발행 → 나중 → 아이디어** 순으로 정렬해두면 한눈에 보인다.
>
> ⚠️ `docs/posting-plan.md` / `posting-plan.csv`는 이 파일과 별개다 — 그쪽은 `scripts/publish-post.sh`가 쓰는 **기존 글 자동 발행 스케줄**(날짜별로 content 파일을 commit·push). *새 글을 기획하는 곳은 여기*.

## 운영 원칙 _(취향대로 조정)_

- **주기**: 새 글 주 1편, **매주 월요일** 목표. 바쁜 주는 격주로 떨어뜨려도 OK — 빵꾸보다 일관성.
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
| 아이디어 | 2026-05-25 | 브랜치, 제대로 — 만들고 옮기고 합치고 지우기 | study | Git 시리즈 | 3 | Pro Git ch.3.1–3.4 / 아웃라인: `docs/superpowers/specs/2026-05-11-git-series-design.md` |
| 아이디어 | 2026-06-01 | (RAG 논문 리뷰 시리즈 다음 편) | paper-review | RAG 논문 리뷰 시리즈 | 3 | 후보 논문 정해서 채우기 (→ 아래 시리즈 로드맵의 큐) |
| 아이디어 | 2026-06-08 | merge냐 rebase냐 — 히스토리를 어떻게 그릴 것인가 | study | Git 시리즈 | 4 | Pro Git ch.3.5–3.6 (Rebase의 위험성 강조) |
| 아이디어 | 2026-06-15 | Attention 이해하기 시리즈 마무리 (디코딩·추론 or 전체 정리) | study | Attention 이해하기 | 6 | 시리즈가 5편쯤에서 멈춰 있음 — 한 편으로 닫기 |
| 아이디어 | 2026-06-22 | 리모트와 협업 — fetch / pull / push를 정확히 | study | Git 시리즈 | 5 | Pro Git ch.2.5, 3.5 / 1편의 remote·push·pull을 깊게 |
| 아이디어 | 2026-06-29 | (프롬프트 최적화 or 신규 study 한 편) | study | | | — |
| 아이디어 | 2026-07-06 | 되돌리기 총정리 — reset · revert · restore · reflog · stash | study | Git 시리즈 | 6 | Pro Git ch.2.4, 7.3, 7.7 / 세 개의 트리 그림 |
| 아이디어 | 2026-07-13 | (프로젝트 후기 한 편) | project | | | 최근에 만든 거 회고 — bc-ppt 후속? |
| 아이디어 | 2026-07-20 | GitHub 활용 — fork · PR · issue · Actions 맛보기 | study | Git 시리즈 | 7 | Pro Git ch.6 / 이 블로그 `deploy.yml`을 예시로 |
| 아이디어 | 2026-08-03 | Git 내부 — `.git` 디렉토리를 열어보면 | study | Git 시리즈 | 8 | 옵션·마지막 / Pro Git ch.10 / 7편 발행 시 포함 여부 최종 결정 |
| 아이디어 | | 블로그 만들기 4편 — 배포 자동화 (빌드 캐시 / 프리뷰) | tutorial | 블로그 만들기 | 4 | 옵션 — 3편 끝나고. (Actions 기초는 Git 7편에서 다룸) |

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
3. ⬜ 브랜치, 제대로 (ch.3.1–3.4)
4. ⬜ merge냐 rebase냐 (ch.3.5–3.6)
5. ⬜ 리모트와 협업 — fetch/pull/push (ch.2.5, 3.5)
6. ⬜ 되돌리기 총정리 — reset/revert/restore/reflog/stash (ch.2.4, 7.3, 7.7)
7. ⬜ GitHub 활용 — fork/PR/issue/Actions 맛보기 (ch.6)
8. ⬜ _(옵션)_ Git 내부 — `.git` 디렉토리 (ch.10)

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
- Markdown 시리즈 · 리눅스 명령어 시리즈 — 필요할 때 보강편만.

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
