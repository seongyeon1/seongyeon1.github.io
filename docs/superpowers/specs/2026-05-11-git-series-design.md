# 설계: "Git 시리즈" 심화 코스 (Pro Git 기반 연재)

- 작성일: 2026-05-11
- 상태: 승인됨 (구현 = 차례대로 `/new-post`로 각 편 작성)
- 출처: [Pro Git 책 (한국어판)](https://git-scm.com/book/ko/v2)
- 편집 일정: `docs/editorial-plan.md`의 백로그 표 참조

## 목표

기존 입문 2편("Git 시작하기", "Git Convention")을 잇는 **심화 코스 5편 + 옵션 1편**을 `series: "Git 시리즈"`로 연재한다. Pro Git 책의 핵심 챕터를 바탕으로 하되, **개념 설명 + 실무에서 실제로 쓰는 팁/습관/자동화**를 함께 담는다. 이 블로그의 기존 Git 글과 같은 톤·구조를 유지한다.

## 비목표 (YAGNI)

- Pro Git 전 챕터를 빠짐없이 옮기지 않는다 (Git on the Server, Git and Other Systems, Customizing Git 전체 등은 다루지 않음 — 필요 부분만 발췌).
- 이번 작업에서 MDX 초안은 만들지 않는다. 설계 문서 + editorial-plan 백로그 갱신까지만.
- 별도 신규 시리즈로 분리하지 않는다 (기존 "Git 시리즈" 연장).

## 공통 규약

- `series: "Git 시리즈"`, `category: "study"` (전 편 통일), 수식 없음 (`math` 필드 생략 — 기존 Git 글과 동일).
- frontmatter `date`는 기존 Git 글처럼 시간대 포함: `"YYYY-MM-DDTHH:MM:SS+09:00"`.
- `summary`는 150자 이내, 본문 요약과 일치.
- 제목 패턴: `주제 — 부제` (기존: "Git 시작하기 — 가장 자주 쓰는 명령어 9개", "혼자 써도 따라야 할 Git Convention — 커밋 메시지부터 브랜치까지").
- 본문 구조: `## 공부하게 된 계기`(또는 `## 왜 ~`) → 개념 섹션 번호 매김(`## 1) ...`) → `## 한 사이클 — ...` 실습 → **`## 실무에서 — 알아두면 좋은 것들`**(그 편 주제에 맞는 팁·alias·config·자동화) → `## 자주 막히는 지점` → `## 정리 및 다음 편` → `## 참고 자료`(Pro Git 해당 챕터 링크 포함).
- 실무 팁 섹션은 "왜 좋은지 한 줄 + 명령 한 줄" 식으로 짧게. 각 편 5~8개. 아래 편별 아웃라인의 "실무 팁:" 목록이 그 후보 풀.
- 코드블록 언어 명시 (`bash` / `text` 등), 다이어그램이 필요하면 텍스트 아트 또는 `<Figure>` (이미지는 `public/images/<slug>/`).

## 편별 아웃라인

### (기존) 1편 — Git 시작하기 — 가장 자주 쓰는 명령어 9개
발행됨. `2026-02-26-git-basics.mdx`, `seriesOrder: 1`. Pro Git ch.1–2 입문.

### (기존) 2편 — 혼자 써도 따라야 할 Git Convention
발행됨. `2026-03-05-git-convention.mdx`, `seriesOrder: 2`.

### 3편 — 브랜치, 제대로 — 만들고 옮기고 합치고 지우기
- `seriesOrder: 3`, tags: `["git", "branch", "merge"]`
- Pro Git: ch.3.1 브랜치란 무엇인가 / 3.2 브랜치와 Merge의 기초 / 3.3 브랜치 관리 / 3.4 브랜치 워크플로
- 섹션:
  1. `## 브랜치는 왜 가벼운가` — 브랜치 = 커밋을 가리키는 41바이트 포인터, `HEAD`가 "지금 어디" 표시
  2. `## 1) 브랜치 만들고 옮겨다니기` — `git branch`, `git switch -c` (구식 `checkout -b` 언급), `git switch -`
  3. `## 2) 합치기 — fast-forward vs 3-way merge` — 갈래가 없으면 빨리감기, 있으면 머지 커밋 생성. 그림으로.
  4. `## 3) 브랜치 정리` — `git branch -d`(머지된 것만)/`-D`(강제), `git branch --merged`/`--no-merged`
  5. `## 4) 워크플로 — topic 브랜치와 long-running 브랜치` — main은 항상 배포 가능, 작업은 topic 브랜치에서
  6. `## 한 사이클 — feature 브랜치로 작업 후 머지` — `switch -c feat/x` → 커밋 → `switch main` → `merge feat/x` → `branch -d feat/x`
  7. `## 실무에서 — 알아두면 좋은 것들`
  8. `## 자주 막히는 지점` — detached HEAD, 머지 안 된 브랜치 삭제 거부, 작업 중 브랜치 이동 막힘
  9. `## 정리 및 다음 편` — 머지 커밋이 거슬리는 사람도 있다 → rebase는 다음 편
- 실무 팁:
  - `git switch -` — 직전 브랜치로 토글 (`cd -`처럼). 브랜치 두 개 왔다갔다 할 때 필수.
  - 브랜치 이름에 슬래시(`feat/login`, `fix/typo`) — GitHub/GUI에서 폴더처럼 그룹핑됨.
  - 커밋 안 한 변경이 있어도 `git switch -c new` 하면 변경이 새 브랜치로 따라온다 (잘못 만든 브랜치 구제용).
  - 머지된 브랜치 한 방에 청소: `git branch --merged main | grep -v '^\* \|main' | xargs -r git branch -d`
  - `git branch -vv` — 각 로컬 브랜치의 upstream + 앞/뒤 커밋 수 한눈에. `git branch --sort=-committerdate`로 최근 작업 순.
  - detached HEAD에서 작업했다면 잃기 전에 `git switch -c rescue`로 브랜치를 붙여라.
  - alias: `git config --global alias.sw switch`, `alias.co checkout`, `alias.br branch` — 손에 익히면 빠르다.

### 4편 — merge냐 rebase냐 — 히스토리를 어떻게 그릴 것인가
- `seriesOrder: 4`, tags: `["git", "rebase", "merge", "workflow"]`
- Pro Git: ch.3.5 리모트 브랜치(일부) / 3.6 Rebase 하기 ("Rebase의 위험성" 강조)
- 섹션:
  1. `## 같은 결과, 다른 히스토리` — merge와 rebase는 둘 다 두 갈래를 합치지만 로그 모양이 다르다
  2. `## 1) merge — 갈라진 흔적을 남긴다` — 머지 커밋이 "여기서 합쳐졌다"를 기록. `--no-ff`로 항상 머지 커밋.
  3. `## 2) rebase — 커밋을 다시 적는다` — base를 옮겨 커밋을 차례로 재적용 → 일직선 히스토리. `git rebase main`
  4. `## 3) 황금률 — 공개된 커밋은 절대 rebase 하지 마라` — push한 커밋을 rebase하면 남의 히스토리가 깨진다. 왜인지 설명.
  5. `## 4) pull --rebase` — `git pull`이 만드는 불필요한 머지 커밋 피하기, `git config pull.rebase true`
  6. `## 5) 충돌 났을 때` — merge 충돌(한 번에 다 해결 후 커밋) vs rebase 충돌(커밋별로 해결, `--continue`), `--abort`로 원상복구, 충돌 마커 읽는 법
  7. `## 한 사이클 — 작업 중 main이 갱신됐을 때` — `fetch` → `rebase origin/main` → 충돌 해결 → `--continue` → `push`
  8. `## 실무에서 — 알아두면 좋은 것들`
  9. `## 자주 막히는 지점` — rebase 도중 멈춤, force push 사고, "어디까지 push했더라"
  10. `## 정리 및 다음 편` — 이 모든 게 리모트와 맞물린다 → 5편
- 실무 팁:
  - 팀 규칙으로 한 줄로 정해라: "PR 머지는 squash, 작업 중 최신화는 rebase, 절대 main에 force push 금지" 같은 식.
  - `git config --global pull.rebase true` (또는 `pull.ff only`) — `git pull`이 멋대로 머지 커밋 만드는 것 차단.
  - `git rebase -i HEAD~N` — push 전에 커밋 정리(squash/reword/drop). 리뷰 올리기 전 히스토리 다듬는 습관.
  - `git commit --fixup=<sha>` + `git rebase -i --autosquash` — 리뷰 수정사항을 원래 커밋에 자동으로 합쳐줌.
  - `git config --global rerere.enabled true` — 같은 충돌 반복 해결 자동 기억(긴 rebase·잦은 리베이스에서 체감 큼).
  - 충돌 시 한쪽 통째로 채택: `git checkout --ours <file>` / `--theirs <file>` (rebase 중엔 ours/theirs가 뒤바뀌니 주의 — 글에서 설명).
  - 막히면 일단 빠져나와라: `git merge --abort` / `git rebase --abort`. 외워둘 것.
  - force push는 항상 `git push --force-with-lease` (`--force`와 달리 남의 커밋을 안 날린다).
  - "내가 어디까지 push했지?": `git log @{push}..` 또는 `git log --oneline origin/main..HEAD`.

### 5편 — 리모트와 협업 — fetch / pull / push를 정확히
- `seriesOrder: 5`, tags: `["git", "remote", "github", "collaboration"]`
- Pro Git: ch.2.5 리모트 저장소 / ch.3.5 리모트 브랜치
- 섹션:
  1. `## origin은 그냥 별명이다` — 리모트 = 원격 저장소 URL에 붙인 이름
  2. `## 1) 리모트 다루기` — `git remote -v`, `remote add`, `remote show origin`, `remote rename`/`remove`
  3. `## 2) fetch vs pull — 가장 자주 헷갈리는 것` — `fetch`는 가져오기만(작업트리 안 건드림), `pull` = `fetch` + `merge`(또는 `--rebase`).
  4. `## 3) 원격 추적 브랜치` — `origin/main`은 "마지막으로 봤을 때 origin의 main", `git branch -r`/`-a`
  5. `## 4) push 제대로` — `git push -u origin feat/x`(upstream 설정), 이후 그냥 `git push`, `--force-with-lease`
  6. `## 5) 리모트 두 개 — fork 워크플로` — `origin`(내 fork) + `upstream`(원본), `fetch upstream` → `rebase upstream/main`
  7. `## 한 사이클 — 협업 흐름` — clone → 브랜치 → 작업/push → PR → upstream 갱신 따라가기
  8. `## 실무에서 — 알아두면 좋은 것들`
  9. `## 자주 막히는 지점` — `! [rejected] non-fast-forward`, upstream 미설정, `origin/main`이 안 갱신돼 보임
  10. `## 정리 및 다음 편` — 망했을 때 되돌리는 법은 다음 편
- 실무 팁:
  - `git fetch --all --prune`를 습관화 — 원격에서 삭제된 브랜치를 로컬 추적 목록에서도 정리. `git config --global fetch.prune true`로 자동화.
  - 한 번 `git push -u origin <branch>` 해두면 그 브랜치에선 이후 `git push`/`git pull`을 인자 없이.
  - SSH↔HTTPS 전환·레포 이동: `git remote set-url origin <new-url>` (clone 다시 안 해도 됨).
  - 큰 레포 빠르게: `git clone --depth=1 <url>` (shallow) 또는 `--filter=blob:none` (blobless partial clone).
  - 자격증명 매번 안 묻게: macOS면 `git config --global credential.helper osxkeychain` (토큰을 키체인에 저장).
  - 원격 브랜치 바로 체크아웃: `git switch -c feat/x origin/feat/x` (또는 그냥 `git switch feat/x`면 자동 추적).
  - `gh repo fork --clone --remote` — fork + clone + `upstream` 등록을 한 방에 (`gh` CLI).
  - `git push` 기본 동작 명시: `git config --global push.default simple` (의도치 않은 브랜치 push 방지).

### 6편 — 되돌리기 총정리 — reset · revert · restore · reflog · stash
- `seriesOrder: 6`, tags: `["git", "reset", "revert", "reflog"]`
- Pro Git: ch.2.4 되돌리기 / ch.7.3 Stashing / ch.7.7 Reset 명확히 알고 가기
- 섹션:
  1. `## 세 개의 트리` — Working Directory / Index(Staging) / HEAD. 그림 한 장. 이 그림이 이 편의 뼈대.
  2. `## 1) 파일 단위 되돌리기 — restore` — `git restore <file>`(작업트리), `git restore --staged <file>`(언스테이징). 구식 `checkout --`/`reset HEAD` 대응 표.
  3. `## 2) reset — soft / mixed / hard` — 각각 어느 트리까지 움직이나, `--mixed`가 기본, `--hard`는 위험. 커밋을 "취소"하는 게 아니라 브랜치 포인터를 옮기는 것.
  4. `## 3) revert — 공개 히스토리는 이걸로` — 되돌리는 새 커밋을 만든다 → push한 것도 안전. `reset`과의 차이.
  5. `## 4) commit --amend` — 마지막 커밋 메시지/내용 고치기, 단 push 전에만.
  6. `## 5) stash — 잠깐 치워두기` — `git stash`/`stash pop`/`stash list`, 언제 쓰나(브랜치 급히 바꿔야 할 때)
  7. `## 6) reflog — 망했을 때 구명줄` — `reset --hard`로 날린 커밋도 `git reflog`로 찾아 복구. "Git에서 진짜 잃어버리긴 어렵다."
  8. `## 이럴 땐 뭘 쓰지? — 처방 표` — 시나리오별 명령 (아래 실무 팁의 표가 핵심 자산)
  9. `## 실무에서 — 알아두면 좋은 것들`
  10. `## 자주 막히는 지점`
  11. `## 정리 및 다음 편` — 다음은 GitHub 활용
- 실무 팁 (이 편은 "처방 표"가 곧 실무 팁):
  - "방금 망쳤다" 처방 표 — `add` 취소: `git restore --staged <file>` / 마지막 커밋만 취소(변경 유지): `git reset --soft HEAD~1` / 마지막 커밋 메시지 고치기: `git commit --amend` / 이미 push한 커밋 되돌리기: `git revert <sha>` / 작업 중인데 브랜치 가야 함: `git stash` → 이동 → `git stash pop` / `reset --hard` 했는데 되돌리고 싶음: `git reflog` → `git reset --hard HEAD@{n}`.
  - `git reflog`는 무조건 외워라 — 기본 30일치 안전망. "Git에서 커밋은 거의 안 사라진다"의 근거.
  - `git stash -u`(untracked 포함), `git stash push -m "wip: form" src/Form.tsx`(메시지 + 일부 파일만).
  - `git restore --source=HEAD~3 path/to/file` — 특정 시점의 파일 하나만 가져오기.
  - WIP 커밋 습관: 작업 끊길 때마다 `git commit -m wip`, 나중에 `git rebase -i`로 정리 → 절대 잃어버릴 일 없음.
  - 실수로 큰 파일을 `git add` 함: `git restore --staged <file>` 후 `.gitignore`에 추가. 이미 커밋했으면 `git rm --cached`.
  - `git reset --keep <commit>` — 작업 중 변경은 보존하면서 브랜치만 옮기기 (`--hard`보다 안전).

### 7편 — GitHub 활용 — fork · PR · issue · Actions 맛보기
- `seriesOrder: 7`, tags: `["git", "github", "pull-request", "github-actions"]`
- Pro Git: ch.6 GitHub (6.1 계정 / 6.2 프로젝트 기여 / 6.3 프로젝트 관리 / 6.4 조직 / 6.5 GitHub 스크립팅 일부)
- 섹션:
  1. `## Git ≠ GitHub` — Git은 도구, GitHub은 그 위의 협업 플랫폼. 이 편은 후자.
  2. `## 1) 계정과 SSH 키` — SSH 키 생성·등록, HTTPS+토큰과의 차이
  3. `## 2) fork 워크플로` — fork → clone → `upstream` 추가 → topic 브랜치 → push → PR. (5편 fork 흐름 회수·확장)
  4. `## 3) 좋은 PR` — 작게·하나의 목적, 제목/본문(Summary/Changes/Test plan), draft PR, "리뷰어가 보기 쉽게"
  5. `## 4) 리뷰받기·하기` — 코멘트, suggestion(제안 커밋), `Files changed`, approve/request changes, 리뷰 반영 후 push
  6. `## 5) 이슈와 프로젝트 관리(가볍게)` — issue·label·milestone, `Closes #N`로 PR과 연결, Projects 보드 한 줄
  7. `## 6) GitHub Actions 맛보기` — `.github/workflows/*.yml` 한 줄 워크플로(push 시 `echo`), 그리고 "실제로 이 블로그는 이렇게 배포한다"며 `deploy.yml` 슬쩍 (build → upload-pages-artifact → deploy-pages). 깊게는 안 감.
  8. `## 실무에서 — 알아두면 좋은 것들`
  9. `## 자주 막히는 지점` — fork가 upstream보다 뒤처짐, PR 충돌, Actions 권한
  10. `## 정리 및 다음 편` — 여기까지로 실용편은 끝. 더 깊게 알고 싶으면 (옵션) 8편 internals.
- 실무 팁:
  - `gh` CLI 적극 활용: `gh pr create --fill`(커밋에서 제목·본문 자동), `gh pr checkout <num>`(리뷰할 PR 바로 받기), `gh pr view --web`, `gh run watch`(CI 끝날 때까지 지켜보기), `gh pr merge --squash --delete-branch`.
  - `.github/pull_request_template.md` — PR 본문 틀을 미리 박아두면 매번 안 채워도 됨. (이 블로그도 PR 본문 형식을 정해 씀.)
  - `.github/CODEOWNERS` — 특정 경로 바뀌면 자동으로 그 사람을 리뷰어로.
  - Draft PR로 일찍 올려라 — CI부터 돌리고, 방향 피드백을 일찍 받는다.
  - `Closes #12` / `Fixes #12` — PR 본문에 쓰면 머지 시 이슈 자동 종료.
  - 리뷰 코멘트는 ` ```suggestion ` 블록으로 — 작성자가 클릭 한 번에 반영.
  - 브랜치 보호 규칙(Settings → Branches): main에 직접 push 금지, PR + 리뷰 1 + CI 통과 필수.
  - GitHub Actions 위생: 액션 메이저 버전 핀(`actions/checkout@v6`), `concurrency`로 중복 실행 취소, `actions/cache`로 의존성 캐싱, 시크릿은 `${{ secrets.X }}` (← 이 블로그 `deploy.yml`이 산 예시).

### 8편 (옵션·마지막) — Git 내부 — `.git` 디렉토리를 열어보면
- `seriesOrder: 8`, tags: `["git", "internals"]`
- Pro Git: ch.10 Git의 내부 (10.1 Plumbing·Porcelain / 10.2 Git 객체 / 10.3 Git Refs / 10.4 Packfile / 10.5 Refspec 일부)
- 성격: "더 알고 싶은 사람용 보너스"임을 도입부에 명시. 안 읽어도 시리즈는 완결.
- 섹션:
  1. `## .git 안에는 뭐가 있나` — `objects/`, `refs/`, `HEAD`, `config`, `index` 한 줄씩
  2. `## 1) 네 가지 객체` — blob(파일 내용) / tree(디렉토리) / commit(스냅샷+메타) / tag. 전부 SHA로 주소화된 내용.
  3. `## 2) 직접 들여다보기` — `git hash-object -w`, `git cat-file -t`/`-p`, `git ls-tree`로 커밋 → tree → blob 따라가기
  4. `## 3) refs와 HEAD는 그냥 파일` — `cat .git/refs/heads/main`, `cat .git/HEAD`. 브랜치 = 파일 한 줄. 그래서 브랜치가 가볍다.
  5. `## 4) packfile 맛보기` — 느슨한 객체 → `git gc` → packfile로 압축. 깊게는 안 감.
  6. `## 실무에서 — 알아두면 좋은 것들`
  7. `## 회수 — 앞 편들이 이제 보인다` — reset이 왜 포인터 이동인지, rebase가 왜 "다시 적기"인지, "잃어버리기 어렵다"가 왜인지 — 객체 모델로 다시 설명.
  8. `## 참고 자료` — Pro Git ch.10
- 실무 팁:
  - `git fsck --lost-found` — dangling 커밋·blob 복구. reflog로도 안 잡힐 때 마지막 수단.
  - `.git/info/exclude` — 공유 안 하는 개인용 ignore (`.gitignore`와 달리 커밋 안 됨).
  - `git rev-parse HEAD` / `git rev-parse --short HEAD` — 스크립트·CI에서 현재 SHA 얻기 (이 블로그도 빌드에서 씀직).
  - `git count-objects -vH` — 레포가 왜 무거운지 진단. `git gc --aggressive`는 거의 필요 없다(자동 gc로 충분).
  - `git cat-file -p HEAD` 한 번 쳐보면 "커밋은 그냥 텍스트구나"가 와닿는다 — 디버깅 직관이 생김.

## 스케줄 (editorial-plan에 반영)

"블로그 만들기" 시리즈가 끝나는 5/18 이후부터, RAG·Attention 등 무거운 글과 격주로 번갈아:

| 발행 예정 | 글 |
|---|---|
| 2026-05-25 | Git 3편 (브랜치) |
| 2026-06-08 | Git 4편 (merge vs rebase) |
| 2026-06-22 | Git 5편 (리모트와 협업) |
| 2026-07-06 | Git 6편 (되돌리기 총정리) |
| 2026-07-20 | Git 7편 (GitHub 활용) |
| 2026-08-03 | Git 8편 (internals, 옵션) |

사이 주(6/1, 6/15, 6/29, 7/13)는 기존 계획대로(RAG 논문 리뷰 / Attention 마무리 / project 후기). 전부 조정 가능 — 준비 상황 따라 Git 편을 당기거나 미룬다.

## 산출물

1. 이 설계 문서 (`docs/superpowers/specs/2026-05-11-git-series-design.md`)
2. `docs/editorial-plan.md` / `docs/editorial-plan.csv` — Git 3~8편 백로그 행 추가
3. 각 편 MDX는 차례가 오면 `/new-post`로 작성 (이 문서의 아웃라인 + 실무 팁 목록을 가이드로 사용)

> 참고: `docs/posting-plan.md` / `posting-plan.csv`는 별개 — `scripts/publish-post.sh`가 쓰는 *자동 발행 스케줄*(기존 글을 날짜별로 commit·push)이다. 새 글 기획·일정은 `docs/editorial-plan.md`를 본다.

## 열린 결정 (나중에)

- 7편 분량이 크면 (PR/리뷰) ↔ (issue·Projects·Actions) 2편으로 분할.
- 8편(internals)은 7편 발행 시점에 포함 여부 최종 결정.
