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
- **워크플로**: `아이디어` → `/new-post`로 초안(`draft: true`) → `작성중` → `/review-post` → `검토` → `ai-blog-auto-publisher`가 하루 1편 `draft` 제거·검증·push → `발행완료`. (아래 표의 **상태** 컬럼이 그대로 이 단계.)
- **AI 글쓰기 자동화 보강 룰**: 자동 후보는 primary source가 있는 것만 채택하고, `paper-review`/`tool`/`tutorial`/`trend`를 주 단위로 섞는다. `draft-writer`는 초안 생성까지만, `auto-publisher`만 공개 발행을 수행한다. 실패 시 발행하지 말고 draft를 유지한다.
- **작성 마일스톤**: 발행일 기준 **D-7** = `/new-post`로 초안 시작 → **D-3** = `/review-post` 검토 → **D-1** = `draft` 제거하고 `예약` → **D** = 발행. 시리즈 1편 작성할 때 다음 편 outline 까지 잡아둘 것 — 매일 cadence 라 별도 outline 시간 없음.

## 백로그 / 일정

상태값: `아이디어` · `작성중` · `검토` · `예약` · `발행완료`

| 상태 | 발행 예정일 | 제목 (가안) | 카테고리 | 시리즈 | # | 메모 |
| --- | --- | --- | --- | --- | --- | --- |
| 발행완료 | 2026-05-10 | 정적 블로그에 댓글 시스템 도입하기 (Giscus 편) | tutorial | 블로그 만들기 | 1 | — |
| 발행완료 | 2026-05-11 | GitHub Pages 블로그를 구글 검색에 노출시키기 (Search Console 편) | tutorial | 블로그 만들기 | 2 | — |
| 발행완료 | 2026-05-12 | Container와 Docker 기초 — 왜 필요하고 어떻게 작동하는가 | study | 배포 환경 이해하기 | 1 | `2026-05-30-docker-container-basics.mdx` (frontmatter date: 5/12) — Image·Container·Registry, VM vs Container |
| 발행완료 | 2026-05-13 | Kubernetes 핵심 — Pod, Service, Deployment가 하는 일 | study | 배포 환경 이해하기 | 2 | `2026-05-31-kubernetes-fundamentals.mdx` (5/13) — Pod·Service·Deployment, 선언형 배포, YAML |
| 발행완료 | 2026-05-14 | AWS 핵심 서비스 — EC2, S3, RDS, VPC로 클라우드 인프라 구성하기 | study | 배포 환경 이해하기 | 3 | `2026-06-01-aws-core-services.mdx` (5/14) — EC2·S3·RDS·VPC, 프리티어, 실전 아키텍처 |
| 발행완료 | 2026-05-15 | 배포 전략 — Blue-Green, Canary, Rolling Deployment 무중단 배포의 기술 | study | 배포 환경 이해하기 | 4 | `2026-06-02-deployment-strategies.mdx` (5/15) — 3가지 전략 비교, Kubernetes 구현, GitHub Actions 예제 |
| 발행완료 | 2026-05-16 | GitOps와 CI/CD — GitHub Actions에서 Kubernetes까지 자동화 배포 파이프라인 | study | 배포 환경 이해하기 | 5 | `2026-06-03-gitops-cicd.mdx` (5/16) — CI/CD 파이프라인, GitHub Actions, ArgoCD, GitOps 원칙 |
| 발행완료 | 2026-05-17 | 모니터링·로깅 — Prometheus, Grafana, ELK Stack으로 운영 환경 관찰하기 | study | 배포 환경 이해하기 | 6 | `2026-06-04-monitoring-logging.mdx` (5/17) — Prometheus·Grafana·ELK, 알람, 운영 체크리스트 |
| 발행완료 | 2026-05-25 | 브랜치, 제대로 — 만들고 옮기고 합치고 지우기 | study | Git 시리즈 | 3 | 발행 — `2026-05-25-git-branching.mdx` (Pro Git ch.3.1–3.4) |
| 발행완료 | 2026-05-18 | 블로그 SEO 마감 — OG 이미지 자동 생성 · RSS · JSON-LD | tutorial | 블로그 만들기 | 3 | `2026-05-18-blog-seo-og-rss-jsonld.mdx` |
| 발행완료 | 2026-05-19 (화) | [논문 리뷰] A-RAG: Agentic RAG가 2026년의 기본기가 된 이유 | paper-review | RAG 논문 리뷰 시리즈 | 3 | `2026-05-19-agentic-rag-review.mdx` (A-RAG arXiv 2602.03442) |
| 발행완료 | 2026-05-20 (수) | merge냐 rebase냐 — 히스토리를 어떻게 그릴 것인가 | study | Git 시리즈 | 4 | `2026-05-20-git-merge-vs-rebase.mdx` (Pro Git ch.3.5–3.6) |
| 발행완료 | 2026-05-21 (목) | Attention 이해하기 시리즈 마무리 (디코딩·추론 or 전체 정리) | study | Attention 이해하기 | 6 | `2026-05-21-attention-complete-guide.mdx` |
| 예약 | 2026-05-22 (금) | [논문 리뷰] DeepSeek-V4 — 1M Context에서 KV Cache 10% 수준으로 압축한 Hybrid Attention | paper-review | 논문 리뷰 | | Attention 시리즈 마무리(FFN) 다음. Q/K/V·Multi-Head와 연결. `2026-05-22-deepseek-v4-paper-review.mdx` |
| 발행완료 | 2026-05-23 (토) | 리모트와 협업 — fetch / pull / push를 정확히 | study | Git 시리즈 | 5 | `2026-05-23-git-remote-workflow.mdx` |
| 발행완료 | 2026-05-24 (일) | Harness 만들기 1편 — 왜 만들고 어떻게 짰나 (skills · agents · hooks 구조) | project | Harness 만들기 | 1 | `2026-05-24-harness-build-intro.mdx` |
| 발행완료 | 2026-05-25 (월) | 되돌리기 총정리 — reset · revert · restore · reflog · stash | study | Git 시리즈 | 6 | `2026-05-25-git-undo-reset-revert-restore.mdx` |
| 발행완료 | 2026-05-25 (월) | RPG 포트폴리오 만들기 — Kaboom.js 픽셀 RPG 단일 페이지 (NDA 마스킹 메커니즘) | project | | | `2026-05-25-rpg-portfolio-making.mdx` — No-Build · Kaboom.js 3000 · `PUBLIC_MODE` 한 줄 토글 |
| 발행완료 | 2026-05-26 (화) | GitHub 활용 — fork · PR · issue · Actions 맛보기 | study | Git 시리즈 | 7 | `2026-05-26-github-essentials-fork-pr-issue-actions.mdx` |
| 발행완료 | 2026-05-27 (수) | Harness 만들기 2편 — 듀얼 메모리 + `sy` 글로벌 CLI 워크플로 | project | Harness 만들기 | 2 | `2026-05-27-harness-build-part2-dual-memory-cli-workflow.mdx` |
| 발행완료 | 2026-05-28 (목) | Git 내부 — `.git` 디렉토리를 열어보면 | study | Git 시리즈 | 8 | `2026-05-28-git-inside-dot-git-directory.mdx` |
| 발행완료 | 2026-05-29 (금) | Braincrew Wiki — Obsidian으로 쓰고 AI Routine이 정제하는 팀 위키 | project | | | `2026-05-29-braincrew-wiki-team-knowledge-base.mdx` — Karpathy LLM-wiki 패턴 팀 확장. raw → routine → 정제 PR |
| 발행완료 | 2026-06-05 (목) | AI 엔지니어 필독 논문 10개 — ① 기초 아키텍처 (Attention, VAE, GANs) | paper-review | AI 필독 10개 논문 | 1 | `2026-05-23-ai-essential-papers-1-foundations.mdx` (frontmatter date: 2026-06-05) |
| 발행완료 | 2026-06-06 (금) | AI 엔지니어 필독 논문 10개 — ② NLP 혁명과 멀티모달 (BERT, GPT, ViT, DDPM) | paper-review | AI 필독 10개 논문 | 2 | `2026-06-06-ai-essential-papers-2-nlp-multimodal.mdx` |
| 발행완료 | 2026-06-07 (토) | AI 엔지니어 필독 논문 10개 — ③ 실무 적용과 학술의 속도 (RAG, LoRA, PEFT) | paper-review | AI 필독 10개 논문 | 3 | `2026-06-07-ai-essential-papers-3-practical-applications.mdx` |
| 발행완료 | 2026-06-10 (화) | 블로그 만들기 4편 — 배포 자동화 (빌드 캐시 / 프리뷰) | tutorial | 블로그 만들기 | 4 | `2026-06-10-blog-deployment-automation-build-cache-preview.mdx` |
| 발행완료 | 2026-05-21 (목) | [논문 리뷰] Code as Agent Harness — 에이전트의 계획·실행·검증 루프 설계 | paper-review | 논문 리뷰 | | `2026-05-21-code-as-agent-harness-review.mdx` |
| 발행완료 | 2026-06-22 | [논문 리뷰] HyperTool — 에이전트의 도구 호출 단위를 다시 설계하기 | paper-review | 논문 리뷰 | 9 | `2026-06-15-hypertool-agent-tool-call-granularity.mdx` — 자동 발행 완료 |
| 발행완료 | 2026-06-23 | GitHub Agentic Workflows: 에이전트를 repo 안으로 넣으면 달라지는 것 | tutorial | 개발자 AI 워크플로 | 1 | `2026-06-15-github-agentic-workflows-repo-native-agents.mdx` — 자동 발행 완료 |
| 아이디어 | 미정 | olmo-eval: 모델 개발 루프를 위한 평가 워크벤치 | tutorial | AI 평가/운영 | | HF/AllenAI 글 기반 — benchmark selection, regression tracking, release QA를 개발 루프에 넣는 법 |
| 아이디어 | 미정 | PyTorch profiling: nn.Linear에서 fused MLP까지 병목을 줄이는 법 | tutorial | AI 추론 최적화 | | HF 글 기반 — profiler trace, operator breakdown, fused MLP 실전 튜토리얼 |
| 아이디어 | 미정 | Copilot code review controls: AI 리뷰어를 팀 규칙에 맞추는 방법 | tutorial | 개발자 AI 워크플로 | 2 | GitHub changelog 기반 — review scope, content exclusion, custom instruction 체크리스트 |
| 아이디어 | 미정 | TensorRT FP8 quantization: 체크포인트를 고성능 inference engine으로 바꾸기 | tutorial | AI 추론 최적화 | | NVIDIA 글 기반 — FP8, calibration, TensorRT engine build, latency/accuracy trade-off |
| 아이디어 | 미정 | OpenEnv: Agentic RL에서 환경 표준화가 중요한 이유 | study | Agentic RL | | HF 글 기반 — environment API, reward, reset/replay, benchmark 재현성 |
| 아이디어 | 미정 | [논문 리뷰] Recursive Agent Harnesses — subagent를 코드처럼 재귀 호출하는 패턴 | paper-review | 논문 리뷰 | | arXiv 2606.13643 — recursive call, context 격리, delegation boundary, 검증 루프 |
| 발행완료 | 2026-06-24 | Copilot CLI + Language Server: 코드 에이전트에 진짜 코드 지능 붙이기 | tutorial | 개발자 AI 워크플로 | 3 | `2026-06-16-copilot-cli-lsp-code-intelligence.mdx` — 자동 발행 완료, GitHub AI 글 기반 — LSP symbol/diagnostics/references를 agent tool로 쓰는 법 |
| 아이디어 | 미정 | GitHub Copilot CLI delegation: 에이전트가 언제 직접 하고 언제 위임해야 하나 | tutorial | 개발자 AI 워크플로 | 4 | GitHub AI 글 기반 — 작업 분류, delegation policy, latency/신뢰도 trade-off |
| 발행완료 | 2026-06-25 | 외부 코딩 에이전트를 붙이기 전에 보안 게이트부터 설계하자 | tutorial | 개발자 AI 워크플로 | 5 | `2026-06-18-third-party-coding-agent-security-gate.mdx` — 자동 발행 완료, GitHub changelog 기반 — third-party coding agent 권한·CodeQL·dependency review·secret scanning 게이트 설계 |
| 발행완료 | 2026-06-26 | [논문 리뷰] SafeClawBench — tool-using agent 보안 실패를 세 단계로 분리하기 | paper-review | 논문 리뷰 | | `2026-06-20-safeclawbench-agent-security-benchmark.mdx` — 자동 발행 완료, arXiv 2606.18356 — semantic/audit-evidence/sandbox harm 분리, agent QA·sandbox gate 설계 |
| 아이디어 | 미정 | [논문 리뷰] MemTrace — LLM memory system 디버깅과 오류 attribution | paper-review | 논문 리뷰 | | arXiv 2605.28732 — memory evolution trace, 장기 대화/에이전트 memory regression test 관점 |
| 아이디어 | 미정 | [논문 리뷰] HieraRAG — RAG benchmark granularity를 어떻게 설계할까 | paper-review | RAG 논문 리뷰 시리즈 | | arXiv 2606.12789 — synthetic question hierarchy, discriminative power, evaluation set 설계 |
| 아이디어 | 미정 | Omnigent: 여러 코딩 에이전트를 갈아 끼우는 meta-harness 설계 | tutorial | 개발자 AI 워크플로 | | GitHub repo 기반 — adapter, policy, sandbox, collaboration layer를 agent-neutral하게 설계하는 법 |
| 아이디어 | 미정 | XcodeBuildMCP: iOS/macOS 빌드·테스트를 MCP tool로 노출하기 | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — xcodebuild, simulator, test parsing을 agent-safe workflow로 감싸는 패턴 |
| 아이디어 | 미정 | [논문 리뷰] LedgerAgent — tool-calling agent에 명시적 상태 원장을 붙이기 | paper-review | 논문 리뷰 | | arXiv 2606.20529 — task state ledger, tool precondition, policy-adherent action gate 설계 |
| 아이디어 | 미정 | [논문 리뷰] Probe-and-Refine — AGENTS.md를 벤치마크로 튜닝하는 법 | paper-review | 개발자 AI 워크플로 | | arXiv 2606.20512 — synthetic bug-fix probe로 repo guidance를 진단·패치하는 coding agent 운영법 |
| 아이디어 | 미정 | [논문 리뷰] ToolChain-CRC — RAG+tool agent의 trajectory risk control | paper-review | Agentic RAG | | arXiv 2606.18467 — step-level risk score, conformal calibration, anytime alarm을 QA gate로 쓰기 |
| 아이디어 | 미정 | Google ADK: code-first agent 개발·평가·배포 툴킷 훑어보기 | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — eval, session state, tool boundary, deployment path를 agent framework 선택 기준으로 정리 |
| 아이디어 | 미정 | [논문 리뷰] Sovereign Execution Brokers — agentic control plane에서 mutation 권한 분리하기 | paper-review | 논문 리뷰 | | arXiv 2606.20520 — certificate-bound authority, assurance boundary, execution broker를 agent infra 보안 경계로 해석 |
| 아이디어 | 미정 | [논문 리뷰] H-RePlan — cross-device agent failure를 device-local recovery로 나누기 | paper-review | 논문 리뷰 | | arXiv 2606.20487 — multi-device computer-use agent의 local/global replanning boundary와 실패 복구 전략 |
| 아이디어 | 미정 | hol-guard: coding agent와 MCP tool 실행 전 보안 게이트 세우기 | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — Codex/Claude Code/Cursor/Gemini CLI의 MCP·plugin·skill 호출 전 policy enforcement 패턴 |
| 아이디어 | 미정 | Claw-Eval: LLM-as-agent 평가를 human-verified task harness로 만들기 | tutorial | AI 평가/운영 | | GitHub repo 기반 — task curation, human verification, verifier 설계를 agent QA 운영법으로 정리 |
| 아이디어 | 미정 | [논문 리뷰] When Lower Privileges Suffice — tool agent의 과권한 선택을 줄이는 법 | paper-review | 논문 리뷰 | | arXiv 2606.20023 — 최소권한 tool routing, capability modeling, audit log 기반 agent 보안 설계 |
| 아이디어 | 미정 | [논문 리뷰] AtomMem — LLM agent memory를 atomic fact 단위로 디버깅하기 | paper-review | 논문 리뷰 | | arXiv 2606.19847 — fact extraction/update policy, conflict handling, memory regression test 관점 |
| 아이디어 | 미정 | [논문 리뷰] ScholarQuest — agentic paper search benchmark로 연구 에이전트 평가하기 | paper-review | AI 평가/운영 | | arXiv 2606.20235 — taxonomy-guided paper search, evidence trail, verifier 설계 |
| 아이디어 | 미정 | hf CLI for agents: 사람이 쓰던 CLI를 agent-optimized interface로 바꾸기 | tutorial | Agent/MCP 실전 | | Hugging Face 글 기반 — structured output, dry-run, auth boundary, retry-safe command 디자인 |
| 아이디어 | 미정 | [논문 리뷰] Probabilistic Verification — 불확실한 tool agent 정책 검증 | paper-review | 논문 리뷰 | | arXiv 2606.20510 — probabilistic predicate/state transition, Datalog식 runtime policy monitor, agent 보안 게이트 설계 |
| 아이디어 | 미정 | [논문 리뷰] Contagion Networks — multi-agent 평가 bias 전염 | paper-review | AI 평가/운영 | | arXiv 2606.20493 — LLM-as-judge bias propagation, judge diversity, evidence-based 평가 루프 |
| 발행완료 | 2026-06-27 | OpenAI Agents Python: handoff·guardrail·trace를 갖춘 lightweight agent framework | guide | Agent/MCP 실전 | | `2026-06-23-openai-agents-python-handoff-guardrail-tracing.mdx` — 자동 발행 완료, GitHub repo 기반 — agent/handoff/tool/guardrail/trace abstraction을 프레임워크 선택 체크리스트로 정리 |
| 아이디어 | 미정 | LangGraph 1.x: durable execution으로 장기 실행 agent를 만드는 법 | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — state, checkpoint, interrupt, replay, observability 중심 production agent 운영 |
| 아이디어 | 미정 | [논문 리뷰] EnterpriseClawBench — 실제 업무 세션으로 agent를 평가하기 | paper-review | AI 평가/운영 | | arXiv 2606.23654 — workplace session 기반 task extraction, verifier, privacy filtering, regression suite 설계 |
| 발행완료 | 2026-06-29 | [논문 리뷰] Plans Don't Persist — context management가 agent runtime의 load-bearing인 이유 | paper-review | 논문 리뷰 | | `2026-06-25-plans-dont-persist-context-management-agents.mdx` — 자동 발행 완료, arXiv 2606.22953 — plan persistence, context partitioning, checkpoint, deviation detector를 agent harness 패턴으로 정리 |
| 아이디어 | 미정 | [논문 리뷰] Intent-Governed Tool Authorization — tool agent 권한을 사용자 의도와 묶기 | paper-review | 논문 리뷰 | | arXiv 2606.22916 — intent-bound capability, authorization token, audit log, least privilege gate 설계 |
| 아이디어 | 미정 | Mastra: TypeScript agent framework에서 workflow·memory·eval을 한 번에 보기 | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — TS 팀을 위한 workflow, tool, memory, eval, deployment surface 체크리스트 |
| 아이디어 | 미정 | [논문 리뷰] OpenThoughts-Agent — agentic model 학습 데이터 recipe | paper-review | 논문 리뷰 | | arXiv 2606.24855 — tool-use/reasoning/task trajectory 데이터 생성과 공개 agent 학습 파이프라인 체크리스트 |
| 아이디어 | 미정 | [논문 리뷰] Grading the Grader — agentic data analysis system 평가법 | paper-review | AI 평가/운영 | | arXiv 2606.24839 — 코드 실행, 수치 검증, 자연어 진단을 분리한 data analysis agent verifier 설계 |
| 아이디어 | 미정 | [논문 리뷰] World Models in Pieces — general agent capability map 인증 | paper-review | AI 평가/운영 | | arXiv 2606.24842 — 평균 점수 대신 world-model 조각별 coverage gap과 구조적 보증을 보는 agent certification |
| 아이디어 | 미정 | Harbor: agent eval과 RL environment를 한 프레임워크에서 돌리기 | tutorial | AI 평가/운영 | | GitHub repo 기반 — environment abstraction, evaluator, rollout log, reward/metric 관리 |
| 아이디어 | 미정 | [논문 리뷰] Unfireable Safety Kernel — 에이전트 런타임 밖에 안전 경계를 두기 | paper-review | 논문 리뷰 | | arXiv 2606.26057 — agent 내부 guardrail 대신 외부 reference monitor/tool broker로 실행 시간 안전 경계를 설계하는 법 |
| 아이디어 | 미정 | [논문 리뷰] Is GraphRAG Needed? — Basic RAG에서 Agentic RAG까지 선택 기준 | paper-review | Agentic RAG | | arXiv 2606.25656 — basic/modular/graph/agentic RAG를 scenario matrix와 context optimization 비용으로 비교 |
| 아이디어 | 미정 | [논문 리뷰] Quantization Inflates Reasoning — low-bit 모델의 숨은 reasoning 비용 | paper-review | AI 추론 최적화 | | arXiv 2606.25519 — 양자화 후 CoT token inflation, total reasoning budget, serving cost 평가법 |
| 아이디어 | 미정 | Microsoft Agent Framework: Python/.NET multi-agent workflow를 한 런타임으로 보기 | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — orchestration, deployment, observability, enterprise runtime integration 체크리스트 |
| 아이디어 | 미정 | [논문 리뷰] GUI Agents with Hindsight — 실패 경험을 계획 데이터로 바꾸기 | paper-review | 논문 리뷰 | | arXiv 2606.27330 — autonomous exploration, hindsight experience, task decomposition을 browser/GUI agent 운영 관점으로 정리 |
| 아이디어 | 미정 | [논문 리뷰] Co-Failure Ceiling — mixture-of-agents 성능 상한선 | paper-review | AI 평가/운영 | | arXiv 2606.27288 — 67개 frontier model co-failure 구조로 routing/voting/mixture-of-agents 설계 기준 만들기 |
| 아이디어 | 미정 | [논문 리뷰] BINEVAL — LLM 평가를 이진 질문 묶음으로 만들기 | paper-review | AI 평가/운영 | | arXiv 2606.27226 — opaque judge score 대신 binary question decomposition과 self-improvement loop 설계 |
| 아이디어 | 미정 | [논문 리뷰] RiVER — 정답 없는 문제에서도 LLM 강화학습하기 | paper-review | 논문 리뷰 | | arXiv 2606.27369 — ranking-induced verifiable reward로 agent 업무 post-training 신호를 만드는 법 |
| 발행완료 | 2026-06-30 | Headroom: tool output과 RAG chunk를 LLM 앞에서 압축하는 context layer | tool | Agent/MCP 실전 | | `2026-06-27-headroom-context-compression-layer.mdx` — 자동 발행 완료, GitHub repo 기반 — output compression, MCP server/proxy, token budget과 answer preservation 체크리스트 |
| 아이디어 | 미정 | [논문 리뷰] Temporal Validity in Retrieval Memory — stale fact를 agent RAG에서 제거하기 | paper-review | Agentic RAG | | arXiv 2606.26511 — temporal validity, stale/current conflict resolution, retrieval memory hygiene 설계 |
| 아이디어 | 미정 | [논문 리뷰] MIRROR — agentic RAG를 novelty-constrained MCTS로 red-team하기 | paper-review | Agentic RAG | | arXiv 2606.26793 — multimodal agentic RAG 공격면, memory-guided MCTS, novelty-constrained red-team harness |
| 아이디어 | 미정 | [논문 리뷰] Semantic Early-Stopping — multi-agent loop를 언제 멈춰야 할까 | paper-review | AI 평가/운영 | | arXiv 2606.27009 — semantic convergence와 utility plateau 기반 반복 agent 비용·품질 제어 |
| 아이디어 | 미정 | gortex: code agent를 위한 local graph 기반 code-intelligence engine | tutorial | 개발자 AI 워크플로 | | GitHub repo 기반 — multi-repo symbol graph, MCP/API, token budget 절감형 coding agent context layer |
| 아이디어 | 미정 | [논문 리뷰] Prompt Injection in Résumé Screening — 자동 채용 agent의 injection surface | paper-review | 논문 리뷰 | | arXiv 2606.27287 — 제출 문서를 untrusted data로 다루는 document-ranking agent 보안 체크리스트 |
| 아이디어 | 미정 | [논문 리뷰] Paved with True Intents — safety classifier에 의도 모델링 넣기 | paper-review | 논문 리뷰 | | arXiv 2606.27210 — intent-aware guardrail, harm label, tool authorization gate 설계 |
| 아이디어 | 미정 | [논문 리뷰] E-TTS — embodied agent에서 test-time scaling은 어떻게 작동하나 | paper-review | 논문 리뷰 | | arXiv 2606.27268 — 실행 이력·환경 피드백을 policy에 다시 넣는 embodied reasoning scaling |
| 아이디어 | 미정 | Strands Agents Evals: agent 평가를 프레임워크 독립적으로 운영하기 | tutorial | AI 평가/운영 | | GitHub repo 기반 — evaluator abstraction, task dataset, CI regression suite 설계 |
| 아이디어 | 미정 | [논문 리뷰] NOVA — 추천 시스템 아키텍처 진화를 검증 가능한 agent harness로 만들기 | paper-review | 논문 리뷰 | | arXiv 2606.27243 — verification-aware architecture evolution, production metric loop, 안전한 추천 모델 실험 자동화 |
| 아이디어 | 미정 | [논문 리뷰] When are likely answers right? — LLM sequence probability와 correctness calibration | paper-review | AI 평가/운영 | | arXiv 2606.27359 — logprob 기반 confidence, fallback routing, judge-free QA gate 설계 |
| 아이디어 | 미정 | [논문 리뷰] Hardware-Safety-Gated LLM Control — 실험 장비 조작 agent의 물리 안전 경계 | paper-review | 논문 리뷰 | | arXiv 2606.27231 — native control code, hardware interlock, per-operation safety gate를 lab automation agent 설계로 정리 |
| 아이디어 | 미정 | LiveKit Agents: realtime voice/video agent를 production runtime으로 다루기 | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — room/session, turn detection, streaming, interruption, tool latency를 voice agent 운영 관점으로 정리 |
| 아이디어 | 미정 | agent-harness-generator: 팀별 agent harness를 scaffolding하는 meta-tool | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — CLI, MCP server, memory, hooks/rules를 묶는 reusable agent harness scaffold |
| 아이디어 | 미정 | [논문 리뷰] Agent-Native Immune System — autonomous agent 시대의 보안 아키텍처 | paper-review | 논문 리뷰 | | arXiv 2606.28270 — memory/tool/multi-agent collaboration attack surface와 runtime defense loop 설계 |
| 아이디어 | 미정 | [논문 리뷰] ToolPrivacyBench — tool-using LLM agent의 purpose-bound privacy 평가 | paper-review | AI 평가/운영 | | arXiv 2606.28061 — 목적 제한 privacy, tool trace audit, regression suite를 agent governance로 정리 |
| 아이디어 | 미정 | [논문 리뷰] SHIFT — RAG의 parametric-vs-retrieved knowledge conflict 줄이기 | paper-review | Agentic RAG | | arXiv 2606.27786 — gate-modulated activation steering과 지식 충돌 제어를 RAG grounding 정책으로 해석 |
| 아이디어 | 미정 | Pydantic AI: typed agent framework로 output contract와 tool schema를 강제하기 | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — typed dependency, structured output, tool schema, eval/test 패턴 |
| 발행완료 | 2026-07-01 | agentgateway: MCP server와 AI agent 앞단의 agentic proxy 설계 | tool | Agent/MCP 실전 | | `2026-06-30-agentgateway-agentic-proxy-infrastructure.mdx` — 자동 발행 완료, GitHub repo 기반 — MCP access control, routing, telemetry, policy enforcement를 gateway 계층으로 분리 |
| 아이디어 | 미정 | [논문 리뷰] Self-Evolving World Models — LLM agent planning의 foresight를 배포 중 갱신하기 | paper-review | 논문 리뷰 | | arXiv 2606.30639 — episodic/semantic memory와 selective foresight로 world model을 실행 중 개선하는 agent planning harness |
| 아이디어 | 미정 | [논문 리뷰] MESA — multi-agent system에서 가장 위험한 communication edge 찾기 | paper-review | 논문 리뷰 | | arXiv 2606.30602 — multi-agent communication graph의 취약 edge 우선순위와 channel hardening 체크리스트 |
| 아이디어 | 미정 | [논문 리뷰] Forensic Trajectory Signatures — agent memory poisoning을 실행 궤적으로 탐지하기 | paper-review | 논문 리뷰 | | arXiv 2606.30566 — memory/tool trajectory invariant와 trace feature 기반 runtime monitor 설계 |
| 아이디어 | 미정 | mcp-use: MCP app과 server를 함께 만드는 fullstack agent framework | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — client integration, server lifecycle, auth/context 전달, 테스트 가능한 MCP app 구조 |
| 아이디어 | 미정 | [논문 리뷰] QVal — long-horizon agent dense supervision을 training 없이 평가하기 | paper-review | AI 평가/운영 | | arXiv 2606.32034 — Q-alignment로 dense supervision 신호를 학습 전 비교하는 agent post-training 평가법 |
| 발행완료 | 2026-07-02 | [논문 리뷰] Generative Skill Composition — agent skill을 합성 가능한 절차 지식으로 다루기 | paper-review | Agent/MCP 실전 | | `2026-07-02-generative-skill-composition-agent-skills.mdx` — 자동 발행 완료, arXiv 2606.32025, procedural memory, skill dependency, sandbox setup을 composable skill package로 보는 harness 설계 |
| 아이디어 | 미정 | [논문 리뷰] CORTEX — RAG hallucination을 token-level 내부 표현으로 잡기 | paper-review | Agentic RAG | | arXiv 2606.31033 — long-form RAG의 span-level hallucination 감지와 production QA overlay 설계 |
| 아이디어 | 미정 | Archestra: MCP registry·gateway·orchestrator를 enterprise agent control plane으로 묶기 | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — MCP registry, gateway, guardrail, orchestration boundary를 platform architecture 관점으로 정리 |
| 아이디어 | 미정 | [논문 리뷰] AutoMem — memory management를 trainable cognitive skill로 만들기 | paper-review | 논문 리뷰 | | arXiv 2607.01224 — encode/retrieve policy와 file-system operation을 agent의 metamemory skill로 학습하는 설계 |
| 아이디어 | 미정 | [논문 리뷰] Coding Agent 성능 최적화 벤치마크는 정말 믿을 수 있을까 | paper-review | 개발자 AI 워크플로 | | arXiv 2607.01211 — GSO/SWE-Perf/SWE-fficiency류 benchmark의 runtime variance, baseline/reference patch, metric leakage 점검 |
| 아이디어 | 미정 | [논문 리뷰] Adversarial Pragmatics — instruction conflict와 embedded command 평가 | paper-review | AI 평가/운영 | | arXiv 2607.01153 — instruction hierarchy, embedded command, policy ambiguity를 agent safety eval로 정리 |
| 아이디어 | 미정 | hud-python: agent RL environment와 eval을 한 번 정의해 재사용하기 | tutorial | AI 평가/운영 | | GitHub repo 기반 — environment API, rollout, reward/evaluator 재사용, regression suite를 agentic RL 운영 루프로 소개 |
| 발행완료 | 2026-07-04 | [논문 리뷰] Distributed Attacks in Persistent-State AI Control: PR과 시간에 흩어진 coding-agent 공격 | paper-review | 개발자 AI 워크플로 | | `2026-07-04-distributed-attacks-persistent-state-ai-control.mdx` — 자동 발행 완료, arXiv 2607.02514, delayed payload, cross-PR state, CI/audit log 기반 repository governance |
| 아이디어 | 미정 | [논문 리뷰] ReContext — long-context reasoning을 recursive evidence replay로 보강하기 | paper-review | 논문 리뷰 | | arXiv 2607.02509 — context window 크기보다 evidence replay와 agent context manager 설계 관점 |
| 아이디어 | 미정 | [논문 리뷰] EvoPolicyGym — autonomous policy evolution을 final score 너머에서 평가하기 | paper-review | AI 평가/운영 | | arXiv 2607.02440 — policy edit trajectory, regression signal, agentic RL environment 평가 harness |
| 아이디어 | 미정 | IBM mcp-context-forge: MCP·A2A·REST를 묶는 gateway/registry 패턴 | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — unified endpoint, access control, observability, protocol bridging을 agent infra로 정리 |
| 아이디어 | 미정 | [논문 리뷰] LACUNA — LLM unlearning이 진짜 parameter에서 지워졌는지 평가하기 | paper-review | AI 평가/운영 | | arXiv 2607.02513 — output-level 차단이 아니라 parameter localization precision과 PII 제거 QA 관점 |
| 아이디어 | 미정 | [논문 리뷰] Program-as-Weights — 자연어 spec을 로컬 fuzzy function으로 컴파일하기 | paper-review | AI 추론 최적화 | | arXiv 2607.02512 — LLM API 호출과 local executable neural artifact 사이의 설계 공간 |
| 아이디어 | 미정 | [논문 리뷰] Online Safety Monitoring — LLM 출력 안전성을 실시간 risk control로 감시하기 | paper-review | AI 평가/운영 | | arXiv 2607.02510 — external verifier, threshold calibration, calibrated alarm system으로 guardrail 설계 |
| 아이디어 | 미정 | [논문 리뷰] TestEvo-Bench — test와 code가 함께 진화하는 coding agent 평가 | paper-review | 개발자 AI 워크플로 | | arXiv 2607.02469 — executable benchmark, test-code co-evolution, CI verifier 설계 |
| 아이디어 | 미정 | agnix: AGENTS.md·MCP·hooks를 위한 linter/LSP | tutorial | 개발자 AI 워크플로 | | GitHub repo 기반 — repo guidance를 lintable configuration artifact로 다루는 agent harness 운영 패턴 |
| 아이디어 | 미정 | [논문 리뷰] ContextNest — agent context를 감사 가능한 supply chain으로 다루기 | paper-review | Agentic RAG | | arXiv 2607.02116 — provenance, version identity, integrity, point-in-time reconstruction을 agent context governance로 정리 |
| 아이디어 | 미정 | [논문 리뷰] SkillFuzz — agent skill marketplace를 fuzzing하는 법 | paper-review | 개발자 AI 워크플로 | | arXiv 2607.02345 — skill composition, implicit intent discovery, marketplace QA를 coding agent 보안 하네스로 해석 |
| 아이디어 | 미정 | [논문 리뷰] CheckRLM — RAG reasoning의 knowledge-thought coherence 검사 | paper-review | Agentic RAG | | arXiv 2607.02262 — retrieval evidence와 reasoning step mismatch를 잡는 agentic RAG QA gate 설계 |
| 아이디어 | 미정 | Mission Control: self-hosted multi-agent orchestration 대시보드 | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — task dispatch, multi-agent workflow, spend monitoring, governance를 control plane으로 묶기 |
| 아이디어 | 미정 | [논문 리뷰] Atomic Task Graph — agent planning을 원자 작업 그래프로 쪼개기 | paper-review | 논문 리뷰 | | arXiv 2607.01942 — task decomposition, dependency edge, execution monitor, 부분 실패 복구 패턴 |
| 아이디어 | 미정 | [논문 리뷰] Cloak and Detonate — agent skill malware를 동적으로 잡는 법 | paper-review | 개발자 AI 워크플로 | | arXiv 2607.02357 — skill marketplace supply-chain, scanner evasion, sandbox detonation, CI quarantine workflow |
| 아이디어 | 미정 | [논문 리뷰] Coding Agents Are Guessing — DevOps action-boundary 위반 평가 | paper-review | 개발자 AI 워크플로 | | arXiv 2607.02294 — underspecified instruction, operational API guardrail, approval checkpoint, least-action policy |
| 아이디어 | 미정 | trpc-agent-go: Go 기반 production agent workflow 런타임 | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — graph workflow, MCP/A2A, memory, eval, observability를 Go backend 통합 관점으로 정리 |
| 아이디어 | 미정 | ctx: 작업 창에 맞는 skills·agents·MCP만 로드하는 context router | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — skill/MCP graph, token budget, retrieval policy, agent harness cold-start 최적화 |
| 아이디어 | 미정 | [논문 리뷰] Steerability via Constraints — coding agent oversight를 제약 시스템으로 만들기 | paper-review | 개발자 AI 워크플로 | | arXiv 2607.02389 — allowed action, repository invariant, policy-as-code, review cost 절감 |
| 아이디어 | 미정 | [논문 리뷰] DRIFTLENS — 개인화 memory가 reasoning trajectory를 어떻게 drift시키나 | paper-review | AI 평가/운영 | | arXiv 2607.02374 — memory-induced reasoning drift, trace 비교, personalization regression suite |
| 아이디어 | 미정 | [논문 리뷰] CLAP — domain agent post-training을 폐루프 release control로 운영하기 | paper-review | AI 평가/운영 | | arXiv 2607.01846 — offline/application mismatch, adapter release gate, rollback 기준 |
| 아이디어 | 미정 | [논문 리뷰] Reasoning effort, not tool access — agentic code generation에서 진짜 신뢰도를 사는 것 | paper-review | 개발자 AI 워크플로 | | arXiv 2607.02436 — tool access ablation, reasoning budget, first-try reliability |
| 발행완료 | 2026-07-07 | open-multi-agent: goal을 task DAG로 쪼개는 TypeScript multi-agent orchestration | tool | Agent/MCP 실전 | | `2026-07-07-open-multi-agent-task-dag-orchestration.mdx` — 자동 발행 완료, GitHub repo 기반 — coordinator, task DAG, provider abstraction, failure/retry policy |
| 아이디어 | 미정 | [논문 리뷰] LLM-as-a-Verifier — verification을 LLM scaling axis로 다루기 | paper-review | AI 평가/운영 | | arXiv 2607.05391 — solution verifier, reward signal, regression gate, tool trajectory QA를 agent 실행 검증 substrate로 해석 |
| 아이디어 | 미정 | [논문 리뷰] CompactionRL — long-horizon agent context 압축을 RL 루프에 넣기 | paper-review | 논문 리뷰 | | arXiv 2607.05378 — context compaction trigger, state 보존, rollout continuation을 long-running agent runtime 설계로 정리 |
| 아이디어 | 미정 | [논문 리뷰] SovereignPA-Bench — personal agent의 consent와 intent 평가 | paper-review | AI 평가/운영 | | arXiv 2607.05363 — evolving intent, consent constraint, platform mediation, audit trail을 user-owned agent governance 관점으로 정리 |
| 아이디어 | 미정 | [논문 리뷰] EdgeBench — environment interaction에서 agent scaling law 찾기 | paper-review | AI 평가/운영 | | arXiv 2607.05155 — real-world task interaction log와 environment learning curve를 agent post-training 운영 관점으로 설명 |
| 아이디어 | 미정 | bitrouter: agentic loop를 위한 LLM gateway와 router 설계 | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — provider abstraction, fallback, cost/latency policy, harness-agnostic integration |
| 발행완료 | 2026-07-09 | [논문 리뷰] DynaKRAG — multi-hop RAG evidence control policy | paper-review | Agentic RAG | | `2026-07-09-dynakrag-multihop-rag-evidence-control.mdx` — 자동 발행 완료, arXiv 2607.06507, missing fact, bridge entity, sufficiency signal을 agentic RAG runtime 설계로 풀기 |
| 아이디어 | 미정 | [논문 리뷰] Doomed from the Start — 실패할 agent episode 조기 중단 | paper-review | AI 평가/운영 | | arXiv 2607.06503 — internal representation probe와 recall-controlled abort cascade를 agent 비용·품질 게이트로 정리 |
| 아이디어 | 미정 | [논문 리뷰] Danus — fact-graph memory로 수학 reasoning agent orchestration | paper-review | 논문 리뷰 | | arXiv 2607.06447 — fact-graph memory, parallel proof coordination, verifier boundary를 연구 에이전트 설계로 해석 |
| 아이디어 | 미정 | oh-my-pi: hash-anchored edit와 LSP를 갖춘 terminal coding agent harness | tutorial | 개발자 AI 워크플로 | | GitHub repo 기반 — hash-anchored edits, LSP context, browser/subagent/tool harness를 coding agent runtime 패턴으로 소개 |
| 아이디어 | 미정 | [논문 리뷰] Structural Trajectory Analysis — noisy agent trace에서 root cause 뽑기 | paper-review | AI 평가/운영 | | arXiv 2607.07702 — 장기 실행 agent trace를 구조화해 root cause graph와 policy patch 우선순위를 뽑는 QA 루프 |
| 아이디어 | 미정 | [논문 리뷰] SkillCenter — source-grounded agent skill library 운영법 | paper-review | Agent/MCP 실전 | | arXiv 2607.07676 — 21만 개 skill library를 기준으로 schema, source grounding, retrieval/retirement, harness 적용 체크리스트 정리 |
| 아이디어 | 미정 | [논문 리뷰] Agentic Data Environments — 데이터베이스 앞에 agent-safe 작업 환경 만들기 | paper-review | Agent/MCP 실전 | | arXiv 2607.07397 — DB tool 권한, mutation boundary, rollback, query sandbox, auditability를 agent infra로 해석 |
| 아이디어 | 미정 | eval-view: agent regression test를 tool-call diff와 snapshot으로 운영하기 | tutorial | AI 평가/운영 | | GitHub repo 기반 — LangGraph/CrewAI/OpenAI/Anthropic agent의 tool-call diff, snapshot, CI regression gate 설계 |
| 아이디어 | 미정 | [논문 리뷰] Remember When It Matters — long-horizon agent의 behavioral state decay 막기 | paper-review | 논문 리뷰 | | arXiv 2607.08716 — 별도 memory agent가 structured memory bank를 갱신하고 필요할 때 reminder를 주입하는 runtime intervention 패턴 |
| 아이디어 | 미정 | [논문 리뷰] WebSwarm — recursive multi-agent web search orchestration | paper-review | 논문 리뷰 | | arXiv 2607.08662 — 단일 search loop 대신 task decomposition, recursive expansion, evidence-grounded aggregation으로 research agent 설계 |
| 아이디어 | 미정 | [논문 리뷰] Token-Flow Firewall — persistent agent의 semantic runtime auditing | paper-review | 논문 리뷰 | | arXiv 2607.08395 — memory/tool/retrieval token flow가 privileged sink로 가기 전 위험 흐름을 차단하는 agent 보안 아키텍처 |
| 아이디어 | 미정 | [논문 리뷰] ProjAgent — repo-level coding agent의 procedural retrieval | paper-review | 개발자 AI 워크플로 | | arXiv 2607.08691 — identifier/semantic similarity를 넘어 절차적으로 비슷한 repo 함수를 찾아 code generation context로 쓰는 법 |
| 발행완료 | 2026-07-11 | Prismor: rogue tool call을 실행 전에 잡는 agent runtime firewall | tool | 개발자 AI 워크플로 | | `content/posts/2026-07-11-prismor-agent-runtime-firewall.mdx` — 자동 발행 완료, GitHub repo 기반 — Claude Code/Codex/framework SDK 앞에서 dangerous command, secret leak, prompt injection을 pre-tool-call policy로 막기 |
| 아이디어 | 미정 | [논문 리뷰] Workflow as Knowledge — LLM workflow를 실행 로그가 아니라 지식 그래프로 다루기 | paper-review | Agent/MCP 실전 | | arXiv 2607.08740 — symbolic workflow, checkpoint provenance, human approval edge, workflow memory를 agent runtime 설계로 정리 |
| 아이디어 | 미정 | [논문 리뷰] IdeaGene-Bench — 연구 에이전트가 논문 계보를 이해하는지 평가하기 | paper-review | AI 평가/운영 | | arXiv 2607.08758 — mechanism inheritance, limitation repair, lineage-grounded generation, evidence trail 기반 research agent 평가 |
| 아이디어 | 미정 | [논문 리뷰] Quantization Effects — low-bit LLM 평가는 accuracy보다 behavior drift를 봐야 한다 | paper-review | AI 추론 최적화 | | arXiv 2607.08734 — correctness agreement, output distribution shift, serving QA, fallback policy 체크리스트 |
| 아이디어 | 미정 | Heurist Agent Framework: reasoning·memory·MCP·agent-as-a-service를 한 런타임에 묶기 | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — reasoning loop, tool registry, memory, MCP, deployment interface를 framework 선택 기준으로 정리 |
| 아이디어 | 미정 | DeerFlow: long-horizon research·coding agent harness의 구성 요소 뜯어보기 | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — planner, sandbox, memory, subagent routing, artifact generation 경계를 repo architecture로 분석 |
| 아이디어 | 미정 | [논문 리뷰] AgentLens — coding agent 평가는 production trajectory review로 봐야 한다 | paper-review | 개발자 AI 워크플로 | | arXiv 2607.06624 — production trace review, failure taxonomy, CI regression gate를 coding agent 평가 운영법으로 정리 |
| 아이디어 | 미정 | [논문 리뷰] MCP Security-Aware Tool Descriptions — tool 설명으로 taint-style 취약점 줄이기 | paper-review | Agent/MCP 실전 | | arXiv 2607.07461 — MCP tool schema·description을 trust boundary와 data-flow 보안 인터페이스로 설계 |
| 아이디어 | 미정 | [논문 리뷰] WebRetriever — web agent 평가에서 efficiency와 coverage를 같이 보기 | paper-review | AI 평가/운영 | | arXiv 2607.06118 — web task benchmark, evidence coverage, browsing cost, verifier를 agent QA metric으로 정리 |
| 아이디어 | 미정 | mcp-observatory: MCP server를 agent에 붙이기 전 테스트·보안·모니터링하기 | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — MCP server contract test, security scan, prompt-injection/secret leak 점검, monitoring 체크리스트 |
| 아이디어 | 미정 | [논문 리뷰] When the Judge Changes — LLM-as-judge 교체가 평가 숫자를 흔드는 방식 | paper-review | AI 평가/운영 | | arXiv 2607.08535 — evaluator replacement ambiguity, rank stability, judge drift monitor를 agent regression suite로 정리 |
| 아이디어 | 미정 | [논문 리뷰] Relaxed Speculative Decoding — lossless를 포기하면 inference latency를 얼마나 줄일 수 있나 | paper-review | AI 추론 최적화 | | arXiv 2607.08690 — relaxed acceptance, resampling trade-off, serving QA gate를 production inference 정책으로 정리 |
| 아이디어 | 미정 | Chidori: durable·replayable agent run을 기본값으로 만든 프레임워크 | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — checkpoint, replay, resume, failure recovery를 production agent runtime 선택 기준으로 소개 |
| 아이디어 | 미정 | AssetOpsBench: Industry 4.0 agent를 benchmark와 orchestration으로 같이 보기 | tutorial | AI 평가/운영 | | GitHub repo 기반 — domain task harness, orchestration layer, verifier, maintenance workflow를 enterprise agent 평가 패턴으로 정리 |
| 아이디어 | 미정 | [논문 리뷰] Agora — agent task allocation을 auction mechanism으로 설계하기 | paper-review | Agent/MCP 실전 | | arXiv 2607.09600 — expert/tool bidding, cost-quality trade-off, incentive-compatible allocation을 agent router 설계로 해석 |
| 발행완료 | 2026-07-14 | [논문 리뷰] SLBench — agent skill 파일의 논리 관계를 테스트로 바꾸기 | paper-review | 개발자 AI 워크플로 | | `content/posts/2026-07-14-slbench-skill-logic-agent-skills.mdx` — 자동 발행 완료, arXiv 2607.09016 — precondition·constraint·fallback을 executable contract와 regression test로 만드는 운영법 |
| 아이디어 | 미정 | [논문 리뷰] Reason Less, Verify More — tool agent 정책 위반을 deterministic gate로 잡기 | paper-review | Agent/MCP 실전 | | arXiv 2607.07405 — silent wrong state, deterministic pre/post gate, audit log 기반 runtime safety pattern |
| 아이디어 | 미정 | [논문 리뷰] Forged Reasoning Attacks — agent memory poisoning의 다음 공격면 | paper-review | 논문 리뷰 | | arXiv 2607.05029 — reasoning-history poisoning, rationale provenance, memory write gate, quarantine 설계 |
| 아이디어 | 미정 | Future AGI: agent eval·observability·simulation을 한 플랫폼으로 묶기 | tutorial | AI 평가/운영 | | GitHub repo 기반 — traces, evals, simulations, datasets, guardrails를 agent release gate로 묶는 법 |
| 아이디어 | 미정 | [논문 리뷰] MM-ToolSandBox — visual tool-calling agent 평가 환경 | paper-review | AI 평가/운영 | | arXiv 2607.11818 — 500+ tools, 16개 domain, visual grounding/stateful sandbox를 agent QA harness로 해석 |
| 아이디어 | 미정 | [논문 리뷰] Distributed Backdoors — multi-agent harm은 한 메시지씩 보면 놓친다 | paper-review | 논문 리뷰 | | arXiv 2607.11751 — local monitor blind spot, compositional harm, cross-agent trace audit 기반 runtime firewall 설계 |
| 아이디어 | 미정 | [논문 리뷰] RAGU — multi-step GraphRAG engine을 작게 운영하기 | paper-review | Agentic RAG | | arXiv 2607.11683 — compact domain LLM, graph refinement, entity/relation 정제를 production RAG 운영법으로 정리 |
| 아이디어 | 미정 | Litefuse — agent observability와 evaluation을 가볍게 붙이는 법 | tutorial | AI 평가/운영 | | GitHub repo 기반 — trace schema, eval dataset, failure triage, CI regression gate를 작은 팀용 QA stack으로 소개 |
| 발행완료 | 2026-07-16 | [논문 리뷰] Complexity-Aware Agents — 쉬운 작업에 과한 reasoning을 쓰지 않는 법 | paper-review | Agent/MCP 실전 | | `content/posts/2026-07-16-complexity-aware-agents-reasoning-budget.mdx` — 자동 발행 완료, arXiv 2607.13034, 작업 복잡도별 reasoning·context·tool budget 조절과 effort routing을 agent harness 설계로 정리 |
| 아이디어 | 미정 | [논문 리뷰] MemOps — long-horizon memory를 lifecycle operation으로 평가하기 | paper-review | AI 평가/운영 | | arXiv 2607.12893 — create/update/delete/retrieve, conflict resolution, memory regression suite 설계 |
| 아이디어 | 미정 | [논문 리뷰] No-Reference LLM Judges — 정답 없는 평가에서 generous bias 줄이기 | paper-review | AI 평가/운영 | | arXiv 2607.12885 — rubric anchoring, calibration, judge drift monitor를 agent eval 운영 체크리스트로 정리 |
| 아이디어 | 미정 | [논문 리뷰] PalmClaw — mobile-first on-device agent framework의 설계 포인트 | paper-review | Agent/MCP 실전 | | arXiv 2607.13027 — native mobile tool interface, 앱 sandbox, privacy boundary를 personal agent runtime 관점으로 해석 |
| 아이디어 | 미정 | hud-python — agent RL environment와 eval을 한 번 정의해 재사용하기 | tutorial | AI 평가/운영 | | GitHub repo 기반 — environment API, rollout, reward/evaluator 재사용, CI regression suite를 agentic RL 운영 루프로 소개 |
| 아이디어 | 미정 | [논문 리뷰] TRACE — long-horizon agent의 turn-level credit assignment | paper-review | 논문 리뷰 | | arXiv 2607.13988 — final outcome reward를 turn별 dense supervision으로 바꾸는 agent post-training/eval harness 설계 |
| 아이디어 | 미정 | [논문 리뷰] AgentCheck — MCP agent failure를 reproduce-intervene-mitigate 루프로 관리하기 | paper-review | Agent/MCP 실전 | | arXiv 2607.11098 — tool timeout/stale result/description poisoning을 재현 가능한 regression case와 mitigation workbench로 운영 |
| 아이디어 | 미정 | [논문 리뷰] Harness Handbook — evolving agent harness를 읽고 고치는 법 | paper-review | 개발자 AI 워크플로 | | arXiv 2607.13285 — prompt/state/tool/orchestration harness를 가독성·탐색성·편집성 있는 configuration substrate로 다루기 |
| 아이디어 | 미정 | jcode: hash-anchored edits와 LSP를 갖춘 coding agent harness | tutorial | 개발자 AI 워크플로 | | GitHub repo 기반 — hash-anchored edit, LSP context, subagent/tool routing을 coding agent runtime architecture로 소개 |
| 발행완료 | 2026-07-18 | [논문 리뷰] MCPEvol-Bench — MCP server 변화에 agent가 적응하는지 평가하기 | paper-review | Agent/MCP 실전 | | `content/posts/2026-07-18-mcpevol-bench-mcp-server-evolution.mdx` — 자동 발행 완료, arXiv 2607.14642, MCP mutation operator, tool description drift, backward compatibility, regression suite 설계 |
| 아이디어 | 미정 | [논문 리뷰] SearchOS-V1 — deep search agent의 진행 상태를 공유 메모리로 만들기 | paper-review | 논문 리뷰 | | arXiv 2607.15257 — relational schema completion, shared state, multi-agent search collaboration, evidence-grounded aggregation |
| 아이디어 | 미정 | [논문 리뷰] SEED — agentic RL에서 trajectory를 hindsight skill로 증류하기 | paper-review | 논문 리뷰 | | arXiv 2607.14777 — on-policy trajectory를 hindsight skill로 바꾸는 post-training 데이터 flywheel |
| 아이디어 | 미정 | [논문 리뷰] D-Cut — batched speculative decoding에서 검증 깊이를 동적으로 자르기 | paper-review | AI 추론 최적화 | | arXiv 2607.14647 — batch 전체 verification budget, adaptive pruning, serving latency/throughput trade-off |
| 아이디어 | 미정 | Microsoft MCP catalog: 공식 MCP server 묶음으로 보는 enterprise tool integration | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — catalog, auth, data boundary, versioning을 agent tool platform 운영 체크리스트로 정리 |
| 아이디어 | 미정 | [논문 리뷰] Bridge Evidence — multi-step agentic search에서 진짜 유용한 근거란 무엇인가 | paper-review | Agentic RAG | | arXiv 2607.15253 — static retrieval utility와 causal utility를 구분해 search agent의 evidence selection/planning을 설계 |
| 아이디어 | 미정 | [논문 리뷰] Plover — GUI agent를 plan-centric interaction으로 조종하기 | paper-review | Agent/MCP 실전 | | arXiv 2607.15193 — plan representation, user steering, recovery loop를 desktop/browser agent UX 설계로 정리 |
| 아이디어 | 미정 | [논문 리뷰] AutoSynthesis — meta-analysis를 multi-agent evidence pipeline으로 자동화하기 | paper-review | AI 평가/운영 | | arXiv 2607.15247 — screening, extraction, verifier, human review boundary를 research agent evidence synthesis로 해석 |
| 아이디어 | 미정 | heym: prompt와 visual canvas를 오가는 self-hosted agent workflow builder | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — RAG, MCP, HITL, observability, eval, token cost tracking을 작은 팀용 runtime governance로 소개 |
| 아이디어 | 미정 | [논문 리뷰] Cost-Aware Security Agents — 보안 agent 평가는 성공률만 보면 안 된다 | paper-review | AI 평가/운영 | | arXiv 2607.15263 — security agent의 cost-quality frontier, tool budget, escalation policy를 eval harness로 설계 |
| 아이디어 | 미정 | [논문 리뷰] MemPoison — persistent memory agent의 구조적 blind spot | paper-review | 논문 리뷰 | | arXiv 2607.14651 — memory ingestion, quarantine, provenance, replay regression test를 agent runtime 보안으로 정리 |
| 아이디어 | 미정 | [논문 리뷰] SmartRAG — mobile device 위의 native graph-based RAG | paper-review | Agentic RAG | | arXiv 2607.14661 — on-device graph memory, privacy, latency, offline 제약을 mobile assistant RAG 설계로 연결 |
| 아이디어 | 미정 | GitHub Agentic Workflows MCP Gateway — repo-native agent workflow 앞단의 gateway | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — MCP gateway, repo permission, workflow trigger, trace/audit boundary 운영 패턴 |
| 아이디어 | 미정 | wirken: agent 시대의 switchboard — credential vault와 hash-chained audit log | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — channel isolation, encrypted credential vault, per-session audit log를 agent control plane으로 소개 |
| 아이디어 | 미정 | [논문 리뷰] LongStraw — 고정 GPU 예산으로 2M+ long-context RL을 돌리는 법 | paper-review | AI 추론 최적화 | | arXiv 2607.14952 — sequence packing, reward signal, GPU budget, serving-time context policy를 long-horizon agent 운영 관점으로 정리 |
| 아이디어 | 미정 | [논문 리뷰] On-Policy Delta Distillation — reasoning 모델 업데이트를 작게 증류하기 | paper-review | 논문 리뷰 | | arXiv 2607.15161 — on-policy trajectory, delta objective, regression risk, agent post-training release gate |
| 아이디어 | 미정 | judgeval: agent 평가를 continuous-improvement stack으로 운영하기 | tutorial | AI 평가/운영 | | GitHub repo 기반 — dataset/evaluator/tracing, CI gate, production feedback loop를 작은 팀 agent QA workflow로 정리 |
| 아이디어 | 미정 | pdf-reader-mcp: PDF를 agent용 evidence layer로 바꾸는 MCP 서버 | tutorial | Agent/MCP 실전 | | GitHub repo 기반 — visual crop, page evidence, structured extraction, citation boundary를 agent document tool 설계로 정리 |


> 2026-05-30~06-04 슬롯은 배포 환경 이해하기 시리즈를 5/12~5/17로 압축 발행하면서 비워짐. 다음 sprint에서 새 글로 채움.

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

### 논문 리뷰 시리즈 — 진행/예약 중
**Part 1: AI 엔지니어 필독 10개 논문** (3편 예약)
1. ⬜ 기초 아키텍처: Attention, VAE, GANs — `2026-06-05-ai-essential-papers-1-foundations`
2. ⬜ NLP 혁명과 멀티모달: BERT, GPT, ViT, DDPM — `2026-06-06-ai-essential-papers-2-nlp-multimodal`
3. ⬜ 실무 적용과 학술 생태계: RAG, LoRA, PEFT — `2026-06-07-ai-essential-papers-3-practical-applications`
- 핵심: Nature/Science 아닌 **arXiv → 산업 적용** 생태계

**Part 2: RAG 깊이 있게** (3편 진행)
- ✅ Seismic (sparse retrieval)
- ✅ Enterprise RAG Benchmark
- ⬜ Code as Agent Harness (에이전트 설계) — `2026-05-21-code-as-agent-harness-review`

**Part 3: 기타 최신 논문**
- ✅ DeepSeek-V4 (Hybrid Attention·KV Cache 최적화)
- 다음 후보:
  - 

### 프롬프트 최적화 시리즈 — 일단락 (3편: MetaSPO / GEPA / 비교)
- 새 기법·논문 나오면 추가편으로.

### 배포 환경 이해하기 — 완료 (6편)
기초부터 실무까지: Container → Kubernetes → AWS → 배포 전략 → GitOps/CI-CD → 모니터링
1. ✅ Container와 Docker 기초 — `2026-05-30-docker-container-basics` (Image·Container·Registry)
2. ✅ Kubernetes 핵심 (Pod · Service · Deployment)
3. ✅ AWS 핵심 서비스 (EC2 · S3 · RDS · VPC)
4. ✅ 배포 전략 (Blue-Green / Canary / Rolling)
5. ✅ GitOps와 CI/CD (GitHub Actions → Kubernetes)
6. ✅ 모니터링·로깅 (Prometheus / ELK Stack)

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
