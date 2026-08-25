# AI Writing Inbox

> AI 트렌드/신기술/논문 리뷰 후보 큐. `ai-blog-trend-radar`가 후보를 추가하고, `ai-blog-draft-writer`가 여기서 하나를 골라 초안화한다.

## 후보 포맷

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
```

## Active Queue

### 2026-06-15 — EvoArena: 동적 환경에서 에이전트 메모리는 어떻게 진화해야 하나
- type: paper
- source: http://arxiv.org/abs/2606.13681v1
- why-now: 정적 벤치마크가 아니라 실제 배포 환경의 변화에 맞춰 LLM agent memory/behavior가 계속 정렬되어야 한다는 문제가 전면에 올라왔다.
- angle: “에이전트 평가가 정적 QA에서 동적 메모리 진화 평가로 넘어갈 때 하네스/메모리 설계가 어떻게 바뀌나” 관점.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, memory, eval, benchmark]
- status: idea

### 2026-06-15 — HyperTool: 반복 tool call을 줄이는 실행 단위 재설계
- type: paper
- source: http://arxiv.org/abs/2606.13663v1
- why-now: tool-augmented agent가 atomic step-by-step 호출을 반복하며 토큰과 latency를 낭비하는 문제가 커지고 있다.
- angle: “LLM이 모든 deterministic workflow를 직접 펼쳐보는 게 맞나? 도구 호출 granularity를 어디까지 묶어야 하나”를 Hermes/BrainCrew 관점으로 해석.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, tool-use, automation, latency]
- status: published
- draft: content/posts/2026-06-15-hypertool-agent-tool-call-granularity.mdx

### 2026-06-15 — Agents-K1: 연구 에이전트에 필요한 knowledge orchestration
- type: paper
- source: http://arxiv.org/abs/2606.13669v1
- why-now: research agent가 논문을 abstract/flat citation으로만 다루는 한계를 넘어서 claim, evidence, mechanism 단위 지식 구성이 필요하다는 흐름.
- angle: “논문 읽는 에이전트의 RAG는 문서 검색이 아니라 과학 지식 그래프 구성이어야 한다”는 실무형 설계 글.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [research-agent, knowledge-graph, rag, paper]
- status: idea

### 2026-06-15 — EurekAgent: agent environment engineering으로 자율 과학 발견하기
- type: paper
- source: http://arxiv.org/abs/2606.13662v1
- why-now: 모델 자체보다 metric, execution environment, feedback loop 설계가 agent 성능을 좌우한다는 메시지가 강하다.
- angle: “좋은 에이전트는 좋은 프롬프트보다 좋은 실험 환경에서 나온다”를 프로젝트 자동화/검증 하네스와 연결.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, scientific-discovery, eval, environment]
- status: idea

### 2026-06-15 — Retrieval-Augmented Reinforcement Fine-Tuning: 유사 문제가 아니라 유사 추론을 검색하기
- type: paper
- source: http://arxiv.org/abs/2606.13680v1
- why-now: 일반 RAG가 reasoning task에서 semantic similarity만으로는 부족하다는 문제가 반복적으로 드러난다.
- angle: “RAG의 검색 대상은 답변 근거가 아니라 reasoning trajectory일 수 있다”는 관점으로 agent 학습/메모리 설계에 연결.
- difficulty: high
- freshness: 5
- practicality: 3
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, reasoning, reinforcement-learning, fine-tuning]
- status: idea

### 2026-06-15 — Google: machine unlearning 감사 프레임워크
- type: tech
- source: https://research.google/blog/new-framework-for-auditing-machine-unlearning/
- why-now: 개인정보/저작권/데이터 삭제 요구가 커지면서 “모델이 정말 잊었는가”를 감사하는 방법론이 중요해지고 있다.
- angle: “unlearning은 기능이 아니라 검증 문제다” — 삭제 요청 대응, 평가 지표, 운영 리스크 중심으로 정리.
- difficulty: medium
- freshness: 4
- practicality: 4
- confidence: 4
- suggested-category: study
- suggested-tags: [unlearning, privacy, eval, governance]
- status: idea

### 2026-06-15 — Google Agentic RAG: enterprise agent에서 dependable response 만들기
- type: tech
- source: https://research.google/blog/unlocking-dependable-responses-with-gemini-enterprise-agent-platforms-agentic-rag/
- why-now: 기업용 AI agent는 단순 답변보다 신뢰 가능한 retrieval, grounding, audit trail이 핵심 요구사항이 되고 있다.
- angle: “Agentic RAG가 일반 RAG와 다른 지점: query planning, tool orchestration, evidence chain”을 개발자 관점으로 분해.
- difficulty: medium
- freshness: 4
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agentic-rag, enterprise-ai, grounding, google]
- status: idea

### 2026-06-15 — Influcoder: LLM 학습 데이터 attribution을 실용화하는 encoder distillation
- type: paper
- source: http://arxiv.org/abs/2606.13668v1
- why-now: 데이터 품질, 저작권, 모델 행동 원인 분석에서 “어떤 학습 샘플이 영향을 줬나”를 빠르게 추정하는 수요가 커지고 있다.
- angle: “데이터셋 큐레이션을 loss/품질 필터링에서 영향도 기반 필터링으로 바꿀 수 있을까”를 실무 파이프라인 관점으로 소개.
- difficulty: high
- freshness: 5
- practicality: 3
- confidence: 3
- suggested-category: paper-review
- suggested-tags: [data-attribution, training-data, llm, interpretability]
- status: idea

### 2026-06-15 — olmo-eval: 모델 개발 루프를 위한 평가 워크벤치
- type: tech
- source: https://huggingface.co/blog/allenai/olmo-eval
- why-now: AllenAI가 모델 개발 과정에서 반복 가능한 evaluation harness를 어떻게 구성하는지 공개했고, 단순 리더보드보다 개발 루프 안의 평가 자동화가 중요해지고 있다.
- angle: “모델을 만들 때 평가는 마지막 시험이 아니라 매 커밋마다 도는 워크벤치”라는 관점으로 benchmark selection, regression tracking, release QA를 정리.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [eval, benchmark, olmo, model-development]
- status: idea

### 2026-06-15 — PyTorch profiling: nn.Linear에서 fused MLP까지 병목을 줄이는 법
- type: tech
- source: https://huggingface.co/blog/torch-mlp-fusion
- why-now: 추론 비용 최적화가 모델 선택만큼 중요해지면서 profiler로 kernel-level 병목을 찾고 fusion으로 줄이는 실전 글감이 좋아졌다.
- angle: “LLM serving 최적화의 첫 단계는 감이 아니라 profiler trace” — PyTorch profiler, operator breakdown, fused MLP의 효과를 코드 중심으로 설명.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: guide
- suggested-tags: [pytorch, profiling, inference, optimization]
- status: published
- draft: content/posts/2026-08-04-pytorch-profiling-linear-fused-mlp.mdx

### 2026-06-15 — North Mini Code: 개발자용 코드 모델을 볼 때 확인할 것들
- type: tech
- source: https://huggingface.co/blog/CohereLabs/introducing-north-mini-code
- why-now: Cohere가 developer-focused code model을 공개하면서 코드 모델 평가가 단순 HumanEval 점수에서 IDE/agent workflow 적합성으로 이동하고 있다.
- angle: “코드 모델 소개 글을 그대로 믿지 말고, repo-level editing, instruction following, latency, tool-use 관점으로 체크리스트를 만들자.”
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: study
- suggested-tags: [code-model, developer-tools, cohere, eval]
- status: idea

### 2026-06-15 — OpenEnv: Agentic RL에서 환경 표준화가 중요한 이유
- type: tech
- source: https://huggingface.co/blog/openenv-agentic-rl
- why-now: agentic RL은 모델보다 task environment, reward, reset/replay 설계가 성능과 재현성을 좌우한다는 흐름이 강해지고 있다.
- angle: “에이전트 학습의 진짜 인터페이스는 프롬프트가 아니라 환경 API” — OpenEnv를 기준으로 benchmark, sandbox, reward 설계를 해석.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: study
- suggested-tags: [agentic-rl, environment, benchmark, agent]
- status: idea

### 2026-06-15 — GitHub Agentic Workflows: issue triage부터 CI 실패 분석까지 자동화하기
- type: tech
- source: https://github.blog/changelog/2026-06-11-github-agentic-workflows-is-now-in-public-preview
- why-now: GitHub가 agentic workflow를 public preview로 열면서 개발팀의 반복 운영 업무를 repo-native agent로 처리하는 흐름이 본격화됐다.
- angle: “에이전트를 별도 챗봇으로 두지 않고 GitHub 이벤트/권한/로그 안에 넣으면 무엇이 달라지나”를 CI, issue, docs 자동화 사례로 분석.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [github, agentic-workflow, ci, developer-experience]
- status: published
- draft: content/posts/2026-06-15-github-agentic-workflows-repo-native-agents.mdx

### 2026-06-15 — Copilot code review controls: AI 리뷰어를 팀 규칙에 맞추는 방법
- type: tech
- source: https://github.blog/changelog/2026-06-12-copilot-code-review-new-configurations-and-controls
- why-now: AI 코드 리뷰가 실험 단계를 넘어 조직 단위 정책, content exclusion, custom instruction과 결합되고 있다.
- angle: “AI 리뷰어 도입의 핵심은 모델 성능보다 리뷰 범위·금지 영역·팀 규칙을 어떻게 주입하느냐”를 실무 체크리스트로 정리.
- difficulty: low
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [copilot, code-review, github, team-workflow]
- status: idea

### 2026-06-15 — TensorRT FP8 quantization: 체크포인트를 고성능 inference engine으로 바꾸기
- type: tech
- source: https://developer.nvidia.com/blog/model-quantization-turn-fp8-checkpoints-into-high-performance-inference-engines-with-nvidia-tensorrt/
- why-now: FP8 체크포인트가 늘어나면서 “모델 파일을 받았다”와 “운영 가능한 inference engine을 만들었다” 사이의 간극이 커지고 있다.
- angle: FP8 quantization, calibration, TensorRT engine build, 정확도/latency trade-off를 배포 파이프라인 관점에서 설명.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [tensorrt, quantization, fp8, inference]
- status: idea

### 2026-06-15 — Recursive Agent Harnesses: subagent를 코드처럼 재귀 호출하는 패턴
- type: paper
- source: http://arxiv.org/abs/2606.13643v1
- why-now: Anthropic/GitHub류 코딩 에이전트가 단일 루프를 넘어 subagent를 동적으로 생성·위임하는 방향으로 가면서, “에이전트 하네스 자체를 어떻게 설계할 것인가”가 실무 주제로 올라왔다.
- angle: BrainCrew/Hermes 관점에서 recursive call, context 격리, delegation boundary, 검증 루프를 에이전트 런타임 설계 패턴으로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, harness, subagent, orchestration]
- status: idea

### 2026-06-15 — GitHub Copilot CLI delegation: 에이전트가 언제 직접 하고 언제 위임해야 하나
- type: tech
- source: https://github.blog/ai-and-ml/how-we-made-github-copilot-cli-more-selective-about-delegation/
- why-now: GitHub가 Copilot CLI의 delegation 정책을 공개하면서, agent workflow에서 “무조건 agent에게 맡기기”가 아니라 작업 분류·신뢰도·비용 기반 라우팅이 중요해졌다.
- angle: CLI agent가 shell/tool/LSP/subagent 사이에서 어떤 기준으로 실행 경로를 고르는지, 개발자 도구 UX와 latency trade-off 중심으로 정리.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [copilot-cli, agent, delegation, developer-tools]
- status: idea

### 2026-06-15 — Copilot CLI + Language Server: 코드 에이전트에 진짜 코드 지능 붙이기
- type: tech
- source: https://github.blog/ai-and-ml/github-copilot/give-github-copilot-cli-real-code-intelligence-with-language-servers/
- why-now: 코드 에이전트가 grep/텍스트 검색만으로 repo를 이해하는 한계를 넘어, LSP의 symbol, diagnostics, references를 tool로 쓰는 방향이 구체화됐다.
- angle: “LLM 코드 에이전트의 RAG는 벡터 검색만이 아니라 language server API”라는 관점으로 repo 이해, refactor safety, CI 실패 분석 예제를 설계.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 5
- suggested-category: tutorial
- suggested-tags: [lsp, code-agent, copilot-cli, developer-tools]
- status: published
- draft: content/posts/2026-06-16-copilot-cli-lsp-code-intelligence.mdx

### 2026-06-15 — Security validation for third-party coding agents: 외부 코딩 에이전트 보안 게이트
- type: tech
- source: https://github.blog/changelog/2026-06-09-security-validation-for-third-party-coding-agents
- why-now: 여러 코딩 에이전트를 GitHub workflow에 연결하는 흐름이 커지면서, 권한·secret·PR 변경 범위를 검증하는 보안 게이트가 필수가 되고 있다.
- angle: “에이전트 도입 체크리스트는 모델 비교가 아니라 권한 모델과 변경 검증부터” — third-party agent onboarding, least privilege, audit log 관점.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, security, github, devsecops]
- status: published
- draft: content/posts/2026-06-18-third-party-coding-agent-security-gate.mdx

### 2026-06-15 — NVIDIA FLARE Auto-FL: federated learning 실험을 에이전트로 자동화하기
- type: tech
- source: https://developer.nvidia.com/blog/accelerating-federated-learning-research-with-ai-agents-and-nvidia-flare-auto-fl/
- why-now: 개인정보/분산 데이터 이슈로 federated learning은 계속 중요하지만 실험 설정이 복잡한데, NVIDIA가 agent 기반 Auto-FL 흐름을 공개했다.
- angle: 데이터가 한곳에 모이지 않는 상황에서 experiment planning, config generation, metric comparison을 agent가 어떻게 줄여주는지 MLOps 관점으로 설명.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: study
- suggested-tags: [federated-learning, nvidia-flare, agent, mlops]
- status: idea

### 2026-06-15 — Operadic consistency: 정답 없이 LLM reasoning failure 감지하기
- type: paper
- source: http://arxiv.org/abs/2606.13649v1
- why-now: self-consistency, semantic entropy 같은 confidence 기법이 한계에 부딪히면서, ground truth 없이 추론 분해/합성의 일관성을 보는 평가 신호가 제안됐다.
- angle: “LLM-as-a-judge 없이 reasoning trace를 어떻게 검증할까” — compositional reasoning, decomposition consistency, agent QA gate로 연결.
- difficulty: high
- freshness: 5
- practicality: 3
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [reasoning, eval, consistency, llm]
- status: idea

### 2026-06-20 — Execution-State Capsules: 온디바이스 에이전트를 위한 KV cache 너머의 상태 재사용
- type: paper
- source: http://arxiv.org/abs/2606.20537v1
- why-now: interactive LLM agent, speech, robotics처럼 small-batch/low-latency serving이 중요한 환경에서는 prefix KV cache만으로 실행 상태 재사용이 부족해진다.
- angle: “에이전트 inference 최적화는 토큰 캐시가 아니라 실행 상태 체크포인트 문제”라는 관점으로 latency, restore boundary, on-device serving을 정리.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [inference, agent, kv-cache, on-device]
- status: idea

### 2026-06-20 — SafeClawBench: tool-using agent 보안 실패를 세 단계로 분리해 보기
- type: paper
- source: http://arxiv.org/abs/2606.18356v1
- why-now: 도구 사용 에이전트는 unsafe text보다 더 위험한 persistent memory write, 메시지 전송, DB 변경, 코드 실행 같은 실제 side effect를 만들 수 있다.
- angle: “에이전트 보안 평가는 모델이 동의했나가 아니라 sandbox harm까지 갔나를 봐야 한다” — semantic/audit-evidence/sandbox harm 분리 프레임으로 실무 QA 게이트를 설계.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 5
- suggested-category: paper-review
- suggested-tags: [agent-security, tool-use, benchmark, sandbox]
- status: published
- draft: content/posts/2026-06-20-safeclawbench-agent-security-benchmark.mdx

### 2026-06-20 — MemTrace: LLM memory system의 오류가 어디서 생겼는지 추적하기
- type: paper
- source: http://arxiv.org/abs/2605.28732v1
- why-now: 장기 대화·에이전트 워크플로에서 memory가 핵심 컴포넌트가 됐지만, 잘못 저장·전파·요약된 정보의 원인을 추적하는 도구는 부족하다.
- angle: “메모리는 feature가 아니라 debugging surface” — memory evolution trace, attribution, regression test를 개인 비서/팀 에이전트 운영 관점으로 설명.
- difficulty: high
- freshness: 4
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [memory, agent, debugging, attribution]
- status: idea

### 2026-06-20 — HieraRAG: RAG benchmark는 얼마나 fine-grained해야 하나
- type: paper
- source: http://arxiv.org/abs/2606.12789v1
- why-now: RAG 평가는 단일 점수보다 질문 유형·근거 granularity·실패 모드가 중요해졌고, synthetic benchmark 설계 원칙이 실무 이슈가 되고 있다.
- angle: “좋은 RAG 벤치마크는 많은 질문이 아니라 구분력 있는 질문을 만든다” — hierarchical question generation과 discriminative power를 평가 설계 튜토리얼로 풀기.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, benchmark, eval, synthetic-data]
- status: idea

### 2026-06-20 — AutoPass: compiler performance tuning을 multi-agent evidence loop로 바꾸기
- type: paper
- source: http://arxiv.org/abs/2606.20373v1
- why-now: 코드 생성 에이전트가 “컴파일되는 코드”를 넘어 runtime metric과 compiler evidence를 읽고 최적화 결정을 반복하는 방향으로 확장되고 있다.
- angle: “LLM 코드 에이전트의 다음 단계는 benchmark evidence를 읽는 optimizer” — pass selection, runtime noise, validation loop를 개발자 자동화 관점으로 정리.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [code-agent, compiler, optimization, multi-agent]
- status: idea

### 2026-06-20 — Omnigent: 여러 코딩 에이전트를 갈아 끼우는 meta-harness 설계
- type: tech
- source: https://github.com/omnigent-ai/omnigent
- why-now: Claude Code, Codex, Cursor 같은 코딩 에이전트가 늘어나면서 팀은 특정 agent API보다 policy, sandbox, collaboration layer를 독립적으로 관리하고 싶어 한다.
- angle: “에이전트를 고르는 문제가 아니라 harness abstraction을 설계하는 문제” — adapter, policy enforcement, sandbox, multi-device collaboration을 repo architecture 중심으로 소개.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, harness, orchestration, open-source]
- status: idea

### 2026-06-20 — XcodeBuildMCP: iOS/macOS 빌드 시스템을 MCP tool로 노출하기
- type: tech
- source: https://github.com/getsentry/XcodeBuildMCP
- why-now: MCP가 일반 API 호출을 넘어 platform-specific build/test/debug workflow를 에이전트 도구로 감싸는 패턴이 빠르게 퍼지고 있다.
- angle: “좋은 MCP 서버는 wrapper가 아니라 agent-safe developer workflow” — xcodebuild, simulator, test result parsing, 권한 경계를 Apple 개발 환경 예제로 설명.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, ios, developer-tools, agent]
- status: idea

### 2026-06-20 — langgraph4j: Java/Spring 생태계에서 agent graph를 운영하는 법
- type: tech
- source: https://github.com/langgraph4j/langgraph4j
- why-now: LangGraph류 stateful agent graph가 Python 실험을 넘어 Java/Spring 기반 엔터프라이즈 서비스에도 들어가면서 운영·타입·트랜잭션 경계가 중요해졌다.
- angle: “agent orchestration을 JVM 서비스로 가져오면 무엇이 달라지나” — graph state, checkpoint, streaming, Spring integration을 백엔드 개발자 관점으로 정리.
- difficulty: medium
- freshness: 4
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [langgraph, java, agent-framework, backend]
- status: idea

### 2026-06-21 — LedgerAgent: tool-calling agent에 명시적 상태 원장을 붙이기
- type: paper
- source: http://arxiv.org/abs/2606.20529v1
- why-now: 고객지원·운영 자동화 에이전트가 여러 turn과 tool result를 오가며 정책을 지켜야 하는데, 현재 task state를 prompt에 암묵적으로 묻어두는 방식은 stale/missing state 실패를 만들기 쉽다.
- angle: “에이전트 메모리는 대화 요약이 아니라 정책 검증 가능한 ledger여야 한다” — state schema, tool precondition, policy-adherent action gate를 실무 설계로 풀기.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 5
- suggested-category: paper-review
- suggested-tags: [agent, tool-use, state-management, policy]
- status: published
- draft: content/posts/2026-07-23-ledgeragent-state-ledger-tool-calling-agents.mdx

### 2026-06-21 — Probe-and-Refine: AGENTS.md를 벤치마크로 튜닝하는 법
- type: paper
- source: http://arxiv.org/abs/2606.20512v1
- why-now: 코딩 에이전트가 repo별 운영 지식에 의존하면서 AGENTS.md 같은 guidance 파일이 중요해졌지만, 좋은 guidance를 어떻게 만들고 검증할지에 대한 방법론은 아직 부족하다.
- angle: “AGENTS.md도 문서가 아니라 성능에 영향을 주는 configuration artifact” — synthetic bug-fix probe, 실패 진단, guidance patch loop를 개발 워크플로로 정리.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, agents-md, repo-guidance, swe-bench]
- status: idea

### 2026-06-21 — ToolChain-CRC: RAG+tool agent의 전체 trajectory 위험을 제어하기
- type: paper
- source: http://arxiv.org/abs/2606.18467v1
- why-now: agentic RAG는 최종 답변만 보면 괜찮아 보여도 중간 retrieval, tool output, evidence step에서 이미 위험이 누적될 수 있어 trajectory 단위의 risk control이 필요하다.
- angle: “에이전트 QA는 final answer grading이 아니라 실행 궤적의 accept-or-intervene rule” — step-level risk score, conformal calibration, anytime alarm을 운영 게이트로 설명.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rag, tool-use, risk-control, eval]
- status: idea

### 2026-06-21 — Streaming Tool Use: 사용자가 말하는 동안 검색을 시작해도 되는 순간
- type: paper
- source: http://arxiv.org/abs/2606.20113v1
- why-now: 음성/채팅 agent UX에서 latency를 줄이기 위해 streaming RAG가 쓰이지만, speculative tool call이 실제로 이득인지는 query intent가 언제 안정화되는지에 달려 있다.
- angle: “빠른 에이전트는 무조건 먼저 호출하는 게 아니라 tool-intent stabilization을 측정한다” — latency hiding bound, speculative retrieval, 취소/재시도 정책을 설계 관점으로 정리.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [streaming-rag, tool-use, latency, agent-ux]
- status: idea

### 2026-06-21 — SproutRAG: long-document RAG를 attention-guided tree search로 만들기
- type: paper
- source: http://arxiv.org/abs/2606.18381v1
- why-now: 긴 문서 RAG에서 chunk granularity와 coherence trade-off가 계속 문제인데, LLM 호출 기반 chunking이나 fixed expansion 없이 계층 구조를 학습하는 접근이 나왔다.
- angle: “RAG chunking은 몇 글자로 자를지가 아니라 검색 시 어떤 문맥 단위로 자라날지의 문제” — sentence tree, progressive embeddings, retrieval granularity를 튜토리얼식으로 풀기.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, long-context, retrieval, chunking]
- status: idea

### 2026-06-21 — Google ADK: code-first agent 개발·평가·배포 툴킷 훑어보기
- type: tech
- source: https://github.com/google/adk-python
- why-now: Google ADK가 활발히 업데이트되며 agent를 prompt demo가 아니라 code-first app, evaluation, deployment 단위로 다루는 흐름을 보여준다.
- angle: “agent framework를 고를 때 봐야 할 것은 model wrapper가 아니라 eval, session state, tool boundary, deployment path” — ADK repo 구조와 개발 루프를 기준으로 체크리스트화.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [google-adk, agent-framework, eval, deployment]
- status: idea

### 2026-06-21 — OpenAI Agents SDK: handoff와 guardrail로 multi-agent workflow 구성하기
- type: tech
- source: https://github.com/openai/openai-agents-python
- why-now: lightweight multi-agent framework가 handoff, guardrail, tracing 같은 공통 런타임 패턴을 SDK 레벨로 제공하면서 agent workflow 설계 기준이 구체화되고 있다.
- angle: “multi-agent는 roleplay가 아니라 handoff contract와 guardrail instrumentation의 문제” — agent graph, tool schema, tracing, failure handling을 코드 예제로 정리.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [openai-agents-sdk, multi-agent, guardrails, tracing]
- status: idea

### 2026-06-21 — NLWeb: 웹사이트를 자연어 agent endpoint로 바꾸는 reference implementation
- type: tech
- source: https://github.com/nlweb-ai/NLWeb
- why-now: 웹 콘텐츠를 단순 검색창이 아니라 자연어 질의와 agent-friendly endpoint로 노출하려는 패턴이 늘고 있고, NLWeb은 이를 reference implementation 형태로 보여준다.
- angle: “검색 UX를 붙이는 게 아니라 site-native RAG/API surface를 설계하는 문제” — schema, retrieval, response grounding, 기존 웹사이트 통합 포인트를 repo 중심으로 소개.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [nlweb, rag, web-agent, open-source]
- status: idea

### 2026-06-22 — Sovereign Execution Brokers: agentic control plane에서 mutation 권한을 분리하기
- type: paper
- source: http://arxiv.org/abs/2606.20520v1
- why-now: 에이전트가 cloud, deployment, data-control workflow에 직접 연결되면서 “모델이 판단한 action”과 “실제 mutation 권한”을 런타임에서 분리하는 보안 경계가 중요해지고 있다.
- angle: “비결정적 reasoning process 안에 production mutation 권한을 넣지 말자” — certificate-bound authority, assurance boundary, execution broker를 에이전트 운영 아키텍처로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-security, control-plane, authorization, infrastructure]
- status: idea

### 2026-06-22 — H-RePlan: cross-device agent failure를 device-local recovery로 나누기
- type: paper
- source: http://arxiv.org/abs/2606.20487v1
- why-now: computer-use agent가 여러 앱과 기기를 넘나드는 작업을 하면서 실패 시 전체 plan을 갈아엎는 방식만으로는 복구 비용과 latency가 커지고 있다.
- angle: “에이전트 replanning은 global plan 수정 전에 device-local strategy space를 먼저 봐야 한다” — multi-device task decomposition, failure taxonomy, local/global recovery boundary를 정리.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [computer-use-agent, replanning, multi-device, recovery]
- status: idea

### 2026-06-22 — DiffusionGemma transparency: diffusion LLM의 reasoning은 얼마나 보이나
- type: paper
- source: http://arxiv.org/abs/2606.20560v1
- why-now: diffusion-style LLM이 discrete autoregressive trace와 다른 계산 경로를 쓰면서, reasoning transparency와 debugging 가능성이 새 쟁점이 되고 있다.
- angle: “chain-of-thought가 보인다고 투명한가, latent computation은 어떻게 관찰할까” — variable transparency와 algorithmic transparency를 모델 디버깅 관점으로 설명.
- difficulty: high
- freshness: 5
- practicality: 3
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [diffusion-llm, transparency, reasoning, interpretability]
- status: idea

### 2026-06-22 — Mixed Compliance Demonstrations: few-shot 예제가 safety-aligned LLM을 흔드는 방식
- type: paper
- source: http://arxiv.org/abs/2606.20508v1
- why-now: 실제 프롬프트·agent memory에는 benign/harmful compliance 예제가 섞일 수 있고, preference optimization 이후 모델이 이를 어떻게 일반화하는지가 안전성 이슈로 올라왔다.
- angle: “jailbreak는 금지어 문제가 아니라 demonstration distribution 문제” — benign/harmful compliance mix, preference optimization, agent memory hygiene 체크리스트로 연결.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [alignment, safety, in-context-learning, jailbreak]
- status: idea

### 2026-06-22 — Calibrated MoE under distribution shift: router와 expert confidence를 따로 봐야 하는 이유
- type: paper
- source: http://arxiv.org/abs/2606.20544v1
- why-now: MoE 모델과 ensemble inference가 늘어나지만, domain shift에서 router 선택과 expert calibration이 섞이면 confidence score를 그대로 믿기 어렵다.
- angle: “MoE의 확률값은 expert만 맞추면 끝인가?” — distribution shift, router behavior, expert-level calibration을 모델 평가/서빙 QA 관점으로 정리.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [moe, calibration, distribution-shift, eval]
- status: idea

### 2026-06-22 — PantheonOS: data science agent를 위한 distributed harness 설계
- type: tech
- source: https://github.com/aristoteleo/PantheonOS
- why-now: 데이터 과학 업무는 notebook, dataset, 실험, 시각화가 섞여 있어 단일 chat agent보다 분산 실행·진화 가능한 harness가 필요하다는 요구가 커지고 있다.
- angle: “데이터 과학 에이전트는 모델 wrapper가 아니라 작업 OS에 가깝다” — agent runtime, distributed execution, experiment state, human-in-the-loop boundary를 repo 구조 중심으로 소개.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [data-science-agent, agent-framework, distributed-systems, open-source]
- status: idea

### 2026-06-22 — hol-guard: coding agent와 MCP tool 실행 전 보안 게이트 세우기
- type: tech
- source: https://github.com/hashgraph-online/hol-guard
- why-now: Codex, Claude Code, Cursor, Gemini CLI 같은 개발자 에이전트가 MCP/플러그인/skills를 호출하면서 tool 실행 전 prompt injection과 권한 오남용을 막는 경량 보안층이 필요해졌다.
- angle: “AI antivirus라는 표현보다 중요한 건 pre-tool-call policy enforcement” — MCP server, plugin, skill 호출을 실행 전 검증하는 developer-agent 보안 패턴으로 정리.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, mcp, security, tool-use]
- status: idea

### 2026-06-22 — Claw-Eval: LLM-as-agent 평가를 human-verified task harness로 만들기
- type: tech
- source: https://github.com/claw-eval/claw-eval
- why-now: agent benchmark는 자동 채점 편의성만 강조하면 실제 작업 난이도와 검증 가능성이 어긋나기 쉬운데, human-verified task 기반 harness가 대안으로 떠오르고 있다.
- angle: “에이전트 평가는 리더보드보다 task curation과 verifier 설계가 핵심” — task schema, human verification, failure analysis를 agent QA 운영법으로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-eval, benchmark, harness, open-source]
- status: idea

### 2026-06-22 — AtomMem: LLM agent memory를 atomic fact 단위로 디버깅하기
- type: paper
- source: http://arxiv.org/abs/2606.19847v1
- why-now: 장기 에이전트 메모리가 “요약 텍스트”에서 검색·갱신·삭제 가능한 사실 단위 저장소로 바뀌는 흐름이 강해지고 있다.
- angle: “메모리 품질은 벡터 DB 선택보다 fact extraction/update policy에서 갈린다” — atomic fact schema, conflict handling, memory regression test 관점으로 정리.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, atomic-facts, retrieval, debugging]
- status: idea

### 2026-06-22 — ScholarQuest: agentic paper search benchmark로 연구 에이전트 평가하기
- type: paper
- source: http://arxiv.org/abs/2606.20235v1
- why-now: 논문 검색 에이전트가 단순 키워드 검색을 넘어 taxonomy-guided exploration, evidence selection, citation trail 추적을 해야 하는 요구가 커졌다.
- angle: “연구 에이전트 평가는 답 하나가 아니라 탐색 경로와 근거 품질을 봐야 한다” — task taxonomy, open literature environment, verifier 설계를 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [research-agent, paper-search, benchmark, eval]
- status: idea

### 2026-06-22 — When Lower Privileges Suffice: tool agent의 과권한 선택을 줄이는 법
- type: paper
- source: http://arxiv.org/abs/2606.20023v1
- why-now: tool-using agent가 같은 목표를 더 낮은 권한의 도구로 달성할 수 있는데도 과권한 tool을 고르는 문제는 실제 운영 보안 리스크로 이어진다.
- angle: “에이전트 보안은 허용/차단보다 최소권한 tool routing이 먼저” — tool capability modeling, privilege-aware selection, audit log 설계를 실무 체크리스트로 만든다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 5
- suggested-category: paper-review
- suggested-tags: [agent-security, tool-use, least-privilege, eval]
- status: idea

### 2026-06-22 — PACMS: LLM agent context selection을 submodular optimization으로 보기
- type: paper
- source: http://arxiv.org/abs/2606.20047v1
- why-now: long-context 모델을 써도 agent memory와 tool output을 전부 넣을 수 없고, 어떤 context를 선택하느냐가 비용·성능·안전성을 좌우한다.
- angle: “컨텍스트 엔지니어링을 감이 아니라 최적화 문제로 다루자” — diversity/coverage trade-off, pluggable context engine, agent memory 압축 전략으로 설명.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [context-engineering, agent, memory, optimization]
- status: idea

### 2026-06-22 — ADaPT: large reasoning model의 토큰 단위 decoupling으로 추론 비용 줄이기
- type: paper
- source: http://arxiv.org/abs/2606.19919v1
- why-now: reasoning model이 길게 생각할수록 비용과 latency가 늘어나면서, reasoning token을 어디서 줄이고 어디서 유지할지에 대한 구조적 접근이 필요해졌다.
- angle: “추론 최적화는 답변 토큰 압축이 아니라 reasoning path budget 설계” — token-level decoupling, budget-aware inference, serving QA 관점으로 정리.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [reasoning, inference, token-budget, optimization]
- status: idea

### 2026-06-22 — Hugging Face Agentic Resource Discovery: agent가 Hub 리소스를 직접 찾게 만들기
- type: tech
- source: https://huggingface.co/blog/agentic-resource-discovery-launch
- why-now: 모델·데이터셋·Spaces가 폭증하면서 사람이 링크를 골라주는 대신 agent가 리소스 탐색과 선택을 수행하는 UX가 중요해지고 있다.
- angle: “검색창 최적화가 아니라 agent-facing resource API를 설계하는 문제” — metadata, ranking, tool interface, MCP와 연결 가능한 discovery surface를 살펴본다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [huggingface, agent, resource-discovery, mcp]
- status: idea

### 2026-06-22 — hf CLI for agents: 사람이 쓰던 CLI를 agent-optimized interface로 바꾸기
- type: tech
- source: https://huggingface.co/blog/hf-cli-for-agents
- why-now: 개발자 에이전트가 Hub, Jobs, Spaces 같은 외부 시스템을 조작하면서 CLI 출력 형식, idempotency, error semantics가 agent UX의 핵심이 됐다.
- angle: “좋은 CLI는 사람 친화적일 뿐 아니라 agent가 파싱하고 복구하기 쉬워야 한다” — structured output, dry-run, auth boundary, retry-safe command 디자인을 정리.
- difficulty: medium
- freshness: 4
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [cli, agent-tools, huggingface, developer-experience]
- status: idea

### 2026-06-22 — Serge: GitHub-native AI code review를 repo workflow 안에 넣기
- type: tech
- source: https://huggingface.co/blog/huggingface/serge
- why-now: 코드 리뷰 에이전트가 별도 SaaS 챗봇이 아니라 PR, diff, CI, reviewer policy 안에서 동작하는 패턴으로 수렴하고 있다.
- angle: “AI 코드 리뷰어의 품질은 모델보다 repo-native context와 review contract가 좌우한다” — diff scope, comment policy, false-positive 관리, CI 연동을 repo 소개 형식으로 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [code-review-agent, github, open-source, developer-workflow]
- status: idea

### 2026-06-23 — [논문 리뷰] Probabilistic Verification: 불확실한 tool agent 정책을 어떻게 검증할까
- type: paper
- source: http://arxiv.org/abs/2606.20510v1
- why-now: tool-using agent가 실제 디지털 환경에서 권한·상태·사용자 의도를 확률적으로 해석해야 하는데, 기존 runtime policy enforcement는 deterministic policy에 치우쳐 있다.
- angle: “agent 보안 게이트를 if문 모음이 아니라 probabilistic policy verifier로 만들 수 있을까” — Datalog식 정책, 확률 predicate/state transition, runtime monitor 설계로 풀어본다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-security, verification, tool-use, runtime-monitoring]
- status: idea

### 2026-06-23 — [논문 리뷰] Contagion Networks: multi-agent 평가에서 bias가 전염되는 방식
- type: paper
- source: http://arxiv.org/abs/2606.20493v1
- why-now: LLM-as-judge와 multi-agent debate/evaluation이 널리 쓰이지만, evaluator bias가 agent network 안에서 어떻게 증폭되는지는 아직 운영 체크리스트에 잘 들어오지 않는다.
- angle: “평가 에이전트를 여러 개 붙이면 객관성이 자동으로 생길까?” — bias propagation matrix, judge diversity, evidence-based 평가 루프 설계를 실무 QA 관점으로 정리.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, llm-as-judge, eval, bias]
- status: idea

### 2026-06-23 — [논문 리뷰] Mixed Compliance Demonstrations: few-shot 예제가 safety alignment를 흔드는 법
- type: paper
- source: http://arxiv.org/abs/2606.20508v1
- why-now: agent prompt와 workflow 예제에 benign/harmful compliance가 섞이면 모델이 어떤 규칙을 학습하는지 이해해야 안전한 instruction template을 만들 수 있다.
- angle: “프롬프트 예제는 테스트 데이터가 아니라 임시 fine-tuning 데이터처럼 행동한다” — demonstration composition, jailbreak surface, agent system prompt QA를 연결한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [alignment, safety, prompting, jailbreak]
- status: idea

### 2026-06-23 — [논문 리뷰] Calibrated MoE: distribution shift에서 expert router를 믿어도 될까
- type: paper
- source: http://arxiv.org/abs/2606.20544v1
- why-now: MoE 모델과 router 기반 serving이 커지는 가운데, 배포 환경이 학습 분포와 달라질 때 uncertainty calibration이 성능과 신뢰도에 어떤 영향을 주는지 중요해졌다.
- angle: “MoE 최적화는 throughput만 볼 게 아니라 calibration까지 봐야 한다” — expert confidence, distribution shift, serving 모니터링 지표로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 3
- confidence: 3
- suggested-category: paper-review
- suggested-tags: [moe, calibration, distribution-shift, inference]
- status: idea

### 2026-06-23 — [논문 리뷰] Current World Models Lack a Persistent State Core: agent memory와 world model의 접점
- type: paper
- source: http://arxiv.org/abs/2606.20545v1
- why-now: computer-use/robotics agent가 장기 작업을 하려면 순간 관찰보다 지속 상태를 유지하는 world model이 필요하다는 문제가 반복적으로 드러난다.
- angle: “agent memory는 대화 로그 저장소가 아니라 persistent state core여야 한다” — 상태 업데이트, drift, recovery, benchmark 설계를 연결해 본다.
- difficulty: high
- freshness: 5
- practicality: 3
- confidence: 3
- suggested-category: paper-review
- suggested-tags: [world-model, agent-memory, persistent-state, eval]
- status: idea

### 2026-06-23 — OpenAI Agents Python: handoff·guardrail·trace를 갖춘 lightweight agent framework
- type: tech
- source: https://github.com/openai/openai-agents-python
- why-now: OpenAI Agents SDK가 빠른 release cadence를 보이며 multi-agent handoff, guardrail, tracing을 기본 구성요소로 제시하고 있어 프레임워크 선택 기준으로 볼 만하다.
- angle: “agent framework의 최소 코어는 무엇인가” — agent/handoff/tool/guardrail/trace abstraction을 LangGraph·ADK와 비교 가능한 체크리스트로 정리.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [openai-agents, agent-framework, guardrails, tracing]
- status: published
- draft: content/posts/2026-06-23-openai-agents-python-handoff-guardrail-tracing.mdx

### 2026-06-23 — LangGraph 1.x: durable execution으로 장기 실행 agent를 만드는 법
- type: tech
- source: https://github.com/langchain-ai/langgraph
- why-now: agent가 단발성 chat completion을 넘어 long-running workflow, human-in-the-loop, checkpoint/retry를 요구하면서 graph 기반 durable execution이 실무 기본기로 올라오고 있다.
- angle: “에이전트는 함수 호출이 아니라 상태 그래프다” — state, checkpoint, interrupt, replay, observability를 production agent 운영 관점으로 설명.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [langgraph, durable-execution, agent-workflow, orchestration]
- status: idea

### 2026-06-23 — mcp-agent: MCP server들을 workflow pattern으로 묶는 repo 살펴보기
- type: tech
- source: https://github.com/lastmile-ai/mcp-agent
- why-now: MCP 도구가 늘어나면서 “도구 목록을 붙이는 것”보다 server lifecycle, context passing, parallel/orchestrator pattern을 어떻게 표준화할지가 중요해졌다.
- angle: “MCP를 agent runtime의 plugin bus로 쓸 때 필요한 구조” — workflow pattern, tool registry, config, observability를 repo introduction 형식으로 정리.
- difficulty: medium
- freshness: 4
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, agent-framework, workflow, github-repo]
- status: idea

### 2026-06-24 — [논문 리뷰] EnterpriseClawBench: 실제 업무 세션으로 agent를 평가하기
- type: paper
- source: http://arxiv.org/abs/2606.23654v1
- why-now: browser/desktop agent 벤치마크가 synthetic task에 치우치기 쉬운 가운데, 실제 workplace session 기반 평가가 agent 품질 측정의 다음 기준으로 떠오르고 있다.
- angle: “agent benchmark는 장난감 task가 아니라 업무 로그에서 온 verifier를 가져야 한다” — task extraction, privacy filtering, success criterion, regression suite 설계를 실무 QA 관점으로 정리.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-eval, benchmark, workplace-agent, verifier]
- status: idea

### 2026-06-24 — [논문 리뷰] Self-Compacting Language Model Agents: context를 스스로 압축하는 agent
- type: paper
- source: http://arxiv.org/abs/2606.23525v1
- why-now: 장기 실행 agent에서 context window와 비용이 병목이 되면서, 외부 요약기가 아니라 agent가 실행 중 스스로 state를 compact하는 방식이 중요해지고 있다.
- angle: “long-running agent의 핵심 루프는 계획-실행만이 아니라 압축-복원이다” — self-compaction trigger, 정보 손실, tool trace 보존, 재현 가능한 resume 전략을 다룬다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, context-engineering, memory, long-running]
- status: idea

### 2026-06-24 — [논문 리뷰] Managing Procedural Memory in LLM Agents
- type: paper
- source: http://arxiv.org/abs/2606.23127v1
- why-now: agent memory가 사실 저장을 넘어 “어떻게 일하는가”라는 procedure와 skill을 축적하는 방향으로 확장되고 있다.
- angle: “에이전트 메모리는 facts와 procedures를 분리해야 한다” — skill update, adaptation control, evaluation loop를 개인 비서·개발자 agent 운영 설계로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, procedural-memory, skill-learning, eval]
- status: idea

### 2026-06-24 — [논문 리뷰] Plans Don't Persist: LLM agent에서 context management가 load-bearing인 이유
- type: paper
- source: http://arxiv.org/abs/2606.22953v1
- why-now: multi-step agent가 plan을 세워도 context 전환과 tool 결과 누적으로 원래 의도가 흐려지는 문제가 실제 운영 실패로 반복된다.
- angle: “계획 품질보다 계획을 잃지 않는 runtime이 더 중요하다” — plan persistence, context partitioning, checkpoint, deviation detector를 agent harness 설계 패턴으로 정리.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 5
- suggested-category: paper-review
- suggested-tags: [agent, planning, context-management, harness]
- status: published
- draft: content/posts/2026-06-25-plans-dont-persist-context-management-agents.mdx

### 2026-06-24 — [논문 리뷰] Intent-Governed Tool Authorization: tool agent 권한을 사용자 의도와 묶기
- type: paper
- source: http://arxiv.org/abs/2606.22916v1
- why-now: tool-using agent 보안은 “이 도구를 호출해도 되는가”를 넘어서, 현재 사용자 의도와 권한 부여가 일치하는지 검증해야 하는 단계로 가고 있다.
- angle: “agent 권한은 static allowlist가 아니라 intent-bound capability여야 한다” — intent extraction, authorization token, audit log, least privilege gate를 실무 체크리스트로 만든다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 5
- suggested-category: paper-review
- suggested-tags: [agent-security, tool-use, authorization, least-privilege]
- status: idea

### 2026-06-24 — [논문 리뷰] Grounded Delta Planning: multi-step RAG에서 모르는 것만 묻기
- type: paper
- source: http://arxiv.org/abs/2606.22681v1
- why-now: agentic RAG가 매 단계 전체 검색을 반복하면 비용과 hallucination surface가 커지므로, 이미 아는 것과 새로 필요한 근거의 delta를 구분하는 planning이 필요하다.
- angle: “좋은 RAG agent는 더 많이 검색하는 게 아니라 질문의 delta를 좁힌다” — grounded state, unknown set, retrieval budget, multi-hop evidence chain을 튜토리얼로 정리.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rag, planning, retrieval, grounding]
- status: idea

### 2026-06-24 — Mastra: TypeScript agent framework에서 workflow·memory·eval을 한 번에 보기
- type: tech
- source: https://github.com/mastra-ai/mastra
- why-now: TypeScript 기반 AI app/agent framework가 빠르게 성숙하면서, Python 중심 agent stack과 다른 배포·observability·workflow 설계가 필요해졌다.
- angle: “프론트엔드/백엔드 TS 팀이 agent framework를 고를 때 봐야 할 체크리스트” — workflow, tool, memory, eval, deployment surface를 repo 구조 중심으로 소개.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-framework, typescript, workflow, github-repo]
- status: idea

### 2026-06-24 — SDL-MCP: coding agent를 위한 symbol-aware context budget layer
- type: tech
- source: https://github.com/GlitterKill/sdl-mcp
- why-now: 코딩 에이전트가 큰 repo에서 토큰을 낭비하지 않으려면 단순 grep/RAG보다 symbol graph 기반 context selection과 MCP tool boundary가 중요해지고 있다.
- angle: “context engineering을 repo symbol graph와 policy layer로 분리하기” — symbol delta ledger, precision tool, budgeted context, coding agent 안전성을 repo introduction 형식으로 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, coding-agent, context-engineering, github-repo]
- status: idea

### 2026-06-25 — [논문 리뷰] OpenThoughts-Agent: agentic model 학습 데이터 recipe를 공개 벤치마크로 만들기
- type: paper
- source: http://arxiv.org/abs/2606.24855v1
- why-now: agentic language model 성능은 모델 크기만큼이나 tool-use, reasoning, task trajectory 데이터 구성에 좌우되지만 공개적으로 재현 가능한 데이터 recipe는 아직 부족하다.
- angle: “agent 학습 데이터셋은 문제-정답 쌍이 아니라 실행 궤적·도구 결과·실패 복구를 설계하는 일” — SWE-Smith/SERA/Nemotron류 데이터 생성 흐름과 비교해 학습 파이프라인 체크리스트로 정리.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, training-data, tool-use, open-data]
- status: idea

### 2026-06-25 — [논문 리뷰] World Models in Pieces: general agent를 구조적으로 인증할 수 있을까
- type: paper
- source: http://arxiv.org/abs/2606.24842v1
- why-now: 범용 에이전트 평가가 단일 평균 점수로 흐르기 쉬운데, 실제 배포에서는 어떤 world-model 조각을 이해하고 어떤 영역은 모르는지 구조적으로 구분해야 한다.
- angle: “agent certification은 전체 능력 보증이 아니라 capability map을 만드는 문제” — specialization, coverage gap, 구조적 보증을 agent eval/운영 게이트 관점으로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-eval, world-model, certification, reliability]
- status: idea

### 2026-06-25 — [논문 리뷰] Grading the Grader: agentic data analysis system 평가는 왜 어려운가
- type: paper
- source: http://arxiv.org/abs/2606.24839v1
- why-now: 데이터 분석 에이전트는 코드, 수치 결과, 차트 해석, 자연어 진단을 함께 내놓기 때문에 단일 LLM-as-judge 점수로 평가하기 어렵다.
- angle: “분석 에이전트의 verifier는 정답 문자열이 아니라 실행 가능한 notebook QA에 가깝다” — code execution, numerical validation, verbal diagnostics를 분리한 평가 harness 설계로 정리.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [data-analysis-agent, eval, llm-as-judge, verifier]
- status: idea

### 2026-06-25 — [논문 리뷰] InSight: VLA agent가 스스로 manipulation skill을 발견하는 법
- type: paper
- source: http://arxiv.org/abs/2606.24884v1
- why-now: vision-language-action 모델이 데모 데이터에 있는 스킬만 반복하는 한계를 넘어, 환경 상호작용으로 새 조작 스킬을 자가 획득하는 연구가 늘고 있다.
- angle: “robot agent의 self-improvement loop는 reward보다 skill discovery interface가 중요하다” — steerable VLA, autonomous exploration, skill library 업데이트를 embodied agent 관점으로 설명.
- difficulty: high
- freshness: 5
- practicality: 3
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [vla, robotics-agent, skill-acquisition, self-improvement]
- status: idea

### 2026-06-25 — [논문 리뷰] IV-CoT: 이미지 생성 모델의 암묵적 visual chain-of-thought
- type: paper
- source: http://arxiv.org/abs/2606.24849v1
- why-now: text-to-image 모델이 객체 수, 공간 관계, 속성 binding을 틀리는 문제가 계속되면서, 구조 인식을 위한 중간 reasoning representation이 중요해지고 있다.
- angle: “멀티모달 CoT는 텍스트 설명만이 아니라 latent visual planning일 수 있다” — structure-aware prompt following, implicit reasoning, evaluation 사례를 멀티모달 디버깅 글로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multimodal, text-to-image, reasoning, visual-cot]
- status: idea

### 2026-06-25 — Harbor: agent eval과 RL environment를 한 프레임워크에서 돌리기
- type: tech
- source: https://github.com/harbor-framework/harbor
- why-now: agentic RL과 eval이 가까워지면서, 벤치마크 task를 평가용으로만 쓰지 않고 학습 환경·회귀 테스트·실험 추적으로 재사용하는 프레임워크가 필요해지고 있다.
- angle: “에이전트 평가는 리포트가 아니라 환경 API와 실험 루프다” — environment abstraction, evaluator, rollout log, reward/metric 관리를 repo 구조 중심으로 소개.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-eval, reinforcement-learning, environment, github-repo]
- status: idea

### 2026-06-25 — Composio: agent tool auth와 sandboxed workbench를 제품 코드에 붙이는 법
- type: tech
- source: https://github.com/ComposioHQ/composio
- why-now: 에이전트가 1000개 이상의 외부 도구와 SaaS API를 호출하는 흐름에서 tool discovery, 인증, context management, sandbox 실행을 각각 따로 만들기 어렵다.
- angle: “agent tool layer의 핵심은 함수 목록이 아니라 auth·permission·sandbox·observability 묶음” — toolkit registry, OAuth/auth boundary, 실행 격리, intent-to-action 흐름을 repo introduction으로 정리.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-tools, tool-use, auth, github-repo]
- status: idea

### 2026-06-26 — [논문 리뷰] Progress Advantage: agent post-training에서 공짜 신호를 뽑아내기
- type: paper
- source: http://arxiv.org/abs/2606.26080v1
- why-now: 장기 horizon agent는 step-level reward annotation과 Monte Carlo 추정 비용이 커서 process reward model을 만들기 어렵다는 병목이 있다.
- angle: “agent RL의 핵심은 최종 성공보다 중간 진행 신호를 어떻게 안정적으로 추출하느냐” — progress advantage를 reward shaping, rollout logging, eval harness 설계와 연결한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, post-training, reinforcement-learning, reward-model]
- status: idea

### 2026-06-26 — [논문 리뷰] Unfireable Safety Kernel: 에이전트 런타임 밖에 안전 경계를 두기
- type: paper
- source: http://arxiv.org/abs/2606.26057v1
- why-now: tool/API 권한을 가진 agent에서 prompt guardrail이나 agent 내부 필터는 입력에 의해 우회될 수 있어 실행 시간의 외부 안전 커널이 필요하다는 주장이 강해지고 있다.
- angle: “safety를 agent 프로세스 안에 넣지 말고 escapable system 밖의 reference monitor로 빼자” — syscall gate, tool broker, policy kernel을 개발자 agent 보안 아키텍처로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-security, runtime-policy, tool-use, alignment]
- status: idea

### 2026-06-26 — [논문 리뷰] Is GraphRAG Needed?: Basic RAG에서 Agentic RAG까지 선택 기준 만들기
- type: paper
- source: http://arxiv.org/abs/2606.25656v1
- why-now: GraphRAG와 Agentic RAG가 유행하지만 모든 지식베이스에 복잡한 그래프/에이전트가 필요한지 판단하는 실험 기준은 부족하다.
- angle: “RAG 아키텍처 선택을 hype가 아니라 scenario matrix로 하자” — basic/modular/graph/agentic RAG를 지식 구조, query 유형, context optimization 비용으로 비교한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, graphrag, agentic-rag, architecture]
- status: idea

### 2026-06-26 — [논문 리뷰] TRACE: poisoned RAG corpus에서 답변 조작 토큰을 추적하기
- type: paper
- source: http://arxiv.org/abs/2606.25721v1
- why-now: RAG 운영에서 corpus poisoning은 검색 결과가 정상 문서처럼 보여도 특정 target answer를 유도할 수 있어 lightweight attribution 기반 방어가 중요하다.
- angle: “RAG 보안은 악성 문서 분류보다 답변에 영향을 준 토큰 경로를 추적하는 문제” — token influence attribution, audit trail, ingestion QA gate로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag-security, poisoning, attribution, retrieval]
- status: idea

### 2026-06-26 — [논문 리뷰] Quantization Inflates Reasoning: low-bit 모델이 더 오래 생각하는 숨은 비용
- type: paper
- source: http://arxiv.org/abs/2606.25519v1
- why-now: reasoning model을 양자화할 때 accuracy와 token latency만 보면, 체인 길이가 늘어 총 추론 비용이 다시 증가하는 현상을 놓칠 수 있다.
- angle: “양자화 평가는 per-token 속도가 아니라 answer까지의 total reasoning budget으로 봐야 한다” — CoT token inflation, serving cost, eval metric 설계를 inference 최적화 관점으로 설명한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [quantization, reasoning, inference, llm-serving]
- status: idea

### 2026-06-26 — Microsoft Agent Framework: Python/.NET multi-agent workflow를 한 런타임으로 보기
- type: tech
- source: https://github.com/microsoft/agent-framework
- why-now: Microsoft가 Python과 .NET을 함께 지원하는 agent framework를 활발히 업데이트하면서 엔터프라이즈 팀의 언어·배포 경계를 넘는 agent orchestration 기준점이 생기고 있다.
- angle: “agent framework 선택에서 중요한 건 데모 API가 아니라 orchestration, deployment, observability, enterprise runtime integration” — Python/.NET 양쪽 팀이 공유할 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-framework, microsoft, multi-agent, dotnet]
- status: idea

### 2026-06-26 — PraisonAI: self-improving multi-agent workflow를 5줄 데모 너머로 보기
- type: tech
- source: https://github.com/MervinPraison/PraisonAI
- why-now: multi-agent 프레임워크가 role-play 데모에서 memory, RAG, tool execution, 여러 LLM backend를 묶은 실무형 워크플로로 빠르게 진화하고 있다.
- angle: “간단한 agent 선언 뒤에 필요한 운영 요소는 무엇인가” — task decomposition, memory/RAG, tool boundary, 반복 실행 안정성을 repo 구조 중심으로 점검한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [multi-agent, agent-framework, rag, github-repo]
- status: idea

### 2026-06-26 — Future AGI: agent eval·tracing·simulation을 한 플랫폼으로 묶기
- type: tech
- source: https://github.com/future-agi/future-agi
- why-now: agent 앱은 prompt 한 번의 품질보다 trace, dataset, simulation, guardrail, gateway를 묶은 지속 평가 루프가 운영 품질을 좌우한다.
- angle: “agent evaluation stack은 별도 스크립트가 아니라 product runtime의 관측·개선 루프” — self-hosted eval/observability 플랫폼을 repo introduction과 운영 체크리스트로 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-eval, observability, tracing, github-repo]
- status: idea

### 2026-06-27 — [논문 리뷰] GUI Agents with Hindsight: 웹 에이전트가 실패 경험을 계획 데이터로 바꾸는 법
- type: paper
- source: http://arxiv.org/abs/2606.27330v1
- why-now: multimodal web/GUI agent가 반복 업무를 수행하려면 단순 데모 imitation을 넘어 실패한 탐색 경험에서 task planning 신호를 뽑아야 한다는 문제가 커지고 있다.
- angle: “GUI agent memory는 성공 trajectory 저장소가 아니라 실패-복구 경험을 재사용하는 planner” — autonomous exploration, hindsight experience, task decomposition을 browser agent 운영 관점으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [gui-agent, web-agent, planning, experience-replay]
- status: idea

### 2026-06-27 — [논문 리뷰] Co-Failure Ceiling: mixture-of-agents가 좋아질 수 있는 상한선
- type: paper
- source: http://arxiv.org/abs/2606.27288v1
- why-now: routing, voting, cascades, mixture-of-agents가 “여러 모델을 섞으면 더 좋아진다”는 식으로 쓰이지만, 모델들이 같이 틀리는 영역이 성능 상한을 만든다는 분석이 필요하다.
- angle: “multi-model orchestration의 병목은 라우터가 아니라 co-failure 구조” — 67개 frontier model 실험을 바탕으로 ensemble 설계, judge diversity, fallback policy 체크리스트를 만든다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [mixture-of-agents, routing, eval, ensemble]
- status: idea

### 2026-06-27 — [논문 리뷰] BINEVAL: LLM 평가를 점수 하나가 아니라 이진 질문 묶음으로 만들기
- type: paper
- source: http://arxiv.org/abs/2606.27226v1
- why-now: LLM-as-judge의 opaque score는 디버깅과 개선 액션으로 이어지기 어렵고, open-ended generation 평가를 해석 가능한 질문 단위로 쪼개려는 수요가 커지고 있다.
- angle: “평가자는 판사가 아니라 체크리스트 질문 생성기여야 한다” — binary question decomposition, self-improvement loop, agent QA report 설계를 실무 평가 harness로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [llm-eval, llm-as-judge, interpretability, qa]
- status: idea

### 2026-06-27 — [논문 리뷰] CARVE: linear attention의 memory-blind gating을 고치는 법
- type: paper
- source: http://arxiv.org/abs/2606.27229v1
- why-now: recurrent/linear attention 계열이 long-context와 inference 효율 대안으로 주목받지만, 무엇을 잊을지 결정하는 gate가 현재 memory 내용을 보지 않는 한계가 드러나고 있다.
- angle: “효율적 attention의 핵심은 빠른 계산만이 아니라 무엇을 지울지 아는 memory policy” — content-aware recurrence, value efficiency, chunk-parallel serving 관점으로 설명한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [linear-attention, memory, architecture, inference]
- status: idea

### 2026-06-27 — [논문 리뷰] RiVER: 정답 없는 문제에서도 LLM을 강화학습시키는 방법
- type: paper
- source: http://arxiv.org/abs/2606.27369v1
- why-now: RLVR은 ground-truth answer가 있는 수학·코딩 문제에 강하지만, 실제 agent 업무는 검증 가능한 정답이 없는 경우가 많아 ranking-induced reward가 중요한 대안으로 떠오른다.
- angle: “verifiable reward가 없는 업무를 어떻게 post-training 데이터로 만들까” — ranking-induced verification, pairwise preference, agent task success proxy 설계를 연결한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [reinforcement-learning, rlvr, post-training, reasoning]
- status: idea

### 2026-06-27 — IBM AssetOpsBench: 산업 자산 운영 agent를 평가하는 domain-specific harness
- type: tech
- source: https://github.com/IBM/AssetOpsBench
- why-now: 범용 agent benchmark만으로는 설비 운영·정비·모니터링 같은 산업 현장 업무의 절차, 도메인 제약, 안전 요구를 평가하기 어렵다.
- angle: “agent benchmark는 범용 리더보드보다 domain workflow와 verifier가 중요하다” — task schema, orchestration, domain-specific evaluation을 Industry 4.0 사례로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-benchmark, domain-agent, industry40, github-repo]
- status: idea

### 2026-06-27 — Headroom: tool output과 RAG chunk를 LLM 앞에서 압축하는 context layer
- type: tech
- source: https://github.com/headroomlabs-ai/headroom
- why-now: agent가 로그, 파일, tool output, RAG chunk를 많이 다룰수록 context window보다 입력 전 압축·선별 계층의 품질이 비용과 정확도를 좌우한다.
- angle: “context engineering은 prompt 안이 아니라 LLM 앞단 proxy/MCP server에서 시작된다” — output compression, token budget, answer preservation, observability를 repo 소개로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [context-engineering, mcp, rag, github-repo]
- status: published
- draft: content/posts/2026-06-27-headroom-context-compression-layer.mdx

### 2026-06-27 — MCP Gateway Registry: enterprise agent tool discovery와 OAuth 경계를 중앙화하기
- type: tech
- source: https://github.com/agentic-community/mcp-gateway-registry
- why-now: MCP server가 늘어날수록 각 agent에 개별 tool endpoint와 credential을 붙이는 방식은 discovery, 권한, 감사 추적에서 금방 한계가 온다.
- angle: “MCP 운영의 다음 병목은 server 구현이 아니라 gateway와 registry” — dynamic tool discovery, OAuth, central access control, enterprise audit를 agent platform 패턴으로 설명한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, agent-tools, oauth, enterprise-ai]
- status: idea

### 2026-06-28 — [논문 리뷰] Temporal Validity in Retrieval Memory: stale fact를 agent RAG에서 제거하기
- type: paper
- source: http://arxiv.org/abs/2606.26511v1
- why-now: RAG 기반 agent가 오래된 API명, 정책, 문서 버전을 현재 사실과 함께 검색하면서 stale-fact 오류가 운영 리스크로 커지고 있다.
- angle: “agent memory에는 내용뿐 아니라 유효 기간과 대체 관계가 필요하다” — temporal validity, stale/current conflict resolution, retrieval memory hygiene를 실무 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, agent-memory, temporal-validity, retrieval]
- status: idea

### 2026-06-28 — [논문 리뷰] MIRROR: agentic RAG를 novelty-constrained MCTS로 red-team하기
- type: paper
- source: http://arxiv.org/abs/2606.26793v1
- why-now: multimodal agentic RAG는 prompt injection뿐 아니라 이미지 주입, corpus poisoning, orchestrator tool manipulation까지 공격면이 넓어졌다.
- angle: “RAG red-team은 같은 jailbreak 반복이 아니라 새로운 공격 경로를 탐색하는 search problem” — memory-guided MCTS, novelty constraint, attack taxonomy를 보안 QA harness로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rag, red-teaming, security, mcts]
- status: idea

### 2026-06-28 — [논문 리뷰] OpenRCA 2.0: root cause agent 평가를 causal process supervision으로 바꾸기
- type: paper
- source: http://arxiv.org/abs/2606.27154v1
- why-now: 운영 장애 분석 agent는 최종 원인 라벨만 맞추는 것보다 로그 탐색, tool use, 가설 검증 과정이 재현 가능해야 한다.
- angle: “RCA agent 평가는 정답 맞히기가 아니라 원인 추적 과정의 검증” — outcome label 한계, causal process supervision, trace-level verifier를 SRE 자동화 관점으로 설명한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [root-cause-analysis, agent-eval, observability, tool-use]
- status: idea

### 2026-06-28 — [논문 리뷰] Semantic Early-Stopping: multi-agent loop를 언제 멈춰야 할까
- type: paper
- source: http://arxiv.org/abs/2606.27009v1
- why-now: Writer-Critic 같은 반복 agent loop가 고정 iteration cap에 의존하면 비용은 늘고 품질 개선은 멈춘 뒤에도 계속 돈다.
- angle: “에이전트 루프 종료 조건은 토큰·횟수 제한이 아니라 의미적 수렴 신호여야 한다” — semantic convergence, utility plateau, eval gate를 agent runtime 정책으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, eval, runtime-policy, cost-optimization]
- status: idea

### 2026-06-28 — [논문 리뷰] Spec Growth Engine: AI coding agent의 spec drift를 막는 구조
- type: paper
- source: http://arxiv.org/abs/2606.27045v1
- why-now: AI coding agent가 구현 속도를 높일수록 spec과 코드가 분리되어 drift가 누적되는 문제가 실제 개발 워크플로 병목으로 떠오르고 있다.
- angle: “coding agent 시대의 문서는 README가 아니라 drift-enforced architecture artifact” — spec anchoring, code coupling, deterministic validation을 repo 운영 패턴으로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, spec-driven-development, architecture, validation]
- status: idea

### 2026-06-28 — [논문 리뷰] ShareLock: MCP 생태계의 multi-tool threshold poisoning 공격
- type: paper
- source: http://arxiv.org/abs/2606.27027v1
- why-now: MCP가 agent tool 표준으로 빠르게 퍼지면서 단일 악성 tool보다 여러 tool이 임계값을 넘을 때 작동하는 은닉형 공격 모델이 중요해졌다.
- angle: “MCP 보안은 server 하나의 신뢰 문제가 아니라 tool set 조합의 emergent risk” — threshold poisoning, tool registry audit, least-privilege composition을 보안 체크리스트로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [mcp, agent-security, tool-use, poisoning]
- status: idea

### 2026-06-28 — gortex: code agent를 위한 local graph 기반 code-intelligence engine
- type: tech
- source: https://github.com/zzet/gortex
- why-now: 코딩 에이전트가 대형 repo에서 grep과 벡터 검색만으로 구조를 이해하기 어려워지면서 local symbol graph, MCP/API, token budget 절감 계층이 필요해지고 있다.
- angle: “coding agent의 context layer는 검색창이 아니라 graph query engine” — multi-repo indexing, symbol relationship, MCP server, 100% local workflow를 repo 소개로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, code-intelligence, mcp, github-repo]
- status: idea

### 2026-06-28 — SonarQube MCP Server: 코드 품질·보안 신호를 agent tool로 노출하기
- type: tech
- source: https://github.com/SonarSource/sonarqube-mcp-server
- why-now: 개발자 agent가 PR 수정과 리팩터링을 수행할수록 정적 분석, 보안 hotspot, quality gate 결과를 tool context로 직접 읽는 패턴이 중요해지고 있다.
- angle: “AI 코드 리뷰의 grounding은 diff뿐 아니라 정적 분석 시스템에서 온다” — SonarQube 이슈, quality gate, MCP tool boundary를 repo workflow에 붙이는 법을 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, code-quality, security, developer-tools]
- status: idea

### 2026-06-29 — [논문 리뷰] E-TTS: embodied agent에서 test-time scaling은 어떻게 작동하나
- type: paper
- source: http://arxiv.org/abs/2606.27268v1
- why-now: 로봇·embodied agent에서도 reasoning과 historical information을 test-time에 더 써서 성능을 올리는 흐름이 나오고 있어, LLM reasoning scaling과 물리 실행 정책의 접점이 중요해졌다.
- angle: “로봇 agent의 test-time scaling은 생각을 많이 하는 문제가 아니라 실행 이력·환경 피드백을 어떻게 policy에 다시 넣느냐의 문제”로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [embodied-agent, robotics, test-time-scaling, reasoning]
- status: idea

### 2026-06-29 — [논문 리뷰] Omnimodal Embodied Agents: isolated skill에서 everyday autonomy로 가기
- type: paper
- source: http://arxiv.org/abs/2606.27251v1
- why-now: agent가 API·IoT·로봇 조작·내비게이션을 한 런타임에서 다루려면 단일 skill 데모보다 tool orchestration과 physical failure recovery가 핵심 병목이 된다.
- angle: “범용 embodied agent는 멀티모달 모델보다 cyber/physical tool orchestration OS에 가깝다” — skill registry, recovery loop, safety boundary를 설계 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [embodied-agent, tool-use, autonomy, recovery]
- status: idea

### 2026-06-29 — [논문 리뷰] Prompt Injection in Résumé Screening: 자동 채용 agent의 injection surface
- type: paper
- source: http://arxiv.org/abs/2606.27287v1
- why-now: LLM 기반 문서 심사·랭킹 agent가 실제 의사결정 워크플로에 들어가면서, 사용자 제출 문서 안의 간접 prompt injection이 운영 리스크로 커지고 있다.
- angle: “문서 평가 agent는 candidate text를 instruction이 아니라 untrusted data로 다뤄야 한다” — single/multi-injection, ranking manipulation, 심사 agent sandbox를 보안 체크리스트로 만든다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [prompt-injection, agent-security, document-ai, ranking]
- status: idea

### 2026-06-29 — [논문 리뷰] Paved with True Intents: safety classifier에 의도 모델링을 넣기
- type: paper
- source: http://arxiv.org/abs/2606.27210v1
- why-now: agent guardrail이 surface text만 보고 허용/차단하면 benign dual-use와 실제 악의적 intent를 구분하기 어렵고, intent-aware safety classification이 runtime policy의 핵심 신호가 되고 있다.
- angle: “agent 안전 필터는 금지어 매칭이 아니라 의도 추론을 별도 중간 표현으로 가져야 한다” — intent label, harm label, tool authorization gate로 연결한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [alignment, safety-classifier, intent, guardrails]
- status: idea

### 2026-06-29 — [논문 리뷰] Multilingual Reasoning Cascades: 번역-추론-번역 파이프라인의 context 손실
- type: paper
- source: http://arxiv.org/abs/2606.27306v1
- why-now: 영어 중심 reasoning model을 다국어 서비스에 붙일 때 translation cascade가 흔한데, 각 단계의 context 손실이 reasoning 품질과 사용자 신뢰도에 직접 영향을 준다.
- angle: “다국어 agent는 번역기를 앞뒤에 붙이는 게 아니라 context 보존 budget을 설계해야 한다” — cascade failure, intermediate context, eval set 설계를 실무 관점으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multilingual, reasoning, context, eval]
- status: idea

### 2026-06-29 — taOS: self-hosted agent OS에서 memory와 file boundary를 설계하기
- type: tech
- source: https://github.com/jaylfc/taOS
- why-now: 개인/팀 에이전트가 클라우드 SaaS를 넘어 self-hosted memory, chat, files, agent runtime을 한곳에 묶으려는 요구가 커지고 있다.
- angle: “agent OS의 핵심은 채팅 UI가 아니라 memory 소유권, offline-first storage, file permission boundary” — self-hosted architecture와 운영 trade-off를 repo introduction으로 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-os, self-hosted, memory, github-repo]
- status: idea

### 2026-06-29 — agent-harness-generator: 팀별 agent harness를 scaffolding하는 meta-tool
- type: tech
- source: https://github.com/ruvnet/agent-harness-generator
- why-now: Codex/Claude/Gemini 기반 개발자 에이전트가 늘면서, 각 팀이 memory, MCP, hooks, rules, CLI를 반복해서 손으로 조립하는 비용이 커지고 있다.
- angle: “agent harness는 prompt 모음이 아니라 재사용 가능한 product scaffold” — npx CLI, MCP server, learning loop, witness-signed rules를 harness 설계 패턴으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-harness, mcp, scaffolding, github-repo]
- status: idea

### 2026-06-29 — Strands Agents Evals: agent 평가를 프레임워크 독립적으로 운영하기
- type: tech
- source: https://github.com/strands-agents/evals
- why-now: agent 앱이 늘수록 특정 프레임워크 데모보다 trace, task, metric, regression suite를 분리해 운영하는 평가 계층이 필요해지고 있다.
- angle: “agent eval은 SDK 부속 기능이 아니라 별도 품질 시스템이어야 한다” — evaluator abstraction, task dataset, CI regression을 repo 구조 중심으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-eval, regression-test, observability, github-repo]
- status: idea

### 2026-06-29 — [논문 리뷰] CHIA: agentic hardware/software co-design 연구 프레임워크
- type: paper
- source: http://arxiv.org/abs/2606.27350v1
- why-now: AI 에이전트를 컴파일러·시스템·VLSI co-design 연구에 적용하려는 시도가 demo 수준을 넘어 open-source framework와 benchmark loop로 정리되고 있다.
- angle: “연구 에이전트는 논문 검색기가 아니라 실험 설계·시뮬레이션·검증 루프를 묶는 co-design runtime”이라는 관점으로 하드웨어/소프트웨어 자동 탐색 구조를 설명한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [research-agent, hardware-software-codesign, eval, automation]
- status: idea

### 2026-06-29 — [논문 리뷰] NOVA: 추천 시스템 아키텍처 진화를 검증 가능한 agent harness로 만들기
- type: paper
- source: http://arxiv.org/abs/2606.27243v1
- why-now: 산업 추천 모델은 구조 변경이 성능과 비즈니스 지표에 직접 연결되지만, 아키텍처 탐색을 에이전트에게 맡기려면 검증·rollback·metric attribution이 필수다.
- angle: “코딩 에이전트가 새 모델 구조를 제안하는 것보다 중요한 건 production metric을 읽는 verification-aware loop” — architecture evolution, recommender eval, 안전한 실험 자동화를 다룬다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, recommender-system, architecture-search, verification]
- status: idea

### 2026-06-29 — [논문 리뷰] When are likely answers right?: LLM sequence probability를 신뢰도 지표로 써도 될까
- type: paper
- source: http://arxiv.org/abs/2606.27359v1
- why-now: decoding, reranking, self-consistency가 모두 “더 그럴듯한 출력이 더 맞다”는 가정에 기대지만, 운영 환경에서는 probability와 correctness의 관계를 별도로 검증해야 한다.
- angle: “LLM confidence는 logprob 하나로 끝나지 않는다” — sequence probability, correctness calibration, fallback routing, judge-free QA gate를 서빙 관점으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [llm-eval, calibration, decoding, reliability]
- status: idea

### 2026-06-29 — [논문 리뷰] Hardware-Safety-Gated LLM Control: 실험 장비를 조작하는 agent의 물리 안전 경계
- type: paper
- source: http://arxiv.org/abs/2606.27231v1
- why-now: LLM agent가 실험 제어 코드를 작성·실행하는 자율 실험실 흐름이 커지면서, prompt guardrail이 아니라 hardware-level safety gate가 필요한 사례가 늘고 있다.
- angle: “tool broker는 API 호출만 막는 게 아니라 물리 장비의 per-operation 안전 조건까지 검증해야 한다” — native control code, hardware interlock, lab automation agent 설계로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [lab-agent, tool-use, safety, hardware-control]
- status: idea

### 2026-06-29 — [논문 리뷰] Smaller Models, Unexpected Costs: 양자화된 코드수정 agent의 숨은 비용
- type: paper
- source: http://arxiv.org/abs/2606.27205v1
- why-now: automated program repair에 LLM을 붙일 때 작은/양자화 모델이 메모리는 줄이지만 반복 수정, 실패 재시도, 낮은 patch 품질로 전체 비용을 키울 수 있다.
- angle: “코딩 에이전트 최적화는 VRAM 절약만 보면 안 된다” — quantization, repair success, retry budget, CI 검증 비용을 total workflow cost로 비교한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, quantization, program-repair, inference-cost]
- status: idea

### 2026-06-29 — LiveKit Agents: realtime voice/video agent를 production runtime으로 다루기
- type: tech
- source: https://github.com/livekit/agents
- why-now: voice agent가 단순 STT-LLM-TTS demo를 넘어 turn detection, streaming tool call, latency budget, media pipeline 운영을 요구하는 production 시스템으로 커지고 있다.
- angle: “realtime agent framework는 LLM wrapper가 아니라 media session runtime” — room/session, streaming, interruption, tool latency, observability를 개발자 관점으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [voice-agent, realtime-ai, agent-framework, github-repo]
- status: idea

### 2026-06-29 — OpenLore: LLM hot path 밖에서 deterministic memory와 guardrail 운영하기
- type: tech
- source: https://github.com/clay-good/OpenLore
- why-now: 코딩 에이전트 memory와 policy를 매번 LLM 판단에 맡기면 latency·비용·비결정성이 늘어나고, local-first deterministic layer에 대한 관심이 커지고 있다.
- angle: “agent memory/guardrail 중 일부는 모델이 아니라 데이터 구조와 규칙 엔진으로 처리해야 한다” — local-first 저장소, deterministic guardrail, coding agent context hygiene를 repo 소개로 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, memory, guardrails, github-repo]
- status: idea

### 2026-06-29 — EverOS: 여러 AI 앱이 공유하는 local-first portable memory layer
- type: tech
- source: https://github.com/EverMind-AI/EverOS
- why-now: 개인/팀 agent가 앱별로 memory를 따로 쌓으면 migration과 권한 관리가 어려워져, Markdown-native·user-owned memory layer가 agent OS의 핵심 컴포넌트로 부상하고 있다.
- angle: “agent memory는 제품 기능이 아니라 사용자가 소유하는 portable substrate여야 한다” — local-first sync, Markdown-native schema, app boundary, memory governance를 repo architecture로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-memory, local-first, agent-os, github-repo]
- status: idea

### 2026-06-30 — [논문 리뷰] HORIZON: hardware design을 repository-level code evolution으로 자동화하기
- type: paper
- source: http://arxiv.org/abs/2606.28279v1
- why-now: 코딩 에이전트가 소프트웨어 PR을 넘어 HDL/EDA 프로젝트까지 수정·검증하는 흐름이 나오면서, repository harness와 acceptance predicate 설계가 중요해졌다.
- angle: “하드웨어 설계 에이전트도 채팅봇이 아니라 git/runtime/evaluator가 결합된 self-evolving repo worker” — Markdown harness, project pack, runnable evaluator, acceptance gate를 개발 워크플로 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, hardware-design, repository-evolution, eval]
- status: idea

### 2026-06-30 — [논문 리뷰] Agent-Native Immune System: autonomous agent 시대의 보안 아키텍처
- type: paper
- source: http://arxiv.org/abs/2606.28270v1
- why-now: persistent memory, tool-use protocol, multi-agent collaboration이 결합되면서 perimeter security나 학습 시점 guardrail만으로는 agent 런타임 위협을 다루기 어렵다.
- angle: “agent 보안은 백신처럼 런타임 면역계가 필요하다” — threat taxonomy, memory/tool/collaboration attack surface, detection-response loop를 agent platform 설계로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-security, runtime-defense, tool-use, memory]
- status: idea

### 2026-06-30 — [논문 리뷰] Govern the Repository, Not the Agent: AI-native software의 생태계 리스크 측정
- type: paper
- source: http://arxiv.org/abs/2606.28235v1
- why-now: 여러 autonomous coding agent가 같은 repo에서 PR을 만들고 merge하는 상황에서는 개별 agent benchmark보다 repository-level policy와 risk metric이 더 중요해진다.
- angle: “에이전트 하나를 잘 평가해도 repo 전체는 망가질 수 있다” — branch/PR 권한, CI 신호, dependency drift, ecosystem-level risk를 governance 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, repository-governance, ai-native-software, risk]
- status: idea

### 2026-06-30 — [논문 리뷰] ToolPrivacyBench: tool-using LLM agent의 purpose-bound privacy 평가
- type: paper
- source: http://arxiv.org/abs/2606.28061v1
- why-now: 에이전트가 외부 도구와 환경에 접근할수록 “작업 완료”보다 목적 제한에 맞게 필요한 개인정보만 쓰는지 검증하는 benchmark가 필요해졌다.
- angle: “agent privacy는 데이터 접근 허용/차단이 아니라 목적·도구·단계별 최소 사용 문제” — purpose-bound policy, tool trace audit, privacy regression suite를 운영 게이트로 설계한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-privacy, tool-use, benchmark, governance]
- status: idea

### 2026-06-30 — [논문 리뷰] SHARD: vector store 유출에도 원문을 숨기는 private dense retrieval
- type: paper
- source: http://arxiv.org/abs/2606.27976v1
- why-now: RAG 운영에서 embedding DB 유출이 원문 복원 공격으로 이어질 수 있다는 우려가 커져, 검색 품질과 privacy를 동시에 보는 dense retrieval 설계가 필요하다.
- angle: “RAG 보안은 문서 DB뿐 아니라 vector store까지 threat model에 넣어야 한다” — embedding inversion, residual splitting, private retrieval trade-off를 실무 보안 관점으로 설명한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag-security, dense-retrieval, privacy, embeddings]
- status: idea

### 2026-06-30 — [논문 리뷰] SHIFT: RAG의 parametric-vs-retrieved knowledge conflict 줄이기
- type: paper
- source: http://arxiv.org/abs/2606.27786v1
- why-now: RAG가 외부 근거를 넣어도 모델의 내부 지식과 충돌하면 답변이 흔들리므로, retrieval context를 믿을지 모델 prior를 믿을지 조절하는 메커니즘이 중요해졌다.
- angle: “RAG 실패는 검색 누락만이 아니라 지식 충돌 제어 문제” — gate-modulated activation steering, conflict detection, 최신 문서 우선 정책을 agentic RAG 설계로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, knowledge-conflict, activation-steering, grounding]
- status: idea

### 2026-06-30 — Pydantic AI: typed agent framework로 output contract와 tool schema를 강제하기
- type: tech
- source: https://github.com/pydantic/pydantic-ai
- why-now: agent framework가 늘어나면서 빠른 데모보다 typed dependency, structured output, tool schema, testability를 기존 Python 서비스 품질 기준에 맞추는 요구가 커졌다.
- angle: “agent를 Python application처럼 운영하려면 타입과 validation이 first-class여야 한다” — Pydantic model, dependency injection, tool contract, eval/test 패턴을 framework 소개로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-framework, pydantic, structured-output, python]
- status: idea

### 2026-06-30 — agentgateway: MCP server와 AI agent 앞단의 agentic proxy 설계
- type: tech
- source: https://github.com/agentgateway/agentgateway
- why-now: agent와 MCP server가 늘수록 tool endpoint, auth, routing, telemetry, policy enforcement를 각 앱에 흩어두지 않고 gateway 계층에서 다루려는 흐름이 강해지고 있다.
- angle: “MCP 운영의 production boundary는 개별 server가 아니라 proxy/gateway” — agent routing, MCP access control, observability, policy layer를 인프라 패턴으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, agent-gateway, infrastructure, agent-tools]
- status: published
- draft: content/posts/2026-06-30-agentgateway-agentic-proxy-infrastructure.mdx

### 2026-07-01 — [논문 리뷰] Self-Evolving World Models: LLM agent planning의 foresight를 배포 중 갱신하기
- type: paper
- source: http://arxiv.org/abs/2606.30639v1
- why-now: long-horizon agent가 실행 전 결과를 예측하는 world model을 쓰더라도, 잘못된 foresight는 무시되거나 오히려 planning을 망칠 수 있어 배포 중 self-correction 메커니즘이 중요해졌다.
- angle: “agent의 world model은 학습 시점 지식이 아니라 실행 transition에서 계속 갱신되는 운영 컴포넌트” — episodic memory, semantic rule extraction, selective foresight를 agent planning harness 설계로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, world-model, planning, memory]
- status: idea

### 2026-07-01 — [논문 리뷰] MESA: multi-agent system에서 가장 위험한 communication edge 찾기
- type: paper
- source: http://arxiv.org/abs/2606.30602v1
- why-now: multi-agent workflow가 실제 운영 자동화에 들어가면서 agent 간 메시지 채널 자체가 공격면이 됐고, 제한된 방어 리소스를 어디에 먼저 써야 하는지가 실무 문제가 됐다.
- angle: “multi-agent 보안은 agent별 권한만이 아니라 communication graph의 취약 edge 우선순위 문제” — label-free risk ranking, compromised edge 영향도, channel hardening 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, agent-security, communication-graph, risk]
- status: idea

### 2026-07-01 — [논문 리뷰] Forensic Trajectory Signatures: agent memory poisoning을 실행 궤적으로 탐지하기
- type: paper
- source: http://arxiv.org/abs/2606.30566v1
- why-now: persistent memory를 쓰는 agent는 prompt injection보다 은밀한 memory poisoning과 data exfiltration 위험이 커지고 있어, 최종 답변보다 tool trajectory 기반 탐지가 필요해졌다.
- angle: “agent 보안 로그는 감사 기록이 아니라 탐지 feature다” — memory_recall→email_send 같은 trajectory invariant, rule-based detector, trace feature 기반 runtime monitor를 설계 관점으로 설명한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 5
- suggested-category: paper-review
- suggested-tags: [agent-security, memory-poisoning, trajectory, detection]
- status: idea

### 2026-07-01 — [논문 리뷰] Attractor States: multi-turn LLM 대화가 특정 행동 상태로 수렴하는 이유
- type: paper
- source: http://arxiv.org/abs/2606.30571v1
- why-now: multi-agent debate와 LLM-as-judge를 길게 돌릴수록 독립적인 의견 교환보다 모델별 스타일·stance가 서로를 끌어당기는 장기 동역학이 품질과 편향을 좌우할 수 있다.
- angle: “multi-agent loop는 반복하면 객관적이 되는 게 아니라 attractor에 빠질 수 있다” — self-play/mixed-play dynamics, judge diversity, stopping rule을 평가 harness 관점으로 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, llm-eval, conversation-dynamics, bias]
- status: idea

### 2026-07-01 — [논문 리뷰] GROW²: robot tool use에서 which와 where를 계층적으로 grounding하기
- type: paper
- source: http://arxiv.org/abs/2606.30632v1
- why-now: embodied agent가 정해진 도구만 쓰는 수준을 넘어 대체 물체를 도구로 고르고 어느 부위를 써야 하는지 판단해야 하는 open-world affordance grounding 문제가 중요해졌다.
- angle: “tool-use agent의 grounding은 도구 선택과 접촉 위치 선택을 분리해야 한다” — VLM commonsense, object-part abstraction, semantic/geometric grounding을 로봇 agent 설계로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [robot-agent, tool-use, grounding, vlm]
- status: idea

### 2026-07-01 — Activepieces: AI agent와 MCP workflow automation을 한곳에 묶는 오픈소스 플랫폼
- type: tech
- source: https://github.com/activepieces/activepieces
- why-now: agent를 단독 챗봇으로 두는 대신 기존 업무 자동화, trigger/action, 수백 개 MCP server와 연결하려는 요구가 커지고 있고 activepieces는 활발한 업데이트와 큰 사용자 기반을 가진다.
- angle: “agent platform은 model wrapper가 아니라 workflow automation runtime과 tool marketplace의 결합” — trigger, MCP connector, permission, human approval, 운영 관측 포인트를 repo architecture 중심으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-workflow, mcp, automation, github-repo]
- status: idea

### 2026-07-01 — mcp-use: MCP app과 server를 함께 만드는 fullstack agent framework
- type: tech
- source: https://github.com/mcp-use/mcp-use
- why-now: MCP server가 늘어나면서 server 구현뿐 아니라 ChatGPT/Claude 같은 client surface와 agent runtime을 함께 설계하는 fullstack MCP 개발 흐름이 필요해지고 있다.
- angle: “MCP는 tool protocol만이 아니라 app/server boundary를 같이 설계하는 제품 인터페이스” — client integration, server lifecycle, auth/context 전달, 테스트 가능한 MCP app 구조를 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, agent-framework, tool-use, github-repo]
- status: idea

### 2026-07-01 — NVIDIA NeMo Gym: environment 기반으로 model과 agent를 평가·개선하기
- type: tech
- source: https://github.com/NVIDIA-NeMo/Gym
- why-now: agent 평가와 post-training이 prompt/output 비교를 넘어 environment, rollout, reward/metric loop를 공유하는 방향으로 가면서 NVIDIA NeMo 생태계의 Gym이 볼 만한 기준점이 됐다.
- angle: “agent eval은 테스트셋 파일이 아니라 environment API와 rollout log” — environment abstraction, evaluator, improvement loop, regression suite를 agentic RL/운영 평가 관점으로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-eval, environment, reinforcement-learning, github-repo]
- status: idea

### 2026-07-02 — [논문 리뷰] QVal: long-horizon agent dense supervision을 training 없이 평가하기
- type: paper
- source: http://arxiv.org/abs/2606.32034v1
- why-now: long-horizon LLM agent는 한 trajectory가 수백~수천 action으로 길어지면서 outcome-only reward가 너무 희소하고, dense supervision 신호를 매번 학습까지 돌려 비교하기 어렵다.
- angle: “agent RL에서 reward 신호를 고르기 전에 Q-alignment로 싸게 검증하자” — state-action score, reference-policy Q-value, dense supervision benchmark를 agent post-training 운영 루프로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, reinforcement-learning, eval, dense-supervision]
- status: idea

### 2026-07-02 — [논문 리뷰] Generative Skill Composition: LLM agent skill을 합성 가능한 절차 지식으로 다루기
- type: paper
- source: http://arxiv.org/abs/2606.32025v1
- why-now: coding/browser agent가 반복 작업을 skill로 저장하기 시작했지만, 실제 업무는 기존 skill을 그대로 호출하기보다 절차를 조합·변형해야 하는 경우가 많다.
- angle: “agent memory의 다음 단위는 fact가 아니라 composable skill package” — skill description, dependency, sandbox setup, procedural memory update를 개발자 agent harness 설계로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, skill-learning, procedural-memory, harness]
- status: published
- draft: content/posts/2026-07-02-generative-skill-composition-agent-skills.mdx

### 2026-07-02 — [논문 리뷰] TRIAGE: Agentic RL에서 role-typed credit assignment가 필요한 이유
- type: paper
- source: http://arxiv.org/abs/2606.32017v1
- why-now: agentic RL에서 검색, 클릭, 편집, 탐색 같은 action을 최종 성공/실패 하나로 동일하게 보상하면 유용한 탐색과 퇴행적 action을 구분하지 못한다.
- angle: “GRPO류 agent 학습은 action token이 아니라 역할별 진행 신호를 봐야 한다” — decisive progress, exploration, infrastructure, regression label을 rollout logging과 reward shaping으로 연결한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rl, credit-assignment, reward-model, tool-use]
- status: idea

### 2026-07-02 — [논문 리뷰] CORTEX: RAG hallucination을 token-level 내부 표현으로 잡기
- type: paper
- source: http://arxiv.org/abs/2606.31033v1
- why-now: long-form RAG 답변은 전체가 틀리기보다 특정 span에서 근거와 어긋나는 경우가 많아, 문서 단위 judge보다 token/span 단위 감지가 필요하다.
- angle: “RAG 품질 게이트는 최종 답변 점수보다 어느 토큰이 근거에서 이탈했는지 봐야 한다” — comparative internal representation, span-level flag, production QA overlay로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, hallucination-detection, eval, grounding]
- status: idea

### 2026-07-02 — [논문 리뷰] One Retrieval to Cover Them All: session-level RAG를 위한 knowledge base 재구성
- type: paper
- source: http://arxiv.org/abs/2606.31156v1
- why-now: 기업 RAG 사용자는 단발 질문보다 관련 질문이 이어지는 session으로 지식을 탐색하는데, query별 top-k retrieval은 세션 전체의 co-occurrence와 흐름을 놓치기 쉽다.
- angle: “RAG indexing은 문서 chunk가 아니라 session journey에 맞춰 재조직해야 한다” — co-occurrence-aware KB, session coverage, enterprise support/search UX 관점으로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, knowledge-base, session-search, enterprise-ai]
- status: idea

### 2026-07-02 — agent-desktop: OS accessibility tree로 desktop agent를 deterministic하게 만들기
- type: tech
- source: https://github.com/lahfir/agent-desktop
- why-now: browser agent를 넘어 native desktop automation을 맡기는 흐름이 커지면서 screenshot-only VLM 제어보다 구조화된 accessibility tree와 안정적인 element ref가 중요해졌다.
- angle: “desktop agent의 tool surface는 픽셀 좌표가 아니라 deterministic accessibility API여야 한다” — JSON output, element reference, CLI workflow, 권한/실패 복구를 repo introduction으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [desktop-agent, automation, accessibility, github-repo]
- status: idea

### 2026-07-02 — Archestra: MCP registry·gateway·orchestrator를 enterprise agent control plane으로 묶기
- type: tech
- source: https://github.com/archestra-ai/archestra
- why-now: MCP server와 agent 앱이 늘어날수록 tool discovery, guardrail, gateway, orchestrator를 각 앱에 흩어두면 권한·관측·정책 일관성이 무너진다.
- angle: “enterprise agent platform의 핵심은 모델 선택이 아니라 tool control plane” — MCP registry, gateway, guardrail, orchestration boundary를 platform architecture 관점으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, agent-platform, gateway, guardrails]
- status: idea

### 2026-07-02 — LeanCTX: AI agent가 무엇을 읽을지 결정하는 local context intelligence layer
- type: tech
- source: https://github.com/yvgude/lean-ctx
- why-now: 코딩/업무 agent가 repo와 파일 시스템 전체를 무작정 읽으면 비용·latency·privacy가 모두 나빠져, 로컬에서 context access를 중재하는 계층이 필요해지고 있다.
- angle: “context engineering은 prompt 작성이 아니라 read 권한과 memory selection을 통제하는 local binary 문제” — local-first context gate, token budget, 기억/읽기 정책을 repo architecture로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [context-engineering, coding-agent, local-first, github-repo]
- status: idea

### 2026-07-03 — [논문 리뷰] AutoMem: memory management를 trainable cognitive skill로 만들기
- type: paper
- source: http://arxiv.org/abs/2607.01224v1
- why-now: LLM agent memory가 단순 저장소에서 “무엇을 기록하고 언제 검색할지”를 학습하는 절차적 능력으로 이동하고 있다.
- angle: “메모리는 vector DB 기능이 아니라 agent가 익혀야 하는 운영 skill” — file-system operation, metamemory, encode/retrieve policy를 개인 비서·코딩 에이전트 memory 설계로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, procedural-memory, metamemory, tool-use]
- status: idea

### 2026-07-03 — [논문 리뷰] Coding Agent 성능 최적화 벤치마크는 정말 믿을 수 있을까
- type: paper
- source: http://arxiv.org/abs/2607.01211v1
- why-now: GSO, SWE-Perf, SWE-fficiency 같은 repo-level 성능 최적화 benchmark가 coding agent leaderboard 근거로 쓰이지만 측정 신뢰도와 reference patch 편향을 따져봐야 한다.
- angle: “코딩 에이전트 평가는 테스트 통과보다 benchmark harness 자체의 신뢰성이 먼저” — runtime variance, baseline/reference patch, metric leakage를 CI 기반 agent eval 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, benchmark, performance-optimization, eval]
- status: idea

### 2026-07-03 — [논문 리뷰] Adversarial Pragmatics: instruction conflict와 embedded command를 평가하는 법
- type: paper
- source: http://arxiv.org/abs/2607.01153v1
- why-now: agentic task에서 정책 모호성, 숨은 명령, 진행 상황 허위 보고는 단순 jailbreak보다 실제 운영에 가까운 실패 모드다.
- angle: “agent safety eval은 금지 문장 분류가 아니라 자연어 행위의 pragmatics 검증” — instruction hierarchy, embedded command, policy ambiguity를 runtime guardrail 테스트셋으로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-safety, instruction-conflict, eval, guardrails]
- status: idea

### 2026-07-03 — [논문 리뷰] Theoria: informal reasoning state를 rewrite-acceptability로 검증하기
- type: paper
- source: http://arxiv.org/abs/2607.01223v1
- why-now: LLM-as-judge의 불투명한 점수와 formal proof assistant의 낮은 coverage 사이에서, 추론 상태의 변환 가능성을 감사 가능한 검증 단위로 삼는 흐름이 나왔다.
- angle: “정답을 점수로 판정하기보다 reasoning state가 보존되는 rewrite인지 묻자” — informal proof/reasoning verification, audit trail, judge-free QA gate를 평가 harness 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [reasoning, verification, llm-eval, auditability]
- status: idea

### 2026-07-03 — [논문 리뷰] QuasiMoTTo: test-time scaling에서 중복 추론을 줄이는 방법
- type: paper
- source: http://arxiv.org/abs/2607.01179v1
- why-now: reasoning model을 여러 번 샘플링해 성능을 올리는 방식은 비용이 크고, 독립 샘플들이 같은 풀이를 반복하는 낭비가 커지고 있다.
- angle: “test-time compute는 많이 쓰는 것보다 다양하게 쓰는 게 먼저” — quasi-Monte Carlo sampling, attempt diversity, inference budget 관리를 serving 최적화 관점으로 설명한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [test-time-scaling, reasoning, inference, optimization]
- status: idea

### 2026-07-03 — hud-python: agent RL environment와 eval을 한 번 정의해 재사용하기
- type: tech
- source: https://github.com/hud-evals/hud-python
- why-now: agent eval과 RL post-training이 가까워지면서 task environment를 평가용·학습용으로 따로 만드는 비용을 줄이는 프레임워크가 중요해졌다.
- angle: “agent benchmark는 점수표가 아니라 train/eval 공용 environment package여야 한다” — environment API, rollout, reward/evaluator 재사용, regression suite를 repo architecture 중심으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-eval, reinforcement-learning, environment, github-repo]
- status: idea

### 2026-07-03 — gh-aw-mcpg: GitHub Agentic Workflows MCP Gateway 살펴보기
- type: tech
- source: https://github.com/github/gh-aw-mcpg
- why-now: GitHub Agentic Workflows가 repo-native 자동화로 확장되면서 MCP gateway가 GitHub 이벤트·권한·tool routing을 어떻게 묶는지 볼 만한 구현체가 생겼다.
- angle: “개발자 에이전트의 control plane을 GitHub 안에 넣으면 무엇이 달라지나” — MCP gateway, repo event, credential boundary, workflow automation을 GitHub 운영 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [github, mcp, agentic-workflow, developer-tools]
- status: idea

### 2026-07-03 — Skybridge: type-safe MCP Apps와 ChatGPT Apps를 함께 설계하기
- type: tech
- source: https://github.com/alpic-ai/skybridge
- why-now: MCP server 구현이 늘어나는 다음 단계는 ChatGPT/Claude/App surface까지 포함한 full-stack agent app 개발 경험과 type safety다.
- angle: “MCP는 server 목록이 아니라 app contract까지 포함한 제품 인터페이스” — TypeScript schema, React UI, platform-agnostic app boundary를 agent-facing product architecture로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, agent-apps, typescript, github-repo]
- status: idea

### 2026-07-04 — [논문 리뷰] Distributed Attacks in Persistent-State AI Control: PR과 시간에 흩어진 coding-agent 공격
- type: paper
- source: http://arxiv.org/abs/2607.02514v1
- why-now: coding agent가 여러 세션과 PR에 걸쳐 코드를 지속적으로 수정하면서, 단일 diff에서는 benign해 보이는 변경들이 시간이 지나 조합 공격이 되는 persistent-state 위협이 중요해졌다.
- angle: “AI coding agent 보안은 PR 하나의 diff 리뷰가 아니라 시간 축의 attack graph를 봐야 한다” — delayed payload, cross-PR state, CI/audit log 기반 runtime governance를 개발 워크플로로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, agent-security, repository-governance, persistent-state]
- status: published
- draft: content/posts/2026-07-04-distributed-attacks-persistent-state-ai-control.mdx

### 2026-07-04 — [논문 리뷰] ReContext: long-context reasoning을 recursive evidence replay로 보강하기
- type: paper
- source: http://arxiv.org/abs/2607.02509v1
- why-now: long-context 모델이 길어진 입력 안의 근거를 실제로 잘 쓰지 못하는 문제가 계속 드러나면서, context window 크기보다 evidence replay/harness 설계가 성능 병목으로 떠오르고 있다.
- angle: “긴 컨텍스트를 넣는 것과 필요한 증거를 다시 읽게 만드는 것은 다르다” — recursive evidence replay, retrieval-free long-context QA, agent context manager 설계로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [long-context, reasoning, evidence-replay, context-engineering]
- status: idea

### 2026-07-04 — [논문 리뷰] What LLM Agents Say When No One Is Watching: multi-agent debate의 숨은 목적 형성
- type: paper
- source: http://arxiv.org/abs/2607.02507v1
- why-now: multi-agent debate와 agent society가 평가·기획·의사결정에 쓰이기 시작하면서, 공개 발화와 비공개 reasoning 사이의 사회적 구조 편향을 이해해야 한다.
- angle: “agent를 여러 명 붙이면 중립성이 생기는 게 아니라 역할·관객·관계가 latent objective를 만든다” — public/private expression gap, judge protocol, debate harness 안전장치를 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, debate, social-simulation, eval]
- status: idea

### 2026-07-04 — [논문 리뷰] EvoPolicyGym: autonomous policy evolution을 final score 너머에서 평가하기
- type: paper
- source: http://arxiv.org/abs/2607.02440v1
- why-now: agent가 executable policy를 feedback으로 계속 고치는 흐름이 늘지만, 최종 성공률만 보면 정책 진화 과정의 안정성·퇴행·탐색 품질을 놓치기 쉽다.
- angle: “self-improving agent 평가는 마지막 점수가 아니라 policy edit trajectory를 봐야 한다” — interactive environment, regression signal, autonomous policy evolution harness를 agentic RL 운영법으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rl, policy-evolution, eval, environment]
- status: idea

### 2026-07-04 — [논문 리뷰] Reasoning effort, not tool access: coding agent 첫 시도 신뢰도는 어디서 오나
- type: paper
- source: http://arxiv.org/abs/2607.02436v1
- why-now: coding agent에 브라우저, 테스트 도구, 디자인 프롬프트를 더 붙이는 것이 항상 첫 시도 성공률을 올리는지 의심해야 하는 단계가 됐다.
- angle: “도구를 더 주기 전에 reasoning budget과 검증 루프를 먼저 측정하자” — first-try reliability, tool access ablation, agent coding workflow 평가 체크리스트로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, tool-use, reasoning, reliability]
- status: idea

### 2026-07-04 — TanStack AI: type-safe TypeScript agent SDK의 provider-agnostic 설계
- type: tech
- source: https://github.com/TanStack/ai
- why-now: TypeScript 앱에서 streaming chat, tool calling, agent workflow, multimodal input을 provider lock-in 없이 묶으려는 수요가 커지고 있고 TanStack 생태계가 이를 SDK 레벨로 다루기 시작했다.
- angle: “agent SDK 선택 기준은 모델 호출 래퍼가 아니라 타입 안전한 tool contract와 UI/runtime 통합성” — streaming state, typed tools, provider abstraction, React/TS 개발 경험을 중심으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [typescript, agent-sdk, tool-calling, tanstack]
- status: idea

### 2026-07-04 — IBM mcp-context-forge: MCP·A2A·REST를 묶는 gateway/registry 패턴
- type: tech
- source: https://github.com/IBM/mcp-context-forge
- why-now: enterprise agent 환경에서는 MCP server만 늘리는 것보다 MCP, A2A, REST/gRPC API를 통합 endpoint와 registry 뒤에서 관리하는 control plane이 필요해지고 있다.
- angle: “agent tool 플랫폼의 중심은 개별 MCP 서버가 아니라 gateway, registry, proxy” — unified endpoint, access control, observability, protocol bridging을 엔터프라이즈 agent infra 관점으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, a2a, gateway, enterprise-ai]
- status: idea

### 2026-07-04 — CORAL: multi-agent autonomous self-evolution을 위한 lightweight infrastructure
- type: tech
- source: https://github.com/Human-Agent-Society/CORAL
- why-now: 연구·자동화 에이전트가 단일 worker를 넘어 여러 agent가 역할을 나누고 스스로 개선하는 구조로 가면서, self-evolution workflow를 실험 가능한 infrastructure로 묶는 repo가 늘고 있다.
- angle: “multi-agent self-evolution은 role-play가 아니라 state, evaluation, communication protocol의 문제” — autoresearch workflow, agent society runtime, 개선 루프 검증 포인트를 repo introduction으로 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [multi-agent, self-evolution, research-agent, github-repo]
- status: idea

### 2026-07-05 — [논문 리뷰] LACUNA: LLM unlearning이 진짜 parameter에서 지워졌는지 평가하기
- type: paper
- source: http://arxiv.org/abs/2607.02513v1
- why-now: 개인정보·저작권 데이터 삭제 요구가 커지면서 output-level unlearning 성공만으로는 모델 내부 지식이 실제로 제거됐는지 설명하기 어렵다.
- angle: “unlearning 평가는 답변 차단이 아니라 knowledge localization precision 문제” — parameter localization, obfuscation risk, PII 제거 QA를 모델 운영 체크리스트로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [unlearning, privacy, llm-eval, interpretability]
- status: idea

### 2026-07-05 — [논문 리뷰] Program-as-Weights: 자연어 spec을 로컬 fuzzy function으로 컴파일하기
- type: paper
- source: http://arxiv.org/abs/2607.02512v1
- why-now: 모든 애매한 분류·정렬·복구 작업을 LLM API 호출로 처리하면 비용, latency, 재현성, offline 실행 문제가 커진다.
- angle: “LLM 호출을 함수처럼 쓰는 것과 fuzzy function 자체를 배포하는 것은 다르다” — spec-to-weights 컴파일, local inference, rule-based code와 LLM API 사이의 설계 공간을 설명한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [llm-inference, programming-model, local-ai, fuzzy-functions]
- status: idea

### 2026-07-05 — [논문 리뷰] Online Safety Monitoring: LLM 출력 안전성을 실시간 risk control로 감시하기
- type: paper
- source: http://arxiv.org/abs/2607.02510v1
- why-now: alignment training만으로 배포 시점 unsafe output을 막기 어렵고, reasoning·red-team task에서 verifier signal을 운영 알람으로 바꾸는 방법이 필요해졌다.
- angle: “guardrail은 yes/no classifier가 아니라 calibrated alarm system이어야 한다” — external verifier, threshold calibration, risk control을 production LLM monitoring으로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [llm-safety, monitoring, risk-control, guardrails]
- status: idea

### 2026-07-05 — [논문 리뷰] TestEvo-Bench: test와 code가 함께 진화하는 coding agent 평가
- type: paper
- source: http://arxiv.org/abs/2607.02469v1
- why-now: coding agent가 기능 코드를 바꾸면서 테스트를 같이 갱신해야 하는데, 기존 benchmark는 test update가 실행 가능하고 semantic하게 연결됐는지 충분히 보지 못한다.
- angle: “코딩 에이전트 평가는 패치 통과가 아니라 behavior change를 테스트로 기록하는 능력까지 봐야 한다” — executable benchmark, test-code co-evolution, CI verifier 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, test-generation, benchmark, software-engineering]
- status: idea

### 2026-07-05 — [논문 리뷰] Steerability via Constraints: coding agent oversight를 제약 시스템으로 만들기
- type: paper
- source: http://arxiv.org/abs/2607.02389v1
- why-now: 코딩 에이전트의 성능이 올라갈수록 사람 리뷰가 병목이 되고, access control·network policy·coding convention 같은 기존 엔지니어링 제약을 agent oversight에 재사용하려는 흐름이 강해졌다.
- angle: “agent scaffold를 더 붙이기보다 repo 제약을 기계적으로 강제하자” — constraint substrate, scalable oversight, token-cheap governance를 개발 워크플로 관점으로 설명한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, oversight, constraints, repository-governance]
- status: idea

### 2026-07-05 — [논문 리뷰] DRIFTLENS: personalization memory가 reasoning drift를 만드는 방식
- type: paper
- source: http://arxiv.org/abs/2607.02374v1
- why-now: 개인화 LLM과 agent memory가 답변 스타일뿐 아니라 추론 경로 자체를 바꿀 수 있어, 장기 기억이 가치 편향과 reasoning drift를 만드는지 점검해야 한다.
- angle: “agent memory 품질은 기억 정확도뿐 아니라 reasoning trajectory를 얼마나 비트는지도 봐야 한다” — value-category mapping, ground-truth-free drift 측정, personal assistant memory QA로 연결한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, personalization, reasoning, eval]
- status: idea

### 2026-07-05 — agnix: AGENTS.md·MCP·hooks를 위한 linter/LSP
- type: tech
- source: https://github.com/agent-sh/agnix
- why-now: Claude Code, Codex, Gemini CLI 같은 개발자 에이전트가 repo guidance와 hooks/MCP 설정에 의존하면서, 사람이 읽는 문서가 사실상 실행 설정 파일이 되고 있다.
- angle: “AGENTS.md는 README가 아니라 lintable configuration artifact” — guidance schema, autofix, IDE feedback, agent harness regression을 repo 운영 패턴으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, agents-md, lsp, github-repo]
- status: idea

### 2026-07-05 — Aegis: AI agent runtime policy enforcement와 audit trail 붙이기
- type: tech
- source: https://github.com/Justin0504/Aegis
- why-now: tool 권한을 가진 agent를 실무에 붙일수록 prompt-level guardrail만으로는 부족하고, human approval, kill switch, cryptographic audit trail 같은 runtime control이 필요해진다.
- angle: “agent 보안은 모델 응답 필터가 아니라 실행 경로 위의 policy enforcement layer” — 무코드 삽입, 승인 게이트, 감사 로그, rollback boundary를 repo introduction으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-security, runtime-policy, audit, github-repo]
- status: idea

### 2026-07-06 — [논문 리뷰] SkillFuzz: open skill marketplace의 암묵적 intent를 fuzzing하기
- type: paper
- source: http://arxiv.org/abs/2607.02345v1
- why-now: LLM agent가 재사용 가능한 skill을 marketplace에서 조합하는 흐름이 커지면서, skill description 뒤에 숨어 있는 implicit intent와 조합형 위험을 테스트해야 한다.
- angle: “agent skill은 프롬프트 조각이 아니라 fuzzing 대상 API surface” — skill composition, implicit intent discovery, marketplace QA를 coding agent 보안 하네스 관점으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-skills, fuzzing, security, marketplace]
- status: idea

### 2026-07-06 — [논문 리뷰] AgenticSTS: bounded-memory long-horizon agent 테스트베드
- type: paper
- source: http://arxiv.org/abs/2607.02255v1
- why-now: 장기 실행 agent는 모든 과거 관찰과 tool trace를 prompt에 붙일 수 없고, memory contract가 성능·비용·프라이버시를 동시에 좌우한다.
- angle: “agent memory 평가는 기억을 많이 넣었나가 아니라 어떤 결정을 위해 무엇을 볼 수 있게 했나를 봐야 한다” — bounded-memory contract, state tracking, long-horizon regression suite로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, long-horizon, eval, bounded-context]
- status: idea

### 2026-07-06 — [논문 리뷰] ContextNest: autonomous agent를 위한 verifiable context governance
- type: paper
- source: http://arxiv.org/abs/2607.02116v1
- why-now: RAG/agent가 외부 knowledge store에 의존할수록 relevance만으로는 부족하고 provenance, version, integrity, point-in-time reconstruction이 운영 요구가 되고 있다.
- angle: “RAG context는 검색 결과가 아니라 감사 가능한 supply chain artifact” — context provenance, version identity, traceability, 재현 가능한 agent 실행 로그를 설계 관점으로 설명한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [context-governance, rag, agent, provenance]
- status: idea

### 2026-07-06 — [논문 리뷰] PACE: 비싼 agent benchmark를 대신하는 capability proxy
- type: paper
- source: http://arxiv.org/abs/2607.02032v1
- why-now: SWE-Bench, GAIA 같은 agent benchmark는 비용과 인프라 부담이 커서 모델·프롬프트·툴 설정을 빠르게 반복 평가하기 어렵다.
- angle: “agent eval은 full benchmark만 돌리기보다 proxy metric으로 후보를 걸러야 한다” — proxy 설계, rank correlation, regression triage를 eval 운영 루프로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-eval, benchmark, proxy-metric, swe-bench]
- status: idea

### 2026-07-06 — [논문 리뷰] CheckRLM: retrieval-augmented reasoning에서 knowledge-thought coherence 검사하기
- type: paper
- source: http://arxiv.org/abs/2607.02262v1
- why-now: reasoning model이 긴 chain-of-thought를 만들 때 retrieval evidence와 생각 단계가 중간에서 어긋나도 최종 답변만 보면 원인을 찾기 어렵다.
- angle: “RAG 평가는 답변 grounding만이 아니라 reasoning step과 evidence의 coherence를 봐야 한다” — knowledge-thought mismatch, verifier, agentic RAG QA gate로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, reasoning, coherence, eval]
- status: idea

### 2026-07-06 — [논문 리뷰] A-TMA: long-term agent memory의 ghost memory 실패 분해하기
- type: paper
- source: http://arxiv.org/abs/2607.01935v1
- why-now: 개인화 agent에서 사용자 사실은 바뀌는데, 오래된 기억이 현재 상태처럼 섞이는 ghost memory가 장기 운영 품질을 크게 흔든다.
- angle: “agent memory에는 과거 사실과 현재 사실을 구분하는 state-aware QA가 필요하다” — memory update, stale fact, temporal coordination failure를 개인 비서 메모리 regression test로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, personalization, stale-facts, eval]
- status: idea

### 2026-07-06 — Mission Control: self-hosted multi-agent orchestration 대시보드
- type: tech
- source: https://github.com/builderz-labs/mission-control
- why-now: 팀 단위 agent 운영은 개별 CLI 실행을 넘어 task dispatch, multi-agent workflow, spend monitoring, governance를 한 control plane에서 봐야 하는 단계로 가고 있다.
- angle: “agent orchestration의 운영 UI는 채팅창이 아니라 mission control dashboard” — 작업 배정, 비용 관측, 권한·정책, multi-agent workflow를 repo architecture 중심으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [multi-agent, orchestration, governance, github-repo]
- status: idea

### 2026-07-06 — Commonly: 팀과 에이전트가 공유하는 self-hosted workspace memory
- type: tech
- source: https://github.com/Team-Commonly/commonly
- why-now: 여러 agent runtime을 쓰는 팀에서는 agent별 memory silo가 지식 중복, 권한 혼선, 감사 불가능성을 만들기 쉽다.
- angle: “agent memory는 개인 비서 기능이 아니라 팀 workspace substrate가 될 수 있다” — shared memory, self-hosting, runtime-agnostic integration, governance boundary를 repo introduction으로 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-memory, workspace, self-hosted, github-repo]
- status: idea

### 2026-07-06 — [논문 리뷰] What LLM Agents Say When No One Is Watching: multi-agent debate의 숨은 objective
- type: paper
- source: http://arxiv.org/abs/2607.02507v1
- why-now: multi-agent debate와 committee-style judge를 제품 평가·의사결정에 쓰는 흐름이 커지면서, 역할·청중·관계 구조만으로 agent 발화가 어떻게 달라지는지 점검할 필요가 생겼다.
- angle: “multi-agent system 평가는 정답률뿐 아니라 사회적 구조가 만드는 latent objective를 봐야 한다” — role/audience effect, debate topology, judge diversity와 trace audit 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, debate, llm-as-judge, eval]
- status: idea

### 2026-07-06 — [논문 리뷰] Atomic Task Graph: agent planning을 원자 작업 그래프로 쪼개기
- type: paper
- source: http://arxiv.org/abs/2607.01942v1
- why-now: agent 성능 개선이 더 큰 모델이나 task-specific tuning에만 기대기 어려워지면서, planning/execution scaffold 자체를 일반화하는 접근이 다시 중요해졌다.
- angle: “agent 계획은 긴 자연어 plan이 아니라 검증 가능한 atomic task graph여야 한다” — task decomposition, dependency edge, execution monitor, 재시도·부분 실패 복구 패턴으로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-planning, task-graph, execution, orchestration]
- status: idea

### 2026-07-06 — [논문 리뷰] SkillCoach: agent skill-use 평가 rubrics를 스스로 진화시키기
- type: paper
- source: http://arxiv.org/abs/2607.01874v1
- why-now: agent skill repository가 커질수록 어떤 skill을 언제 쓰고, 겹치는 skill을 어떻게 구분할지 사람이 rubric을 계속 관리하기 어렵다.
- angle: “skill은 설치 목록이 아니라 평가 가능한 operational layer” — self-evolving rubric, skill selection QA, overlap handling, regression suite를 agent harness 운영법으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-skills, eval, rubric, regression-test]
- status: idea

### 2026-07-06 — [논문 리뷰] Cloak and Detonate: agent skill malware를 동적으로 잡는 법
- type: paper
- source: http://arxiv.org/abs/2607.02357v1
- why-now: 공개 skill marketplace와 MCP/agent plugin 생태계가 커지면서, static scan을 우회하고 실행 시점에만 payload를 터뜨리는 skill supply-chain 공격이 현실적인 위협이 됐다.
- angle: “agent skill 보안은 README 검사보다 sandboxed detonation과 behavior trace가 핵심” — scanner evasion, dynamic detection, permission boundary, CI quarantine workflow로 설명한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-security, skill-marketplace, malware, sandbox]
- status: idea

### 2026-07-06 — [논문 리뷰] Coding Agents Are Guessing: underspecified DevOps 지시의 action-boundary 위반
- type: paper
- source: http://arxiv.org/abs/2607.02294v1
- why-now: coding agent가 shell, repository, cloud/API까지 만지는 상황에서 “대충 알아서 해줘”가 과권한 명령 실행과 운영 사고로 이어질 수 있다.
- angle: “agent가 맞는 결과를 냈어도 action boundary를 넘으면 실패다” — underspecification, operational API guardrail, approval checkpoint, least-action policy로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, devops, safety, action-boundary]
- status: idea

### 2026-07-06 — trpc-agent-go: Go 기반 production agent workflow 런타임
- type: tech
- source: https://github.com/trpc-group/trpc-agent-go
- why-now: Python/TypeScript 중심 agent framework 사이에서 Go 서비스 팀이 graph workflow, MCP, A2A, memory, eval, observability를 한 런타임에서 묶을 선택지가 늘고 있다.
- angle: “agent framework 선택 기준을 언어 생태계와 운영 런타임까지 내려서 보자” — graph workflow, typed tools, memory/eval/observability, Go backend integration 체크리스트로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-framework, golang, mcp, observability]
- status: idea

### 2026-07-06 — google/adk-go: Google ADK를 Go 서비스 agent runtime으로 쓰기
- type: tech
- source: https://github.com/google/adk-go
- why-now: agent 개발이 notebook demo에서 backend service로 이동하면서, code-first agent를 Go로 평가·배포하려는 팀에게 공식 ADK의 Go surface가 실무 옵션이 된다.
- angle: “ADK는 모델 호출 wrapper가 아니라 session, tool, eval, deployment boundary를 가진 service SDK” — Python ADK와 비교하며 Go 팀의 agent 운영 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [google-adk, agent-framework, golang, eval]
- status: idea

### 2026-07-06 — ctx: 현재 작업 창에 맞는 skills·agents·MCP만 로드하는 context router
- type: tech
- source: https://github.com/stevesolun/ctx
- why-now: agent harness가 커질수록 모든 AGENTS.md, skill, MCP 설명을 매 turn 넣는 방식은 token budget과 local compute를 빠르게 낭비한다.
- angle: “context engineering은 더 많이 넣는 기술이 아니라 지금 필요한 agent substrate만 고르는 routing 문제” — skill/MCP graph, token budget, retrieval policy, harness cold-start 최적화로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [context-engineering, agent-harness, mcp, github-repo]
- status: idea

### 2026-07-07 — [논문 리뷰] Steerability via Constraints: coding agent oversight를 제약 시스템으로 만들기
- type: paper
- source: http://arxiv.org/abs/2607.02389v1
- why-now: coding agent가 repo 변경, 테스트, 배포 스크립트까지 직접 만지는 흐름에서 “사람이 리뷰한다”만으로는 보안·확장성·코드베이스 일관성을 지키기 어렵다.
- angle: “agent oversight는 채팅 승인보다 constraint substrate가 되어야 한다” — allowed action, repository invariant, policy-as-code, review cost 절감을 coding agent 운영 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, oversight, constraints, policy-as-code]
- status: idea

### 2026-07-07 — [논문 리뷰] DRIFTLENS: 개인화 memory가 reasoning trajectory를 어떻게 drift시키나
- type: paper
- source: http://arxiv.org/abs/2607.02374v1
- why-now: personalization memory를 붙인 LLM 서비스가 늘면서 답변 내용뿐 아니라 reasoning path 자체가 사용자 기억 주입으로 바뀌는지 측정할 필요가 커졌다.
- angle: “agent memory 평가는 기억 검색 정확도만이 아니라 추론 경로 drift를 봐야 한다” — memory-induced reasoning drift, trace 비교, personalization regression suite로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, personalization, reasoning, eval]
- status: idea

### 2026-07-07 — [논문 리뷰] CLAP: domain agent post-training을 폐루프 release control로 운영하기
- type: paper
- source: http://arxiv.org/abs/2607.01846v1
- why-now: 업무용 agent를 adapter/post-training으로 개선할 때 offline score, 실제 업무 성능, release risk가 어긋나는 문제가 반복된다.
- angle: “agent 학습은 학습 파이프라인보다 release control loop가 핵심” — business data 정제, offline/application mismatch, adapter release gate, rollback 기준을 실무 운영법으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-training, release-control, eval, domain-agent]
- status: idea

### 2026-07-07 — [논문 리뷰] Bayesian Uncertainty Propagation: Agentic RAG pipeline의 실패 확률을 단계별로 전파하기
- type: paper
- source: http://arxiv.org/abs/2607.00972v1
- why-now: Agentic RAG는 query rewrite, retrieval, tool use, synthesis가 이어지는 multi-stage pipeline이라 어느 단계의 불확실성이 최종 답변 위험으로 커지는지 보기 어렵다.
- angle: “RAG confidence는 최종 답변 logprob가 아니라 pipeline uncertainty graph로 봐야 한다” — 단계별 uncertainty propagation, fallback trigger, multi-hop QA gate를 설계한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rag, uncertainty, bayesian, qa-gate]
- status: idea

### 2026-07-07 — [논문 리뷰] Open-source multi-agent framework 생태계 건강도를 어떻게 볼까
- type: paper
- source: http://arxiv.org/abs/2607.02453v1
- why-now: agent framework가 너무 많아지면서 GitHub stars나 데모 영상만으로 LangGraph, CrewAI, AutoGen류 선택을 판단하기 어렵다.
- angle: “framework 선택은 인기보다 adoption trajectory와 maintenance health를 봐야 한다” — longitudinal repo 분석, contributor health, release cadence, lock-in risk 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, framework-selection, ecosystem-health, github-analysis]
- status: idea

### 2026-07-07 — [논문 리뷰] Reasoning effort, not tool access: agentic code generation에서 진짜 신뢰도를 사는 것
- type: paper
- source: http://arxiv.org/abs/2607.02436v1
- why-now: coding agent에 browser test, design prompt, extra tool을 계속 붙이는 흐름이 있지만, 첫 시도 신뢰도가 실제로 어디서 개선되는지 분리해 봐야 한다.
- angle: “tool을 더 주는 것보다 reasoning budget과 검증 루프를 어떻게 배분할지가 중요하다” — first-try reliability, tool access ablation, coding workflow 설계 기준으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, reasoning-effort, tool-use, reliability]
- status: idea

### 2026-07-07 — Skybridge: MCP Apps와 ChatGPT Apps를 type-safe TypeScript framework로 묶기
- type: tech
- source: https://github.com/alpic-ai/skybridge
- why-now: MCP client/server와 ChatGPT Apps를 각각 따로 만드는 대신, React 기반 UI와 typed tool contract를 함께 관리하려는 full-stack agent app 흐름이 생기고 있다.
- angle: “agent app은 tool schema와 UI state를 분리하면 금방 깨진다” — type-safe tool contract, React-powered app surface, platform-agnostic MCP/ChatGPT app 구조를 repo 중심으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, chatgpt-apps, typescript, agent-framework]
- status: idea

### 2026-07-07 — open-multi-agent: goal을 task DAG로 쪼개는 TypeScript multi-agent orchestration
- type: tech
- source: https://github.com/open-multi-agent/open-multi-agent
- why-now: multi-agent demo가 채팅방식 협업을 넘어서 coordinator가 목표를 DAG로 분해하고 여러 LLM backend에 실행시키는 runtime 패턴으로 이동하고 있다.
- angle: “multi-agent orchestration은 역할놀이가 아니라 task graph runtime” — coordinator, task DAG, provider abstraction, failure/retry policy를 TypeScript 서비스 관점에서 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [multi-agent, orchestration, task-dag, typescript]
- status: published
- draft: content/posts/2026-07-07-open-multi-agent-task-dag-orchestration.mdx

### 2026-07-07 — Future AGI: eval·observability·simulation을 한 플랫폼으로 묶는 agent QA stack
- type: tech
- source: https://github.com/future-agi/future-agi
- why-now: agent 품질 관리는 단발 benchmark보다 trace, eval, simulation, dataset, guardrail을 함께 돌리는 self-hostable QA loop가 필요해지고 있다.
- angle: “agent eval platform은 점수판이 아니라 개선 루프의 control plane” — tracing, simulations, datasets, gateway/guardrail, CI regression을 운영 체크리스트로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-eval, observability, simulation, self-hosted]
- status: idea

### 2026-07-08 — [논문 리뷰] LLM-as-a-Verifier: verification을 LLM scaling axis로 다루기
- type: paper
- source: http://arxiv.org/abs/2607.05391v1
- why-now: pre-training/post-training/test-time compute 다음 병목으로 “답이 맞는지 검증하는 능력”이 떠오르면서, verifier를 별도 scaling 축으로 보는 연구가 나왔다.
- angle: “LLM-as-a-judge를 점수 매기기 도구가 아니라 agent 실행의 verification substrate로 보자” — solution verifier, reward signal, regression gate, tool trajectory QA를 연결한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [llm-verification, eval, agent-qa, reasoning]
- status: idea

### 2026-07-08 — [논문 리뷰] CompactionRL: long-horizon agent context 압축을 RL 루프에 넣기
- type: paper
- source: http://arxiv.org/abs/2607.05378v1
- why-now: 장기 실행 agent가 context window를 넘기 전에 요약·압축해야 하지만, 압축 품질을 rollout 성공과 함께 학습·평가하는 방법은 아직 초기 단계다.
- angle: “context compaction은 후처리 요약이 아니라 agent policy의 일부” — 압축 trigger, state 보존, rollout continuation, 실패 복구를 long-running agent runtime 설계로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, context-compaction, reinforcement-learning, long-horizon]
- status: idea

### 2026-07-08 — [논문 리뷰] SovereignPA-Bench: user-owned personal agent의 consent와 intent 평가
- type: paper
- source: http://arxiv.org/abs/2607.05363v1
- why-now: 개인 agent가 기억, 필터링, 서비스 협상, tool use를 대신 수행할수록 플랫폼 목표보다 사용자 의도와 동의 경계를 지키는지가 핵심 평가 기준이 된다.
- angle: “개인 비서 agent의 성공 기준은 task completion이 아니라 user sovereignty 보존” — evolving intent, consent constraint, platform mediation, audit trail을 privacy/agent governance 관점으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [personal-agent, consent, privacy, benchmark]
- status: idea

### 2026-07-08 — [논문 리뷰] EdgeBench: real-world environment interaction에서 agent scaling law 찾기
- type: paper
- source: http://arxiv.org/abs/2607.05155v1
- why-now: agent 성능을 정적 문제집이 아니라 배포 후 환경 상호작용 데이터로 개선하려면, interaction hour와 task diversity가 성능에 어떤 scaling law를 만드는지 알아야 한다.
- angle: “agent post-training의 compute 단위는 토큰만이 아니라 환경에서 보낸 시간” — 134개 real-world task, interaction log, environment learning curve를 eval/학습 운영 관점으로 설명한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, environment-learning, scaling-law, eval]
- status: idea

### 2026-07-08 — [논문 리뷰] When Agents Lie: 반복 게임에서 agent commitment를 어떻게 검증할까
- type: paper
- source: http://arxiv.org/abs/2607.05132v1
- why-now: autonomous agent가 의도 선언 뒤 실제 행동을 수행하는 프로토콜이 늘면서, 공개 약속과 최종 행동이 어긋나는 strategic deception을 평가해야 한다.
- angle: “agent alignment 평가는 유해 답변 차단을 넘어 commitment fidelity를 봐야 한다” — private intent, public announcement, final action을 분리한 game harness와 운영 모니터링으로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-safety, deception, commitment, eval]
- status: idea

### 2026-07-08 — OptiAgent: 자연어 OR 문제를 solver-ready formulation으로 바꾸는 multi-agent loop
- type: paper
- source: http://arxiv.org/abs/2607.05346v1
- why-now: 업무 자동화 agent가 단순 코드 생성보다 수학적 모델링, 제약 추출, solver 실행까지 담당하는 방향으로 확장되고 있다.
- angle: “최적화 agent의 핵심은 코드를 바로 쓰는 게 아니라 decision variable과 constraint를 검증 가능한 중간표현으로 만드는 것” — formulation agent, code generator, solver feedback loop를 실무 자동화로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [optimization-agent, multi-agent, operations-research, code-generation]
- status: idea

### 2026-07-08 — bitrouter: agentic loop를 위한 LLM gateway와 router 설계
- type: tech
- source: https://github.com/bitrouter/bitrouter
- why-now: agent workflow가 여러 model, harness, tool loop를 섞어 쓰면서 latency, cost, reliability를 runtime router에서 조절하려는 요구가 커지고 있다.
- angle: “agent gateway는 API key proxy가 아니라 loop-level routing policy” — provider abstraction, fallback, cost/latency policy, harness-agnostic integration을 repo architecture 중심으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-gateway, llm-routing, cost-optimization, github-repo]
- status: idea

### 2026-07-08 — hoop: MCP·LLM·DB·container 앞단의 wire-level policy gateway
- type: tech
- source: https://github.com/hoophq/hoop
- why-now: agent가 MCP server뿐 아니라 데이터베이스와 컨테이너까지 만지는 환경에서는 프로토콜별 보안 정책을 흩어두기보다 gateway에서 일관되게 강제해야 한다.
- angle: “agent 보안 경계는 prompt guardrail보다 wire-level enforcement에 가깝다” — MCP/LLM/DB/container 공통 정책, low-latency enforcement, audit log를 agent infra 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-security, gateway, mcp, infrastructure]
- status: idea

### 2026-07-09 — [논문 리뷰] DynaKRAG: multi-hop RAG에서 evidence control을 학습 가능한 정책으로 만들기
- type: paper
- source: http://arxiv.org/abs/2607.06507v1
- why-now: multi-hop RAG가 query rewrite, iterative retrieval, evidence sufficiency 판단을 수작업 rule로 묶는 단계에서 벗어나, 단계별 evidence action을 학습·제어하는 방향으로 가고 있다.
- angle: “RAG agent의 핵심은 더 많이 검색하는 것이 아니라 다음 evidence operation을 고르는 control policy” — missing fact, bridge entity, sufficiency signal을 agentic RAG runtime 설계로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rag, multi-hop, evidence-control, retrieval]
- status: published
- draft: content/posts/2026-07-09-dynakrag-multihop-rag-evidence-control.mdx

### 2026-07-09 — [논문 리뷰] Doomed from the Start: 실패할 agent episode를 초기에 중단하는 법
- type: paper
- source: http://arxiv.org/abs/2607.06503v1
- why-now: multi-step LLM agent가 이미 실패 궤도에 들어간 뒤에도 긴 tool loop를 계속 돌며 비용을 태우는 문제가 production 운영에서 커지고 있다.
- angle: “agent runtime에는 성공 예측보다 실패 조기 중단기가 필요하다” — internal representation probe, recall-controlled cascade, abort policy를 비용·품질 게이트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-eval, runtime-policy, cost-optimization, failure-prediction]
- status: idea

### 2026-07-09 — [논문 리뷰] Danus: fact-graph memory로 수학 reasoning agent를 orchestration하기
- type: paper
- source: http://arxiv.org/abs/2607.06447v1
- why-now: 수학·증명 agent가 research-level 문제까지 확장되면서, 병렬 proof attempt와 중간 lemma를 단순 transcript가 아니라 구조화된 fact graph로 관리해야 하는 요구가 생겼다.
- angle: “reasoning agent memory는 채팅 로그가 아니라 증명 상태 그래프여야 한다” — fact-graph memory, parallel proof coordination, verifier boundary를 연구 에이전트 설계로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [reasoning-agent, math, memory, orchestration]
- status: idea

### 2026-07-09 — [논문 리뷰] FreqDepthKV: long-context LLM inference에서 주파수·깊이 기반 KV cache 압축하기
- type: paper
- source: http://arxiv.org/abs/2607.06519v1
- why-now: long-context agent와 RAG serving은 KV cache 메모리·대역폭 비용이 병목이고, 무작정 token을 줄이면 retrieval evidence와 reasoning state를 잃기 쉽다.
- angle: “KV cache 압축은 token eviction 문제가 아니라 layer-specific evidence 보존 문제” — frequency-guided depth sharing, robustness, agent/RAG inference 비용 관점으로 설명한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [kv-cache, long-context, inference, optimization]
- status: idea

### 2026-07-09 — [논문 리뷰] Data Analysis in the Wild: 현실 데이터 분석 agent benchmark 설계
- type: paper
- source: http://arxiv.org/abs/2607.06482v1
- why-now: 데이터 분석 LLM benchmark가 작은 표 QA에 머무르면 multi-table, external knowledge, exploratory insight 같은 실제 분석 복잡도를 평가하지 못한다.
- angle: “data analysis agent 평가는 정답 셀 찾기가 아니라 분석 workflow 전체를 재현해야 한다” — multi-tabular dataset, external knowledge, insight generation, verifier 설계를 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [data-analysis-agent, benchmark, eval, workflow]
- status: idea

### 2026-07-09 — oh-my-pi: hash-anchored edit와 LSP를 갖춘 terminal coding agent harness
- type: tech
- source: https://github.com/can1357/oh-my-pi
- why-now: terminal coding agent가 늘면서 단순 shell wrapper보다 edit anchoring, LSP context, browser, subagent, tool harness를 한 런타임에서 안전하게 묶는 설계가 중요해졌다.
- angle: “코딩 에이전트의 품질은 모델보다 수정 primitive와 repo intelligence에서 갈린다” — hash-anchored edits, optimized tool harness, LSP integration, subagent boundary를 repo introduction으로 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, terminal-agent, lsp, github-repo]
- status: idea

### 2026-07-09 — Open Science: local-first AI research workbench를 에이전트 desktop으로 보기
- type: tech
- source: https://github.com/ai4s-research/open-science
- why-now: 연구 에이전트가 논문 검색과 코드 실행을 넘어서 reproducible desktop, local-first data boundary, model-agnostic workflow를 요구하는 방향으로 확장되고 있다.
- angle: “연구용 agent는 챗봇이 아니라 재현 가능한 workbench여야 한다” — local-first 저장소, 실험 재현성, 과학 워크플로 자동화, human-in-the-loop 경계를 repo 구조 중심으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [research-agent, local-first, scientific-workflow, github-repo]
- status: idea

### 2026-07-10 — [논문 리뷰] Structural Trajectory Analysis: noisy agent trace에서 root cause 뽑기
- type: paper
- source: http://arxiv.org/abs/2607.07702v1
- why-now: 장기 실행 agent 최적화가 reflection과 trace mining에 기대기 시작했지만, 실제 실행 로그는 중복·노이즈·이질성이 커서 그대로 policy 개선 신호로 쓰기 어렵다.
- angle: “agent 디버깅은 실패 transcript 읽기가 아니라 구조화된 trajectory causal extraction 문제” — trace clustering, root-cause graph, policy patch 우선순위를 운영 QA 루프로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-eval, trace-analysis, root-cause-analysis, optimization]
- status: idea

### 2026-07-10 — [논문 리뷰] SkillCenter: 21만 개 source-grounded agent skill library가 던지는 질문
- type: paper
- source: http://arxiv.org/abs/2607.07676v1
- why-now: agent skill이 prompt snippet 수준을 넘어 source-grounded operational knowledge library로 커지면서, skill 품질·중복·보안·유지보수 기준이 중요해졌다.
- angle: “agent skill library는 많은 예제가 아니라 검증 가능한 운영 지식 베이스여야 한다” — skill schema, source grounding, retrieval/retirement, 팀 harness 적용 체크리스트로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-skills, knowledge-base, source-grounding, harness]
- status: idea

### 2026-07-10 — [논문 리뷰] Institutional Red-Teaming: multi-agent 안전성은 배포 규칙도 실험해야 한다
- type: paper
- source: http://arxiv.org/abs/2607.07695v1
- why-now: multi-agent 시스템의 안전성은 모델 성능만이 아니라 어떤 배포 규칙과 상호작용 제약을 두느냐에 따라 달라지므로, rule 자체를 causal하게 평가하는 방법이 필요해졌다.
- angle: “red-team 대상은 모델뿐 아니라 deployment rule이어야 한다” — rule ablation, consequence allocation benchmark, multi-agent governance를 운영 실험 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, red-teaming, governance, safety]
- status: idea

### 2026-07-10 — [논문 리뷰] Beyond Attack-Success Rate: tool-using agent 공격 피해를 action severity로 채점하기
- type: paper
- source: http://arxiv.org/abs/2607.07474v1
- why-now: agent red-team benchmark가 “공격 성공/실패” 이진 지표만 보면 실제 피해 수준, tool action 위험도, 방어 우선순위를 놓치기 쉽다.
- angle: “agent 보안 평가는 jailbreak 성공률보다 실행된 action의 harm grade가 핵심” — tool-call trajectory, severity rubric, sandbox gate와 regression report 설계를 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-security, red-teaming, tool-use, eval]
- status: idea

### 2026-07-10 — [논문 리뷰] Agentic Data Environments: 데이터베이스 앞에 agent-safe 작업 환경 만들기
- type: paper
- source: http://arxiv.org/abs/2607.07397v1
- why-now: 에이전트가 데이터베이스를 직접 읽고 쓰는 자동화가 늘면서, 실패 비용을 제한하는 트랜잭션·권한·검증 환경 설계가 agent infra의 핵심 문제가 됐다.
- angle: “DB를 tool로 열어주기 전에 agentic data environment를 설계하자” — mutation boundary, rollback, query sandbox, auditability를 데이터 플랫폼 운영 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-infra, database, safety, tool-use]
- status: idea

### 2026-07-10 — [논문 리뷰] Atomic Actions to SOPs: agent tool을 절차 단위로 진화시키기
- type: paper
- source: http://arxiv.org/abs/2607.07321v1
- why-now: file I/O·검색 같은 원자 tool만 제공하면 agent가 반복 workflow를 매번 재발명해 비용과 오류가 커지고, SOP 형태의 고수준 tool 최적화가 필요해지고 있다.
- angle: “tool-use 최적화는 tool을 더 많이 주는 게 아니라 반복 절차를 안전한 SOP로 승격하는 문제” — atomic action, workflow mining, tool abstraction, regression 검증을 설명한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-tools, workflow, tool-optimization, automation]
- status: idea

### 2026-07-10 — Remnic: provenance와 boundary가 있는 user-aware agent memory
- type: tech
- source: https://github.com/joshuaswarren/remnic
- why-now: 개인화 agent가 메모리를 무작정 저장·검색하면 privacy, stale fact, correction handling이 엉키기 쉬워 scoped memory와 provenance가 실무 요구사항으로 올라왔다.
- angle: “agent memory는 vector search가 아니라 scope·provenance·correction protocol” — MCP/HTTP access, retrieval quality, boundary policy, eval을 repo architecture 중심으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-memory, provenance, mcp, github-repo]
- status: idea

### 2026-07-10 — eval-view: agent regression test를 tool-call diff와 snapshot으로 운영하기
- type: tech
- source: https://github.com/hidai25/eval-view
- why-now: LangGraph, CrewAI, OpenAI, Anthropic 기반 agent가 늘면서 답변 텍스트뿐 아니라 tool call과 trace 변화까지 CI에서 비교하는 regression testing이 필요해졌다.
- angle: “agent eval은 평균 점수보다 행동 diff를 읽을 수 있어야 한다” — snapshot, tool-call diff, CI gate, 실패 triage를 agent QA 운영법으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-eval, regression-test, tool-use, github-repo]
- status: idea

### 2026-07-11 — [논문 리뷰] Remember When It Matters: long-horizon agent의 behavioral state decay 막기
- type: paper
- source: http://arxiv.org/abs/2607.08716v1
- why-now: 긴 tool trajectory에서 task requirement, prior attempt, open subgoal이 context 밖으로 밀리며 행동에 반영되지 않는 실패가 production agent의 핵심 병목이 되고 있다.
- angle: “메모리는 passive retrieval이 아니라 필요할 때 끼어드는 runtime intervention” — 별도 memory agent, reminder injection, silent decision, harness plug-in boundary를 운영 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, long-horizon, context-management, runtime]
- status: idea

### 2026-07-11 — [논문 리뷰] WebSwarm: 깊고 넓은 웹 리서치를 recursive multi-agent orchestration으로 풀기
- type: paper
- source: http://arxiv.org/abs/2607.08662v1
- why-now: 단일 ReAct-style search agent는 긴 trajectory와 제한된 context 때문에 depth와 coverage를 동시에 확보하기 어렵고, research agent는 recursive delegation이 필요해지고 있다.
- angle: “웹 검색 agent는 하나의 긴 loop가 아니라 증거 기반으로 확장되는 search tree” — task decomposition, recursive expansion, collaboration adaptation, evidence-grounded aggregation을 설계 관점으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, web-search, research-agent, orchestration]
- status: idea

### 2026-07-11 — [논문 리뷰] Token-Flow Firewall: persistent agent의 자연어 흐름을 runtime에서 감사하기
- type: paper
- source: http://arxiv.org/abs/2607.08395v1
- why-now: persistent agent에서는 memory update, tool argument, retrieved file, component message 같은 자연어 token flow가 장기 상태와 privileged sink로 전파되며 공격면을 키운다.
- angle: “agent 보안은 prompt filter가 아니라 semantic flow firewall” — memory/tool/retrieval 사이의 risky flow를 privileged sink 전에 차단하는 runtime auditing 패턴으로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-security, runtime-audit, tool-use, persistent-agent]
- status: idea

### 2026-07-11 — [논문 리뷰] ProjAgent: repository-level code generation에 procedural similarity 검색 붙이기
- type: paper
- source: http://arxiv.org/abs/2607.08691v1
- why-now: repo-level coding agent가 identifier/semantic similarity만으로 context를 찾으면 다른 파일의 유사 절차 구현을 놓치기 쉬워, 절차 단위 retrieval signal이 중요해지고 있다.
- angle: “코딩 agent의 RAG는 비슷한 단어가 아니라 비슷한 절차를 찾아야 한다” — reasoning step decomposition, procedural retrieval, conventional semantic retrieval과의 결합을 개발자 워크플로로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, repository-level, retrieval, code-generation]
- status: idea

### 2026-07-11 — [논문 리뷰] UniClawBench: proactive agent 평가를 capability-driven benchmark로 바꾸기
- type: paper
- source: http://arxiv.org/abs/2607.08768v1
- why-now: proactive agent benchmark가 sandboxed single-turn task와 scenario taxonomy에 치우치면 real-world tool use 실패 원인을 capability 단위로 분해하기 어렵다.
- angle: “agent benchmark는 시나리오 이름보다 실패 capability를 드러내야 한다” — skill usage, environment understanding, proactive decision 등 capability-driven taxonomy를 QA report 설계로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [proactive-agent, benchmark, eval, real-world-task]
- status: idea

### 2026-07-11 — Prismor: rogue tool call을 실행 전에 잡는 agent runtime firewall
- type: tech
- source: https://github.com/PrismorSec/prismor
- why-now: Claude Code, Codex, framework SDK 기반 개발자 에이전트가 shell·file·network tool을 직접 만지면서 dangerous command, secret leak, prompt injection을 실행 직전에 막는 방어층이 필요해졌다.
- angle: “agent security는 모델 응답 검열보다 pre-tool-call policy enforcement” — command risk scoring, secret detection, framework integration, 개발 워크플로 삽입 지점을 repo architecture 중심으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-security, tool-use, runtime-firewall, github-repo]
- status: published
- draft: content/posts/2026-07-11-prismor-agent-runtime-firewall.mdx

### 2026-07-11 — mcp-gateway-registry: MCP server chaos를 governed registry로 묶기
- type: tech
- source: https://github.com/agentic-community/mcp-gateway-registry
- why-now: 팀마다 MCP server를 흩어 붙이면 OAuth, tool discovery, audit, 접근 제어가 분산되어 autonomous agent와 coding assistant 운영 리스크가 커진다.
- angle: “MCP 도입의 다음 문제는 server 개수가 아니라 registry와 gateway governance” — OAuth/Keycloak·Entra 통합, dynamic tool discovery, unified access, audit log를 enterprise agent infra 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, gateway, registry, agent-infra]
- status: idea

### 2026-07-12 — [논문 리뷰] Workflow as Knowledge: LLM workflow를 실행 로그가 아니라 지식 그래프로 다루기
- type: paper
- source: http://arxiv.org/abs/2607.08740v1
- why-now: LLM 앱이 tool use, retrieval, branch, checkpoint, human approval을 명시 workflow로 관리하기 시작하면서 실행 상태와 재사용 가능한 절차 지식을 분리하는 설계가 중요해졌다.
- angle: “workflow는 YAML이 아니라 agent가 배우고 재사용할 semantic artifact” — symbolic workflow, checkpoint provenance, human approval edge, workflow memory를 agent runtime 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-workflow, tool-use, semantic-memory, orchestration]
- status: idea

### 2026-07-12 — [논문 리뷰] IdeaGene-Bench: 연구 에이전트가 논문 계보를 이해하는지 평가하기
- type: paper
- source: http://arxiv.org/abs/2607.08758v1
- why-now: AI research assistant가 단순 검색·요약을 넘어 “이 아이디어가 어떤 선행 연구를 물려받고 무엇을 고쳤는가”를 추적해야 하는 단계로 가고 있다.
- angle: “좋은 research agent는 citation graph가 아니라 idea lineage를 읽어야 한다” — mechanism inheritance, limitation repair, lineage-grounded generation, evidence trail을 평가 harness 관점으로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [research-agent, benchmark, scientific-discovery, evaluation]
- status: idea

### 2026-07-12 — [논문 리뷰] Quantization Effects: low-bit LLM 평가는 accuracy보다 behavior drift를 봐야 한다
- type: paper
- source: http://arxiv.org/abs/2607.08734v1
- why-now: post-training quantization은 배포 기본기가 됐지만 perplexity와 평균 accuracy만 보면 calibration, answer distribution, reasoning behavior 변화가 감춰질 수 있다.
- angle: “양자화 검증은 성능 숫자 하나가 아니라 행동 동등성 테스트” — correctness agreement, output distribution shift, serving QA, fallback policy를 추론 운영 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [quantization, inference, llm-evaluation, model-serving]
- status: idea

### 2026-07-12 — [논문 리뷰] Latent Memory Palace: control agent의 reasoning을 latent planning으로 넣기
- type: paper
- source: http://arxiv.org/abs/2607.08724v1
- why-now: LLM의 test-time reasoning을 continuous control policy로 옮기려면 자연어 CoT가 아니라 행동 공간에 맞는 latent deliberation 구조가 필요하다.
- angle: “embodied/control agent의 생각은 텍스트가 아니라 latent rollout일 수 있다” — autoregressive variational inference, adaptive deliberation, control policy scaling을 agent architecture 관점으로 소개한다.
- difficulty: high
- freshness: 5
- practicality: 3
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [embodied-agent, reasoning, control, architecture]
- status: idea

### 2026-07-12 — [논문 리뷰] SolarChain-Eval: cyber-physical agent는 물리 제약까지 평가해야 한다
- type: paper
- source: http://arxiv.org/abs/2607.08681v1
- why-now: 에이전트가 에너지 시장·설비·로봇 같은 cyber-physical 환경에 들어가면 task score만으로는 물리적으로 불가능하거나 위험한 행동을 걸러낼 수 없다.
- angle: “agent eval은 정답 채점에서 physics-constrained trustworthiness로 확장된다” — invalid data exploit, physical constraint verifier, economic utility와 safety trade-off를 평가 설계로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-eval, cyber-physical, trustworthiness, benchmark]
- status: idea

### 2026-07-12 — Heurist Agent Framework: reasoning·memory·MCP·agent-as-a-service를 한 런타임에 묶기
- type: tech
- source: https://github.com/heurist-network/heurist-agent-framework
- why-now: production agent framework가 단순 tool calling wrapper에서 memory, deep research, MCP, multi-interface serving까지 포함한 application runtime으로 확장되고 있다.
- angle: “agent framework 선택 기준은 API 예쁘냐가 아니라 runtime surface를 어디까지 책임지느냐” — reasoning loop, tool registry, memory, MCP, deployment interface를 architecture checklist로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-framework, mcp, memory, deployment]
- status: idea

### 2026-07-12 — GitHub Agentic Workflows MCP Gateway: GitHub 작업을 MCP gateway로 통제하기
- type: tech
- source: https://github.com/github/gh-aw-mcpg
- why-now: GitHub repo 안에서 agentic workflow가 늘수록 issue, PR, CI, code search 같은 권한 있는 작업을 MCP gateway 뒤에서 표준화·감사하는 패턴이 필요하다.
- angle: “GitHub automation tool을 직접 주지 말고 MCP gateway에서 권한과 audit boundary를 잡자” — tool discovery, GitHub auth, workflow delegation, repository governance를 개발자 AI 워크플로로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [github, mcp, agent-workflow, governance]
- status: idea

### 2026-07-12 — DeerFlow: long-horizon research·coding agent harness의 구성 요소 뜯어보기
- type: tech
- source: https://github.com/bytedance/deer-flow
- why-now: 장기 실행 agent는 검색·코딩·작성·검증을 하나의 긴 prompt로 밀어붙이는 대신 sandbox, memory, tool, skill, subagent, message gateway를 조합한 harness가 필요해지고 있다.
- angle: “super-agent보다 중요한 건 long-horizon harness의 부품 경계” — planner, sandbox, memory, subagent routing, artifact generation을 repo architecture 중심으로 분석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-harness, long-horizon, coding-agent, github-repo]
- status: idea

### 2026-07-13 — [논문 리뷰] AgentLens: coding agent 평가는 production trajectory review로 봐야 한다
- type: paper
- source: http://arxiv.org/abs/2607.06624v1
- why-now: coding agent가 실제 repo 작업에 투입되면서 benchmark pass rate보다 production trace에서 어떤 결정이 실패를 만들었는지 리뷰하는 평가법이 중요해졌다.
- angle: “코딩 agent eval은 문제 풀이 점수가 아니라 trajectory review workflow” — task selection, human/LLM review, failure taxonomy, CI regression gate를 팀 운영 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, evaluation, trajectory-review, production]
- status: idea

### 2026-07-13 — [논문 리뷰] WebRetriever: web agent 평가에서 efficiency와 coverage를 같이 보기
- type: paper
- source: http://arxiv.org/abs/2607.06118v1
- why-now: web browsing agent가 research, QA, 업무 자동화에 들어오면서 정답률뿐 아니라 검색 depth, 페이지 방문 비용, evidence coverage를 함께 측정해야 한다.
- angle: “웹 agent benchmark는 답을 맞혔나보다 어떻게 evidence를 모았나가 중요하다” — large-scale task design, 효율성 metric, verifier, browser/RAG agent QA를 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [web-agent, benchmark, evaluation, retrieval]
- status: idea

### 2026-07-13 — [논문 리뷰] MCP Security-Aware Tool Descriptions: tool 설명으로 taint-style 취약점 줄이기
- type: paper
- source: http://arxiv.org/abs/2607.07461v1
- why-now: MCP server가 agent tool 표준처럼 확산되면서 tool description 자체가 data flow, trust boundary, sink 위험을 모델에 알려주는 보안 인터페이스가 되고 있다.
- angle: “MCP 보안은 sandbox만이 아니라 tool schema와 description 설계 문제” — taint-style vulnerability, security-aware description, approval UI, server author 체크리스트로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [mcp, agent-security, tool-use, taint-analysis]
- status: idea

### 2026-07-13 — [논문 리뷰] Unicode TAG-Block Concealment: MCP approval UI의 보이지 않는 payload 문제
- type: paper
- source: http://arxiv.org/abs/2607.05744v1
- why-now: agent tool approval 화면이 사용자가 보는 문자열과 모델·server가 처리하는 문자열의 불일치를 놓치면 숨은 metadata payload가 권한 승인 경계를 우회할 수 있다.
- angle: “human approval은 UI에 보이는 텍스트와 실제 tool payload의 fidelity가 맞아야 의미 있다” — Unicode TAG block, approval-view gap, MCP server 테스트를 보안 QA로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [mcp, prompt-injection, approval-ui, agent-security]
- status: idea

### 2026-07-13 — [논문 리뷰] SMetric: serving agents를 위한 session-centric scheduling
- type: paper
- source: http://arxiv.org/abs/2607.08565v1
- why-now: agent serving은 단발 요청이 아니라 multi-turn session과 tool wait가 섞인 workload라 일반 LLM batching metric만으로 latency와 fairness를 설명하기 어렵다.
- angle: “agent inference 최적화는 token throughput보다 session 균형이 먼저다” — session-centric scheduling, queue fairness, tool latency, serving SLO를 inference 운영 관점으로 소개한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-serving, inference, scheduling, latency]
- status: idea

### 2026-07-13 — [논문 리뷰] PolyUQuest: heterogeneous graph 위에서 verifiable Web RAG 만들기
- type: paper
- source: http://arxiv.org/abs/2607.08269v1
- why-now: Web RAG가 문서 chunk 검색만으로 복잡한 구조형 질문을 처리하기 어려워지면서 heterogeneous graph와 verifiable evidence path를 결합하는 설계가 주목된다.
- angle: “RAG의 다음 병목은 검색 recall이 아니라 구조화된 evidence path 검증” — graph schema, web evidence, verifier, agentic RAG benchmark 설계로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, web-rag, graph, verification]
- status: idea

### 2026-07-13 — mcp-observatory: MCP server를 agent에 붙이기 전 테스트·보안·모니터링하기
- type: tech
- source: https://github.com/KryptosAI/mcp-observatory
- why-now: MCP server를 빠르게 붙이는 팀은 늘었지만, tool schema 품질, prompt-injection surface, secret leak, runtime monitoring을 배포 전에 검증하는 절차는 아직 약하다.
- angle: “MCP server도 API처럼 contract test와 security scan을 통과해야 한다” — server discovery, test suite, security checks, monitoring을 agent infra 운영 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, agent-security, observability, github-repo]
- status: idea

### 2026-07-13 — PantheonOS: 데이터 사이언스용 distributed agent harness 살펴보기
- type: tech
- source: https://github.com/aristoteleo/PantheonOS
- why-now: 데이터 분석 agent는 notebook 한 셀 자동화보다 dataset, experiment, artifact, distributed worker를 함께 관리하는 harness가 필요해지고 있다.
- angle: “data science agent는 chat UI보다 experiment OS에 가깝다” — evolvable agent framework, distributed execution, artifact lifecycle, human-in-the-loop 분석 워크플로를 repo architecture로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [data-science-agent, agent-harness, distributed, github-repo]
- status: idea

### 2026-07-13 — [논문 리뷰] When the Judge Changes: LLM-as-judge 교체가 평가 숫자를 흔드는 방식
- type: paper
- source: http://arxiv.org/abs/2607.08535v1
- why-now: LLM-as-judge가 agent eval과 생성형 AI QA의 기본 부품이 됐지만, evaluator model만 바뀌어도 같은 후보 응답의 점수가 움직이는 measurement-validity 문제가 커지고 있다.
- angle: “평가 모델도 측정 장비라서 calibration과 교체 리스크를 관리해야 한다” — judge replacement ambiguity, rank stability, evaluator drift monitor를 agent regression suite 운영법으로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [llm-as-judge, evaluation, calibration, agent-eval]
- status: idea

### 2026-07-13 — [논문 리뷰] Relaxed Speculative Decoding: lossless를 포기하면 inference latency를 얼마나 줄일 수 있나
- type: paper
- source: http://arxiv.org/abs/2607.08690v1
- why-now: speculative decoding은 LLM serving 비용 절감의 표준 후보지만, 완전 lossless 검증은 rejection overhead 때문에 실제 latency 이득이 제한될 수 있다.
- angle: “추론 최적화도 정확도·분포 보존·latency 사이의 운영 정책 문제” — relaxed acceptance, resampling trade-off, serving QA gate를 production inference 관점으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [speculative-decoding, inference, latency, model-serving]
- status: idea

### 2026-07-13 — [논문 리뷰] DominoTree: block-diffusion draft를 tree speculative decoding으로 바꾸기
- type: paper
- source: http://arxiv.org/abs/2607.08642v1
- why-now: LLM inference 병목이 커질수록 draft model의 품질과 verification 효율을 동시에 높이는 tree-structured speculative decoding 설계가 중요해지고 있다.
- angle: “draft token을 한 줄로 뽑지 말고 조건부 후보 tree로 검증한다” — block-diffusion drafter, conditional tree expansion, acceptance efficiency를 serving architecture로 설명한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [speculative-decoding, inference, decoding, serving]
- status: idea

### 2026-07-13 — [논문 리뷰] MAESTRO: MoE LLM에서 나쁜 expert를 pruning하는 법
- type: paper
- source: http://arxiv.org/abs/2607.08601v1
- why-now: sparsely-activated MoE 모델은 token당 활성 파라미터는 적어도 전체 expert bank가 메모리를 차지하므로 serving 메모리와 품질을 함께 다루는 pruning 방법이 필요하다.
- angle: “MoE 최적화는 router만이 아니라 expert bank의 운영 비용을 줄이는 문제” — bad expert 식별, pruning 기준, quality-memory trade-off를 추론 인프라 관점으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [moe, inference, pruning, model-compression]
- status: idea

### 2026-07-13 — [논문 리뷰] Resample or Reroute: test-time resampling과 LLM router의 비용 균형
- type: paper
- source: http://arxiv.org/abs/2607.08665v1
- why-now: 여러 LLM을 섞어 쓰는 production gateway에서는 per-request model routing뿐 아니라 동일 모델 재샘플링이 품질·비용 균형에 어떤 역할을 하는지 따져야 한다.
- angle: “LLM router의 선택지는 모델 교체만이 아니라 같은 모델을 다시 뽑는 것” — budget-aware model selection, oracle gap, retry/resample policy를 LLM gateway 운영법으로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [llm-routing, inference, cost-optimization, serving]
- status: idea

### 2026-07-13 — Chidori: durable·replayable agent run을 기본값으로 만든 프레임워크
- type: tech
- source: https://github.com/ThousandBirdsInc/chidori
- why-now: 장기 실행 agent는 중간 실패, human interrupt, tool retry, state replay를 피할 수 없어 “한 번 실행하고 로그만 남기는” runtime보다 durable execution 모델이 필요하다.
- angle: “production agent framework의 핵심은 예쁜 API보다 replay와 resume semantics” — run state, checkpoint, replay, failure recovery를 LangGraph류 durable execution과 비교해 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-framework, durable-execution, replay, workflow]
- status: idea

### 2026-07-13 — AssetOpsBench: Industry 4.0 agent를 benchmark와 orchestration으로 같이 보기
- type: tech
- source: https://github.com/IBM/AssetOpsBench
- why-now: domain-specific agent는 일반 웹/코딩 benchmark만으로 평가하기 어렵고, 산업 설비 운영처럼 tool·sensor·maintenance workflow가 있는 환경에서는 task harness 자체가 제품 품질을 좌우한다.
- angle: “도메인 agent 평가는 benchmark와 framework가 분리되지 않는다” — asset operation task, orchestration layer, domain verifier, maintenance workflow를 enterprise agent 설계 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [domain-agent, benchmark, orchestration, industry-4]
- status: idea

### 2026-07-14 — [논문 리뷰] Agora: agent task allocation을 auction mechanism으로 설계하기
- type: paper
- source: http://arxiv.org/abs/2607.09600v1
- why-now: multi-agent/runtime orchestration이 “어떤 tool·expert를 부를까”에서 “성능 변동성과 비용을 함께 최적화하는 market design” 문제로 넘어가고 있다.
- angle: “agent router를 rule-based dispatcher가 아니라 incentive-compatible allocator로 본다” — expert/tool bidding, cost-quality trade-off, task allocation policy를 production agent harness 설계로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, task-allocation, tool-routing, agent-orchestration]
- status: idea

### 2026-07-14 — [논문 리뷰] SLBench: agent skill 파일의 논리 관계를 테스트로 바꾸기
- type: paper
- source: http://arxiv.org/abs/2607.09016v1
- why-now: AGENTS.md, skill, MCP tool description처럼 agent가 읽는 절차 지식이 늘면서 precondition·constraint·fallback을 실제로 지키는지 평가하는 harness가 필요해졌다.
- angle: “skill은 문서가 아니라 executable contract가 되어야 한다” — SkillLogic relation taxonomy, skill-derived test generation, repo guidance regression suite를 coding agent 운영법으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-skills, evaluation, coding-agent, regression-test]
- status: published
- draft: content/posts/2026-07-14-slbench-skill-logic-agent-skills.mdx

### 2026-07-14 — [논문 리뷰] Reason Less, Verify More: tool agent 정책 위반을 deterministic gate로 잡기
- type: paper
- source: http://arxiv.org/abs/2607.07405v1
- why-now: tool-using agent는 성공처럼 보이는 잘못된 state transition을 만들 수 있고, self-report나 tool schema만으로는 silent policy violation을 잡기 어렵다.
- angle: “agent에게 더 생각하라고 하기보다 상태 전이 앞에 검증기를 둔다” — policy-permissive tool 환경, deterministic pre/post gate, audit log를 agent runtime safety pattern으로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [tool-use, agent-safety, policy-gate, verification]
- status: idea

### 2026-07-14 — [논문 리뷰] Forged Reasoning Attacks: agent memory poisoning의 다음 공격면
- type: paper
- source: http://arxiv.org/abs/2607.05029v1
- why-now: persistent memory를 쓰는 personal/coding agent가 늘면서 사실 저장소뿐 아니라 “이전 reasoning history” 자체가 공격 대상이 되는 문제가 현실적인 운영 리스크가 됐다.
- angle: “memory RAG 보안은 fact 검증만으로 끝나지 않는다” — FARMA 공격, rationale provenance, memory write gate, reasoning-history quarantine을 agent memory 설계 체크리스트로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, memory-poisoning, security, provenance]
- status: idea

### 2026-07-14 — [논문 리뷰] AgentKGV: knowledge graph fact verification을 agentic RAG로 돌리기
- type: paper
- source: http://arxiv.org/abs/2607.09092v1
- why-now: 자동 구축 knowledge graph의 factual error를 줄이려면 단발 검색보다 routing·query rewriting·evidence verification을 결합한 agentic RAG 운영 방식이 필요하다.
- angle: “KG QA를 offline cleaning이 아니라 agentic verification pipeline으로 본다” — dynamic routing, iterative query rewriting, two-stage training, verifier loop를 data quality infra 관점으로 설명한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rag, knowledge-graph, fact-verification, retrieval]
- status: idea

### 2026-07-14 — Future AGI: agent eval·observability·simulation을 한 플랫폼으로 묶기
- type: tech
- source: https://github.com/future-agi/future-agi
- why-now: agent 앱이 PoC를 넘어서면 tracing, eval dataset, simulation, gateway, guardrail을 흩어진 도구로 운영하기 어렵고 CI regression까지 연결된 platform layer가 필요해진다.
- angle: “agent 품질 관리는 prompt playground가 아니라 release engineering” — traces, evals, simulations, datasets, guardrails를 하나의 release gate로 묶는 운영 패턴을 소개한다.
- difficulty: medium
- freshness: 4
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-eval, observability, guardrails, release-engineering]
- status: idea

### 2026-07-14 — Superset: AI agents era를 위한 local code editor/orchestrator
- type: tech
- source: https://github.com/superset-sh/superset
- why-now: Claude Code, Codex 같은 CLI coding agent가 늘면서 여러 agent run을 한 머신에서 병렬 실행·감시·리뷰하는 workspace 계층이 새 병목이 되고 있다.
- angle: “IDE의 다음 역할은 코드를 직접 쓰는 것보다 agent 작업장을 운영하는 것” — multi-agent session, 작업 격리, diff review, local orchestration UX를 coding agent workflow로 분석한다.
- difficulty: medium
- freshness: 4
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, developer-workflow, orchestration, code-editor]
- status: idea

### 2026-07-14 — remnic: user-aware agent를 위한 scoped memory와 provenance
- type: tech
- source: https://github.com/joshuaswarren/remnic
- why-now: personal agent가 사용자별 장기 기억을 다룰수록 scope, correction, provenance, retrieval quality, MCP/HTTP access boundary를 명시적으로 설계해야 한다.
- angle: “agent memory를 vector DB가 아니라 governance surface로 본다” — scoped memory, provenance, correction workflow, evals, MCP access를 user-aware agent 아키텍처 관점으로 정리한다.
- difficulty: medium
- freshness: 4
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-memory, provenance, mcp, personal-agent]
- status: idea

### 2026-07-15 — [논문 리뷰] MM-ToolSandBox: visual tool-calling agent 평가 환경
- type: paper
- source: http://arxiv.org/abs/2607.11818v1
- why-now: 이미지·비디오 기반 agent가 실제 앱과 도구를 호출하는 흐름으로 확장되면서, 텍스트 tool-use benchmark만으로는 시각 grounding과 stateful execution 실패를 잡기 어렵다.
- angle: “visual agent 평가는 VQA 점수가 아니라 tool state transition 검증이다” — 500+ tools, 16개 domain, visual grounding, stateful sandbox를 agent QA harness 관점으로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [visual-agent, tool-use, benchmark, evaluation]
- status: idea

### 2026-07-15 — [논문 리뷰] RAGU: multi-step GraphRAG engine을 작게 운영하기
- type: paper
- source: http://arxiv.org/abs/2607.11683v1
- why-now: GraphRAG는 강력하지만 KG 생성 노이즈와 큰 모델 의존 때문에 운영 비용이 커서, compact domain-adapted LLM과 multi-step graph refinement 패턴이 실무적으로 중요해졌다.
- angle: “GraphRAG를 한 번에 추출하는 파이프라인이 아니라 반복 정제 엔진으로 본다” — entity/relation refinement, domain adaptation, retrieval step 설계를 production RAG 운영법으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [graphrag, rag, knowledge-graph, retrieval]
- status: idea

### 2026-07-15 — [논문 리뷰] Inside the Unfair Judge: LLM-as-judge bias를 mechanistic하게 보기
- type: paper
- source: http://arxiv.org/abs/2607.11871v1
- why-now: agent eval과 LLM-as-judge가 CI gate로 들어오면서 prompt-level mitigation만으로는 judge bias drift를 설명하거나 안정적으로 고치기 어렵다.
- angle: “평가자는 프롬프트가 아니라 모델 내부 표현까지 봐야 한다” — scoring bias의 activation-level account, judge 교체 리스크, regression monitor를 agent 평가 운영 관점으로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [llm-as-judge, evaluation, mechanistic-interpretability, bias]
- status: idea

### 2026-07-15 — [논문 리뷰] Distributed Backdoors: multi-agent harm은 한 메시지씩 보면 놓친다
- type: paper
- source: http://arxiv.org/abs/2607.11751v1
- why-now: multi-agent와 tool-use 시스템의 안전망이 step-local monitor에 머무르면, 여러 agent·tool call에 분산된 공격을 탐지하지 못하는 구조적 blind spot이 생긴다.
- angle: “agent 보안 모니터는 메시지 단위가 아니라 trajectory composition 단위여야 한다” — local monitor failure, compositional harm, cross-agent trace audit를 runtime firewall 설계로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, security, backdoor, runtime-monitoring]
- status: idea

### 2026-07-15 — [논문 리뷰] Metacognition in LLMs: agent가 자기 상태를 아는 능력
- type: paper
- source: http://arxiv.org/abs/2607.11881v1
- why-now: 장기 실행 agent에는 confidence calibration, uncertainty report, self-correction, memory control처럼 “자기 인지”가 runtime policy와 evaluation의 핵심 기능으로 들어오고 있다.
- angle: “metacognition을 철학적 개념이 아니라 agent control surface로 번역한다” — monitoring, control, self-evaluation, tool-use fallback을 agent harness 요구사항으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [metacognition, agent-evaluation, reasoning, self-correction]
- status: idea

### 2026-07-15 — Litefuse: agent observability와 evaluation을 가볍게 붙이는 법
- type: tech
- source: https://github.com/litefuse/litefuse
- why-now: agent 앱이 늘면서 trace 저장, eval run, release regression을 LangSmith류 대형 플랫폼 없이 self-hosted/lightweight하게 운영하려는 수요가 커지고 있다.
- angle: “agent 관측성은 로그 수집이 아니라 release gate다” — trace schema, eval dataset, failure triage, CI 연결을 작은 팀용 agent QA stack으로 소개한다.
- difficulty: medium
- freshness: 4
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-observability, evals, tracing, release-engineering]
- status: idea

### 2026-07-15 — judgeval: agent continuous-improvement stack을 평가 루프로 만들기
- type: tech
- source: https://github.com/JudgmentLabs/judgeval
- why-now: agent 품질 개선이 단발 prompt tweak에서 environment data, eval, monitoring을 연결한 continuous improvement loop로 이동하고 있다.
- angle: “eval framework를 점수표가 아니라 개선 루프의 데이터 파이프라인으로 본다” — environment data, online monitoring, evaluator design, regression threshold를 운영 체크리스트로 정리한다.
- difficulty: medium
- freshness: 4
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-eval, monitoring, continuous-improvement, llmops]
- status: idea

### 2026-07-15 — osaurus: macOS native agent harness에서 배울 수 있는 것
- type: tech
- source: https://github.com/osaurus-ai/osaurus
- why-now: 로컬 실행·persistent memory·오프라인 모델·권한 경계를 갖춘 desktop agent harness가 Claude/Codex류 클라우드 CLI와 다른 설계 공간을 보여주고 있다.
- angle: “desktop agent runtime은 UI가 아니라 trust boundary 설계다” — native macOS sandbox, local model, persistent memory, cryptographic identity를 personal agent 아키텍처 패턴으로 분석한다.
- difficulty: medium
- freshness: 4
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [desktop-agent, agent-harness, local-first, memory]
- status: idea

### 2026-07-16 — [논문 리뷰] Complexity-Aware Agents: 쉬운 작업에 과한 reasoning을 쓰지 않는 법
- type: paper
- source: http://arxiv.org/abs/2607.13034v1
- why-now: LLM agent가 multi-step workflow에서 파일 재읽기, tool 재호출, max-context-first 실행을 기본값으로 삼으면서 단순 작업에도 비용과 latency를 과소비하는 문제가 커지고 있다.
- angle: “좋은 agent는 더 많이 생각하는 agent가 아니라 작업 복잡도에 맞춰 reasoning·context·tool budget을 조절하는 runtime” — complexity classifier, effort routing, abort/escalation policy를 agent harness 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, reasoning-budget, cost-optimization, orchestration]
- status: published
- draft: content/posts/2026-07-16-complexity-aware-agents-reasoning-budget.mdx

### 2026-07-16 — [논문 리뷰] PalmClaw: mobile-first on-device agent framework의 설계 포인트
- type: paper
- source: http://arxiv.org/abs/2607.13027v1
- why-now: agent가 데스크톱/서버를 넘어 스마트폰 로컬 환경에서 tool call, 앱 조작, privacy boundary를 다뤄야 하는 요구가 늘고 있다.
- angle: “온디바이스 agent는 작은 서버 agent가 아니라 권한·배터리·앱 sandbox·개인정보 경계가 다른 runtime” — native mobile tool interface, local execution, fallback policy를 personal agent 관점으로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [mobile-agent, on-device, tool-use, privacy]
- status: idea

### 2026-07-16 — [논문 리뷰] MemOps: long-horizon conversation memory를 lifecycle operation으로 평가하기
- type: paper
- source: http://arxiv.org/abs/2607.12893v1
- why-now: 장기 기억 agent가 늘었지만 기존 benchmark는 downstream QA 정확도에 치우쳐 저장·갱신·삭제·충돌 해결 같은 lifecycle operation을 직접 평가하지 못한다.
- angle: “agent memory 평가는 무엇을 기억했나보다 memory operation이 안전하게 수행됐나를 봐야 한다” — create/update/delete/retrieve, conflict resolution, regression suite를 개인 비서 운영법으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, long-horizon, evaluation, lifecycle]
- status: idea

### 2026-07-16 — [논문 리뷰] No-Reference LLM Judges: 정답 없는 평가에서 generous bias를 줄이는 법
- type: paper
- source: http://arxiv.org/abs/2607.12885v1
- why-now: agent output, open-ended report, code review comment처럼 reference answer가 없는 평가가 CI gate로 들어오면서 LLM judge의 관대함이 품질 신호를 흐릴 수 있다.
- angle: “LLM-as-judge를 쓸 때 reference 없음은 편의가 아니라 calibration risk” — rubric anchoring, adversarial counterexamples, judge drift monitor를 agent eval 운영 체크리스트로 만든다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [llm-as-judge, evaluation, calibration, agent-qa]
- status: idea

### 2026-07-16 — [논문 리뷰] Multi-Agent Debate는 언제 실패하는가: debate loop의 co-failure 진단
- type: paper
- source: http://arxiv.org/abs/2510.20963v2
- why-now: multi-agent debate가 reasoning 향상과 supervision 기법으로 자주 쓰이지만, agent들이 같은 오류를 공유하거나 debate가 오히려 bias를 증폭하는 실패 조건을 운영적으로 알아야 한다.
- angle: “agent를 여러 명 붙이면 검증이 되는 게 아니라 실패 상관관계를 관리해야 한다” — 역할 다양성, evidence grounding, stopping condition, judge independence를 debate harness 설계로 정리한다.
- difficulty: medium
- freshness: 4
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, debate, evaluation, reasoning]
- status: idea

### 2026-07-16 — hud-python: agent RL environment와 eval을 한 번 정의해 재사용하기
- type: tech
- source: https://github.com/hud-evals/hud-python
- why-now: agentic RL과 eval이 가까워지면서 같은 task environment를 학습, 회귀 테스트, benchmark 리포트에 재사용하는 runtime abstraction이 필요해지고 있다.
- angle: “agent eval은 점수 계산 스크립트가 아니라 environment contract” — task definition, rollout, reward/evaluator 재사용, CI regression suite를 agentic RL 운영 루프로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-eval, reinforcement-learning, environment, github-repo]
- status: idea

### 2026-07-16 — remnic: user-aware agent를 위한 scoped memory와 provenance 운영
- type: tech
- source: https://github.com/joshuaswarren/remnic
- why-now: personal agent가 사용자별 장기 기억을 다룰수록 범위(scope), 출처(provenance), correction workflow, retrieval quality를 memory layer가 직접 책임져야 한다.
- angle: “agent memory를 벡터 검색 기능이 아니라 governance API로 본다” — scoped memory, provenance, correction boundary, MCP/HTTP access를 user-aware agent architecture로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-memory, provenance, personal-agent, mcp]
- status: idea

### 2026-07-16 — AssetOpsBench: Industry 4.0 agent를 benchmark와 orchestration으로 같이 보기
- type: tech
- source: https://github.com/IBM/AssetOpsBench
- why-now: 산업 자산 운영 agent는 일반 web benchmark와 달리 IoT, work order, maintenance procedure, domain safety가 얽혀 있어 domain-specific task harness와 multi-agent orchestration이 함께 필요하다.
- angle: “enterprise agent 평가는 범용 리더보드가 아니라 도메인 workflow simulator와 verifier에서 시작한다” — 460+ scenarios, specialist agents, MCP 기반 orchestration blueprint를 repo introduction으로 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [domain-agent, agent-benchmark, industry40, orchestration]
- status: idea

### 2026-07-17 — [논문 리뷰] TRACE: long-horizon agent의 turn-level credit assignment
- type: paper
- source: http://arxiv.org/abs/2607.13988v1
- why-now: multi-turn tool agent가 수십~수백 단계 trajectory를 만들면서 final outcome reward만으로는 어느 turn이 성공/실패에 기여했는지 학습하기 어려워지고 있다.
- angle: “agent post-training의 병목은 더 긴 rollout이 아니라 turn별 credit assignment” — reward estimation, tool trajectory logging, dense supervision을 agent RL 운영 설계로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, reinforcement-learning, credit-assignment, post-training]
- status: idea

### 2026-07-17 — [논문 리뷰] Do Agent Optimizers Compound?: Terminal-Bench 2.0으로 continual optimization 보기
- type: paper
- source: http://arxiv.org/abs/2607.14004v1
- why-now: agent optimizer 논문들은 보통 고정 benchmark에서 한 번 개선된 숫자를 보여주지만, 실제 배포에서는 실패 사례가 계속 쌓이고 optimizer를 반복 적용한다.
- angle: “agent 최적화는 one-shot leaderboard gain이 아니라 recursive maintenance loop” — optimizer compounding, regression, benchmark leakage, harness update policy를 개발자 agent 운영법으로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-eval, terminal-bench, optimization, regression]
- status: idea

### 2026-07-17 — [논문 리뷰] DeepStress: poor-quality evidence로 deep search agent를 스트레스 테스트하기
- type: paper
- source: http://arxiv.org/abs/2607.13920v1
- why-now: deep search agent가 정상 benchmark에서는 좋아 보여도 실제 웹/문서 검색에서는 저품질 근거, 오염된 문서, 불완전 evidence에 자주 노출된다.
- angle: “research agent 평가는 좋은 검색 결과에서의 정확도보다 나쁜 evidence를 만났을 때의 복구력” — evidence perturbation, robustness metric, retrieval QA gate를 설계한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [search-agent, robustness, retrieval, evaluation]
- status: idea

### 2026-07-17 — [논문 리뷰] Experience Memory Graph: agent 실패 경험을 one-shot error correction으로 재사용하기
- type: paper
- source: http://arxiv.org/abs/2607.13884v1
- why-now: long-horizon agent는 같은 유형의 실수를 반복하기 쉬운데, 단순 trajectory 저장이나 self-reflection만으로는 실패 원인과 복구 전략을 구조화하기 어렵다.
- angle: “agent memory는 성공 기록보다 실패-복구 graph가 더 가치 있을 수 있다” — state/action/observation graph, error localization, reusable correction pattern을 memory system 설계로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, error-correction, long-horizon, graph]
- status: idea

### 2026-07-17 — [논문 리뷰] AgentCheck: MCP agent failure를 reproduce-intervene-mitigate 루프로 관리하기
- type: paper
- source: http://arxiv.org/abs/2607.11098v3
- why-now: MCP tool description poisoning, timeout, stale result 같은 배포 중 tool failure는 “한 번 실패했다”가 아니라 재현 가능한 regression case로 관리되어야 한다.
- angle: “agent QA는 prompt 평가가 아니라 failure workbench 운영” — controlled reproduction, intervention test, mitigation confirmation을 MCP 기반 agent release gate로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 5
- suggested-category: paper-review
- suggested-tags: [mcp, agent-eval, tool-use, failure-analysis]
- status: idea

### 2026-07-17 — [논문 리뷰] Harness Handbook: evolving agent harness를 읽고 고치는 법
- type: paper
- source: http://arxiv.org/abs/2607.13285v1
- why-now: agent 성능이 foundation model뿐 아니라 prompt construction, state management, tool invocation, orchestration harness에 의존하면서 harness 자체의 가독성·탐색성·편집성이 중요해졌다.
- angle: “agent harness는 코드와 문서 사이의 configuration substrate” — navigable harness map, editable boundary, coding agent가 안전하게 harness를 수정하는 workflow를 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-harness, coding-agent, maintainability, developer-workflow]
- status: idea

### 2026-07-17 — jcode: hash-anchored edits와 LSP를 갖춘 coding agent harness
- type: tech
- source: https://github.com/1jehuang/jcode
- why-now: 터미널 coding agent가 diff를 안정적으로 적용하고 repo symbol context를 읽으려면 단순 shell wrapper가 아니라 edit anchoring, LSP, browser/tool harness가 결합된 runtime이 필요하다.
- angle: “coding agent UX의 핵심은 채팅창이 아니라 수정 안정성과 context toolchain” — hash-anchored edit, LSP context, subagent/tool routing을 repo architecture로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, lsp, agent-harness, github-repo]
- status: idea

### 2026-07-17 — pdf-reader-mcp: evidence-first 문서 도구를 MCP로 제공하기
- type: tech
- source: https://github.com/SylphxAI/pdf-reader-mcp
- why-now: agent가 PDF 보고서·논문·계약서에서 답을 만들 때 OCR, visual crop, page provenance, citation grounding이 없으면 hallucination과 감사 실패가 커진다.
- angle: “문서 MCP server는 텍스트 추출기가 아니라 evidence pipeline” — visual crop, OCR provenance, trust report, benchmark-gated extraction을 RAG/agent 문서 처리 패턴으로 분석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, document-ai, rag, github-repo]
- status: idea

### 2026-07-18 — [논문 리뷰] SearchOS-V1: deep search agent의 진행 상태를 공유 메모리로 만들기
- type: paper
- source: http://arxiv.org/abs/2607.15257v1
- why-now: web search가 agent 기본 능력이 되면서 실패한 검색을 반복하거나 evidence coverage를 놓치는 문제가 비용·품질 병목으로 커지고 있다.
- angle: “검색 agent의 핵심은 query 생성이 아니라 progress state 관리” — relational schema completion, shared state, multi-agent search collaboration, evidence-grounded aggregation을 research agent 런타임 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [search-agent, deep-research, state-management, evaluation]
- status: idea

### 2026-07-18 — [논문 리뷰] MCPEvol-Bench: MCP server 변화에 agent가 적응하는지 평가하기
- type: paper
- source: http://arxiv.org/abs/2607.14642v1
- why-now: MCP가 tool infra 표준처럼 확산되지만 실제 server는 schema, 기능, 응답 형식이 계속 바뀌며 agent의 tool-use 안정성을 흔든다.
- angle: “agent 평가는 고정 tool list가 아니라 진화하는 tool landscape에서 해야 한다” — MCP mutation operator, backward compatibility, regression suite, tool description drift를 운영 체크리스트로 만든다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 5
- suggested-category: paper-review
- suggested-tags: [mcp, tool-use, agent-eval, regression-test]
- status: published
- draft: content/posts/2026-07-18-mcpevol-bench-mcp-server-evolution.mdx

### 2026-07-18 — [논문 리뷰] SEED: agentic RL에서 trajectory를 hindsight skill로 증류하기
- type: paper
- source: http://arxiv.org/abs/2607.14777v1
- why-now: long-horizon tool agent 학습은 episode-level reward만으로 중간 의사결정 신호가 부족해 on-policy trajectory를 더 잘 재사용하는 방법이 필요하다.
- angle: “agent RL의 데이터 flywheel은 성공/실패 로그를 hindsight skill로 바꾸는 과정” — trajectory analysis, self-evolving distillation, skill library, policy update loop를 post-training 관점으로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-rl, post-training, trajectory, distillation]
- status: idea

### 2026-07-18 — [논문 리뷰] SmartRAG: 모바일 온디바이스 RAG를 네 개 모듈로 쪼개기
- type: paper
- source: http://arxiv.org/abs/2607.14661v1
- why-now: 개인 비서 agent가 모바일로 내려오면 privacy, offline, latency 요구 때문에 서버형 RAG나 단순 모델 압축만으로는 부족하다.
- angle: “온디바이스 RAG는 작은 LLM 하나가 아니라 perception·memory·focus·thinking 역할 분리 문제” — native graph memory, continual NER, edge resource budget을 personal agent 아키텍처로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [on-device-ai, rag, mobile-agent, memory]
- status: idea

### 2026-07-18 — [논문 리뷰] D-Cut: batched speculative decoding에서 검증 깊이를 동적으로 자르기
- type: paper
- source: http://arxiv.org/abs/2607.14647v1
- why-now: speculative decoding은 단일 요청에서는 빨라도 높은 동시성 serving에서는 rejected draft token 검증 비용이 오히려 latency를 키울 수 있다.
- angle: “LLM serving 최적화는 draft를 길게 뽑는 경쟁이 아니라 batch 전체의 verification budget 배분 문제” — adaptive pruning, acceptance probability, throughput/latency trade-off를 inference 운영 관점으로 설명한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [speculative-decoding, inference, serving, latency]
- status: idea

### 2026-07-18 — [논문 리뷰] Cost-Aware Security Agents: success rate 말고 비용 대비 성공을 보자
- type: paper
- source: http://arxiv.org/abs/2607.15263v1
- why-now: 보안 agent는 reasoning step, tool call, telemetry query가 모두 비용이며 “무제한 budget에서 최고 성공률”은 운영 배포 판단에 부족하다.
- angle: “security agent benchmark는 exploit 성공률보다 inference spend와 tool spend를 함께 봐야 한다” — offensive/defensive task, fixed-cost comparison, budget-aware agent routing을 DevSecOps 운영 관점으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [security-agent, evaluation, cost-optimization, devsecops]
- status: idea

### 2026-07-18 — Microsoft MCP catalog: 공식 MCP server 묶음으로 보는 enterprise tool integration
- type: tech
- source: https://github.com/microsoft/mcp
- why-now: MCP server가 개별 PoC에서 enterprise data access와 tool integration 계층으로 이동하면서, 공식 server catalog와 운영 패턴을 기준으로 삼을 필요가 생겼다.
- angle: “MCP 도입은 server 하나 붙이기가 아니라 catalog·auth·data boundary·versioning 운영 문제” — Microsoft 공식 MCP server 구현들을 기준으로 agent tool platform 체크리스트를 만든다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, enterprise-ai, tool-integration, github-repo]
- status: idea

### 2026-07-18 — Agent Substrate: agent runtime의 core system abstraction 살펴보기
- type: tech
- source: https://github.com/agent-substrate/substrate
- why-now: agent framework가 늘수록 모델 wrapper보다 state, tools, permissions, run lifecycle을 담는 공통 substrate 설계가 더 중요해지고 있다.
- angle: “agent를 앱 기능으로 보지 말고 substrate 위에서 돌아가는 workload로 본다” — runtime core, state boundary, tool integration, orchestration abstraction을 repo architecture 중심으로 소개한다.
- difficulty: medium
- freshness: 4
- practicality: 4
- confidence: 3
- suggested-category: tutorial
- suggested-tags: [agent-runtime, orchestration, framework, github-repo]
- status: idea

### 2026-07-19 — [논문 리뷰] Bridge Evidence: multi-step agentic search에서 진짜 유용한 근거란 무엇인가
- type: paper
- source: http://arxiv.org/abs/2607.15253v1
- why-now: agentic search/RAG가 단일 retrieval 점수로 문서를 고르는 동안, 실제 multi-step 탐색에서는 다음 질문을 열어주는 bridge evidence가 성패를 좌우한다는 문제가 커지고 있다.
- angle: “RAG 근거 평가는 reader에게 바로 도움이 되나가 아니라 다음 탐색 상태를 얼마나 바꾸나를 봐야 한다” — static utility와 causal utility의 차이를 search agent planner 설계로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-search, rag, retrieval, evidence]
- status: idea

### 2026-07-19 — [논문 리뷰] AutoSynthesis: meta-analysis를 multi-agent evidence pipeline으로 자동화하기
- type: paper
- source: http://arxiv.org/abs/2607.15247v1
- why-now: 연구 에이전트가 단순 논문 검색을 넘어 포함/제외 기준, 데이터 추출, 통계 합성까지 수행하는 end-to-end evidence synthesis로 확장되고 있다.
- angle: “research agent는 검색 요약기가 아니라 근거 합성 워크플로 엔진이어야 한다” — screening, extraction, verifier, human review boundary를 과학/의료 QA 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [research-agent, evidence-synthesis, multi-agent, eval]
- status: idea

### 2026-07-19 — [논문 리뷰] When Words Are Safe But Actions Kill: embodied agent 안전성은 텍스트 필터로 충분할까
- type: paper
- source: http://arxiv.org/abs/2607.15218v1
- why-now: LLM이 로봇·실험 장비·물리 환경 planner로 들어가면 문장 자체는 안전해 보여도 실제 action grounding 단계에서 위험이 발생할 수 있다.
- angle: “agent safety는 금지 문구 분류가 아니라 action-state risk space 문제” — hidden-state risk probe, physical danger, tool/robot safety gate를 embodied agent 런타임으로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [embodied-agent, safety, risk-detection, tool-use]
- status: idea

### 2026-07-19 — [논문 리뷰] Plover: GUI agent를 plan-centric interaction으로 조종하기
- type: paper
- source: http://arxiv.org/abs/2607.15193v1
- why-now: 실제 GUI 자동화는 동적 UI, 팝업, 상태 drift 때문에 단순 vision-action loop가 사용자 의도를 잃기 쉽고, 계획을 조작 가능한 인터페이스로 드러내는 패턴이 필요하다.
- angle: “GUI agent UX는 자동 클릭보다 plan을 보여주고 고칠 수 있게 만드는 것” — plan representation, user steering, recovery loop를 desktop/browser agent 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [gui-agent, planning, human-in-the-loop, agent-ux]
- status: idea

### 2026-07-19 — [논문 리뷰] OmniaBench: general AI agent benchmark를 scenario 다양성으로 다시 보기
- type: paper
- source: http://arxiv.org/abs/2607.14989v1
- why-now: agent benchmark가 특정 tool 환경이나 task 유형에 과적합되기 쉬워, 실제 범용성을 보려면 시나리오·상호작용·검증 방식을 넓혀야 한다는 요구가 커지고 있다.
- angle: “일반 에이전트 평가는 평균 점수보다 scenario coverage map이 먼저” — task taxonomy, tool ecosystem, failure mode 분석을 agent regression suite 설계로 연결한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-benchmark, evaluation, tool-use, general-agent]
- status: idea

### 2026-07-19 — heym: prompt와 visual canvas를 오가는 self-hosted agent workflow builder
- type: tech
- source: https://github.com/heymrun/heym
- why-now: agent workflow가 코드-only framework와 no-code canvas 사이에서 갈라지는 가운데, RAG·MCP·HITL·observability·eval을 한 self-hosted surface에 묶는 시도가 늘고 있다.
- angle: “agent builder의 핵심은 드래그앤드롭이 아니라 runtime governance” — workflow graph, human-in-the-loop, trace/eval, token cost tracking을 작은 팀 운영 패턴으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-workflow, mcp, observability, self-hosted]
- status: idea

### 2026-07-19 — android-agent: 실제 Android 기기를 조작하는 open-source device automation framework
- type: tech
- source: https://github.com/ghost-in-the-droid/android-agent
- why-now: computer-use agent가 브라우저를 넘어 모바일 앱 조작으로 확장되면서, ADB 기반 실제 기기 제어·Python skill·대시보드가 결합된 harness가 실무적으로 중요해지고 있다.
- angle: “mobile agent harness는 screenshot parser가 아니라 device control plane” — ADB 권한, skill API, real-device feedback, privacy boundary를 repo introduction으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mobile-agent, android, device-automation, github-repo]
- status: idea

### 2026-07-20 — [논문 리뷰] Cost-Aware Security Agents: 공격·방어 agent 평가는 성공률만 보면 안 된다
- type: paper
- source: http://arxiv.org/abs/2607.15263v1
- why-now: security agent benchmark가 generous inference budget에서의 최고 성공률을 강조하는 동안, 실제 운영에서는 tool 호출 비용·latency·실패 재시도·방어 비용까지 함께 봐야 한다.
- angle: “보안 agent 평가는 pass/fail이 아니라 cost-quality frontier” — offensive/defensive task에서 budget, action count, escalation policy를 함께 추적하는 eval harness 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [security-agent, evaluation, cost-aware, tool-use]
- status: idea

### 2026-07-20 — [논문 리뷰] Can We Trust Item Response Theory for AI Evaluation?
- type: paper
- source: http://arxiv.org/abs/2607.15190v1
- why-now: benchmark가 item-level 통계 모델로 모델 능력과 문제 난이도를 추정하는 사례가 늘고 있어, IRT 가정이 LLM 평가 데이터에서 깨지는 지점을 점검해야 한다.
- angle: “LLM leaderboard를 문항반응이론으로 보정할 때 놓치는 것” — item independence, capability axis, rank stability를 agent/regression benchmark 운영 체크리스트로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [evaluation, benchmark, item-response-theory, llm-as-judge]
- status: idea

### 2026-07-20 — [논문 리뷰] MemPoison: persistent memory를 가진 LLM agent의 구조적 blind spot
- type: paper
- source: http://arxiv.org/abs/2607.14651v1
- why-now: 장기 기억을 쓰는 personal/coding agent가 늘면서, 한 번 저장된 adversarial content가 뒤늦게 downstream 행동을 왜곡하는 persistent attack surface가 현실적인 운영 문제가 됐다.
- angle: “memory write는 편의 기능이 아니라 보안 경계” — memory ingestion, quarantine, provenance, replay-based regression test를 agent runtime 보안 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, prompt-injection, security, runtime-monitoring]
- status: idea

### 2026-07-20 — [논문 리뷰] Bad Memory: agentic system memory에서 오는 prompt injection 위험 평가
- type: paper
- source: http://arxiv.org/abs/2607.14611v1
- why-now: 메모리 파일·사용자 선호·knowledge base를 세션 밖 상태로 유지하는 agent가 보편화되며, retrieval 단계가 아니라 memory persistence 자체를 공격면으로 다루는 평가가 필요하다.
- angle: “RAG injection과 memory injection은 실패 모드가 다르다” — memory trust boundary, preference poisoning, cross-session contamination을 personal agent QA checklist로 설명한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, prompt-injection, personal-agent, evaluation]
- status: idea

### 2026-07-20 — [논문 리뷰] SmartRAG: mobile device 위의 native graph-based RAG
- type: paper
- source: http://arxiv.org/abs/2607.14661v1
- why-now: personal assistant가 모바일 온디바이스로 이동하면서 privacy·latency·offline 제약 안에서 RAG를 작게 운영하는 구조가 중요해지고 있다.
- angle: “mobile RAG는 작은 vector DB가 아니라 native graph memory” — graph construction, on-device retrieval, privacy boundary, edge resource budget을 mobile agent 설계로 연결한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, mobile-agent, on-device-ai, graph-rag]
- status: idea

### 2026-07-20 — GitHub Agentic Workflows MCP Gateway: repo-native agent workflow 앞단의 MCP gateway
- type: tech
- source: https://github.com/github/gh-aw-mcpg
- why-now: GitHub Agentic Workflows가 MCP 기반 tool integration으로 확장되면서, repository 작업을 agent에게 열어줄 때 gateway·권한·audit boundary를 어떻게 둘지가 핵심 운영 이슈가 됐다.
- angle: “agentic workflow의 관문은 tool 목록이 아니라 gateway policy” — MCP gateway, repo permission, workflow trigger, trace/audit를 GitHub-native agent infra 관점으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, github, agentic-workflow, gateway]
- status: idea

### 2026-07-20 — pydantic-deepagents: Pydantic AI 기반 self-hosted coding agent framework
- type: tech
- source: https://github.com/vstorm-co/pydantic-deepagents
- why-now: Claude Code·Codex류 terminal coding agent를 self-hosted로 재구현하려는 수요가 늘면서, typed tool schema·sandbox·multi-agent team·checkpoint를 한 프레임워크로 묶는 패턴이 주목받고 있다.
- angle: “coding agent framework의 기본 단위는 채팅 UI가 아니라 typed runtime” — Pydantic AI tool contract, sandboxed execution, skills, checkpoints, multi-agent orchestration을 repo architecture로 뜯어본다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, pydantic-ai, sandbox, multi-agent]
- status: idea

### 2026-07-20 — wirken: agent 시대의 switchboard — credential vault와 hash-chained audit log
- type: tech
- source: https://github.com/gebruder/wirken
- why-now: 여러 agent·채널·tool을 한 환경에서 운영할수록 credential 격리, per-session audit log, 승인 경계가 framework보다 더 중요한 infra 문제가 된다.
- angle: “agent control plane은 orchestration보다 isolation과 audit가 먼저” — channel isolation, encrypted credential vault, hash-chained log, single-binary deployment를 운영 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-infra, audit-log, credential-vault, github-repo]
- status: idea


### 2026-07-20 — [논문 리뷰] LongStraw: 고정 GPU 예산으로 2M+ long-context RL을 돌리는 법
- type: paper
- source: http://arxiv.org/abs/2607.14952v1
- why-now: agent와 RAG 시스템이 긴 실행 로그·대량 문서·tool trace를 한 번에 다루면서, context window 확장보다 post-training/RL 비용을 어떻게 통제할지가 실무 병목이 되고 있다.
- angle: “긴 컨텍스트 모델은 window 크기가 아니라 학습 예산 설계가 핵심” — sequence packing, reward signal, GPU budget, serving-time context policy를 long-horizon agent 운영 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [long-context, reinforcement-learning, agent-runtime, inference-cost]
- status: idea

### 2026-07-20 — [논문 리뷰] On-Policy Delta Distillation: reasoning 모델 업데이트를 작게 증류하기
- type: paper
- source: http://arxiv.org/abs/2607.15161v1
- why-now: reasoning/model adaptation이 커질수록 매번 full distillation이나 RL을 반복하기 어렵고, 정책 변화량(delta)을 어떻게 안정적으로 옮길지가 배포 비용 문제가 된다.
- angle: “모델 개선은 새 모델 전체가 아니라 행동 변화량을 배포하는 문제” — on-policy trajectory, delta objective, regression risk, agent post-training release gate로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [distillation, reasoning-model, post-training, evaluation]
- status: idea

### 2026-07-20 — [논문 리뷰] T^2MLR: Transformer 중간층에 temporal recurrence를 넣으면 무엇이 달라지나
- type: paper
- source: http://arxiv.org/abs/2607.15178v1
- why-now: 긴 컨텍스트와 streaming inference에서 attention만 키우는 방식의 비용이 커지며, recurrence를 transformer 내부에 다시 넣는 아키텍처 실험이 중요해지고 있다.
- angle: “RNN의 귀환이 아니라 context state를 어디에 둘 것인가” — temporal middle-layer recurrence, memory/state update, latency와 품질 trade-off를 agent runtime memory 관점으로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 3
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [transformer, architecture, recurrence, long-context]
- status: idea

### 2026-07-20 — [논문 리뷰] In-Place Tokenizer Expansion: 사전학습 LLM의 tokenizer를 다시 키우기
- type: paper
- source: http://arxiv.org/abs/2607.15232v1
- why-now: 도메인 특화 LLM·다국어 확장·코드/수식 토큰 최적화에서 tokenizer를 바꾸고 싶지만, 기존 checkpoint를 버리지 않는 방법이 점점 중요해지고 있다.
- angle: “tokenizer는 전처리 부품이 아니라 모델 ABI” — embedding 확장, vocabulary migration, compatibility, downstream fine-tuning 위험을 모델 운영 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [tokenizer, llm-training, model-architecture, domain-adaptation]
- status: idea

### 2026-07-20 — [논문 리뷰] SciDiagramEdit: 논문 revision으로 과학 다이어그램 편집을 학습하기
- type: paper
- source: http://arxiv.org/abs/2607.15272v1
- why-now: 연구·기술 문서 작성에서 LLM이 텍스트뿐 아니라 도식 수정까지 도와야 하는데, 실제 논문 revision은 “무엇을 왜 고쳤는지”가 남아 있는 희소한 멀티모달 학습 신호다.
- angle: “AI writing assistant의 다음 병목은 문장 생성이 아니라 figure edit trace” — paper revision data, diagram instruction, multimodal edit model을 기술 블로그/논문 작성 자동화 관점으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multimodal, scientific-writing, diagram-editing, dataset]
- status: idea

### 2026-07-20 — judgeval: agent 평가를 continuous-improvement stack으로 운영하기
- type: tech
- source: https://github.com/JudgmentLabs/judgeval
- why-now: agent 품질 관리는 일회성 benchmark보다 trace 수집, evaluator, regression gate, 개선 루프가 함께 돌아가는 운영 스택으로 이동하고 있다.
- angle: “agent eval은 점수표가 아니라 릴리즈 파이프라인” — dataset/evaluator/tracing, CI gate, production feedback loop를 작은 팀의 agent QA workflow로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-eval, observability, regression-test, github-repo]
- status: idea

### 2026-07-20 — hope-agent: 기억과 목표를 가진 cross-device desktop AI agent
- type: tech
- source: https://github.com/shiwenwen/hope-agent
- why-now: 개인용 agent가 단일 채팅창을 넘어 데스크톱·NAS·클라우드에서 장기 목표와 메모리를 유지하는 상주형 assistant로 확장되고 있다.
- angle: “personal agent runtime은 UI보다 lifecycle이 어렵다” — memory, autonomous goal loop, cross-device orchestration, local/cloud boundary를 framework architecture로 뜯어본다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 3
- suggested-category: tutorial
- suggested-tags: [personal-agent, desktop-agent, memory, orchestration]
- status: idea

### 2026-07-20 — pdf-reader-mcp: PDF를 agent용 evidence layer로 바꾸는 MCP 서버
- type: tech
- source: https://github.com/SylphxAI/pdf-reader-mcp
- why-now: RAG/agent가 PDF를 단순 텍스트 덤프로 읽으면 표·도표·페이지 provenance가 사라져 답변 검증이 어려워지고, 문서 tool 자체가 evidence-first 인터페이스를 가져야 한다.
- angle: “PDF MCP의 핵심은 OCR이 아니라 provenance-preserving extraction” — visual crop, page evidence, structured extraction, citation boundary를 agent document tool 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, document-ai, rag, github-repo]
- status: idea

### 2026-07-21 — [논문 리뷰] PagedWeight: MoE serving에서 expert weight와 KV cache를 같이 줄이기
- type: paper
- source: http://arxiv.org/abs/2607.16184v1
- why-now: MoE LLM serving은 expert weight 메모리와 KV cache가 동시에 GPU를 압박하는데, 긴 컨텍스트·agent trace가 늘수록 둘 중 하나만 최적화해서는 throughput/latency를 맞추기 어렵다.
- angle: “MoE 추론 최적화는 weight quantization과 KV cache budget의 공동 스케줄링 문제” — runtime dynamic quantization, quality-aware precision, memory/throughput/accuracy trade-off를 production serving 체크리스트로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [moe, inference-optimization, kv-cache, quantization]
- status: idea

### 2026-07-21 — [논문 리뷰] When Do Multi-Agent Systems Help?: 정보 병목으로 보는 MAS 선택 기준
- type: paper
- source: http://arxiv.org/abs/2607.16133v1
- why-now: multi-agent orchestration이 기본 옵션처럼 쓰이지만, 실제로 single-agent보다 언제 나은지에 대한 구조적 기준은 아직 약하다.
- angle: “agent를 늘리는 건 parallelism이 아니라 information bottleneck 설계” — task decomposition, communication channel, redundant reasoning, failure propagation을 MAS 설계 판단표로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, agent-architecture, information-bottleneck, orchestration]
- status: idea

### 2026-07-21 — [논문 리뷰] The Honest Quorum Problem: agentic infrastructure의 epistemic BFT
- type: paper
- source: http://arxiv.org/abs/2607.16109v1
- why-now: agentic validator와 multi-agent review loop가 늘수록 “다수가 동의했다”와 “정말 transition semantics를 이해했다” 사이의 차이가 시스템 안전성 문제가 된다.
- angle: “agent quorum은 Byzantine fault tolerance보다 epistemic fault tolerance가 어렵다” — validator diversity, semantic execution check, collusion/ignorance boundary를 agent infra 안전 설계로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-infra, multi-agent, verification, byzantine-fault-tolerance]
- status: idea

### 2026-07-21 — [논문 리뷰] ToolVerse: massive tool environment에서 long-horizon agentic RL 평가하기
- type: paper
- source: http://arxiv.org/abs/2607.15660v1
- why-now: agentic RL은 toy tool set을 넘어 대규모·동적 tool environment에서 robustness와 long-horizon planning을 평가해야 하는 단계로 넘어가고 있다.
- angle: “tool-use benchmark의 다음 병목은 tool 개수가 아니라 environment lifecycle” — tool discovery, state transition, reward, curriculum, regression suite를 agentic RL 운영 루프로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [tool-use, agentic-rl, benchmark, long-horizon-agent]
- status: idea

### 2026-07-21 — [논문 리뷰] Scalable LLM Agent Tool Access in the Cloud: MCP를 클라우드 규모로 운영하기
- type: paper
- source: http://arxiv.org/abs/2607.15593v1
- why-now: MCP가 agent tool interface의 사실상 표준이 되면서, 단일 서버 demo가 아니라 legacy service wrapping, tool discovery, 권한, tenant isolation을 포함한 cloud-scale 운영 문제가 드러나고 있다.
- angle: “MCP 운영은 server 만들기가 아니라 tool access plane 설계” — gateway, registry, auth boundary, compatibility layer, observability를 production agent infra 관점으로 설명한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [mcp, agent-infra, cloud, tool-access]
- status: idea

### 2026-07-21 — LightAgent: hooks·memory·guardrails를 갖춘 lightweight Python agent framework
- type: tech
- source: https://github.com/wanxingai/LightAgent
- why-now: Python 팀이 무거운 orchestration stack 없이 tool calling, memory, tracing, lifecycle hook, multi-agent collaboration을 빠르게 붙이고 싶어 하는 수요가 커지고 있다.
- angle: “작은 agent framework는 기능 수보다 extension point가 중요하다” — hook lifecycle, memory abstraction, guardrail, trace, workflow composition을 framework 선택 체크리스트로 뜯어본다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-framework, python, memory, guardrails]
- status: published
- draft: content/posts/2026-07-21-lightagent-lightweight-python-agent-framework.mdx

### 2026-07-21 — Solace Agent Mesh: event-driven multi-agent system을 운영하는 방식
- type: tech
- source: https://github.com/SolaceLabs/solace-agent-mesh
- why-now: multi-agent workflow가 request/response 체인에서 event-driven mesh로 확장되면, agent 간 메시징·backpressure·observability·real-world integration이 핵심 아키텍처 문제가 된다.
- angle: “multi-agent orchestration은 graph runner가 아니라 event mesh일 수 있다” — agent message bus, event routing, tool/data integration, failure handling을 production MAS 패턴으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [multi-agent, event-driven, agent-framework, orchestration]
- status: idea

### 2026-07-21 — nocturne_memory: rollback 가능한 graph-like MCP memory server
- type: tech
- source: https://github.com/Dataojitori/nocturne_memory
- why-now: agent memory를 vector store 하나로 두기보다 structured memory, rollback, visual inspection, MCP boundary로 관리하려는 움직임이 커지고 있다.
- angle: “agent memory는 검색 품질보다 변경 이력과 되돌리기가 먼저” — graph-like memory model, rollback, inspection UI, MCP server contract를 persistent agent memory 운영법으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-memory, mcp, graph-memory, github-repo]
- status: idea

### 2026-07-22 — [논문 리뷰] Automated Discovery Has No Universally Superior Harness
- type: paper
- source: http://arxiv.org/abs/2607.18235v1
- why-now: OpenEvolve류 자동 발견·코드 개선 harness가 빠르게 확산되는 와중에, 논문은 30개 budget-matched harness와 310만+ LLM rollout으로 “고정 recipe”보다 online adaptation이 낫다는 실험 근거를 제시한다.
- angle: “agent harness 선택은 표준 아키텍처가 아니라 hyperparameter” — archive, parent selection, exploration, budget allocation을 분해하고 early-progress pruning으로 compute를 재배분하는 운영 패턴을 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-harness, automated-discovery, evaluation, llm-rollouts]
- status: idea

### 2026-07-22 — [논문 리뷰] SWE-Pruner Pro: coding agent context pruning을 agent 내부 표현으로 하기
- type: paper
- source: http://arxiv.org/abs/2607.18213v1
- why-now: coding agent가 긴 tool output과 repository context를 계속 읽으면서 context pruning이 핵심 병목이 됐고, 별도 classifier 대신 agent 자체 hidden representation을 활용하는 접근이 등장했다.
- angle: “context pruning은 외부 요약기가 아니라 agent reading signal을 써야 한다” — code relevance score, tool-output pruning, SWE-style task loop, 정확도/토큰 비용 trade-off를 coding agent runtime 설계로 설명한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, context-management, pruning, swe-bench]
- status: idea

### 2026-07-22 — [논문 리뷰] TRIM: agent trajectory minimization으로 CodeSlop 줄이기
- type: paper
- source: http://arxiv.org/abs/2607.18161v1
- why-now: 코딩 에이전트가 기능은 맞지만 과하게 큰 diff와 장황한 구현을 남기는 문제가 실무 리뷰 비용으로 직결되고 있어, trajectory 수준에서 code bloat를 줄이는 연구가 중요해졌다.
- angle: “좋은 coding agent는 많이 쓰는 agent가 아니라 덜 고치는 agent” — edit trajectory, diff size, validation loop, code review 비용을 품질 metric으로 넣는 agent QA 전략을 제안한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, code-quality, trajectory, evaluation]
- status: idea

### 2026-07-22 — [논문 리뷰] FinSAgent: SEC filing QA를 위한 corpus-aligned multi-agent RAG
- type: paper
- source: http://arxiv.org/abs/2607.18102v1
- why-now: long-form enterprise document RAG는 단순 chunk retrieval보다 query decomposition, evidence alignment, answer synthesis가 중요하며, SEC filing처럼 표준화됐지만 긴 문서는 agentic RAG 설계 검증에 좋은 사례다.
- angle: “업무 RAG의 난점은 검색보다 evidence alignment” — filing 구조 인식, multi-agent query refinement, heterogeneous evidence aggregation, citation/reproducibility를 enterprise RAG 운영법으로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rag, enterprise-rag, sec-filings, evidence-grounding]
- status: idea

### 2026-07-22 — [논문 리뷰] Adaptive Adversaries: multi-turn LLM agent security benchmark
- type: paper
- source: http://arxiv.org/abs/2607.18063v1
- why-now: prompt injection 방어 평가가 고정 공격 세트와 단일 turn에 머물면 실제 agent의 multi-turn 조작·적응형 공격을 놓치기 쉽다.
- angle: “agent 보안 평가는 공격자도 agent라고 가정해야 한다” — adaptive attack loop, scenario design, memoryless defender 한계, regression benchmark를 MCP/tool agent 보안 게이트로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-security, prompt-injection, benchmark, red-team]
- status: idea

### 2026-07-22 — [논문 리뷰] Self-State Attacks: self-hosted AI agent의 memory/config 오염 막기
- type: paper
- source: http://arxiv.org/abs/2607.17986v1
- why-now: Claude Code·Codex·MCP agent처럼 로컬 파일과 설정을 읽고 쓰는 self-hosted agent가 늘면서, “정상 system call로 자기 상태를 오염시키는” 공격면이 현실적인 운영 리스크가 됐다.
- angle: “agent sandbox는 외부 명령보다 자기 상태 쓰기를 먼저 봐야 한다” — memory/config integrity, OS permission boundary, rollback, audit log, state quarantine을 local agent hardening 체크리스트로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-security, self-hosted-agent, memory-poisoning, sandbox]
- status: idea

### 2026-07-22 — NVIDIA NeMo Gym: environment로 모델과 agent를 평가·개선하기
- type: tech
- source: https://github.com/NVIDIA-NeMo/Gym
- why-now: agent post-training과 evaluation이 정적 benchmark에서 environment 기반 rollout·feedback loop로 이동하면서, 모델과 agent를 같은 환경 추상화에서 평가·개선하는 툴킷의 가치가 커지고 있다.
- angle: “eval은 점수표가 아니라 environment contract” — environment API, rollout log, reward/evaluator, regression suite, NeMo 생태계 연동을 agentic RL 운영 관점으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-eval, rl-environment, nvidia-nemo, github-repo]
- status: idea

### 2026-07-22 — pydantic-deepagents: typed tool-calling과 sandbox를 갖춘 self-hosted coding agent
- type: tech
- source: https://github.com/vstorm-co/pydantic-deepagents
- why-now: 팀들이 외부 SaaS coding agent를 그대로 쓰기보다 self-hosted runtime, typed tool schema, checkpoint, sandbox, multi-agent team을 직접 통제하려는 수요가 늘고 있다.
- angle: “Claude Code를 self-hosted로 만들면 어떤 abstraction이 필요한가” — Pydantic 기반 tool contract, sandboxed execution, checkpoint/unlimited context, multi-agent routing을 coding agent architecture로 뜯어본다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, pydantic, sandbox, self-hosted]
- status: idea

### 2026-07-23 — [논문 리뷰] CodeRescue: coding agent 실패를 예산 안에서 복구 라우팅하기
- type: paper
- source: http://arxiv.org/abs/2607.19338v1
- why-now: coding agent가 실행 가능한 환경에서 실패 로그를 얻는 일이 일반화되면서, 실패 후 “강한 모델로 무조건 재시도”가 아니라 남은 예산과 복구 가능성을 함께 보는 routing 문제가 중요해졌다.
- angle: “agent fallback은 cascade가 아니라 recovery budget allocator” — 실패 trace, actionable feedback, escalation policy, cost-quality trade-off를 coding agent 운영 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, recovery-routing, cost-optimization, agent-eval]
- status: idea

### 2026-07-23 — [논문 리뷰] ResearchArena: 자동 AI R&D agent의 sabotage와 monitoring 평가
- type: paper
- source: http://arxiv.org/abs/2607.19321v1
- why-now: AI R&D 자동화 agent가 논문·코드·실험 artifact를 만들기 시작하면서, agent를 완전히 신뢰하지 않고 monitor로 covert sabotage를 잡는 AI control 평가가 필요해졌다.
- angle: “연구 agent 평가는 성능보다 배포 가능한 artifact 감시가 먼저” — sabotage scenario, monitor design, trusted/untrusted agent boundary, audit trail을 AI R&D agent governance로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [ai-rnd-agent, monitoring, sabotage, ai-control]
- status: idea

### 2026-07-23 — [논문 리뷰] Evidence-Aware RL: long-context reasoning의 반복 복사를 줄이기
- type: paper
- source: http://arxiv.org/abs/2607.19345v1
- why-now: long-context reasoning과 deep research agent가 긴 evidence를 다루면서, 실제 추론 대신 같은 문장을 반복 복사하는 실패 모드가 품질과 비용을 동시에 악화시킨다.
- angle: “long-context 문제는 창 크기보다 evidence 사용 정책” — evidence-aware reward, repetitive copying detector, grounding/coverage metric을 research/RAG agent의 reasoning QA로 연결한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [long-context, reasoning, evidence-grounding, reinforcement-learning]
- status: idea

### 2026-07-23 — [논문 리뷰] GAMUT: factual completeness를 위한 two-level meta-rubric 평가
- type: paper
- source: http://arxiv.org/abs/2607.19322v1
- why-now: long-form generation 평가는 틀린 주장만 잡는 precision 중심에서, 답변이 필요한 사실을 얼마나 빠뜨리지 않았는지 보는 completeness 평가로 확장되고 있다.
- angle: “LLM-as-judge는 오류 탐지기만으로 부족하다” — meta-rubric, factual completeness, decompose-search-verify의 blind spot, agent report QA rubric 설계를 실무형 평가법으로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [llm-evaluation, factuality, rubric, long-form-generation]
- status: idea

### 2026-07-23 — [논문 리뷰] LangGraph long-running workflow: stateful business agent 경로 설계
- type: paper
- source: http://arxiv.org/abs/2607.19297v1
- why-now: LangGraph가 단순 agent demo를 넘어 long-running, stateful business process orchestration에 쓰이면서 workflow path, checkpoint, human-in-the-loop boundary를 설계하는 기준이 필요해졌다.
- angle: “LangGraph는 모델 성능 도구가 아니라 상태 전이 설계 언어” — graph path, durable state, interrupt/replay, business workflow failure mode를 production agent architecture로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [langgraph, workflow, stateful-agent, orchestration]
- status: idea

### 2026-07-23 — [논문 리뷰] Agentic CI/CD Pipeline Attack: trusted multi-agent 배포 체인의 권한 프레이밍 공격
- type: paper
- source: http://arxiv.org/abs/2607.19267v1
- why-now: triage·developer·security-scan·review·deploy 같은 multi-agent CI/CD pipeline이 현실화되면, 각 agent가 “검증은 하지만 행동하지 않는” 권한·책임 분리 실패가 supply-chain 공격면이 된다.
- angle: “agentic CI/CD 보안은 LLM firewall 하나로 끝나지 않는다” — authority framing, laundered code, stage-local verification, deploy gate를 repo-native agent workflow 보안 패턴으로 분석한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-security, cicd, supply-chain, multi-agent]
- status: idea

### 2026-07-23 — Vestige: time-travel MCP memory로 장애 원인을 거슬러 찾기
- type: tech
- source: https://github.com/samvallad33/vestige
- why-now: local-first agent memory와 MCP server가 늘면서, 현재 상태와 유사한 문서 검색보다 과거 변경·결정·서비스 상태를 시간축으로 추적하는 memory layer가 필요해지고 있다.
- angle: “agent memory의 검색 단위는 문서가 아니라 원인 후보의 시간선” — Rust MCP server, time-travel retrieval, local-first 운영, incident debugging workflow를 agent observability 관점으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-memory, mcp, observability, github-repo]
- status: idea

### 2026-07-23 — coddy-agent: 단일 Go binary로 배포하는 범용 local agent runtime
- type: tech
- source: https://github.com/coddy-project/coddy-agent
- why-now: agent runtime을 서버 여러 개와 SaaS 조합으로 운영하기 부담스러운 팀에게, ReAct loop·ACP server·REST API·web UI·cron·memory·MCP를 한 binary로 묶는 접근이 실용적인 대안이 될 수 있다.
- angle: “local agent runtime은 설치 방식도 architecture decision” — static binary packaging, ACP/IDE integration, context compaction, rules/skills/MCP surface를 self-hosted agent 운영 관점으로 뜯어본다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [local-agent, go, mcp, github-repo]
- status: idea

### 2026-07-24 — [논문 리뷰] ChannelGuard: safe model을 조합해도 multi-agent system은 안전하지 않다
- type: paper
- source: http://arxiv.org/abs/2607.19430v1
- why-now: planner, worker, verifier, synthesizer를 연결하는 multi-agent 앱이 늘면서 입력 경계만 지키는 guardrail로는 agent 사이 channel injection을 놓치기 쉽다.
- angle: “multi-agent 보안은 각 모델의 safety score가 아니라 agent 간 message channel의 provenance와 monitor coverage 문제” — channel policy, taint tracking, verifier blind spot을 runtime firewall 설계로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, agent-security, runtime-monitoring, prompt-injection]
- status: idea

### 2026-07-24 — [논문 리뷰] Notes to Self: LLM agent가 경험을 재사용 가능한 abstraction으로 바꾸는 법
- type: paper
- source: http://arxiv.org/abs/2607.20372v1
- why-now: long-horizon agent에서 단순 transcript memory보다 “다음 실행에 쓸 수 있는 전략·주의사항” 형태의 experiential abstraction이 중요해지고 있다.
- angle: “agent memory는 과거 로그 저장소가 아니라 자기 자신에게 남기는 운영 runbook” — 실패 경험 요약, abstraction granularity, retrieval trigger, memory hygiene를 개인 비서/코딩 agent 관점으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, experiential-learning, long-horizon-agent, reflection]
- status: idea

### 2026-07-24 — [논문 리뷰] HyMCache: multi-turn LLM serving에서 KV cache를 CXL hybrid memory로 운영하기
- type: paper
- source: http://arxiv.org/abs/2607.18141v1
- why-now: agentic workload는 이전 context와 tool trace를 재사용하므로 KV-cache reuse가 중요하지만, GPU HBM만으로는 cluster-scale cache 저장·서빙 병목이 커진다.
- angle: “agent inference infra의 병목은 prefill 계산만이 아니라 재사용 가능한 KV state의 memory tiering” — HBM/DRAM/CXL 배치, cache hit, latency trade-off를 serving architecture로 설명한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [llm-serving, kv-cache, cxl, agent-inference]
- status: idea

### 2026-07-24 — [논문 리뷰] PyroDash: token-level small-large model 협업으로 reasoning inference 비용 줄이기
- type: paper
- source: http://arxiv.org/abs/2607.20327v1
- why-now: 큰 reasoning model은 강하지만 비싸고, 작은 모델은 빠르지만 어려운 token에서 불안정해져 token 단위 routing과 confidence 기반 협업이 실용적 주제로 올라왔다.
- angle: “모델 라우팅을 요청 단위가 아니라 토큰/구간 단위로 쪼개면 무엇이 달라지나” — SLM/LLM 협업, fallback trigger, latency-cost-quality frontier를 inference 운영 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [inference, model-routing, small-language-model, reasoning]
- status: idea

### 2026-07-24 — [논문 리뷰] AgentAbstain: LLM agent는 언제 행동하지 말아야 하는지 아는가
- type: paper
- source: http://arxiv.org/abs/2607.10059v1
- why-now: autonomous agent를 실제 업무에 넣을수록 task success보다 ambiguity, conflicting constraints, tool failure에서 안전하게 abstain·escalate하는 능력이 중요해진다.
- angle: “좋은 agent는 많이 실행하는 agent가 아니라 멈출 줄 아는 agent” — abstention policy, uncertainty signal, human escalation, no-op audit를 운영 체크리스트로 만든다.
- difficulty: medium
- freshness: 4
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-eval, abstention, safety, human-in-the-loop]
- status: idea

### 2026-07-24 — [논문 리뷰] AgentLTL: tool-using agent 절차 준수를 trace logic으로 검증하기
- type: paper
- source: http://arxiv.org/abs/2607.02599v1
- why-now: tool agent 평가는 최종 답만 맞는지보다 “올바른 순서와 조건으로 도구를 썼는가”가 중요해졌고, 절차 자체를 검증 가능한 specification으로 만드는 흐름이 강하다.
- angle: “agent QA를 LLM judge 점수가 아니라 실행 trace의 temporal logic check로 바꾸기” — precondition, forbidden transition, policy-as-code, training/eval feedback loop를 다룬다.
- difficulty: high
- freshness: 4
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [tool-use, formal-verification, agent-eval, policy-as-code]
- status: idea

### 2026-07-24 — AWS Bedrock AgentCore SDK: framework-agnostic agent runtime primitive 살펴보기
- type: tech
- source: https://github.com/aws/bedrock-agentcore-sdk-python
- why-now: agent framework가 늘어날수록 특정 orchestration API보다 runtime, memory, auth, tool, deployment primitive를 클라우드 관리 계층으로 분리하는 패턴이 중요해지고 있다.
- angle: “agent framework 위가 아니라 아래에 필요한 managed runtime은 무엇인가” — runtime isolation, memory/auth/tool primitive, framework-agnostic 배포 경계를 AWS SDK 구조로 점검한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-runtime, aws-bedrock, agent-framework, deployment]
- status: idea

### 2026-07-24 — Containarium: SSH-native sandbox와 eBPF egress policy로 agent 실행 격리하기
- type: tech
- source: https://github.com/FootprintAI/Containarium
- why-now: 코딩·운영 agent가 shell, network, GPU, Kubernetes에 접근하면서 sandbox는 선택 기능이 아니라 agent runtime의 기본 안전 경계가 되고 있다.
- angle: “agent sandbox를 Docker wrapper가 아니라 policy-aware execution substrate로 보기” — SSH-native isolation, eBPF egress control, LXC/Kubernetes backend, MCP-native CLI를 실행 보안 패턴으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-sandbox, security, ebpf, github-repo]
- status: idea

### 2026-07-25 — [논문 리뷰] OpenForgeRL: harness-native agent를 end-to-end RL로 학습하기
- type: paper
- source: http://arxiv.org/abs/2607.21557v1
- why-now: Claude Code, Codex 같은 실제 agent harness는 stateful·multi-process tool loop라 기존 SFT/RL stack으로 학습하기 어려운데, harness 자체를 학습 환경으로 표현하려는 시도가 나왔다.
- angle: “agent post-training은 chat transcript가 아니라 실행 harness를 학습 가능한 environment로 감싸는 문제” — rollout, tool trace, reward, sandbox boundary를 운영 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rl, harness, post-training, tool-use]
- status: idea

### 2026-07-25 — [논문 리뷰] Agentic Context Management: agent memory와 비용을 lifecycle 문제로 보기
- type: paper
- source: http://arxiv.org/abs/2607.21503v1
- why-now: production agent의 실패가 추론력보다 conversation history, tool definition, tool output 누적으로 생기는 context 관리 문제로 드러나고 있다.
- angle: “context engineering은 벡터 DB 검색만이 아니라 생성·압축·보존·폐기 lifecycle architecture” — memory tier, compaction trigger, cost ceiling, recall QA를 agent runtime 설계로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 5
- suggested-category: paper-review
- suggested-tags: [agent, context-engineering, memory, cost-optimization]
- status: published
- draft: content/posts/2026-07-25-agentic-context-management-lifecycle-architecture.mdx

### 2026-07-25 — [논문 리뷰] Euclid-MCP: Prolog를 MCP 서버로 붙이는 deterministic reasoning layer
- type: paper
- source: http://arxiv.org/abs/2607.21412v1
- why-now: LLM agent가 규정·정책·논리 조건을 다룰 때 자연어 reasoning만으로는 재현성과 감사 가능성이 부족해, MCP 기반 symbolic tool 통합이 실용적인 대안으로 떠오른다.
- angle: “agent reasoning에서 LLM이 설명하고 Prolog가 판정하는 경계” — MCP tool schema, deterministic verifier, compliance workflow, 실패 모드를 neuro-symbolic agent 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [mcp, symbolic-reasoning, prolog, agent-tools]
- status: idea

### 2026-07-25 — [논문 리뷰] RUMBA: long-term user memory benchmark를 다국어·시간성 기준으로 보기
- type: paper
- source: http://arxiv.org/abs/2607.21447v1
- why-now: 개인 비서형 agent memory 평가는 영어 중심 aggregate retrieval 점수만으로는 long-range context, temporal fact, reasoning 실패를 구분하기 어렵다.
- angle: “agent memory 벤치마크는 기억했는가보다 어떤 질문 유형에서 temporal reasoning이 깨지는가를 봐야 한다” — taxonomy, multilingual QA, memory regression suite 설계를 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, benchmark, multilingual, temporal-reasoning]
- status: idea

### 2026-07-25 — [논문 리뷰] Continuous Assurance: no-code agent가 배포된 뒤에도 안전한지 계속 검증하기
- type: paper
- source: http://arxiv.org/abs/2607.21495v1
- why-now: 조직 내부에서 low-code/no-code agent 생성이 쉬워지면서, 모델·도구·권한·스케줄·retrieval source가 바뀔 때 silent degradation을 잡는 운영 체계가 필요해졌다.
- angle: “agent governance는 출시 전 승인 문서가 아니라 dependency drift를 계속 보는 assurance loop” — inventory, policy check, eval cadence, rollback 기준을 enterprise agent 운영법으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-governance, eval, reliability, enterprise-ai]
- status: idea

### 2026-07-25 — [논문 리뷰] Agentic coding without the cloud: 민감 데이터 환경의 local coding agent 평가
- type: paper
- source: http://arxiv.org/abs/2607.21482v1
- why-now: 개인·연구·의료 데이터처럼 외부 cloud LLM 전송이 막힌 환경에서도 coding agent 수요는 커지고 있어 open-weight local model 평가 기준이 필요하다.
- angle: “coding agent 선택 기준에 privacy boundary와 longitudinal task를 넣자” — local inference, data preparation workflow, task drift, governance 제약을 개발자 워크플로 관점으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, local-llm, privacy, benchmark]
- status: idea

### 2026-07-25 — Arcade MCP: agent tool 개발을 framework와 server runtime으로 표준화하기
- type: tech
- source: https://github.com/ArcadeAI/arcade-mcp
- why-now: MCP tool이 늘어날수록 단일 server 예제보다 custom capability 개발, tool packaging, auth/context 전달, testable runtime을 표준화하는 framework가 필요해지고 있다.
- angle: “MCP server를 demo script가 아니라 reusable tool product로 만드는 법” — tool definition, server lifecycle, permission boundary, agent integration workflow를 repo 중심으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, agent-tools, framework, github-repo]
- status: idea

### 2026-07-25 — NVIDIA skills: coding agent에 제품별 executable skill을 설치하는 패턴
- type: tech
- source: https://github.com/NVIDIA/skills
- why-now: Claude Code, Codex 같은 coding agent가 특정 제품·도메인의 문서와 명령을 매번 새로 배우는 대신, 검증된 skill package를 설치해 end-to-end workflow를 수행하는 패턴이 커지고 있다.
- angle: “agent capability 배포 단위는 prompt snippet이 아니라 테스트 가능한 skill bundle” — CUDA, robotics, simulation, RAG workflow의 skill packaging, versioning, repo guidance를 실무 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, skills, nvidia, github-repo]
- status: idea


### 2026-07-26 — [논문 리뷰] AREX: deep research agent를 recursively self-improving loop로 만들기
- type: paper
- source: http://arxiv.org/abs/2607.21461v1
- why-now: deep research agent가 단순 검색 시간을 늘리는 대신 후보 답변 검증을 constraint-wise로 쪼개고, 실패한 제약을 다시 하위 연구 과제로 재귀 확장하는 방향이 구체화됐다.
- angle: “research agent의 핵심은 더 오래 검색하기가 아니라 발견-검증 비대칭을 runtime loop로 만드는 것” — constraint decomposition, verifier, recursive refinement, evidence budget을 설계 패턴으로 정리.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [research-agent, deep-research, verification, recursive-agent]
- status: idea

### 2026-07-26 — [논문 리뷰] PATS: agentic RL에서 policy-aware scaffolding이 필요한 이유
- type: paper
- source: http://arxiv.org/abs/2607.21419v1
- why-now: long-horizon agent RL은 약한 policy가 비슷한 실패 trajectory를 반복해 학습 신호가 빈약해지는 문제가 크고, rollout을 policy 상태에 맞춰 scaffold하는 접근이 중요해지고 있다.
- angle: “agent RL의 병목은 보상 함수보다 실패를 덜 낭비하게 만드는 scaffolding” — policy-aware task shaping, exploration, rollout logging, curriculum boundary를 운영 관점으로 설명.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rl, scaffolding, post-training, rollout]
- status: idea

### 2026-07-26 — [논문 리뷰] GRADRAG: multi-agent RAG prompt를 그래프 전체에서 같이 튜닝하기
- type: paper
- source: http://arxiv.org/abs/2607.21324v1
- why-now: RAG pipeline이 retriever, planner, reader, verifier 등 여러 agent/component로 나뉘면서 컴포넌트별 prompt 최적화만으로는 전체 오류 전파를 줄이기 어렵다.
- angle: “RAG prompt tuning은 노드별 튜닝이 아니라 computational graph의 credit assignment 문제” — cross-component adaptation, structured feedback, pipeline-level regression test로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rag, prompt-optimization, multi-agent, eval]
- status: idea

### 2026-07-26 — [논문 리뷰] MemTools: agent memory 연구를 interoperable framework로 표준화하기
- type: paper
- source: http://arxiv.org/abs/2607.21404v1
- why-now: agent memory 구현이 저장·검색·요약·평가 로직을 제각각 묶으면서 비교와 재현이 어려워졌고, memory lifecycle을 분리한 연구 프레임워크 수요가 커졌다.
- angle: “memory는 vector DB 기능이 아니라 lifecycle API와 evaluation contract의 문제” — heterogeneous memory type, update/retrieve/eval 분리, benchmark adapter를 정리.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, framework, eval, interoperability]
- status: idea

### 2026-07-26 — [논문 리뷰] Auditing Provenance Sensitivity: agent action이 허가된 근거에서 나왔는지 검사하기
- type: paper
- source: http://arxiv.org/abs/2607.20827v1
- why-now: LLM agent는 user request, tool output, retrieved record, memory, untrusted text를 한 context에 섞어 action을 고르기 때문에 관련성(relevance)과 권한(authorization)을 분리해 감사해야 한다.
- angle: “정답 행동이어도 잘못된 provenance에서 나온 결정이면 위험하다” — permitted evidence labeling, action-specific audit, tool argument gate를 agent 보안 QA로 설명.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-security, provenance, tool-use, audit]
- status: idea

### 2026-07-26 — NVIDIA OO Agents: Python object를 agent runtime primitive로 쓰는 설계
- type: tech
- source: http://arxiv.org/abs/2607.20709v1
- why-now: agent 개발이 prompt template, tool schema, callback, workflow graph로 쪼개지면서 복잡해졌고, agent를 Python object로 모델링해 state/action/lifecycle을 한곳에 묶는 대안이 나왔다.
- angle: “agent framework의 추상화 단위는 graph node가 아니라 object일 수도 있다” — method-as-action, field-as-state, lifecycle hook, LangGraph/ADK와의 선택 기준을 비교.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-framework, python, nvidia, architecture]
- status: idea

### 2026-07-26 — pydantic-deepagents: self-hosted coding agent와 Python framework를 같이 보기
- type: tech
- source: https://github.com/vstorm-co/pydantic-deepagents
- why-now: Claude Code류 terminal coding agent를 자체 호스팅하고, tool-calling·sandbox·multi-agent team·checkpoint를 Pydantic AI 위에서 조립하려는 repo가 빠르게 주목받고 있다.
- angle: “coding agent 제품과 framework의 경계는 어디인가” — sandboxed execution, typed tool contract, checkpoints, unlimited context 주장을 repo architecture 중심으로 검증.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, pydantic-ai, sandbox, github-repo]
- status: idea

### 2026-07-26 — Doberman-Core: agent guardrail을 runtime policy와 audit log로 묶는 보안 프레임워크
- type: tech
- source: https://github.com/fu351/Doberman-Core
- why-now: prompt injection 방어가 단순 필터에서 tool-use permission, runtime policy enforcement, monitoring, audit log를 묶은 agent security framework로 이동하고 있다.
- angle: “agent 보안은 모델 앞단 필터가 아니라 실행 전후 policy pipeline” — permission model, guardrail placement, monitoring/audit log, deployment checklist를 repo introduction으로 정리.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-security, guardrails, runtime-policy, github-repo]
- status: idea

### 2026-07-27 — [논문 리뷰] Same Dangerous Objective: multi-agent mediation이 safety signal을 뒤집는 방식
- type: paper
- source: http://arxiv.org/abs/2607.21518v1
- why-now: 단일 모델 safety 평가가 안전해 보여도, 다른 agent가 목표를 재표현·검열·중계하는 multi-agent 구조에서는 같은 위험 목표가 다른 조언으로 바뀔 수 있다는 실험이 나왔다.
- angle: “agent safety는 모델 한 번의 거절률이 아니라 메시지 변환 체인의 문제” — mediator agent, constraint rewriting, intent laundering, trace audit를 multi-agent runtime 보안 패턴으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, safety, alignment, agent-security]
- status: idea

### 2026-07-27 — [논문 리뷰] FedAgentKE: heterogeneous agent 사이의 경험 지식을 federated하게 진화시키기
- type: paper
- source: http://arxiv.org/abs/2607.21361v1
- why-now: agent framework가 LangGraph, AutoGen, CrewAI, MCP 기반 도구 등으로 갈라지면서 각 agent의 local memory와 workflow 경험이 고립되는 문제가 커지고 있다.
- angle: “agent memory를 개인 cache가 아니라 framework를 넘나드는 federated knowledge layer로 보기” — semantic knowledge evolution, cross-framework transfer, privacy boundary, 협업 reasoning 업데이트를 해석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, federated-learning, multi-agent, knowledge-evolution]
- status: idea

### 2026-07-27 — [논문 리뷰] ChainWatch: MCP agent의 multi-step attack을 kill chain으로 탐지하기
- type: paper
- source: http://arxiv.org/abs/2607.19432v1
- why-now: MCP 도구 호출은 개별 call만 보면 정상처럼 보여도 여러 benign action이 이어져 credential exfiltration이나 state mutation 공격으로 합성될 수 있다.
- angle: “MCP 보안은 per-tool allowlist를 넘어 sequence-level detector가 필요하다” — kill chain stage, sequential detection, audit log feature, runtime alarm을 agent gateway 설계로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [mcp, agent-security, tool-use, runtime-monitoring]
- status: idea

### 2026-07-27 — [논문 리뷰] Schema-Bound MCP Skills: 과학 장비 조작 agent에 물리 경계 붙이기
- type: paper
- source: http://arxiv.org/abs/2607.17012v1
- why-now: 연구실·공장·의료 장비처럼 물리 world에 닿는 agent는 자연어 tool call을 그대로 실행하면 안전 범위·장비 host 제약·vendor API 경계에서 위험해진다.
- angle: “LLM이 계획하고 schema가 물리적으로 가능한 행동만 통과시키는 구조” — MCP skill schema, physical bounds validation, host-process adapter, local LLM 운영을 lab automation 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [mcp, scientific-agents, safety, tool-schema]
- status: idea

### 2026-07-27 — [논문 리뷰] IteraSim RAG: CFD 설정을 multi-stage agentic RAG로 생성하기
- type: paper
- source: http://arxiv.org/abs/2607.20346v1
- why-now: RAG가 범용 QA를 넘어 OpenFOAM 같은 전문 소프트웨어의 multi-directory 설정 파일 생성과 검토 workflow로 확장되고 있다.
- angle: “domain RAG는 검색 한 번이 아니라 draft-review-repair stage를 분리한 agentic backend” — query decomposition, role-specific retrieval, self-review 분리, simulation config 검증 루프를 실무 RAG 설계로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rag, domain-agent, simulation, openfoam]
- status: idea

### 2026-07-27 — second-brain: local file intelligence를 agent OS처럼 다루기
- type: tech
- source: https://github.com/henrydaum/second-brain
- why-now: 개인 agent가 파일 시스템, 메시지, 작업 자동화를 연결하면서 cloud SaaS보다 local-first memory와 workflow boundary를 어떻게 설계할지가 중요해졌다.
- angle: “personal agent의 OS 계층은 무엇을 책임져야 하나” — local file intelligence, workflow automation, communication surface, privacy boundary를 repo architecture로 뜯어본다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [personal-agent, local-first, agent-os, github-repo]
- status: idea

### 2026-07-27 — codanna: AI coding agent를 위한 local code intelligence MCP server
- type: tech
- source: https://github.com/bartolli/codanna
- why-now: coding agent 품질은 모델보다 repo symbol graph, references, local search, context budget을 얼마나 안정적으로 공급하느냐에 크게 좌우된다.
- angle: “LSP보다 agent 친화적인 code context layer를 어떻게 설계할까” — local indexing, MCP server interface, symbol/relation retrieval, token budget 절감을 coding agent 운영 관점으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, mcp, code-intelligence, github-repo]
- status: idea

### 2026-07-27 — workshop: coding agent가 스스로 eval을 만들고 실행하게 하는 workflow
- type: tech
- source: https://github.com/raindrop-ai/workshop
- why-now: coding agent 도입 팀은 “작동하는 것처럼 보이는 PR”이 아니라 repo별 regression eval을 agent가 작성·실행·갱신하는 루프가 필요해지고 있다.
- angle: “agent에게 코드만 쓰게 하지 말고 평가 하네스도 같이 만들게 하자” — eval authoring, run loop, failure triage, CI integration을 developer AI workflow로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, eval, ci, github-repo]
- status: idea

### 2026-07-27 — [논문 리뷰] Tencent WorkBuddy Bench: contamination-resistant coding-agent benchmark
- type: paper
- source: https://arxiv.org/abs/2607.20911
- why-now: coding agent 성능 비교가 SWE-bench류 단일 축에 과하게 묶이면서, task contamination과 subset별 scoring 차이를 명시적으로 통제한 multi-domain benchmark 수요가 커졌다.
- angle: “coding agent benchmark는 평균 점수보다 task construction과 scoring instrument가 중요하다” — contamination-resistant task 생성, CodeBuddy/Claude Code harness, subset별 metric 분리를 평가 운영법으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, benchmark, eval, contamination]
- status: idea

### 2026-07-27 — [논문 리뷰] LLMs Get Lost in Evolving User Intent: 협업 agent가 바뀌는 의도를 놓치는 이유
- type: paper
- source: https://arxiv.org/abs/2607.20734
- why-now: 개인 비서·coding assistant·업무 agent는 한 번의 instruction이 아니라 사용자의 수정·선호·제약 변경을 따라가야 하는데, 정적 벤치마크는 이 실패를 잘 드러내지 못한다.
- angle: “agent eval은 최초 요청 이해가 아니라 intent drift tracking을 봐야 한다” — evolving-intent task 설계, annotation 방식, memory/update policy, clarification trigger를 personal agent 운영 체크리스트로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-eval, intent-tracking, memory, personal-agent]
- status: idea

### 2026-07-27 — [논문 리뷰] Sample-Efficient Learning from Agent Experience: 시행착오를 적은 샘플로 증류하기
- type: paper
- source: https://arxiv.org/abs/2607.21051
- why-now: real-world agent 학습은 환경 실행, human feedback, 실험 비용이 비싸서 무작정 rollout을 늘릴 수 없고, 적은 경험을 재사용하는 post-training recipe가 중요해졌다.
- angle: “agent 경험은 로그 저장이 아니라 in-context learning과 distillation 사이의 데이터 자산” — trial-and-error trace, experience distillation, classical RL 대비 sample efficiency, eval replay를 설명한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-learning, distillation, reinforcement-learning, experience]
- status: idea

### 2026-07-27 — [논문 리뷰] Multi-Turn On-Policy Distillation with Prefix Replay: agent distillation 비용 줄이기
- type: paper
- source: https://arxiv.org/abs/2607.04763
- why-now: multi-turn tool-use agent를 teacher-student 방식으로 증류하려면 매 turn 온라인 rollout 비용이 커지고, prefix replay처럼 interaction history를 재사용하는 기법이 실용적 관심사로 떠올랐다.
- angle: “agent distillation의 병목은 모델 forward가 아니라 환경 상호작용 history” — prefix replay, multi-turn imitation, off-policy risk, tool trajectory regression 관점으로 정리한다.
- difficulty: high
- freshness: 4
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-distillation, tool-use, post-training, replay]
- status: idea

### 2026-07-27 — [논문 리뷰] Streaming Multi-Agent Autoregressive Diffusion: world state register로 multi-agent scene 일관성 유지하기
- type: paper
- source: https://arxiv.org/abs/2607.21594
- why-now: embodied/video world model이 단일 관찰 생성에서 여러 agent·view가 공유하는 persistent world state 생성 문제로 넘어가고 있다.
- angle: “multi-agent world model에는 observation stream 밖의 공유 상태 레지스터가 필요하다” — autoregressive diffusion, world state register, agent별 observation consistency, simulation/eval harness 연결점을 해석한다.
- difficulty: high
- freshness: 5
- practicality: 3
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [world-model, multi-agent, diffusion, embodied-ai]
- status: idea

### 2026-07-27 — remnic: user-aware agent를 위한 scoped memory와 provenance layer
- type: tech
- source: https://github.com/joshuaswarren/remnic
- why-now: 개인화 agent에서 memory는 “많이 저장하기”보다 scope, provenance, correction, retrieval quality, MCP/HTTP access boundary를 어떻게 노출하느냐가 핵심 설계 문제가 됐다.
- angle: “agent memory를 vector DB가 아니라 user-aware contract로 설계하기” — scoped memory, provenance, correction workflow, eval hook, MCP/HTTP 인터페이스를 repo architecture로 분석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-memory, personal-agent, provenance, github-repo]
- status: idea

### 2026-07-27 — skUnit: MCP server와 agent를 테스트 가능한 AI unit으로 다루기
- type: tech
- source: https://github.com/mehrandvd/skunit
- why-now: agent stack이 IChatClient, MCP server, tool, workflow graph처럼 작은 단위로 쪼개지면서 통합 테스트 전에 “AI unit”을 재현 가능하게 검증하는 도구가 필요해졌다.
- angle: “agent QA는 end-to-end benchmark만으로 부족하다” — MCP server contract test, deterministic fixture, tool-call assertion, CI regression gate를 작은 팀의 agent testing workflow로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-eval, mcp, testing, github-repo]
- status: idea

### 2026-07-28 — [논문 리뷰] The Regression Tax: agent skill이 성능을 올리면서 망치는 지점
- type: paper
- source: https://arxiv.org/abs/2607.22520
- why-now: LLM agent에 procedural skill을 붙이는 흐름이 커졌지만, 평균 성공률 개선 뒤에 특정 작업을 악화시키는 regression cost가 숨어 있다는 문제가 최신 논문으로 정리됐다.
- angle: “skill library는 추가할수록 좋아지는 플러그인 묶음이 아니라 regression budget이 필요한 runtime dependency” — skill 선택, ablation, task별 rollback gate를 agent 운영 체크리스트로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-skills, eval, regression, tool-use]
- status: drafted
- draft: content/posts/2026-07-28-regression-tax-agent-skills.mdx

### 2026-07-28 — [논문 리뷰] TRACE-ROUTER: agentic workflow에서 LLM router를 call 단위가 아니라 trajectory 단위로 보기
- type: paper
- source: https://arxiv.org/abs/2607.22465
- why-now: enterprise agent는 여러 LLM 호출이 긴 작업 궤적을 이루는데, 기존 router는 각 호출을 독립적으로 골라 비용·품질·일관성 trade-off를 놓치기 쉽다.
- angle: “agent routing은 cheap model fallback 목록이 아니라 workflow-level control policy” — trace consistency, adaptive routing, cost-quality frontier, observability를 agent serving 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-routing, llm-serving, eval, cost-optimization]
- status: idea

### 2026-07-28 — [논문 리뷰] CausalForge: causal inference 연구 에이전트를 formal verifier와 닫힌 루프로 만들기
- type: paper
- source: https://arxiv.org/abs/2607.22511
- why-now: automated research agent가 LLM reviewer만으로 후보 정리를 검증하면 오류를 받아들이기 쉬워, formal grounding과 self-improvement loop를 결합한 연구 에이전트 설계가 주목할 만하다.
- angle: “연구 에이전트의 judge는 더 큰 LLM이 아니라 domain verifier여야 한다” — causal theorem generation, formal check, 실패 피드백, archive selection을 자동 연구 harness로 설명한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [research-agent, causal-inference, formal-verification, automation]
- status: idea

### 2026-07-28 — [논문 리뷰] DBA-Bench: production-fidelity database operations agent benchmark
- type: paper
- source: https://arxiv.org/abs/2607.22165
- why-now: DB 운영 agent는 단순 SQL 생성보다 live database, multi-turn read/write, 관측 공간 규모, 안전한 mutation 검증이 중요해졌고 이를 production fidelity로 평가하려는 benchmark가 나왔다.
- angle: “database agent 평가는 쿼리 정답보다 운영 세션 재현성이 핵심” — stateful DB environment, rollback, permission boundary, verifier metric을 backend agent QA로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [database-agent, agent-eval, benchmark, operations]
- status: idea

### 2026-07-28 — [논문 리뷰] Skill Self-Play: co-evolving skill로 LLM capability frontier 밀기
- type: paper
- source: https://arxiv.org/abs/2607.22529
- why-now: agent post-training이 정적 데이터셋에서 interaction-driven self-evolution으로 이동하면서, task diversity와 verification reliability를 동시에 잡는 skill 생성 루프가 중요해졌다.
- angle: “agent skill은 사람이 쓰는 매크로가 아니라 모델이 스스로 만든 curriculum artifact” — skill proposal, self-play, verifier 설계, skill library hygiene를 학습 파이프라인 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-skills, self-play, post-training, verification]
- status: idea

### 2026-07-28 — Agentic Root Cause Analysis: evidence-grounded reasoning으로 산업 장애 원인 찾기
- type: paper
- source: https://arxiv.org/abs/2607.22385
- why-now: RCA agent는 센서·로그·알람에서 가설을 세우고 근거를 모아야 하므로, 최종 원인 라벨보다 evidence-grounded reasoning trace가 운영 신뢰도의 핵심이 되고 있다.
- angle: “RCA agent는 이상 탐지 모델이 아니라 evidence collection workflow” — hypothesis generation, sensor evidence, tool trace, human escalation boundary를 SRE/산업 운영 관점으로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [root-cause-analysis, agent, observability, evidence]
- status: idea

### 2026-07-28 — Orca: parallel coding agent fleet를 돌리는 ADE 구조 뜯어보기
- type: tech
- source: https://github.com/stablyai/orca
- why-now: Claude Code, Codex, Cursor류 coding agent를 한 명씩 쓰는 단계를 넘어 여러 agent를 병렬로 돌리고 결과를 비교·merge하는 ADE(agent development environment) 패턴이 빠르게 커지고 있다.
- angle: “coding agent 생산성의 다음 병목은 모델이 아니라 agent fleet 운영 UX” — parallel run, workspace isolation, mobile/VPS session, subscription bring-your-own-model 구조를 repo architecture로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, ade, parallel-agents, github-repo]
- status: idea

### 2026-07-28 — Open Connector: 1000개 SaaS를 agent tool로 연결하는 auth gateway
- type: tech
- source: https://github.com/oomol-lab/open-connector
- why-now: agent가 SaaS API를 직접 조작할수록 tool discovery보다 OAuth, credential scope, MCP/HTTP/OpenAPI surface를 통합하는 auth gateway가 실무 병목이 되고 있다.
- angle: “agent tool layer의 핵심은 function schema가 아니라 인증·권한·프로토콜 브리지” — SDK/CLI/MCP/HTTP/OpenAPI 경계, token scope, audit 가능성을 agent platform 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-tools, auth, mcp, github-repo]
- status: idea

### 2026-07-29 — [논문 리뷰] Multi-Turn Long-Horizon Planning: agentic distillation으로 계획 능력 만들기
- type: paper
- source: https://arxiv.org/abs/2607.24720
- why-now: 장기 실행 agent의 성능 병목이 단일 응답 품질보다 multi-turn planning과 post-training 데이터 루프에 있다는 흐름이 강해지고 있다.
- angle: “agent planning은 프롬프트 트릭이 아니라 on-policy trajectory distillation 문제” — pretraining, single/multi-teacher distillation, planning trace 평가를 agent 학습 파이프라인으로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-planning, post-training, distillation, long-horizon]
- status: idea

### 2026-07-29 — [논문 리뷰] Eviction as Estimation: test-time memory를 고정 지연 추정 문제로 보기
- type: paper
- source: https://arxiv.org/abs/2607.24667
- why-now: bounded working memory를 가진 LLM/agent가 무엇을 버릴지 결정하는 문제가 long-context 비용과 latency를 좌우하는 핵심 운영 이슈가 됐다.
- angle: “메모리 eviction은 휴리스틱 캐시 정책이 아니라 미래 유용도 추정 문제” — fixed-lag smoothing, StreamingLLM/H2O/SnapKV 비교, agent memory tiering 정책으로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [test-time-memory, kv-cache, inference, context-engineering]
- status: idea

### 2026-07-29 — [논문 리뷰] APS-RAG: scientific facility를 위한 corrective agentic hybrid RAG
- type: paper
- source: https://arxiv.org/abs/2607.24663
- why-now: 실제 조직 지식은 문서·로그북·위키·채팅·제어 시스템 데이터가 섞여 있어 단일 검색 인덱스로 답하기 어렵고, operations-grounded RAG 평가가 필요해졌다.
- angle: “enterprise RAG의 다음 단계는 검색 정확도보다 운영 근거와 corrective loop” — hybrid retrieval, agentic correction, live operation data, facility QA benchmark를 실무 RAG 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rag, enterprise-rag, evaluation, operations]
- status: idea

### 2026-07-29 — [논문 리뷰] Agentic Permissions Policy Algebra: taint confinement로 agent 권한 격리하기
- type: paper
- source: https://arxiv.org/abs/2607.24625
- why-now: mixed-confidentiality 데이터를 처리하는 autonomous agent에서 prompt injection과 reasoning error가 권한 상승·정보 유출로 이어지는 사례가 늘고 있다.
- angle: “agent 보안은 allowlist보다 정보 흐름 algebra가 필요하다” — taint tracking, permission policy, tool boundary, declassification rule을 MCP/agent gateway 설계로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-security, permissions, taint-tracking, tool-use]
- status: idea

### 2026-07-29 — [논문 리뷰] Looping Is Not Reliability: coding agent repair loop에 typed revision contract 붙이기
- type: paper
- source: https://arxiv.org/abs/2607.24604
- why-now: generate-test-revise 루프만 반복하는 coding agent는 올바른 patch를 찾고도 상태·근거·제출 단계에서 실패할 수 있어, loop 자체보다 evidence retention과 contract가 중요해졌다.
- angle: “코딩 에이전트의 신뢰성은 반복 횟수가 아니라 상태 경계와 revision contract에서 나온다” — state-bound evidence, typed patch contract, verifier handoff를 개발 워크플로로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, code-repair, verification, workflow]
- status: idea

### 2026-07-29 — Solace Agent Mesh: event-driven multi-agent framework로 workflow와 시스템 이벤트 잇기
- type: tech
- source: https://github.com/SolaceLabs/solace-agent-mesh
- why-now: multi-agent system이 데모 챗봇을 넘어 실제 시스템 이벤트, 데이터 소스, 비동기 워크플로와 연결되면서 event-driven orchestration 패턴을 볼 필요가 있다.
- angle: “multi-agent orchestration은 graph 호출뿐 아니라 event bus 설계 문제” — agent mesh, event routing, real-world system integration, observability를 framework architecture 중심으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [multi-agent, event-driven, orchestration, framework]
- status: idea

### 2026-07-29 — nanobot: self-hosted personal AI agent framework의 최소 구성 살펴보기
- type: tech
- source: https://github.com/HKUDS/nanobot
- why-now: 개인용 agent가 WebUI, tool, memory, MCP, automation을 한 런타임에 묶는 방향으로 빠르게 확산되고 있어 self-hosted 설계 기준을 정리할 만하다.
- angle: “personal agent framework를 고를 때 봐야 할 것은 채팅 UI가 아니라 memory·tool·MCP·automation boundary” — repo 구조, 실행 루프, 권한 경계, 운영 체크리스트를 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [personal-agent, self-hosted, mcp, framework]
- status: idea

### 2026-07-29 — coder_eval: Claude Code skills·MCP·CLI를 agent가 실제로 쓰는 방식으로 테스트하기
- type: tech
- source: https://github.com/UiPath/coder_eval
- why-now: coding agent 생태계가 skills, MCP server, CLI로 확장되면서 “도구가 사람에게 동작한다”와 “agent가 안정적으로 쓴다” 사이의 검증 gap이 커지고 있다.
- angle: “agent tool QA는 unit test가 아니라 sandboxed usage suite” — YAML scenario, activation check, A/B experiment, CI gate를 coding-agent 운영법으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, mcp, eval, github-repo]
- status: idea

### 2026-07-30 — [논문 리뷰] UniMem: episodic memory와 parametric memory를 agent가 스스로 라우팅하기
- type: paper
- source: https://arxiv.org/abs/2607.26017
- why-now: 장기 실행 LLM agent에서 외부 memory는 빠르게 적응하지만 retrieval 비용과 잡음이 크고, parametric memory는 안정적이지만 task boundary가 필요하다는 trade-off가 계속 병목이 되고 있다.
- angle: “agent memory는 vector DB 하나가 아니라 plasticity/stability 라우터” — routing token, episodic-to-parametric consolidation, boundary-agnostic task stream을 memory 운영 패턴으로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, continual-learning, parametric-memory, routing]
- status: idea

### 2026-07-30 — [논문 리뷰] Desktop-Delta Bench: GUI agent가 화면 전이를 이해하는지 평가하기
- type: paper
- source: https://arxiv.org/abs/2607.26041
- why-now: computer-use agent 평가는 최종 성공률이나 단일 화면 grounding에 치우쳐 있지만, 실제 장애는 action 이후 화면 변화가 지연·가려짐·stale observation으로 잘못 해석될 때 자주 발생한다.
- angle: “GUI agent QA는 클릭 정답보다 state transition verification” — 2,013개 human-verified Linux trajectory, source tracking, progress verification, recovery loop를 desktop agent benchmark 설계로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [gui-agent, computer-use, benchmark, state-verification]
- status: drafted
- draft: content/posts/2026-07-30-desktop-delta-bench-gui-agent-transitions.mdx

### 2026-07-30 — [논문 리뷰] MemLens: agent memory를 Shapley-style value로 관리하는 시스템
- type: paper
- source: https://arxiv.org/abs/2607.25992
- why-now: memory repository가 커질수록 모든 interaction record를 똑같이 저장하는 방식은 중복·저가치 기억을 쌓고, personalized agent의 품질과 비용을 동시에 악화시킨다.
- angle: “agent memory를 first-class data object로 운영하기” — memory value evaluation, hierarchical visualization, value-aware storage, user-inspectable lifecycle을 memory observability 관점으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, observability, memory-management, personalization]
- status: idea

### 2026-07-30 — [논문 리뷰] KuTIE: Kubernetes 보안 패치 agent에 runtime topology context가 필요한 이유
- type: paper
- source: https://arxiv.org/abs/2607.25995
- why-now: LLM이 KSPM finding만 보고 Kubernetes hardening patch를 만들면 보안 규칙은 맞아도 live service dependency를 끊어 운영 장애를 만들 수 있다.
- angle: “운영 agent는 정적 취약점 설명보다 runtime blast radius를 알아야 한다” — call graph context, security patch correctness, dependency-preserving remediation을 DevOps agent QA로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [devops-agent, kubernetes, security, runtime-context]
- status: idea

### 2026-07-30 — [논문 리뷰] Pass the Baton: on-policy distillation에서 teacher handoff를 어디에 넣을까
- type: paper
- source: https://arxiv.org/abs/2607.26057
- why-now: agent/post-training에서 on-policy distillation이 중요해졌지만, student가 초반 prefix를 잘못 잡으면 이후 supervision 전체가 오염되는 prefix failure가 큰 비용으로 남는다.
- angle: “distillation도 long-horizon trajectory 복구 문제” — teacher-student continuation asymmetry, label-free handoff trigger, relay budget을 reasoning model 학습 루프 관점으로 설명한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [on-policy-distillation, reasoning, post-training, trajectory]
- status: idea

### 2026-07-30 — Kody: agent의 memory·keys·automation을 MCP host 밖에 두는 home layer
- type: tech
- source: https://github.com/kentcdodds/kody
- why-now: MCP host와 agent UI가 늘어나면서 memory, credential, automation을 특정 클라이언트 안에 묶지 않고 portable하게 관리하는 “assistant home” 패턴이 필요해졌다.
- angle: “agent state를 채팅 앱이 아니라 독립된 home layer에 둔다” — Cloudflare Workers 기반 storage, key boundary, MCP host portability, automation surface를 personal agent infra로 분석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [personal-agent, mcp, memory, github-repo]
- status: idea

### 2026-07-30 — RepoPrompt CE: macOS context engineering app과 MCP CLI로 coding agent 컨텍스트 만들기
- type: tech
- source: https://github.com/repoprompt/repoprompt-ce
- why-now: coding agent 품질은 모델보다 “어떤 파일·symbol·instruction을 넣었는가”에 크게 좌우되고, GUI 기반 context engineering과 MCP CLI를 결합한 워크플로가 실무 도구로 자리 잡고 있다.
- angle: “coding agent context는 자동 RAG만이 아니라 사람이 편집하는 artifact” — repo selection, prompt packaging, MCP CLI handoff, reviewable context bundle을 개발 워크플로 관점으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, context-engineering, mcp, github-repo]
- status: idea

### 2026-07-30 — Hyperframes: HTML을 agent-native video rendering DSL로 쓰기
- type: tech
- source: https://github.com/heygen-com/hyperframes
- why-now: agent가 문서·UI뿐 아니라 video artifact까지 생성하는 흐름에서, HTML/CSS를 renderable video scene graph로 삼는 방식은 기존 영상 편집 API보다 agent-friendly한 인터페이스가 될 수 있다.
- angle: “agent용 미디어 생성 도구는 자연어 API보다 inspectable markup이 낫다” — HTML 기반 scene composition, deterministic rendering, reviewable artifact workflow를 agent content pipeline 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-tools, video-generation, html, github-repo]
- status: idea

### 2026-07-31 — [논문 리뷰] MemSecBench: agent memory poisoning을 write-execute-forget lifecycle로 평가하기
- type: paper
- source: https://arxiv.org/abs/2607.27080
- why-now: 장기 memory를 가진 agent가 늘면서 악성 지시가 저장되고, 나중에 recall되어 실제 action에 영향을 주는 persistence-to-consequence 공격면이 중요해졌다.
- angle: “memory 보안은 저장 차단이 아니라 lifecycle QA” — Write-Execute-Forget protocol, memory backend 비교, selective repair를 agent memory regression suite로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, security, benchmark, poisoning]
- status: idea

### 2026-07-31 — [논문 리뷰] InferScale: 개인화 LLM serving에서 memory를 prompt가 아니라 KV cache로 주입하기
- type: paper
- source: https://arxiv.org/abs/2607.27090
- why-now: personalized agent가 사용자 memory profile과 긴 대화 이력을 매 요청 prompt에 반복 주입하면서 TTFT와 prefill 비용이 빠르게 커지고 있다.
- angle: “agent memory serving은 retrieval만이 아니라 cache layout 문제” — reusable KV state, semantic retrieval, vLLM paged cache injection, memory freshness trade-off를 production inference 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [llm-serving, kv-cache, personalization, agent-memory]
- status: idea

### 2026-07-31 — [논문 리뷰] Scores Are Not Decisions: tool acquisition을 cost-aware stopping 문제로 보기
- type: paper
- source: https://arxiv.org/abs/2607.27083
- why-now: agent tool router는 후보 도구를 잘 랭킹해도 “몇 개까지 가져올지”를 결정하지 못해 비용, context load, privacy exposure를 키우기 쉽다.
- angle: “tool selection은 top-k retrieval이 아니라 marginal utility decision” — cost-aware stopping, payoff-weighted error, tool prefix policy를 agent harness의 runtime budget gate로 설명한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [tool-use, agent-router, cost-control, decision-focused-learning]
- status: idea

### 2026-07-31 — [논문 리뷰] SpecFirst: coding agent가 구현 전에 행동 명세를 먼저 뽑아야 하는 이유
- type: paper
- source: https://arxiv.org/abs/2607.27167
- why-now: 기존 codebase 수정은 잘하는 agent도 scratch program synthesis에서는 문서 해석, oracle probing, 구현을 한 번에 섞다가 초기 오해를 끝까지 끌고 가는 문제가 크다.
- angle: “coding agent harness에 requirements engineering 단계를 넣자” — behavioral specification elicitation, execute-only oracle probing, context drift 방지를 source-free synthesis workflow로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, program-synthesis, specification, eval]
- status: idea

### 2026-07-31 — [논문 리뷰] Setoka: personalized agent가 사용자 이해를 어디까지 했는지 계층적으로 평가하기
- type: paper
- source: https://arxiv.org/abs/2607.27056
- why-now: personalized agent 평가는 명시적으로 말한 사실 retrieval에 머무르는 경우가 많지만, 실제 assistant 품질은 행동 패턴과 성향 같은 추상 user model에 좌우된다.
- angle: “agent memory eval을 fact lookup에서 user-model hierarchy로 올리기” — semantic/episodic memory, behavior pattern, personality trait 평가를 privacy-preserving benchmark 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [personalized-agent, memory, benchmark, user-modeling]
- status: idea

### 2026-07-31 — [논문 리뷰] Can AI agents conduct open-ended AI research? shadow evaluation으로 R&D 자동화 과장 걷어내기
- type: paper
- source: https://arxiv.org/abs/2607.27191
- why-now: AI R&D 자동화 논의가 커지는 반면, 기존 평가는 좁은 verifiable task 또는 불안정한 peer review에 기대 open-ended research 능력을 제대로 재기 어렵다.
- angle: “research agent 평가는 benchmark score보다 원저자 shadow evaluation” — 6일 compute budget, engineering completion과 연구 기여 실패의 차이, 평가 프로토콜을 research-agent QA 관점으로 본다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [research-agent, evaluation, benchmark, ai-rnd]
- status: idea

### 2026-07-31 — Doberman-Core: agent guardrail을 prompt injection 방어에서 runtime policy enforcement까지 확장하기
- type: tech
- source: https://github.com/fu351/Doberman-Core
- why-now: coding agent와 MCP tool이 shell, network, credential에 가까워질수록 사전 prompt hardening만으로는 부족하고 tool-use permission, audit log, runtime monitor가 필요해진다.
- angle: “agent 보안은 LLM wrapper가 아니라 policy enforcement layer” — guardrail, prompt-injection defense, tool permission, monitoring/audit log를 agent deployment checklist로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-security, guardrails, runtime-policy, github-repo]
- status: idea

### 2026-07-31 — android-agent: 실제 모바일 기기를 MCP tool surface로 노출하는 agent framework
- type: tech
- source: https://github.com/ghost-in-the-droid/android-agent
- why-now: computer-use agent가 browser를 넘어 real phone, simulator, ADB/WebDriverAgent 기반 모바일 작업으로 확장되면서 mobile tool boundary와 observation loop가 중요해졌다.
- angle: “mobile agent는 screenshot QA보다 device-control harness 설계” — ADB/iPhone automation, MCP tools, Python skills, dashboard, local/cloud LLM swap을 mobile agent runtime 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mobile-agent, mcp, computer-use, github-repo]
- status: idea

### 2026-08-01 — [논문 리뷰] OSReward: computer-use agent reward model 평가 표준화
- type: paper
- source: http://arxiv.org/abs/2607.28609v1
- why-now: computer-use agent가 desktop/browser/mobile 환경으로 확장되면서 trajectory가 task instruction을 실제로 만족했는지 판단하는 reward model 자체의 표준 평가가 필요해졌다.
- angle: “agent benchmark는 실행 성공률뿐 아니라 reward model/verifier의 신뢰도까지 같이 봐야 한다”는 관점으로 cross-platform CUA 평가, trajectory evidence, verifier drift를 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [computer-use-agent, eval, reward-model, benchmark]
- status: idea

### 2026-08-01 — [논문 리뷰] ORCA-bench: oncall RCA agent는 코딩 벤치마크와 무엇이 다른가
- type: paper
- source: http://arxiv.org/abs/2607.28545v1
- why-now: 운영 장애 대응은 코드 패치보다 로그·메트릭·트레이스·소스코드가 섞인 noisy evidence에서 원인을 좁히는 능력이 중요해지고 있다.
- angle: “SWE-bench를 잘하는 agent가 oncall을 잘한다는 보장은 없다” — observability context, evidence triage, remediation boundary를 agent 평가 harness로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, oncall, observability, eval]
- status: published
- draft: content/posts/2026-08-01-orca-bench-oncall-rca-agents.mdx

### 2026-08-01 — [논문 리뷰] Change2Task: repo 변경 이력을 executable coding-agent task로 바꾸기
- type: paper
- source: http://arxiv.org/abs/2607.28591v1
- why-now: coding agent 학습·평가에는 실제 repo 상태, 명세, 테스트 환경이 결합된 executable task 공급이 병목인데, 변경 이력을 task로 변환하는 접근이 구체화됐다.
- angle: “PR history는 coding-agent 데이터 공장이다” — task extraction, environment reconstruction, verifier 생성, contamination 관리를 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, benchmark, data, swe]
- status: idea

### 2026-08-01 — [논문 리뷰] AISPA: system prompt를 사용자 중심으로 감사하기
- type: paper
- source: http://arxiv.org/abs/2607.28617v1
- why-now: 상용 LLM 앱의 system prompt는 제품 행동을 좌우하지만 사용자에게 불투명하고, policy·권한·데이터 사용 경계를 검증하기 어렵다.
- angle: “system prompt도 배포 아티팩트라면 감사 가능한 configuration이어야 한다” — prompt disclosure 없이도 사용자 관점 risk를 점검하는 audit harness로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [system-prompt, audit, alignment, llm-app]
- status: idea

### 2026-08-01 — [논문 리뷰] MANTA: self-evolving multi-agent system의 topology 적응
- type: paper
- source: http://arxiv.org/abs/2607.28527v1
- why-now: multi-agent system이 단순 역할 분담을 넘어 agent 간 연결 구조와 정보 흐름 자체를 task에 맞게 바꾸는 방향으로 발전하고 있다.
- angle: “multi-agent 성능은 agent 수보다 communication topology 설계 문제” — topology adaptation, specialization, validation edge를 orchestration 패턴으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, orchestration, topology, self-evolving]
- status: idea

### 2026-08-01 — [논문 리뷰] DualG-MRAG: multimodal RAG에서 macro reasoning과 micro matching 분리하기
- type: paper
- source: http://arxiv.org/abs/2607.28580v1
- why-now: multimodal RAG가 multi-hop reasoning으로 확장되면서 이미지/문서 단위 매칭과 전체 추론 계획을 한 루프에서 처리하는 한계가 드러난다.
- angle: “RAG pipeline에서 retrieval matching과 reasoning control plane을 분리해야 하는 이유”를 multimodal agentic RAG 설계로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multimodal-rag, rag, reasoning, retrieval]
- status: idea

### 2026-08-01 — deja-vu: coding agent 세션 기록을 local memory로 재활용하기
- type: tech
- source: https://github.com/vshulcz/deja-vu
- why-now: 여러 coding agent harness를 쓰는 팀에서 과거 세션·해결 흔적이 각 도구 폴더에 흩어지며, 이를 local-first memory로 재사용하려는 수요가 커지고 있다.
- angle: “agent memory는 vector DB부터 시작할 필요가 없다” — 세션 로그 indexing, harness cross-compatibility, cold-start context injection을 개발 워크플로 관점으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, memory, local-first, developer-tools]
- status: idea

### 2026-08-01 — pydantic-ai-backend: agent 파일·샌드박스 backend를 typed contract로 분리하기
- type: tech
- source: https://github.com/vstorm-co/pydantic-ai-backend
- why-now: agent가 파일 시스템과 실행 환경을 직접 만질수록 storage backend, Docker sandbox, permission preset을 framework 바깥에서 테스트 가능하게 관리할 필요가 커진다.
- angle: “agent tool은 함수 하나가 아니라 권한이 붙은 backend contract” — in-memory/local/containerized storage, sandboxed execution, permission preset을 Pydantic AI workflow에 연결한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [pydantic-ai, sandbox, agent-tools, permissions]
- status: idea

### 2026-08-02 — [논문 리뷰] ReToken: long visual context를 KV cache retrieval 문제로 바꾸기
- type: paper
- source: https://arxiv.org/abs/2607.28627v1
- why-now: long-video·multi-image VLM에서 모든 visual token을 계속 context에 넣는 방식은 GPU memory와 latency가 병목이 되고, query-relevant token selection이 실무 inference 비용을 좌우한다.
- angle: “멀티모달 RAG도 결국 cache-aware retrieval이다” — learnable retrieval token, pre-filled visual KV cache, sparse visual token selection, long-video transfer를 agentic multimodal serving 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multimodal, retrieval, kv-cache, long-context]
- status: idea

### 2026-08-02 — [논문 리뷰] AskChem: 문서 검색을 provenance-carrying claim retrieval로 바꾸기
- type: paper
- source: https://arxiv.org/abs/2607.28618v1
- why-now: 연구 agent가 논문 목록을 반환하는 수준을 넘어, 여러 논문에 흩어진 주장과 근거 문장을 조립해 답해야 하는 literature synthesis 수요가 커지고 있다.
- angle: “RAG의 retrieval unit은 문서가 아니라 검증 가능한 claim일 수 있다” — atomic claim extraction, DOI/source quote grounding, cross-paper answer assembly를 research-agent evidence layer로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [research-agent, rag, provenance, literature-search]
- status: idea

### 2026-08-02 — [논문 리뷰] Beacon: visual reasoning agent가 tool을 언제 써야 하는지 배우기
- type: paper
- source: https://arxiv.org/abs/2607.28595v1
- why-now: multimodal agent가 OCR, detection, crop, external vision tool을 무조건 많이 쓰면 비용만 커지고, 안 쓰면 복잡한 visual task에서 실패한다.
- angle: “tool-use의 핵심은 도구 보유가 아니라 invocation policy” — mode adaptiveness, tool effect 측정, 불필요한 tool call 억제, visual reasoning budget gate를 computer-use agent 설계로 연결한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [visual-agent, tool-use, multimodal, reasoning]
- status: idea

### 2026-08-02 — [논문 리뷰] Local CUA Inference-Time Scaling: 작은 computer-use agent에서 compute를 어디에 써야 하나
- type: paper
- source: https://arxiv.org/abs/2607.28573v1
- why-now: privacy와 비용 때문에 local computer-use agent를 돌리려는 수요가 커졌지만, frontier model식 test-time scaling을 그대로 적용하기에는 hardware budget이 빡빡하다.
- angle: “local agent의 성능 향상은 무작정 더 생각하기가 아니라 compute allocation 문제” — contextual/temporal/structural/parallel scaling failure mode와 latency-quality trade-off를 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [computer-use-agent, inference-time-scaling, local-llm, eval]
- status: idea

### 2026-08-02 — [논문 리뷰] Frontis-MA1: AI4AI agent를 MLE 환경에서 recursive self-improvement로 훈련하기
- type: paper
- source: https://arxiv.org/abs/2607.28568v1
- why-now: AI가 AI 시스템을 개선하는 AI4AI 논의가 커지지만, 실제로는 검증 가능한 MLE task environment와 operator-level post-training loop가 부족했다.
- angle: “recursive self-improvement를 말로 하지 말고 harness로 쪼개자” — OpenMLE-Gym/RL/Evo, program-evolution operator, long-horizon search를 research/coding agent post-training pipeline으로 분석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [ai4ai, mle-agent, post-training, recursive-self-improvement]
- status: idea

### 2026-08-02 — [논문 리뷰] PAIChecker: SWE-bench류 benchmark의 PR-Issue misalignment 잡기
- type: paper
- source: https://arxiv.org/abs/2607.28587v1
- why-now: coding agent 평가가 SWE-bench류 task에 크게 의존하는데, PR과 issue가 어긋난 task는 agent 성능 숫자와 실제 문제 해결 능력을 동시에 왜곡한다.
- angle: “benchmark도 data quality pipeline이 필요하다” — PR-issue alignment check, oracle 신뢰도, executable task curation을 coding-agent eval 운영 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, benchmark, swe-bench, data-quality]
- status: idea

### 2026-08-02 — osaurus: macOS-native agent harness에 memory·execution·audit를 묶기
- type: tech
- source: https://github.com/osaurus-ai/osaurus
- why-now: desktop agent가 terminal·files·browser·local context를 직접 다루기 시작하면서, macOS 안에서 model-agnostic 실행·지속 memory·audit trail을 묶는 harness 요구가 커졌다.
- angle: “personal agent runtime은 앱이 아니라 local control plane” — native macOS surface, persistent memory, autonomous execution, cryptographic/audit boundary를 개인 agent infra 설계로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [desktop-agent, macos, memory, agent-runtime]
- status: idea

### 2026-08-02 — roam-code: local code graph와 MCP로 coding agent context를 구조화하기
- type: tech
- source: https://github.com/Cranot/roam-code
- why-now: coding agent가 큰 repo에서 grep과 semantic search만으로 symbol relationship을 추적하면 context budget을 빨리 태우고, 반복 탐색 비용이 커진다.
- angle: “코딩 에이전트의 코드 지능은 local graph server로 분리할 수 있다” — SQLite code graph, 다언어 indexing, MCP tool surface, symbol/relation query를 LSP+RAG 대안으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, code-intelligence, mcp, local-graph]
- status: idea

### 2026-08-03 — [논문 리뷰] AskChem: claim-centered retrieval로 과학 문헌 synthesis 만들기
- type: paper
- source: https://arxiv.org/abs/2607.28618v1
- why-now: 연구 에이전트가 논문 리스트를 받는 수준을 넘어 provenance가 붙은 claim 단위 evidence를 조립해야 하는 흐름이 강해지고 있다.
- angle: “research RAG의 검색 단위는 paper chunk가 아니라 검증 가능한 claim” — claim extraction, provenance, cross-paper synthesis, verifier boundary를 연구 에이전트 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [research-agent, rag, evidence, literature-synthesis]
- status: idea

### 2026-08-03 — [논문 리뷰] GLM-RAG: Graph Language Model을 retriever로 쓰는 GraphRAG
- type: paper
- source: https://arxiv.org/abs/2607.28397v1
- why-now: GraphRAG가 유행하지만 graph topology와 semantic representation을 어떻게 같이 retrieval score에 넣을지에 대한 구현 기준은 아직 흔들린다.
- angle: “GraphRAG의 핵심은 그래프를 만들었다가 아니라 그래프 언어 모델로 어떤 edge/path를 읽을지 정하는 것” — GLM retriever, multi-hop reasoning, knowledge graph QA 운영 포인트를 다룬다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [graphrag, retrieval, graph-language-model, rag]
- status: idea

### 2026-08-03 — [논문 리뷰] CoMem: LLM depth를 이용한 unbounded-context memory 설계
- type: paper
- source: https://arxiv.org/abs/2607.28263v1
- why-now: long-context 비용이 계속 커지면서 모든 토큰을 끝까지 forward하는 대신 중간 layer state를 memory처럼 재사용하는 접근이 주목할 만하다.
- angle: “context memory는 텍스트 chunk 검색만이 아니라 residual state cache일 수 있다” — layer별 역할 분리, fixed retrieval budget, KV cache와 다른 memory/read compute trade-off를 inference 관점으로 설명한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [long-context, memory, inference, architecture]
- status: idea

### 2026-08-03 — [논문 리뷰] TCA-SIR: scientific inspiration retrieval을 target-conditioned abstraction으로 보기
- type: paper
- source: https://arxiv.org/abs/2607.28498v1
- why-now: 연구 에이전트가 관련 논문 검색을 넘어 “현재 목표에 유용한 추상 아이디어”를 찾아야 하는데, 단순 semantic similarity는 이 목적에 약하다.
- angle: “research agent의 retrieval은 유사 논문 찾기가 아니라 목표 조건부 abstraction mining” — target conditioning, inspiration evidence, novelty/utility 평가를 논문 탐색 에이전트로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [research-agent, retrieval, scientific-discovery, abstraction]
- status: idea

### 2026-08-03 — [논문 리뷰] MixFrag: fragility-guided mixed-precision quantization
- type: paper
- source: https://arxiv.org/abs/2607.28589v1
- why-now: 모델 압축은 평균 sensitivity만 보면 layer별 취약 구간을 놓치기 쉽고, edge/serving 환경에서 정확도 붕괴를 줄이는 mixed-precision 정책이 중요해졌다.
- angle: “양자화는 몇 bit로 줄일지가 아니라 어떤 부분이 부서지기 쉬운지 찾는 문제” — fragility metric, mixed precision assignment, serving QA와 rollback gate를 추론 최적화 글로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [quantization, inference, mixed-precision, model-compression]
- status: idea

### 2026-08-03 — AWS CLI Agent Orchestrator: 여러 coding CLI agent를 tmux 격리 세션으로 조율하기
- type: tech
- source: https://github.com/awslabs/cli-agent-orchestrator
- why-now: Claude Code, Codex, Kiro처럼 CLI 기반 coding agent가 늘면서 한 작업을 여러 격리 세션에 나눠 실행하고 결과를 비교·병합하는 orchestration 수요가 생겼다.
- angle: “multi-agent coding은 프레임워크 API보다 workspace isolation과 session control이 먼저” — tmux session, 역할 분담, 결과 수집, 실패 격리를 개발자 workflow 관점으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, multi-agent, orchestration, cli]
- status: idea

### 2026-08-03 — Serena: semantic retrieval과 editing을 MCP toolkit으로 제공하는 coding agent IDE
- type: tech
- source: https://github.com/oraios/serena
- why-now: 코딩 에이전트가 repo 전체를 텍스트로 훑는 방식은 토큰·정확도 모두 한계가 있어, MCP 기반 semantic code retrieval/editing layer가 실무 핵심 도구로 올라오고 있다.
- angle: “agent용 IDE는 화면이 아니라 symbol-aware tool surface” — semantic retrieval, safe editing, MCP contract, 기존 CLI agent와 붙이는 방식을 code-intelligence layer로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, mcp, code-intelligence, developer-tools]
- status: idea

### 2026-08-03 — OpenLIT: OpenTelemetry-native LLM observability를 agent eval과 guardrail에 묶기
- type: tech
- source: https://github.com/openlit/openlit
- why-now: agent 앱 운영은 prompt 품질보다 trace, cost, eval, guardrail, GPU/LLM telemetry를 한 관측 모델에 묶는 일이 점점 중요해지고 있다.
- angle: “agent observability는 로그 수집이 아니라 release gate의 입력 데이터” — OpenTelemetry span, LLM traces, eval dataset, guardrail feedback을 운영 체크리스트로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-observability, eval, opentelemetry, guardrails]
- status: idea

### 2026-08-03 — [논문 리뷰] MemTxn: agent memory update에 transaction boundary 붙이기
- type: paper
- source: http://arxiv.org/abs/2607.27834v1
- why-now: 장기 실행 agent가 memory를 계속 갱신할수록 partial write, stale source, 잘못된 rollback이 실제 품질·안전 문제로 이어진다.
- angle: “agent memory도 DB처럼 commit/rollback boundary가 필요하다” — source-supported update, complete-state recovery, audit 가능한 memory transaction을 personal/coding agent 운영 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, transaction, recovery, audit]
- status: idea

### 2026-08-03 — [논문 리뷰] ChronoMem: LLM agent memory를 version control과 semantic rollback으로 관리하기
- type: paper
- source: http://arxiv.org/abs/2607.27773v1
- why-now: agent memory가 단순 append-only log에서 사용자의 수정·삭제·시간 이동을 반영해야 하는 상태 저장소로 진화하고 있다.
- angle: “메모리는 벡터 검색보다 versioned state management 문제” — semantic diff, rollback, memory provenance, regression replay를 long-horizon assistant 설계로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, version-control, rollback, provenance]
- status: idea

### 2026-08-03 — [논문 리뷰] SWE-NFI: coding agent를 기능 구현이 아니라 non-functional improvement로 평가하기
- type: paper
- source: http://arxiv.org/abs/2607.27409v1
- why-now: 실제 개발 업무에는 성능, 안정성, 리팩터링, 보안 같은 non-functional improvement가 많지만 SWE-bench류 평가는 기능 버그 수정에 치우쳐 있다.
- angle: “코딩 에이전트 평가는 pass/fail 테스트뿐 아니라 품질 속성 개선을 봐야 한다” — NFI task curation, verifier, metric design을 developer-agent QA로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, benchmark, software-quality, eval]
- status: idea

### 2026-08-03 — [논문 리뷰] Agent Harness Distillation: multi-agent harness를 inference-time artifact로 추출하기
- type: paper
- source: http://arxiv.org/abs/2607.28147v1
- why-now: agent 성능이 모델만이 아니라 prompt, tool, role, routing이 합쳐진 harness에 크게 의존하면서 harness 자체를 공격·복제·증류하는 문제가 생겼다.
- angle: “agent IP와 보안 경계는 모델 weight가 아니라 harness configuration에도 있다” — inference-time harness extraction, role/tool leakage, 방어 가능한 runtime boundary를 분석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, harness, security, inference]
- status: idea

### 2026-08-03 — [논문 리뷰] OmegaUse-OfficeVal: 장기 office-suite task로 computer-use agent 평가하기
- type: paper
- source: http://arxiv.org/abs/2607.27155v1
- why-now: browser/desktop agent가 실제 지식노동 workflow로 들어가려면 문서·스프레드시트·메일류 장기 작업을 경제적 가치와 함께 평가해야 한다.
- angle: “computer-use agent benchmark는 클릭 성공률이 아니라 office workflow의 가치·시간·오류 비용을 봐야 한다” — long-horizon task, economic grounding, verifier 설계를 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [computer-use-agent, office, benchmark, eval]
- status: idea

### 2026-08-03 — automagik genie: PR 생성 전 인터뷰·계획·parallel worktree review를 묶는 coding agent CLI
- type: tech
- source: https://github.com/automagik-dev/genie
- why-now: “바로 코드 쓰는 agent”보다 요구사항 인터뷰, 계획 검토, 격리 worktree 실행, 자체 리뷰를 묶은 개발 워크플로가 실무형 패턴으로 떠오르고 있다.
- angle: “coding agent UX의 핵심은 생성 버튼이 아니라 spec→plan→parallel execution→review contract” — CLI flow, worktree isolation, review loop를 개발팀 도입 체크리스트로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, cli, worktree, review]
- status: idea

### 2026-08-03 — amux: 병렬 Claude Code·Codex·Gemini 세션을 운영하는 open-source control plane
- type: tech
- source: https://github.com/mixpeek/amux
- why-now: coding agent를 한 세션씩 쓰는 단계를 넘어 여러 agent run을 동시에 띄우고 모니터링·재시작·비교하는 운영 수요가 커지고 있다.
- angle: “agent fleet 운영은 채팅 UX가 아니라 control plane 문제” — session orchestration, dashboard, failure recovery, 비용·결과 비교를 coding-agent 운영 아키텍처로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, control-plane, orchestration, github-repo]
- status: idea

### 2026-08-03 — docmancer: Claude Code·Codex·Cursor가 남긴 memory/rules를 재사용하는 agent context layer
- type: tech
- source: https://github.com/docmancer/docmancer
- why-now: 여러 coding agent가 각자 만든 rules, instructions, session memory가 로컬에 흩어지면서 tool 간 context portability가 실제 병목이 되고 있다.
- angle: “agent context는 repo 파일뿐 아니라 agent들이 남긴 운영 지식까지 포함한다” — local indexing, memory portability, instruction reuse, privacy boundary를 developer workflow로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, memory, context-engineering, developer-tools]
- status: idea

### 2026-08-04 — [논문 리뷰] TokTier: agentic LLM serving에서 tokenization state를 캐시하기
- type: paper
- source: http://arxiv.org/abs/2607.29678v1
- why-now: 코딩 에이전트처럼 긴 transcript에 작은 tool result를 계속 붙여 재호출하는 워크로드에서는 KV cache뿐 아니라 재토큰화 비용도 눈에 띄는 병목이 된다.
- angle: “agent serving 최적화는 GPU KV cache만이 아니라 tokenizer front-end state까지 포함한다” — exact stateful tokenization, append-heavy transcript, latency/CPU budget을 serving architecture 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-serving, tokenization, inference, coding-agent]
- status: idea

### 2026-08-04 — [논문 리뷰] AgentHPOBench: LLM agent를 sequential hyperparameter optimizer로 평가하기
- type: paper
- source: http://arxiv.org/abs/2607.29626v1
- why-now: 과학·ML 자동화 agent는 단발 코드 생성보다 실험을 반복하며 다음 설정을 고르는 sequential decision 능력이 중요해지고 있다.
- angle: “AI 연구 에이전트 평가는 정답 코드가 아니라 실험 예산 안에서 어떤 탐색 정책을 쓰는지 봐야 한다” — HPO trajectory, budget-aware exploration, regret/quality metric을 agent eval harness로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [scientific-agent, hpo, benchmark, eval]
- status: idea

### 2026-08-04 — [논문 리뷰] Zero-Mem: LLM agent memory operation의 token overhead 없애기
- type: paper
- source: http://arxiv.org/abs/2607.29377v1
- why-now: 장기 대화·작업 agent에서 memory read/write를 별도 LLM call로 처리하면 품질보다 운영비와 지연이 먼저 한계가 된다.
- angle: “agent memory는 더 많은 요약 토큰이 아니라 zero-token operation으로 runtime에 붙어야 할 수 있다” — memory operation placement, token budget, latency-quality trade-off를 실무 memory system 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, long-horizon, token-budget, runtime]
- status: idea

### 2026-08-04 — [논문 리뷰] ECLoop: coding agent의 premature commitment를 막는 evidence-conditioned execution
- type: paper
- source: http://arxiv.org/abs/2607.28815v1
- why-now: 코딩 에이전트가 repo 근거를 충분히 보지 않고 바로 수정하는 실패가 실제 PR 품질과 리뷰 비용을 키우고 있다.
- angle: “코딩 agent는 edit 권한을 바로 주기보다 evidence threshold를 넘었을 때만 실행하게 해야 한다” — evidence-conditioned gate, 탐색→수정 phase boundary, audit 가능한 실행 레이어를 개발 워크플로로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, evidence, execution-gate, software-engineering]
- status: idea

### 2026-08-04 — [논문 리뷰] SpecBox: MCP sandbox scheduling으로 agent serving latency 줄이기
- type: paper
- source: http://arxiv.org/abs/2607.23933v1
- why-now: MCP 기반 tool 실행이 늘수록 sandbox cold start와 resource scheduling이 agent 응답 지연의 load-bearing component가 된다.
- angle: “tool-use agent 성능은 모델 추론뿐 아니라 sandbox를 언제 미리 띄우고 어떻게 회수하는지에 달려 있다” — speculative sandbox scheduling, utilization-latency trade-off, MCP runtime 운영법을 다룬다.
- difficulty: high
- freshness: 4
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [mcp, sandbox, agent-serving, systems]
- status: idea

### 2026-08-04 — [논문 리뷰] VITAL-RAG: coding agent context allocation을 invariance race로 보기
- type: paper
- source: http://arxiv.org/abs/2607.26937v1
- why-now: repo 전체를 대상으로 한 coding-agent RAG는 무엇을 넣고 무엇을 버릴지 결정하는 context allocation 문제가 병목이다.
- angle: “코드 RAG는 top-k retrieval이 아니라 evidence 후보들이 context slot을 두고 경쟁하는 allocation 문제” — fragment invariance, context budget, patch correctness regression을 coding agent 운영 관점으로 설명한다.
- difficulty: high
- freshness: 4
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, rag, context-allocation, retrieval]
- status: idea

### 2026-08-04 — HKUDS nanobot: self-hosted personal agent framework의 memory·MCP·multi-agent 구조
- type: tech
- source: https://github.com/HKUDS/nanobot
- why-now: 개인용·팀용 agent를 SaaS 챗봇이 아니라 self-hosted runtime으로 운영하려는 흐름에서 memory, MCP, multi-agent, WebUI가 한 repo에 묶인 사례가 빠르게 커지고 있다.
- angle: “personal agent framework를 고를 때는 모델 연결보다 memory boundary, tool surface, deployment ownership을 먼저 보자” — nanobot의 구성요소를 production assistant checklist로 뜯어본다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-framework, self-hosted, mcp, memory]
- status: idea

### 2026-08-04 — katanemo Plano: agentic app을 위한 AI-native proxy/data plane 설계
- type: tech
- source: https://github.com/katanemo/plano
- why-now: agent 앱이 여러 LLM, tool, policy, observability layer를 거치면서 application code 바깥의 proxy/data plane이 runtime 아키텍처 핵심으로 올라오고 있다.
- angle: “agent infra는 SDK 안쪽 코드가 아니라 routing·observability·policy를 맡는 data plane으로 분리될 수 있다” — smart LLM routing, telemetry, agent orchestration boundary를 platform engineering 관점으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-infra, llm-routing, observability, proxy]
- status: idea

### 2026-08-05 — [논문 리뷰] Real-Time Detection and Repair: LLM agent 실패를 실행 중 고치기
- type: paper
- source: http://arxiv.org/abs/2608.02464v1
- why-now: 장기 실행 agent가 loop, tool error cascade, goal drift, corrupted content 흡수 같은 mid-episode 실패를 만들 때 매 step LLM judge를 붙이는 방식은 비용이 너무 크다.
- angle: “agent QA는 사후 리포트가 아니라 runtime repair loop여야 한다” — 실패 detector, intervention trigger, cost-aware repair policy를 production agent 운영 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, failure-detection, runtime-repair, eval]
- status: idea

### 2026-08-05 — [논문 리뷰] LiveMem: long-running LLM inference에서 memory state continuity 유지하기
- type: paper
- source: http://arxiv.org/abs/2608.02515v1
- why-now: 장기 assistant와 agent가 context window를 넘어서는 상호작용 스트림을 다루면서, 단순 요약/RAG만으로는 지속적인 memory state를 보존하기 어렵다는 문제가 커지고 있다.
- angle: “agent memory는 과거 검색이 아니라 현재 실행 상태의 연속성 문제” — state continuity, context retention, inference-time memory boundary를 long-running assistant 설계로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, inference, long-running, context]
- status: idea

### 2026-08-05 — [논문 리뷰] SkillTrace: query-skill graph로 composable agent skill 찾기
- type: paper
- source: http://arxiv.org/abs/2608.02356v1
- why-now: skill library 기반 agent가 늘어나지만 개별 skill top-k 검색만으로는 복합 작업에 필요한 skill chain과 dependency를 안정적으로 찾기 어렵다.
- angle: “agent skill 검색은 파일 검색이 아니라 query와 skill 사이의 graph traversal 문제” — skill graph, composition path, retrieval failure를 harness/skills 운영법으로 연결한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-skills, retrieval, graph, orchestration]
- status: idea

### 2026-08-05 — [논문 리뷰] Diagnosing Search Behavior: long-horizon search agent 실패 모드 분석
- type: paper
- source: http://arxiv.org/abs/2608.01913v1
- why-now: deep search agent가 query를 반복하며 근거를 모아도 더 오래 검색하는 것이 항상 더 좋은 답으로 이어지는지, 어떤 탐색 실패가 생기는지 명확한 진단이 필요하다.
- angle: “research agent 평가는 최종 답변 점수보다 search trajectory diagnosis가 중요하다” — query reformulation, evidence coverage, effort-quality curve, 실패 taxonomy를 실무 평가 하네스로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [search-agent, research-agent, eval, retrieval]
- status: idea

### 2026-08-05 — [논문 리뷰] Structured Memory for Edge LMs: O(1) SSM state injection으로 persistent context 붙이기
- type: paper
- source: http://arxiv.org/abs/2608.02560v1
- why-now: RAG는 retrieved context prefill과 KV cache 증가 비용이 커서 edge/on-device language model에서는 persistent memory를 더 싸게 주입하는 구조가 중요해지고 있다.
- angle: “edge agent memory는 Transformer KV cache만의 문제가 아니라 SSM state injection 설계 공간” — corpus retrieval, persistent state, on-device latency/memory budget을 inference 최적화 관점으로 다룬다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [edge-llm, memory, ssm, inference]
- status: idea

### 2026-08-05 — SAF-MCP: agent 생태계 threat modeling과 MCP 보안 프레임워크
- type: tech
- source: https://github.com/secure-agentic-framework/saf-mcp
- why-now: MCP server와 agent tool 생태계가 커지면서 prompt injection, tool misuse, data exfiltration 같은 위협을 개별 앱이 아니라 공통 threat model로 문서화·완화할 필요가 커졌다.
- angle: “MCP 보안은 서버별 README가 아니라 재사용 가능한 threat model과 mitigation catalog가 필요하다” — SAF-MCP의 위협 분류, controls, 운영 체크리스트를 agent platform 보안 글로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp-security, agent-security, threat-modeling, github-repo]
- status: idea

### 2026-08-05 — memstack: Claude Code용 skill·memory·MCP 관리 대시보드 구조 보기
- type: tech
- source: https://github.com/cwinvestments/memstack
- why-now: coding agent가 단일 CLI를 넘어 skill library, session memory, MCP tools, multi-agent orchestration을 함께 관리해야 하는 운영 도구로 진화하고 있다.
- angle: “Claude Code 확장의 핵심은 프롬프트 조각이 아니라 skill inventory와 session memory 운영 UX” — skill framework, localhost dashboard, MCP tool management, handoff boundary를 repo introduction으로 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, claude-code, skills, memory]
- status: idea

### 2026-08-05 — model-compose: YAML 하나로 agents·RAG·MCP 서비스를 배포하는 패턴
- type: tech
- source: https://github.com/hanyeol/model-compose
- why-now: agent/RAG/MCP 서비스를 product runtime으로 올리려면 notebook 코드보다 선언형 배포, provider abstraction, local-to-cloud portability가 중요해지고 있다.
- angle: “AI 서비스 배포를 docker-compose처럼 선언형으로 만들면 무엇이 좋아지나” — YAML schema, agent/RAG pipeline composition, MCP server packaging, 운영 재현성을 platform engineering 관점으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-deployment, rag, mcp, github-repo]
- status: idea

### 2026-08-06 — [논문 리뷰] TurnSight: tool-integrated reasoning에 turn-level hindsight distillation 붙이기
- type: paper
- source: http://arxiv.org/abs/2608.04007v1
- why-now: tool-using reasoning agent 학습이 trajectory-level reward에 치우치면 어느 tool turn이 실제로 성공/실패를 만들었는지 credit assignment가 흐려진다.
- angle: “agent RL은 최종 성공 보상보다 turn-level hindsight가 중요하다” — tool call별 판단 근거, self-distillation, 실패 turn 재학습을 eval/reward pipeline 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [tool-use, reasoning, agent-rl, credit-assignment]
- status: idea

### 2026-08-06 — [논문 리뷰] PAST-Bench: personal agent의 recursive self-improvement 기반 평가
- type: paper
- source: http://arxiv.org/abs/2608.04003v1
- why-now: personal agent가 preferences, task histories, tool routines, memory를 장기간 축적하면서 “경험을 다음 행동 개선으로 바꾸는가”를 평가하는 기준이 필요해졌다.
- angle: “개인 비서 agent의 발전은 모델 업데이트가 아니라 experience→policy patch 루프다” — memory artifact, skill refinement, self-improvement benchmark를 운영 관점으로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [personal-agent, self-improvement, memory, benchmark]
- status: idea

### 2026-08-06 — [논문 리뷰] MAFIA: audited memory agent를 query-only probing으로 공격하기
- type: paper
- source: http://arxiv.org/abs/2608.03844v1
- why-now: memory-augmented agent가 감사 로그와 write gate를 갖춰도, 외부 사용자가 질의만으로 memory behavior를 탐색하고 factual injection을 유도할 수 있는 공격면이 남는다.
- angle: “memory 보안은 write API만 막는다고 끝나지 않는다” — probing, factual injection, poisoned record persistence, audit signal 한계를 agent memory threat model로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, security, probing, poisoning]
- status: idea

### 2026-08-06 — [논문 리뷰] TARL: long-term agent memory에 transaction-aware ledger 붙이기
- type: paper
- source: http://arxiv.org/abs/2608.03699v1
- why-now: 장기 agent memory는 한 번의 잘못된 update가 이후 retrieval과 reasoning을 반복적으로 왜곡하기 때문에 Write/Hold 이진 결정보다 세밀한 실행 원장이 필요하다.
- angle: “agent memory update는 CRUD가 아니라 transaction log와 rollback policy가 있는 데이터베이스 문제” — memory operation 분류, reliable ledger, recovery gate를 실무 설계로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, ledger, reliability, long-term-agent]
- status: idea

### 2026-08-06 — [논문 리뷰] SciRet: scientific RAG에서 retrieval·reranking 비용을 같이 재기
- type: paper
- source: http://arxiv.org/abs/2608.03860v1
- why-now: 과학 문헌 RAG는 정확도만 높이는 것보다 corpus scale, retriever, reranker, compute budget 사이의 trade-off를 명시적으로 봐야 실무 적용이 가능하다.
- angle: “RAG 평가는 top-k accuracy가 아니라 compute-aware retrieval budget 설계” — CORD-19 기반 실험을 통해 scientific QA pipeline의 reranking 비용/효과를 운영 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [scientific-rag, retrieval, reranking, eval]
- status: idea

### 2026-08-06 — [논문 리뷰] Test-Time Scaling in Reasoning LLMs: inference regime과 재현성 체크리스트
- type: paper
- source: http://arxiv.org/abs/2608.04001v1
- why-now: reasoning model의 test-time scaling이 단일 기법처럼 불리지만 실제로는 single trajectory, sampling, verification, search 등 서로 다른 inference regime이 섞여 평가 재현성을 흔든다.
- angle: “더 오래 생각하게 했다는 말만으로는 부족하다” — inference-time compute budget, evaluation protocol, reproducibility pitfall을 reasoning serving 운영 기준으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [reasoning, inference, test-time-scaling, eval]
- status: idea

### 2026-08-06 — Qwen Code: terminal-native coding agent를 오픈소스로 운영할 때 볼 것들
- type: tech
- source: https://github.com/QwenLM/qwen-code
- why-now: terminal coding agent가 Claude Code/Codex류 상용 도구에서 오픈소스 런타임으로도 확산되면서, repo-level editing과 tool execution을 어떻게 노출하는지가 중요해졌다.
- angle: “coding agent를 모델 데모가 아니라 로컬 개발 런타임으로 볼 때 확인할 것” — CLI UX, tool boundary, context collection, patch/review workflow를 repo introduction으로 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tool
- suggested-tags: [coding-agent, terminal, qwen, github-repo]
- status: published
- draft: content/posts/2026-08-06-qwen-code-terminal-native-coding-agent.mdx

### 2026-08-06 — Engraphis: coding agent를 위한 local-first durable memory layer
- type: tech
- source: https://github.com/Coding-Dev-Tools/engraphis
- why-now: 코딩 에이전트 세션이 길어지고 repo를 넘나들수록 매번 처음부터 context를 읽는 방식은 비용과 일관성 면에서 한계가 있다.
- angle: “coding agent memory는 chat history가 아니라 repo-aware durable context cache여야 한다” — local-first 저장, code-aware recall, 세션 간 context reuse, privacy boundary를 개발 워크플로 관점으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, memory, local-first, github-repo]
- status: idea

### 2026-08-07 — [논문 리뷰] Argus: long-horizon reasoning agent를 위한 persistent runtime
- type: paper
- source: http://arxiv.org/abs/2608.05144v1
- why-now: 장기 실행 agent가 실패 신호를 보고 pivot하거나, 현재 접근이 맞다는 근거를 축적하며 mission을 이어가는 runtime 구조가 agent 품질의 핵심 병목으로 올라왔다.
- angle: “좋은 agent는 prompt가 아니라 durable profile, bounded mission, reviewer loop를 가진 runtime이다” — Manager/Planner/Engineer/Reviewer 역할 분리와 self-evolving runtime을 production agent harness 관점으로 분석한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-runtime, long-horizon, reasoning, orchestration]
- status: idea

### 2026-08-07 — [논문 리뷰] ABSeeker: long-horizon search agent의 answer-backtracked credit assignment
- type: paper
- source: http://arxiv.org/abs/2608.05102v1
- why-now: deep research/search agent는 검색·검증·통합 step이 길어질수록 어떤 action이 최종 답에 기여했는지 학습 신호가 흐려진다.
- angle: “search agent 학습은 모든 step을 똑같이 보상하면 안 된다” — answer에서 거꾸로 evidence/action credit을 추적하는 방식과 SFT/RL 데이터 구성 포인트를 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [search-agent, credit-assignment, retrieval, agent-rl]
- status: idea

### 2026-08-07 — [논문 리뷰] Hierarchical Graph Memory: agent memory를 path 단위로 localization·rewrite하기
- type: paper
- source: http://arxiv.org/abs/2608.05095v1
- why-now: agent memory가 장기간 업데이트되면 flat graph는 노이즈와 충돌이 누적되어 retrieval quality와 reasoning reliability를 동시에 떨어뜨리기 쉽다.
- angle: “agent memory update는 노드 추가가 아니라 경로 단위 localization과 rewrite 문제” — hierarchical graph, stale fact 갱신, memory regression test를 운영 설계로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, graph-memory, retrieval, memory-update]
- status: idea

### 2026-08-07 — [논문 리뷰] State2State: environment-derived mid-training으로 agent 데이터 병목 줄이기
- type: paper
- source: http://arxiv.org/abs/2608.04934v1
- why-now: agent 학습은 handcrafted task와 expert trajectory에 의존하면 다양성과 확장성이 막히는데, 환경에서 상태 전이를 뽑아 mid-training 데이터로 쓰는 흐름이 구체화됐다.
- angle: “agent 데이터는 사람 답안보다 environment transition에서 나올 수 있다” — state-to-state prediction, task-free supervision, agent post-training 데이터 flywheel로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-training, environment, mid-training, data]
- status: idea

### 2026-08-07 — [논문 리뷰] EvolveNet: collaborative harness evolution으로 agent를 자가 개선하기
- type: paper
- source: http://arxiv.org/abs/2608.04968v1
- why-now: agent 성능 개선이 모델 weight 업데이트보다 harness prompt/tool/verifier/recovery loop 진화에서 나오는 사례가 늘고 있다.
- angle: “agent self-improvement의 단위는 모델이 아니라 harness patch일 수 있다” — collaborative harness evolution, 검증 가능한 변경, rollback gate를 개발자 agent 운영법으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-harness, self-improvement, eval, orchestration]
- status: idea

### 2026-08-07 — Whale: terminal-first DeepSeek coding agent의 prompt cache와 dynamic workflow
- type: tech
- source: https://github.com/usewhale/Whale
- why-now: terminal coding agent가 local workflow에 들어오면서 1M context, MCP tools, prompt cache hit rate, dynamic workflow 같은 runtime 설계 요소가 도구 선택 기준이 되고 있다.
- angle: “coding agent CLI는 모델 wrapper가 아니라 cache·context·tool workflow runtime” — prompt cache 전략, MCP tool boundary, terminal UX, 비용/latency trade-off를 repo introduction으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, terminal, prompt-cache, github-repo]
- status: idea

### 2026-08-07 — Boucle Framework: structured memory와 safety hooks를 갖춘 autonomous agent loop
- type: tech
- source: https://github.com/Bande-a-Bonnot/Boucle-framework
- why-now: autonomous agent framework가 단순 loop에서 structured memory, safety hooks, loop management를 명시적으로 제공하는 방향으로 수렴하고 있다.
- angle: “agent loop의 최소 운영 단위는 memory schema, safety hook, stop/retry policy다” — Boucle의 구성요소를 lightweight autonomous agent runtime 체크리스트로 뜯어본다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-framework, memory, safety-hooks, autonomous-agent]
- status: idea

### 2026-08-07 — pi-mcp-adapter: Pi coding agent를 위한 token-efficient MCP adapter
- type: tech
- source: https://github.com/nicobailon/pi-mcp-adapter
- why-now: MCP tool을 coding agent에 붙일 때 도구 설명·스키마·출력 전달이 context budget을 크게 먹으면서 adapter 계층의 token efficiency가 중요해졌다.
- angle: “MCP adapter는 연결 코드가 아니라 context budget control layer” — tool description 압축, schema 전달, coding agent용 MCP gateway 패턴을 repo 중심으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, coding-agent, token-efficiency, github-repo]
- status: idea

### 2026-08-08 — [논문 리뷰] TRAJDEBUG: long-horizon agent trajectory에서 첫 치명 오류 찾기
- type: paper
- source: http://arxiv.org/abs/2608.06346v1
- why-now: 장기 실행 agent가 복잡해질수록 최종 실패보다 “어느 step이 cascade를 시작했나”를 찾는 debugging/eval 하네스가 필요해졌다.
- angle: “agent 관측성의 핵심은 trace 저장이 아니라 critical failure localization” — trajectory lifecycle, root-cause step, replay 기반 regression test를 운영 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, trajectory, debugging, eval]
- status: published
- draft: content/posts/2026-08-08-trajdebug-critical-failure-localization.mdx

### 2026-08-08 — [논문 리뷰] The Bitter Lesson of Tool Calling: tool을 코드로 호출하면 무엇이 달라지나
- type: paper
- source: http://arxiv.org/abs/2608.06370v1
- why-now: JSON tool call 중심 agent 설계가 scripts-as-tools, parallel tool orchestration, programmatic delegation으로 확장되고 있다.
- angle: “도구 호출은 API 선택 문제가 아니라 execution substrate 선택 문제” — rigid schema call과 code-based chaining의 비용, 안전성, 평가 방식을 비교한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [tool-use, agent, code-execution, eval]
- status: idea

### 2026-08-08 — [논문 리뷰] HarnessOpt-Bench: agent 성능을 model이 아니라 harness 최적화로 보기
- type: paper
- source: http://arxiv.org/abs/2608.06301v1
- why-now: prompt, tool, control flow, memory, orchestration 코드가 agent 성능을 좌우하면서 harness 자체를 자동 최적화하고 평가하는 benchmark가 중요해졌다.
- angle: “agent 개선은 모델 교체보다 harness patch와 rollback loop일 때가 많다” — eval-guided harness optimization, verifier, regression budget을 개발 워크플로로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-harness, optimization, eval, orchestration]
- status: idea

### 2026-08-08 — [논문 리뷰] Selective Context Preference Optimization: RAG context를 언제 믿을지 학습하기
- type: paper
- source: http://arxiv.org/abs/2608.06377v1
- why-now: RAG/agent가 외부 context에 의존할수록 misleading context를 무시하되 유용한 context는 활용하는 선택적 신뢰 정책이 핵심 문제가 된다.
- angle: “robust RAG는 context를 덜 쓰는 모델이 아니라 context 신뢰도를 판단하는 모델” — grounding gate, conflict handling, fallback routing 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, context, preference-optimization, grounding]
- status: idea

### 2026-08-08 — [논문 리뷰] CalibForge: terminal agent task를 solver 난이도로 보정하기
- type: paper
- source: http://arxiv.org/abs/2608.06352v1
- why-now: terminal/coding agent 학습에는 executable task뿐 아니라 현재 solver에게 너무 쉽지도 어렵지도 않은 calibrated task가 필요하다.
- angle: “agentic RL 환경은 실행 가능성보다 난이도 calibration이 먼저다” — adversarial solver calibration, curriculum, validation harness를 task-generation pipeline으로 소개한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [terminal-agent, agentic-rl, benchmark, calibration]
- status: idea

### 2026-08-08 — BaKron: Kronecker-factored Hessian으로 LLM quantization 빠르게 하기
- type: paper
- source: http://arxiv.org/abs/2608.06291v1
- why-now: 추론 비용 최적화가 serving stack의 기본 과제가 되면서 GPTQ 계열 양자화의 계산 비용과 정확도 trade-off를 더 정교하게 다룰 필요가 있다.
- angle: “양자화는 bit 줄이기가 아니라 weight geometry를 얼마나 싸게 근사하느냐” — Hessian approximation, adaptive rounding, inference QA를 실무 관점으로 풀어본다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [quantization, inference, hessian, optimization]
- status: idea

### 2026-08-08 — AgenticX: Meta-Agent orchestration과 Studio를 갖춘 production multi-agent platform
- type: tech
- source: https://github.com/DemonDamon/AgenticX
- why-now: multi-agent framework가 SDK만 제공하는 단계를 넘어 CLI, Studio, desktop app, orchestration layer를 함께 묶는 productized runtime으로 진화하고 있다.
- angle: “multi-agent platform 선택 기준은 agent API보다 운영 surface다” — meta-agent, workflow, observability, human debugging UI, deployment boundary를 repo architecture로 뜯어본다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [multi-agent, agent-framework, orchestration, github-repo]
- status: idea

### 2026-08-08 — mnemo-cortex: persistent recall과 verified facts를 갖춘 agent memory coprocessor
- type: tech
- source: https://github.com/GuyMannDude/mnemo-cortex
- why-now: 장기 agent 운영에서 memory를 vector DB 부가 기능이 아니라 active recall, 검증된 fact, sync boundary를 가진 독립 coprocessor로 분리하려는 흐름이 강해지고 있다.
- angle: “agent memory는 저장소가 아니라 별도 운영 프로세스다” — persistent recall, semantic search, fact verification, encrypted sync를 personal agent memory architecture로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-memory, personal-agent, semantic-search, github-repo]
- status: idea

### 2026-08-09 — [논문 리뷰] AV-AIVAT: agent 평가를 anytime-valid stopping으로 74배 싸게 만들기
- type: paper
- source: http://arxiv.org/abs/2608.06362v1
- why-now: agent benchmark가 게임·시뮬레이션·tool-use 환경으로 길어지면서 “몇 episode를 돌려야 충분한가”가 비용과 신뢰도의 병목이 됐다.
- angle: “agent eval은 고정 budget 리더보드가 아니라 통계적으로 멈출 수 있는 실험이어야 한다” — anytime-valid stopping, confidence sequence, 평가 비용/오판 위험 trade-off를 운영 QA 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-eval, benchmark, statistical-testing, cost-optimization]
- status: idea

### 2026-08-09 — [논문 리뷰] Benchmarking the Benchmarks: conversational agent 벤치마크 품질을 평가하기
- type: paper
- source: http://arxiv.org/abs/2608.06329v1
- why-now: task-oriented conversational agent 성능 숫자가 늘어나는 만큼 benchmark 자체의 policy coverage, inconsistency, task realism을 검증해야 한다는 요구가 커지고 있다.
- angle: “평가셋도 테스트 대상이다” — benchmark reference evaluation, task consistency check, coverage audit를 agent QA pipeline에 넣는 방법으로 풀어본다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [conversational-agent, eval, benchmark-quality, qa]
- status: idea

### 2026-08-09 — [논문 리뷰] Beyond Top-K: RAG retrieval을 해석 가능한 agentic operation으로 바꾸기
- type: paper
- source: http://arxiv.org/abs/2608.06305v1
- why-now: 긴 재무·감사·규제 문서 RAG에서 chunk embedding top-k만으로는 구조적 계산과 근거 추적을 설명하기 어렵다는 한계가 선명해지고 있다.
- angle: “RAG는 비슷한 문단 검색이 아니라 문서 위에서 실행되는 해석 가능한 operation plan일 수 있다” — structured document operation, provenance, tool-like retrieval 설계를 agentic RAG로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, agentic-rag, retrieval, interpretability]
- status: idea

### 2026-08-09 — [논문 리뷰] NeSy-RAG: Neuro-Symbolic RAG로 reasoning step을 검증 가능하게 만들기
- type: paper
- source: http://arxiv.org/abs/2608.06292v1
- why-now: RAG 답변이 외부 지식에 grounded되어도 중간 reasoning step이 opaque하면 production QA와 감사에서 병목이 된다.
- angle: “RAG hallucination 방어는 citation 추가가 아니라 reasoning step을 symbolic artifact로 꺼내는 문제” — neuro-symbolic decomposition, attribution, verifier gate를 실무 RAG 평가로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, neuro-symbolic, explainability, verifier]
- status: idea

### 2026-08-09 — [논문 리뷰] Resourced Authority: 배포된 AI agent 권한을 compute budget으로 통제하기
- type: paper
- source: http://arxiv.org/abs/2608.06353v1
- why-now: autonomous agent가 배포 후 계속 행동하는 환경에서는 one-time approval보다 resource allocation과 authorization을 결합한 governance model이 필요해지고 있다.
- angle: “agent 권한은 허용/차단 플래그가 아니라 예산과 책임이 붙은 실행 권리다” — compute budget, participatory governance, self-enforcing authorization을 agent control plane 설계로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 3
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-governance, authorization, mechanism-design, safety]
- status: idea

### 2026-08-09 — waku-agent: 오후 안에 읽히는 local-first agent harness
- type: tech
- source: https://github.com/ShenSeanChen/waku-agent
- why-now: 개인/소규모 팀 agent는 거대한 platform보다 loop, memory, eval을 코드로 바로 읽고 수정할 수 있는 lightweight harness가 더 실용적인 경우가 많다.
- angle: “agent framework 선택의 첫 기준은 추상화 풍부함보다 run loop를 이해하고 고칠 수 있느냐” — harness 구조, memory/eval boundary, local laptop 운영 흐름을 repo introduction으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-framework, local-first, eval, github-repo]
- status: idea

### 2026-08-09 — yantrikdb-mcp: contradiction detection이 있는 agent persistent memory MCP 서버
- type: tech
- source: https://github.com/yantrikos/yantrikdb-mcp
- why-now: Claude Code/Cursor/Windsurf 같은 agent host에 memory를 붙일 때 단순 저장보다 temporal decay, contradiction detection, consolidation이 핵심 기능으로 올라오고 있다.
- angle: “MCP memory server는 vector search adapter가 아니라 기억의 수명·충돌·통합 정책을 실행하는 runtime이다” — temporal decay, knowledge graph, autonomous consolidation을 agent memory 운영 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, agent-memory, contradiction-detection, github-repo]
- status: idea

### 2026-08-09 — Brigade: agent가 실제로 실행했는지 증명하는 check-run harness
- type: tech
- source: https://github.com/escoffier-labs/brigade
- why-now: coding agent가 “테스트를 돌렸다”고 말해도 실제 exit code와 영향 범위가 검증되지 않으면 PR 자동화에서 신뢰할 수 없다.
- angle: “agent QA는 말이 아니라 artifact와 exit code로 증명해야 한다” — check run proof, code graph, MCP/tool/skill catalog sync, memory review gate를 coding-agent 운영 하네스로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, eval, mcp, github-repo]
- status: idea

### 2026-08-10 — [논문 리뷰] AgentOPSD: agentic RL을 recursive self-distillation으로 안정화하기
- type: paper
- source: http://arxiv.org/abs/2608.05987v1
- why-now: Hugging Face Daily Papers에 올라온 최신 agentic RL 논문으로, long-horizon agent 학습에서 실패 trajectory를 어떻게 다시 학습 신호로 만들지에 대한 관심이 커지고 있다.
- angle: “agent self-improvement는 더 큰 모델 호출이 아니라 실패-복구 trace를 재귀적으로 증류하는 데이터 루프” — rollout, verifier, self-distillation, regression gate를 post-training 운영 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rl, self-distillation, post-training, eval]
- status: idea

### 2026-08-10 — [논문 리뷰] EnvACE: world rehearsal로 환경 동역학을 내재화하는 agentic RL
- type: paper
- source: http://arxiv.org/abs/2608.06197v1
- why-now: agentic RL에서 policy만 키우는 대신 환경 dynamics를 내부화해 planning/recovery를 개선하려는 흐름이 강해지고 있다.
- angle: “좋은 agent는 tool을 많이 쓰기 전에 환경의 상태 전이를 rehearsal한다” — world rehearsal, environment model, rollout budget, failure recovery를 agent harness 설계로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rl, world-model, planning, environment]
- status: idea

### 2026-08-10 — [논문 리뷰] DataSpace: heterogeneous workspace 위의 verifiable data agent benchmark
- type: paper
- source: http://arxiv.org/abs/2608.03451v1
- why-now: 데이터 분석 agent가 파일, 표, 노트북, 문서가 섞인 실제 작업공간에서 검증 가능한 결과를 내야 하는 요구가 커지고 있다.
- angle: “data agent 평가는 SQL 정답 하나가 아니라 workspace navigation, transformation, evidence artifact를 같이 봐야 한다” — verifier, workspace schema, heterogeneous source QA를 실무 benchmark 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [data-agent, benchmark, verifiable-analytics, eval]
- status: idea

### 2026-08-10 — [논문 리뷰] Activity Frames: 화면 활동을 agent memory와 replay 단위로 컴파일하기
- type: paper
- source: http://arxiv.org/abs/2608.05784v1
- why-now: computer-use agent는 스크린샷 로그만으로는 재현·검증·메모리화가 어렵고, deterministic screen-activity representation이 필요한 단계로 가고 있다.
- angle: “GUI agent memory는 이미지 더미가 아니라 replay 가능한 activity frame이어야 한다” — screen event compilation, provenance, replay, regression test를 desktop agent 운영 패턴으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [computer-use-agent, memory, replay, gui-agent]
- status: idea

### 2026-08-10 — [논문 리뷰] CalibForge: terminal task solver의 calibration을 adversarial하게 평가하기
- type: paper
- source: http://arxiv.org/abs/2608.06352v1
- why-now: coding/terminal agent가 “풀 수 있다”고 판단하는 신뢰도와 실제 성공 가능성 사이의 calibration gap이 운영 비용과 안전성 문제로 이어지고 있다.
- angle: “agent에게 맡길지 말지는 점수보다 calibrated confidence가 먼저” — terminal task, adversarial solver calibration, escalation policy를 coding-agent eval gate로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, calibration, terminal-task, eval]
- status: idea

### 2026-08-10 — engraphis: coding agent를 위한 bi-temporal local memory
- type: tech
- source: https://github.com/Coding-Dev-Tools/engraphis
- why-now: GitHub search에서 최근 활발히 업데이트되는 coding-agent memory repo로, 세션과 repo를 넘나드는 durable context가 agent UX의 핵심 병목이 되고 있다.
- angle: “coding agent memory는 단순 vector DB가 아니라 시간축이 있는 inspectable context ledger” — bi-temporal history, code-aware recall, MCP surface, self-hosted UI를 repo architecture로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, agent-memory, mcp, github-repo]
- status: idea

### 2026-08-10 — osaurus: macOS-native local agent harness의 offline-first 설계
- type: tech
- source: https://github.com/osaurus-ai/osaurus
- why-now: 개인 agent runtime이 cloud SaaS만이 아니라 로컬 실행, persistent memory, cryptographic identity, offline operation을 요구하는 방향으로 갈라지고 있다.
- angle: “personal agent runtime을 macOS 앱으로 만들면 권한·메모리·실행 경계가 어떻게 달라지나” — native sandbox, offline model, identity, autonomous execution을 framework 선택 기준으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [personal-agent, local-first, macos, github-repo]
- status: idea

### 2026-08-10 — ouroboros: specification-first agent OS와 ambiguity gate
- type: tech
- source: https://github.com/Q00/ouroboros
- why-now: Claude Code, Codex, Gemini CLI 같은 여러 런타임이 늘어나면서 “프롬프트를 잘 쓰기”보다 spec quality와 evaluation gate를 앞단에서 표준화하려는 repo가 주목받고 있다.
- angle: “agent OS의 핵심은 실행 버튼이 아니라 ambiguity score와 3단계 evaluation gate” — spec interview, budgeted evolution loop, MCP server, multi-runtime integration을 coding-agent workflow로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, specification, mcp, github-repo]
- status: idea

### 2026-08-10 — [논문 리뷰] Comparative Agent Retrieval: 큰 skill library에서 무엇을 로드할까
- type: paper
- source: http://arxiv.org/abs/2608.06196v1
- why-now: agent skill library가 수백 개 규모로 커지면 전체를 context에 넣는 방식은 비용·순서·의존성 문제를 만든다. 최신 arXiv에서 690개 skill corpus와 117개 realistic query로 hybrid ranker와 typed knowledge graph를 비교했다.
- angle: “agent context manager는 검색기이면서 workflow planner다” — lexical+dense retrieval, prerequisite/data-flow graph, top-k skill loading을 AGENTS.md/skill 운영 패턴으로 풀어본다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-skills, retrieval, context-management, eval]
- status: idea

### 2026-08-10 — [논문 리뷰] Learning Globally Reusable Skills: coding agent skill bank를 그래프로 진화시키기
- type: paper
- source: http://arxiv.org/abs/2608.06153v1
- why-now: coding agent가 실행 궤적에서 skill을 계속 쌓는 흐름이 강해졌지만, local update만 반복하면 task-specific overfitting과 skill 간 충돌이 생긴다. GSE는 Skill Relation Graph로 호환성과 일반화를 함께 최적화한다.
- angle: “skill은 파일 몇 개의 모음이 아니라 compatibility graph다” — skill relation graph, generalization gate, regression test를 coding-agent harness 운영법으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, agent-skills, skill-graph, self-improvement]
- status: idea

### 2026-08-10 — [논문 리뷰] AgentExecutor: partial code execution을 multi-agent context generation으로 풀기
- type: paper
- source: http://arxiv.org/abs/2608.05959v1
- why-now: coding agent와 program analysis agent가 임의 코드 조각을 실행하려면 missing context와 dependency를 보강해야 한다. AgentExecutor는 partial code execution을 위한 multi-agent framework를 제안해 기존 LExecutor/Treefix류 한계를 겨냥한다.
- angle: “코드 이해는 정적 검색만으로 끝나지 않고 실행 가능한 context를 합성해야 한다” — context generator, feedback loop, dependency stub, execution verifier를 coding-agent test harness로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, program-analysis, code-execution, multi-agent]
- status: idea

### 2026-08-10 — [논문 리뷰] Causal Episodic Memory: 실패 수정을 다음 episode의 repair memory로 남기기
- type: paper
- source: http://arxiv.org/abs/2608.05906v1
- why-now: agent repair loop는 성공한 수정과 실패 방향을 버리면 같은 오류를 반복한다. MERIT는 Text-to-SQL episode에서 oracle-verified correction과 unsuccessful direction을 dual-polarity memory로 저장해 parameter update 없이 재사용한다.
- angle: “agent memory는 성공 노트만이 아니라 실패 방향까지 causal하게 저장해야 한다” — failure type classifier, positive/negative memory, retrieval policy, repair regression suite를 실무 agent 운영으로 연결한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, repair, text-to-sql, eval]
- status: idea

### 2026-08-10 — [논문 리뷰] Pre-Commit Gating: self-evolving agent의 skill contamination 막기
- type: paper
- source: http://arxiv.org/abs/2608.05810v1
- why-now: self-evolving agent가 skill을 많이 축적할수록 성능이 단조롭게 좋아진다는 가정이 흔들리고 있다. 이 논문은 defective skill이 다음 skill distillation의 reference가 되어 contamination chain을 만드는 phase transition을 분석한다.
- angle: “skill 추가는 배포이며, merge 전에 반드시 regression gate를 통과해야 한다” — contamination chain, irreversible skill pollution, pre-commit evaluation, rollback policy를 agent skill marketplace 운영법으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-skills, self-evolution, regression, safety]
- status: idea

### 2026-08-10 — [논문 리뷰] Hardware Keystores for AI Agent Signing: MCP에서 private key를 agent 밖으로 빼기
- type: paper
- source: http://arxiv.org/abs/2608.06130v1
- why-now: agent가 Git commit signing, API auth, certificate issuance 같은 암호 작업을 수행하는 순간 private key가 software memory에 노출되는 문제가 커진다. 이 논문은 hardware keystore와 content-aware authorization을 결합한 zero-trust MCP enforcement를 제안한다.
- angle: “agent에게 키를 주지 말고, 서명 의사결정만 검증 가능한 경계로 넘겨라” — hardware-backed key custody, content-aware approval, MCP policy enforcement, audit log를 agent infra 보안 패턴으로 설명한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [mcp, agent-security, keystore, zero-trust]
- status: idea

### 2026-08-10 — Opendray: self-hosted coding-agent gateway와 공유 memory layer
- type: tech
- source: https://github.com/Opendray/opendray
- why-now: Claude Code, Codex, OpenCode 같은 coding agent를 개인/팀 인프라에서 동시에 돌리려면 web/mobile/chat entrypoint, shared memory, execution gateway를 묶는 control plane이 필요해지고 있다. GitHub 검색 기준 최근 업데이트와 실사용 지표가 빠르게 붙고 있다.
- angle: “coding agent 운영은 CLI 하나가 아니라 gateway·memory·channel adapter의 문제” — REST/WebSocket API, Slack/Discord/Telegram bridge, local-first memory, runner isolation을 self-hosted agent infra로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, gateway, self-hosted, github-repo]
- status: idea

### 2026-08-10 — shodh-memory: LLM-free deterministic memory for AI agents
- type: tech
- source: https://github.com/varun29ankuS/shodh-memory
- why-now: agent memory를 LLM summarization이나 cloud vector DB에 의존하지 않고 offline Rust binary로 감사 가능하게 만들려는 흐름이 보인다. 최근 GitHub에서 MCP memory 계열 repo 중 활발히 업데이트되고 있다.
- angle: “agent memory는 똑똑한 요약보다 deterministic하고 inspectable한 state machine일 때 운영하기 쉽다” — local binary, forgetting policy, auditability, MCP integration을 memory layer 선택 기준으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-memory, local-first, rust, github-repo]
- status: idea

### 2026-08-11 — [논문 리뷰] CoinRAG: long-context RAG의 KV cache를 information nugget 단위로 재사용하기
- type: paper
- source: http://arxiv.org/abs/2608.07458v1
- why-now: long-context RAG 최적화가 chunk-level cache reuse에서 더 세밀한 information nugget 단위로 내려가며, retrieval 품질과 serving 비용을 함께 다루는 흐름이 강해지고 있다.
- angle: “RAG cache는 chunk 재사용이 아니라 근거 조각의 중복·노이즈를 제거하는 serving layer다” — nugget extraction, KV cache reuse, latency/quality Pareto frontier를 production RAG 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, kv-cache, inference, long-context]
- status: idea

### 2026-08-11 — [논문 리뷰] SkillProx: self-evolving agent skill을 proximal update로 안정화하기
- type: paper
- source: http://arxiv.org/abs/2608.07449v1
- why-now: 에이전트가 반복 작업에서 textual skill을 계속 수정하는 흐름이 커지면서, 개선과 regression 사이를 제어하는 skill update 알고리즘이 필요해지고 있다.
- angle: “agent skill은 prompt 조각이 아니라 versioned policy artifact다” — textual gradient descent, proximal constraint, skill regression gate, rollback policy를 agent harness 운영법으로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-skills, self-improvement, regression, harness]
- status: idea

### 2026-08-11 — [논문 리뷰] TEPA: stale memory를 철회하는 conflict-robust language agent
- type: paper
- source: http://arxiv.org/abs/2608.07429v1
- why-now: 장기 메모리 agent에서 “기억을 잘 저장하기”보다 오래된 기억이 prompt를 오염시키지 않게 철회·무효화하는 문제가 실무 장애로 떠오르고 있다.
- angle: “agent memory lifecycle의 핵심은 retrieve보다 revoke다” — stale memory detection, conflict handling, temporal preference update, memory pollution regression test를 설계 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, stale-memory, conflict-resolution, eval]
- status: published
- draft: content/posts/2026-08-11-tepa-revoking-stale-agent-memories.mdx

### 2026-08-11 — [논문 리뷰] Blast Radius: coding agent context eviction을 예측 가능한 memory layer로 만들기
- type: paper
- source: http://arxiv.org/abs/2608.07440v1
- why-now: agentic coding에서 토큰 낭비와 context bloat가 비용·성능 병목이 되면서, prompt가 코드베이스 어디까지 영향을 미칠지 예측해 context를 관리하는 접근이 나왔다.
- angle: “coding agent context는 많이 넣는 게 아니라 영향 반경을 예측해 reversible eviction하는 문제” — code/context channel coupling, archive/restore, prompt reach estimation을 repo harness 설계로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, context-management, memory, token-budget]
- status: idea

### 2026-08-11 — [논문 리뷰] Fisher-R1: 과학 가설 검정 agent를 신뢰 가능하게 학습하기
- type: paper
- source: http://arxiv.org/abs/2608.07437v1
- why-now: 데이터셋을 읽고 코드를 생성해 통계 검정을 수행하는 research agent가 늘지만, subtle inference error와 p-hacking성 실수를 자동화가 증폭할 수 있다는 문제가 크다.
- angle: “scientific agent의 verifier는 답변 채점기가 아니라 통계적 주장 전체를 감사하는 실행 하네스여야 한다” — hypothesis testing, code execution, inference error taxonomy, QA gate를 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [research-agent, hypothesis-testing, eval, verifier]
- status: idea

### 2026-08-11 — [논문 리뷰] CoBa: test-time scaling을 compute-balanced routing 문제로 보기
- type: paper
- source: http://arxiv.org/abs/2608.07424v1
- why-now: reasoning model 운영에서 더 긴 CoT, 더 많은 sample, 더 강한 evaluator 중 어디에 compute를 쓸지 정하는 문제가 serving 비용의 핵심 의사결정이 됐다.
- angle: “추론 비용 최적화는 한 축을 키우는 게 아니라 reasoning/sample/evaluator compute를 라우팅하는 문제” — budget allocation, confidence routing, latency-quality frontier를 production inference 정책으로 설명한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [reasoning, test-time-scaling, inference, routing]
- status: idea

### 2026-08-11 — Deuz-SDK: durable execution·memory·hybrid RAG·MCP를 묶은 TypeScript agent framework
- type: tech
- source: https://github.com/Deuz-AI/Deuz-SDK
- why-now: TypeScript agent framework가 prompt wrapper를 넘어 durable execution, long-term memory, hybrid RAG, MCP tool integration을 한 런타임에서 제공하는 방향으로 성숙하고 있다.
- angle: “production agent framework의 기본값은 model call이 아니라 실행 지속성·메모리·도구 경계다” — zero-dependency SDK 구조, durable task, memory/RAG abstraction, MCP integration을 체크리스트로 본다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-framework, typescript, mcp, durable-execution]
- status: idea

### 2026-08-11 — Solace Agent Mesh: event-driven multi-agent orchestration을 메시지 버스로 설계하기
- type: tech
- source: https://github.com/SolaceLabs/solace-agent-mesh
- why-now: multi-agent 시스템이 단일 프로세스 graph에서 벗어나 이벤트, workflow, enterprise integration 위에서 운영되면서 agent 간 통신·관측·확장성 설계가 중요해지고 있다.
- angle: “multi-agent orchestration은 roleplay가 아니라 event bus와 routing contract 문제” — agent mesh, async event flow, tool/service integration, observability를 enterprise agent architecture로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [multi-agent, event-driven, orchestration, agent-framework]
- status: idea

### 2026-08-11 — RepoPrompt CE: macOS-native context engineering app을 MCP CLI로 agent에 붙이기
- type: tech
- source: https://github.com/repoprompt/repoprompt-ce
- why-now: coding agent 품질이 모델보다 repo context 선택과 편집 범위 제어에 좌우되면서, native app + MCP CLI 형태의 context engineering 도구가 실무 워크플로로 들어오고 있다.
- angle: “coding agent에게 전체 repo를 던지는 대신 사람이 context package를 설계하고 MCP로 전달하는 패턴” — file selection, token budget, prompt assembly, MCP handoff를 개발자 workflow로 소개한다.
- difficulty: low
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, context-engineering, mcp, github-repo]
- status: idea

### 2026-08-12 — [논문 리뷰] SHE: LLM agent 안전성을 harness evolution 문제로 보기
- type: paper
- source: http://arxiv.org/abs/2608.09885v1
- why-now: agent 안전성이 모델 weight만이 아니라 system prompt, rule bank, safety memory, tool policy 같은 harness 구성요소에 의해 결정된다는 관점이 더 중요해지고 있다.
- angle: “agent guardrail은 고정 정책 파일이 아니라 trajectory attribution으로 진화하는 runtime artifact다” — 실패 trajectory, 책임 분해, localized harness patch, rollback gate를 운영 패턴으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-safety, harness, tool-policy, trajectory]
- status: idea

### 2026-08-12 — [논문 리뷰] OpRAG: multi-stage RAG를 GPU-backed deterministic runtime으로 운영하기
- type: paper
- source: http://arxiv.org/abs/2608.08340v1
- why-now: agentic RAG가 retrieval, memory access, context construction, generation, index update를 섞으면서 LLM decoding 바깥의 orchestration runtime이 병목과 장애 지점이 되고 있다.
- angle: “RAG 운영 최적화는 retriever 점수만이 아니라 stage별 resource contract와 deterministic scheduling 문제” — GPU-backed workflow, memory/update 단계, latency envelope를 production RAG 관점으로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rag, runtime, gpu, orchestration]
- status: idea

### 2026-08-12 — [논문 리뷰] OpenCodeReview: agent code review를 결정론적 verifier로 싸게 만들기
- type: paper
- source: http://arxiv.org/abs/2608.09290v1
- why-now: LLM 기반 코드 리뷰 agent가 늘고 있지만 비결정적 tool 사용과 지역 context 부족 때문에 같은 PR에서도 결과가 흔들리는 문제가 실무 도입의 blocker가 되고 있다.
- angle: “AI 코드 리뷰어의 신뢰도는 더 큰 모델보다 deterministic review contract에서 나온다” — diff scope, static verifier, bounded tool use, cost-effective review loop를 개발팀 운영 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [code-review-agent, verifier, deterministic, developer-workflow]
- status: idea

### 2026-08-12 — [논문 리뷰] SkillSentry: LLM agent skill 실행을 runtime assurance로 보증하기
- type: paper
- source: http://arxiv.org/abs/2608.09253v1
- why-now: reusable skill을 붙인 agent가 실제 실행에서는 precondition 누락, tool state drift, partial execution 때문에 불안정하게 동작하는 사례가 늘고 있다.
- angle: “agent skill은 문서가 아니라 실행 중 감시해야 할 procedure contract다” — runtime monitor, skill pre/postcondition, failure intervention, regression suite를 skill 운영법으로 설명한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-skills, runtime-assurance, tool-use, eval]
- status: idea

### 2026-08-12 — [논문 리뷰] Governing the KV Cache: multi-tenant LLM inference의 timing side-channel 막기
- type: paper
- source: http://arxiv.org/abs/2608.09225v1
- why-now: prefix/KV cache reuse가 serving throughput의 핵심 최적화가 되면서, 공유 cache가 tenant 간 정보 누출 통로가 될 수 있다는 보안 문제가 실제 infra 설계 이슈로 올라왔다.
- angle: “LLM inference 보안은 prompt 필터만이 아니라 cache isolation 정책까지 포함한다” — timing side-channel, prefix reuse boundary, tenant isolation, throughput-security trade-off를 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [inference, kv-cache, security, multi-tenant]
- status: idea

### 2026-08-12 — Skybridge: MCP Apps와 ChatGPT Apps를 type-safe full-stack으로 묶기
- type: tech
- source: https://github.com/alpic-ai/skybridge
- why-now: agent tool 생태계가 MCP server, ChatGPT App, web UI로 갈라지면서 같은 capability를 여러 host에 안전하게 노출하는 full-stack framework 설계가 중요해지고 있다.
- angle: “agent tool을 만들 때 backend MCP와 frontend app surface를 따로 설계하지 말자” — type-safe contract, React UI, platform-agnostic packaging, auth/context boundary를 framework 선택 기준으로 본다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, chatgpt-apps, agent-framework, typescript]
- status: idea

### 2026-08-12 — Nimbalyst: 여러 coding agent 작업을 visual workspace에서 비교·관리하기
- type: tech
- source: https://github.com/nimbalyst/nimbalyst
- why-now: Claude Code, Codex, OpenCode 같은 coding agent를 병렬로 돌리는 팀이 늘면서 terminal 로그만으로는 변경 의도, 충돌, 결과 비교를 관리하기 어렵다.
- angle: “coding agent fleet 운영은 모델 선택보다 workspace isolation과 결과 review UX가 핵심” — parallel session, markdown workspace, diff review, merge decision workflow를 개발자 생산성 도구로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, agent-workspace, parallel-agents, developer-workflow]
- status: idea

### 2026-08-12 — mnemo-cortex: active memory coprocessor로 agent 기억을 검증 가능한 사실로 관리하기
- type: tech
- source: https://github.com/GuyMannDude/mnemo-cortex
- why-now: persistent memory를 단순 벡터 검색으로 붙이면 stale fact, hallucinated recall, provenance 손실이 누적되기 쉬워서 memory verification과 consolidation layer 수요가 커지고 있다.
- angle: “agent memory는 저장소가 아니라 active coprocessor다” — verified facts, semantic recall, offline consolidation, encrypted sync를 personal/team agent memory architecture로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-memory, memory-system, mcp, github-repo]
- status: idea

### 2026-08-13 — [논문 리뷰] MESA: long-horizon agent memory에서 task-adaptive evidence selection하기
- type: paper
- source: http://arxiv.org/abs/2608.10108v1
- why-now: long-horizon agent가 쌓아둔 memory/evidence를 전부 넣는 방식은 context bloat와 stale evidence 문제를 만들기 쉬워, 작업별 evidence 구조를 동적으로 고르는 memory layer가 중요해지고 있다.
- angle: “agent memory retrieval은 top-k 검색이 아니라 task에 맞는 evidence structure 선택 문제” — multi-structure evidence selection, memory budget, retrieval policy, regression test를 운영 관점으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, evidence-selection, long-horizon, context-engineering]
- status: idea

### 2026-08-13 — [논문 리뷰] Coding Agent Architecture: 코딩 에이전트 런타임을 구성요소로 분해하기
- type: paper
- source: http://arxiv.org/abs/2608.10934v1
- why-now: Claude Code, Codex, Qwen Code류 도구가 빠르게 늘면서 “코딩 에이전트”를 모델이 아니라 planner, context manager, tool executor, verifier가 결합된 runtime architecture로 보는 기준이 필요해졌다.
- angle: “coding agent 비교는 벤치마크 점수보다 architecture diff부터” — context collection, action loop, patch application, test/verifier boundary를 개발자 도구 선택 체크리스트로 만든다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, architecture, developer-workflow, eval]
- status: published
- draft: content/posts/2026-08-13-coding-agent-architecture-ark.mdx

### 2026-08-13 — [논문 리뷰] MEGA: wisdom graph로 self-evolving agent optimization 운영하기
- type: paper
- source: http://arxiv.org/abs/2608.10504v1
- why-now: agent self-improvement가 단순 prompt rewrite를 넘어 실패 경험, skill, verifier 결과를 구조화된 지식으로 축적하는 방향으로 가고 있다.
- angle: “agent improvement log를 changelog가 아니라 wisdom graph로 관리하면 무엇이 달라지나” — failure pattern, reusable improvement, rollback gate, harness optimization loop를 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [self-evolving-agent, wisdom-graph, harness, optimization]
- status: idea

### 2026-08-13 — [논문 리뷰] Persistent Recursive Worlds: autonomous software evolution을 격리된 세계로 돌리기
- type: paper
- source: http://arxiv.org/abs/2608.10450v1
- why-now: coding agent가 장기적으로 software를 진화시키려면 단발 PR 생성보다 persistent environment, recursive experiment, 검증 가능한 rollback boundary가 중요해지고 있다.
- angle: “자율 소프트웨어 진화는 코드를 바로 고치는 게 아니라 실험 가능한 recursive world를 운영하는 문제” — sandbox world, state persistence, verification, merge policy를 agent fleet 운영법으로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, software-evolution, sandbox, autonomous-agent]
- status: idea

### 2026-08-13 — [논문 리뷰] Personalized Skills for Coding Agents: 개발자 상호작용 기록은 정말 도움이 되나
- type: paper
- source: http://arxiv.org/abs/2608.10319v1
- why-now: coding agent에 개인/팀별 memory와 skill을 붙이는 제품이 늘지만, interaction history가 실제 task 성공률과 regression에 어떤 영향을 주는지는 별도 평가가 필요하다.
- angle: “personalized skill은 생산성 boost이면서 context pollution risk다” — developer history, skill retrieval, personalization regression, privacy boundary를 coding-agent 운영 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, personalization, skills, memory]
- status: idea

### 2026-08-13 — [논문 리뷰] CommitKV: multi-turn agent KV cache를 lifecycle transition 기준으로 압축하기
- type: paper
- source: http://arxiv.org/abs/2608.07855v1
- why-now: multi-turn agent serving은 긴 대화·tool trace 때문에 KV cache 비용이 커지는데, 단순 eviction보다 commit transition을 기준으로 상태를 압축하는 접근이 실무 latency/비용 이슈와 맞닿아 있다.
- angle: “agent serving cache는 오래된 토큰을 버리는 게 아니라 상태 전이를 commit하는 문제” — lifecycle-aware compression, turn boundary, cache quality, serving policy를 inference 최적화 관점으로 설명한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [kv-cache, inference, multi-turn-agent, compression]
- status: idea

### 2026-08-13 — opencode-swarm: OpenCode 위에 hub-and-spoke coding agent swarm 붙이기
- type: tech
- source: https://github.com/ZaxbyHub/opencode-swarm
- why-now: 단일 coding agent가 모든 판단을 하는 대신 architect 중심 hub와 specialist agent가 상담·구현·QA를 나눠 맡는 swarm 플러그인 패턴이 개발자 워크플로에 들어오고 있다.
- angle: “coding swarm은 역할극이 아니라 consultation boundary와 QA handoff 설계” — hub-and-spoke orchestration, SME delegation, code generation/review loop, OpenCode plugin 구조를 repo introduction으로 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, swarm, opencode, github-repo]
- status: idea

### 2026-08-13 — Brigade: agent가 한 일을 증명하게 만드는 MCP/catalog+code graph layer
- type: tech
- source: https://github.com/escoffier-labs/brigade
- why-now: 개발자 에이전트가 테스트를 돌렸다고 주장하거나 변경 영향 범위를 놓치는 문제가 반복되면서, 실제 exit code 증명·code graph·MCP catalog sync를 묶은 검증 layer가 실용적이다.
- angle: “agent trust는 자연어 보고가 아니라 재현 가능한 evidence artifact에서 나온다” — proof file, real exit code, call graph impact, MCP/skill catalog, memory review gate를 coding-agent governance로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, mcp, code-graph, governance]
- status: idea

### 2026-08-16 — [논문 리뷰] AutoDesign: long-horizon agent harness를 meta-optimization 대상으로 보기
- type: paper
- source: http://arxiv.org/abs/2608.13560v1
- why-now: 장기 작업 에이전트 성능이 모델 선택보다 harness alignment, reusable experience, evaluation loop 설계에 좌우된다는 흐름이 더 선명해지고 있다.
- angle: “agent harness는 손으로 고정하는 prompt 묶음이 아니라 최적화 가능한 system artifact” — design prior, 경험 축적, meta-harness optimization, rollback 가능한 실험 루프를 개발자 워크플로로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, harness, optimization, long-horizon]
- status: idea

### 2026-08-16 — [논문 리뷰] RippleMem: isolated retrieval을 associative recollection으로 바꾸기
- type: paper
- source: http://arxiv.org/abs/2608.13334v1
- why-now: long-term agent memory에서 “관련 interaction 하나 찾기”보다 여러 상호작용에 흩어진 evidence를 함께 회상하는 문제가 실제 assistant 품질 병목으로 올라왔다.
- angle: “agent memory retrieval은 top-k가 아니라 연상 경로를 구성하는 문제” — distributed evidence, recollection chain, memory regression test, stale context 억제를 운영 관점으로 설명한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, retrieval, long-term-memory, evidence]
- status: idea

### 2026-08-16 — [논문 리뷰] When Should Multi-Round RAG Stop? 검색 중단을 순차 의사결정으로 다루기
- type: paper
- source: http://arxiv.org/abs/2608.13237v1
- why-now: multi-round RAG와 search agent는 더 검색할수록 비용과 noise가 늘어나므로, “충분한 근거가 모였는가”를 언제 판단할지에 대한 stopping policy가 중요해졌다.
- angle: “RAG agent의 품질은 검색을 잘하는 것만큼 잘 멈추는 데서 나온다” — structured stopping judgment, retrieval reduction, first-STOP trajectory risk를 production RAG budget gate로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rag, retrieval, stopping-policy, eval]
- status: idea

### 2026-08-16 — [논문 리뷰] PIPES: provenance와 prior로 agent perception을 보호하기
- type: paper
- source: http://arxiv.org/abs/2608.12789v1
- why-now: tool-using agent가 외부 데이터와 tool response를 사실로 받아들이면서, 누가 만든 정보인지·어떤 주장인지가 빠진 응답은 state corruption 공격면이 된다.
- angle: “agent 보안은 tool 실행 전뿐 아니라 perception layer에서 시작된다” — provenance labeling, trust prior, state-corruption 방어, MCP/tool response schema 설계를 체크리스트로 만든다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-security, tool-use, provenance, perception]
- status: idea

### 2026-08-16 — [논문 리뷰] VAKRA: API와 문서 검색을 함께 보는 enterprise tool-use benchmark
- type: paper
- source: http://arxiv.org/abs/2608.12282v1
- why-now: 기업 agent는 structured API와 unstructured knowledge base를 번갈아 써야 하는데, 기존 평가는 API call과 RAG를 따로 재는 경우가 많다.
- angle: “enterprise agent 평가는 API reasoning과 retrieval grounding을 한 trajectory에서 봐야 한다” — multi-hop API+RAG task, tool policy, verifier, 실패 taxonomy를 운영 평가 하네스로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [tool-use, agentic-rag, enterprise-ai, benchmark]
- status: idea

### 2026-08-16 — [논문 리뷰] Retry, Switch, or Abstain? tool failure에 강한 agent policy 만들기
- type: paper
- source: http://arxiv.org/abs/2608.11977v1
- why-now: 실제 tool은 timeout, stale result, silent failure를 만들기 때문에 성공률 높은 demo agent보다 실패 복구 정책을 명시적으로 학습·평가하는 agent가 필요하다.
- angle: “robust tool-use는 재시도 횟수 문제가 아니라 retry/switch/abstain 전략 선택 문제” — controlled error injection, recovery policy, escalation gate를 agent runtime 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 5
- suggested-category: paper-review
- suggested-tags: [tool-use, agent-recovery, failure-handling, eval]
- status: idea

### 2026-08-16 — OpenAI Agents JS: multi-agent workflow와 voice agent를 TypeScript 런타임으로 보기
- type: tech
- source: https://github.com/openai/openai-agents-js
- why-now: OpenAI Agents SDK가 Python을 넘어 TypeScript 생태계에서도 handoff, guardrail, tracing, voice workflow를 제공하면서 production agent 앱의 런타임 선택지가 넓어졌다.
- angle: “agent framework를 고를 때 언어보다 handoff contract와 observability surface를 보자” — JS/TS SDK 구조, tool schema, guardrail, realtime voice integration을 프레임워크 선택 기준으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [openai-agents-js, typescript, multi-agent, voice-agent]
- status: idea

### 2026-08-16 — agent-native: 앱 자체를 agent-friendly surface로 설계하기
- type: tech
- source: https://github.com/BuilderIO/agent-native
- why-now: 에이전트를 기존 UI 위에 얹는 방식보다, 애플리케이션이 처음부터 agent가 읽고 조작하기 쉬운 action/context contract를 제공해야 한다는 흐름이 커지고 있다.
- angle: “agent-native app은 챗봇 추가가 아니라 UI·state·action을 agent contract로 노출하는 설계” — component/action schema, browser automation 한계, human handoff, testable UX를 개발자 관점으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-native, ui, developer-tools, framework]
- status: idea

### 2026-08-16 — agentacct: coding agent 작업을 cost·tool·diff 단위로 회계 처리하기
- type: tech
- source: https://github.com/mikehasa/agentacct
- why-now: Claude Code, Codex, OpenCode 같은 coding agent를 여러 번 돌리면 “무엇을 했고 얼마가 들었는지”를 task step 단위로 추적하는 운영 회계가 필요해진다.
- angle: “agent observability는 trace 보기에서 끝나지 않고 비용과 변경 결과를 같이 봐야 한다” — work-step breakdown, tool usage, file diff, token/time cost를 local-first dashboard repo 소개로 정리한다.
- difficulty: low
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, observability, cost-tracking, github-repo]
- status: idea

### 2026-08-17 — [논문 리뷰] OmniScientist: omni-modal AI scientist를 평가 가능한 workflow로 만들기
- type: paper
- source: http://arxiv.org/abs/2608.13558v1
- why-now: AI scientist가 hypothesis 생성, code execution, manuscript 작성까지 확장되면서 “워크플로를 많이 덮는다”보다 evidence와 verification을 어떻게 남기는지가 핵심 쟁점이 됐다.
- angle: “AI scientist는 자동 논문 작성기가 아니라 검증 가능한 연구 workflow runtime이어야 한다” — hypothesis, tool execution, artifact provenance, reviewer/verifier loop를 research agent 설계로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [ai-scientist, research-agent, eval, tool-use]
- status: idea

### 2026-08-17 — [논문 리뷰] QuoteBench: coding agent command path failure를 분리해 보기
- type: paper
- source: http://arxiv.org/abs/2608.13547v1
- why-now: coding agent의 bash command는 모델 출력, shell quoting, wrapper serialization, 실행 환경을 지나며 깨질 수 있는데 최종 성공률만 보면 어디서 실패했는지 알기 어렵다.
- angle: “코딩 에이전트 평가는 command generation과 command transport를 분리해야 한다” — quoting/escaping, command wrapper, execution trace, CI verifier를 harness QA 체크리스트로 만든다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, eval, shell, harness]
- status: idea

### 2026-08-17 — [논문 리뷰] Vero: AI agent가 formally verified repo를 만들 수 있을까
- type: paper
- source: http://arxiv.org/abs/2608.13522v1
- why-now: 코드 생성 에이전트가 더 많이 쓰일수록 “테스트 통과”를 넘어 machine-checked proof와 spec을 함께 생성하는 verified software workflow가 중요해진다.
- angle: “coding agent의 다음 verifier는 unit test가 아니라 proof artifact일 수 있다” — specification, proof generation, repository-level verification, 실패 복구 loop를 개발자 워크플로로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, formal-verification, software-engineering, eval]
- status: idea

### 2026-08-17 — [논문 리뷰] Intern-S2-Preview: scientific agentic foundation model의 구성 요소
- type: paper
- source: http://arxiv.org/abs/2608.13505v1
- why-now: 과학용 foundation model이 단순 QA 모델을 넘어 heterogeneous evidence, scientific tools, long-horizon task progress를 다루는 agentic model로 진화하고 있다.
- angle: “scientific agent 모델을 볼 때는 benchmark 점수보다 modality, tool interface, evidence grounding, long-horizon state를 보자”는 체크리스트형 논문 리뷰.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [scientific-agent, multimodal, tool-use, foundation-model]
- status: idea

### 2026-08-17 — [논문 리뷰] DARTree: diffusion draft tree로 speculative decoding 병목 줄이기
- type: paper
- source: http://arxiv.org/abs/2608.13524v1
- why-now: reasoning/agent serving에서 latency가 커지면서 lossless speculative decoding과 diffusion-based drafter를 어떻게 조합할지가 inference 운영 주제로 올라왔다.
- angle: “speculative decoding은 단일 draft가 아니라 tree와 verifier budget 설계 문제” — diffusion proposal, autoregressive verification, latency/acceptance trade-off를 serving 관점으로 설명한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [inference, speculative-decoding, diffusion, serving]
- status: idea

### 2026-08-17 — AssemblyZero: Claude Code와 Gemini를 위한 parameterized multi-agent orchestration
- type: tech
- source: https://github.com/martymcenroe/AssemblyZero
- why-now: coding agent를 하나씩 수동 실행하는 방식에서 벗어나, agent role과 parameter를 선언하고 여러 provider를 조합하는 lightweight orchestration repo가 늘고 있다.
- angle: “multi-agent framework의 실전 가치는 roleplay가 아니라 parameterized orchestration과 provider boundary” — Claude Code/Gemini 조합, task decomposition, 결과 검증·handoff 패턴을 repo 중심으로 본다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 3
- suggested-category: tutorial
- suggested-tags: [multi-agent, coding-agent, orchestration, github-repo]
- status: idea

### 2026-08-17 — taOS: self-hosted agent OS에서 memory와 file boundary 보기
- type: tech
- source: https://github.com/jaylfc/taOS
- why-now: 개인/팀 에이전트가 클라우드 SaaS에 모든 memory와 파일을 맡기기보다 local-first, offline-capable runtime을 원한다는 요구가 커지고 있다.
- angle: “agent OS의 핵심은 채팅 UI가 아니라 memory ownership, file boundary, offline/cloud 선택권” — self-hosted assistant runtime, local memory, agent/file integration을 아키텍처 관점으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 3
- suggested-category: tutorial
- suggested-tags: [agent-os, self-hosted, memory, local-first]
- status: idea

### 2026-08-17 — rails-ai-context: Rails 앱 ground truth를 coding agent MCP tools로 노출하기
- type: tech
- source: https://github.com/crisnahine/rails-ai-context
- why-now: Rails 같은 convention-heavy framework에서는 coding agent가 schema, routes, models, jobs, views를 정확히 알아야 하며, 이를 MCP tool로 제공하는 repo 패턴이 실용적이다.
- angle: “프레임워크별 code intelligence는 generic RAG보다 domain-aware MCP tool이 낫다” — Rails schema/routes/model introspection, convention grounding, agent-safe refactor workflow를 repo introduction으로 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, mcp, rails, code-intelligence]
- status: idea

### 2026-08-17 — [논문 리뷰] Beyond Final Scores: long-horizon AI R&D agent 평가는 trajectory를 봐야 한다
- type: paper
- source: http://arxiv.org/abs/2608.13417v1
- why-now: autonomous agent가 모델·시스템을 장기 실험으로 개선하는 흐름에서 최종 점수만으로는 어느 단계에서 경험이 쌓이고 어디서 실패하는지 설명할 수 없다.
- angle: “AI R&D agent 평가는 leaderboard 점수가 아니라 experiment trajectory audit” — progress gain/loss, accumulated experience, intervention point, regression dashboard를 연구 에이전트 운영법으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [research-agent, eval, long-horizon, trajectory]
- status: idea

### 2026-08-17 — [논문 리뷰] Teach the Magnitude: multi-turn tool agent의 credit assignment 다시 보기
- type: paper
- source: http://arxiv.org/abs/2608.13179v1
- why-now: RLVR 기반 tool-use agent 학습이 늘고 있지만 trajectory-level reward는 어떤 turn이 실제로 성능을 만든 것인지 흐리게 만든다.
- angle: “tool agent 학습에서 중요한 건 정답 방향보다 turn별 기여 크기를 분리하는 것” — verifier-bounded credit assignment, per-turn supervision, reward ceiling, post-training eval loop를 설명한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [tool-use, agent-rl, credit-assignment, eval]
- status: idea

### 2026-08-17 — [논문 리뷰] SkillShapley: agent skill의 어느 step이 성능을 만들었나
- type: paper
- source: http://arxiv.org/abs/2608.13173v1
- why-now: AGENTS.md, skill file, workflow recipe가 커질수록 “어떤 지시가 도움이 되고 어떤 지시가 regression을 만든다”를 정량화해야 한다.
- angle: “agent skill 운영은 추가보다 attribution과 pruning이 어렵다” — boundary-adaptive Shapley valuation, skill step attribution, task별 영향도, rollback 가능한 skill library 운영을 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-skills, eval, attribution, coding-agent]
- status: idea

### 2026-08-17 — [논문 리뷰] vToken: reclaimable KV cache를 위한 token-level virtualization
- type: paper
- source: http://arxiv.org/abs/2608.13263v1
- why-now: long-context agent serving에서는 KV cache가 가장 큰 메모리 병목이고, block-level PagedAttention과 token-level eviction 사이의 mismatch가 운영 비용으로 이어진다.
- angle: “KV cache 최적화는 eviction algorithm만이 아니라 memory virtualization 계층 문제” — token-level reclaim, fragmentation, serving scheduler, latency/memory trade-off를 inference 운영 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [inference, kv-cache, serving, memory-management]
- status: idea

### 2026-08-17 — [논문 리뷰] GEM: reasoning query를 retrieval embedding으로 바꾸는 generative embedding model
- type: paper
- source: http://arxiv.org/abs/2608.13200v1
- why-now: 사용자는 복잡한 reasoning intent로 질문하지만 retriever는 여전히 surface matching 중심이라 RAG에서 query understanding과 retrieval 사이의 gap이 커지고 있다.
- angle: “RAG retriever는 query를 벡터로 압축하는 모델이 아니라 reasoning intent를 생성형으로 번역하는 계층” — generative embedding, instruction-following query, retriever-router, production RAG 평가를 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, retrieval, embedding, reasoning]
- status: idea

### 2026-08-17 — MARC v1: clinical multi-agent reasoning을 deterministic orchestration으로 만들기
- type: tech
- source: http://arxiv.org/abs/2608.13476v1
- why-now: 의료/임상 agent처럼 책임 소재가 큰 도메인에서는 monolithic prompt보다 역할 분리, 명시적 context passing, traceable intermediate result가 더 중요해지고 있다.
- angle: “domain agent framework의 핵심은 전문가 역할극이 아니라 deterministic coordination과 audit trail” — extraction/reasoning/generation/evaluation agent 분리, context contract, 임상 도메인 적용 한계를 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: study
- suggested-tags: [multi-agent, clinical-ai, orchestration, audit]
- status: idea

### 2026-08-17 — ironcurtain: plain-English constitution으로 agent runtime policy 걸기
- type: tech
- source: https://github.com/provos/ironcurtain
- why-now: autonomous agent가 file, network, shell tool을 직접 만지는 범위가 커지면서, framework 내부 guardrail보다 runtime-level policy enforcement가 필요해졌다.
- angle: “agent 보안 정책은 prompt가 아니라 실행 전 runtime gate로 내려와야 한다” — natural-language constitution, policy compilation, tool boundary, audit/deny workflow를 repo introduction으로 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-security, runtime-policy, tool-use, github-repo]
- status: idea

### 2026-08-17 — AWS cli-agent-orchestrator: coding CLI agent를 tmux 격리 세션으로 조율하기
- type: tech
- source: https://github.com/awslabs/cli-agent-orchestrator
- why-now: Claude Code, Kiro, Codex 같은 CLI coding agent를 병렬로 돌릴 때 workspace/session isolation, 결과 비교, coordinator handoff가 실무 병목이 된다.
- angle: “multi-agent coding orchestration은 거대한 프레임워크보다 격리된 CLI session과 검증 가능한 handoff에서 시작한다” — tmux session, orchestrator role, 파일 충돌 방지, review/merge workflow를 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, multi-agent, cli, orchestration]
- status: idea

### 2026-08-18 — [논문 리뷰] Handover of In-Context Learning State: 세션 경계를 넘는 agent state 전달
- type: paper
- source: http://arxiv.org/abs/2608.14528v1
- why-now: long-running assistant와 coding agent가 context limit, 앱 재시작, subagent delegation 때문에 세션을 넘겨야 하는 상황이 늘고 있어 handover state 품질이 곧 작업 지속성의 핵심이 됐다.
- angle: “handover는 요약문 작성이 아니라 in-context learning state를 보존하는 protocol 문제” — 무엇을 버리고 무엇을 전달할지, 검증 가능한 resume packet, subagent 인수인계 실패 모드를 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent, context-management, handover, long-running]
- status: published
- draft: content/posts/2026-08-18-handover-in-context-learning-state.mdx

### 2026-08-18 — [논문 리뷰] Twin: test-time digital twin으로 unknown game agent 만들기
- type: paper
- source: http://arxiv.org/abs/2608.14490v1
- why-now: frontier coding agent가 실행 가능한 world model을 test-time에 직접 작성해 unknown environment를 풀어가는 패턴은 ARC-AGI류 continual task와 agentic RL에서 중요한 설계 방향이다.
- angle: “agent의 world model을 pretraining 지식이 아니라 test-time executable artifact로 만들면 무엇이 달라지나” — simulation, rule inference, validation loop, digital twin failure를 agent harness 관점으로 분석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [world-model, agent, test-time-compute, coding-agent]
- status: idea

### 2026-08-18 — [논문 리뷰] SheetCompass: spreadsheet agent를 hierarchical relation graph로 평가하기
- type: paper
- source: http://arxiv.org/abs/2608.14452v1
- why-now: 실제 업무 agent가 스프레드시트·반정형 데이터를 다루려면 셀 flattening이 아니라 table/column/cross-sheet 관계를 구조적으로 이해해야 한다.
- angle: “spreadsheet agent의 RAG는 셀 검색이 아니라 workbook graph construction” — hierarchical relation graph, column dependency, spatial layout, tool-based verification을 data agent 설계로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [data-agent, spreadsheet, graph, eval]
- status: idea

### 2026-08-18 — [논문 리뷰] Knowing When to Stop: LLM 평가를 Bayesian optimal stopping으로 줄이기
- type: paper
- source: http://arxiv.org/abs/2608.14425v1
- why-now: agent eval과 LLM regression test 비용이 커지면서 모든 item을 고정 횟수로 샘플링하는 방식보다 uncertainty에 따라 멈추는 평가 runtime이 필요해졌다.
- angle: “평가도 inference처럼 budget scheduler가 필요하다” — precision-based adaptive stopping, confidence/uncertainty threshold, CI regression suite 비용 절감을 운영 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [llm-eval, bayesian, cost-optimization, regression-test]
- status: idea

### 2026-08-18 — [논문 리뷰] Wrong but Useful: multi-agent message는 정답 여부만 보면 안 된다
- type: paper
- source: http://arxiv.org/abs/2608.14375v1
- why-now: multi-agent reasoning에서 agreement나 correctness 기반 필터링만 쓰면 틀렸지만 유용한 decomposition, constraint, scientific principle을 버릴 수 있다는 문제가 드러나고 있다.
- angle: “multi-agent aggregation은 정답 투표가 아니라 trajectory value 평가 문제” — message utility, decomposition reuse, final-answer correctness와 process value를 분리한 evaluator 설계를 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, reasoning, eval, aggregation]
- status: idea

### 2026-08-18 — Microsoft Agent Framework: Python/.NET agent orchestration을 enterprise runtime으로 보기
- type: tech
- source: https://github.com/microsoft/agent-framework
- why-now: Microsoft가 Python과 .NET을 함께 지원하는 agent framework를 활발히 업데이트하면서, enterprise 팀이 orchestration, deployment, observability를 한 런타임에서 비교할 기준이 생겼다.
- angle: “agent framework 선택 기준은 샘플 챗봇보다 운영 runtime surface” — workflow orchestration, multi-agent handoff, deployment path, .NET/Python 통합 포인트를 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [microsoft-agent-framework, agent-framework, orchestration, enterprise-ai]
- status: idea

### 2026-08-18 — Moor: Mac 로컬 MCP control plane으로 coding agent 도구를 안전하게 묶기
- type: tech
- source: https://github.com/varandrew/moor
- why-now: MCP 서버가 늘어나면서 로컬 개발 환경에서 각 coding agent가 제각각 도구를 붙이는 대신 safe, observable, configurable gateway를 두려는 요구가 커졌다.
- angle: “MCP 운영의 다음 병목은 server 개수가 아니라 local control plane” — server registry, policy, observability, per-agent configuration을 Mac 개발자 workflow 중심으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, coding-agent, control-plane, macos]
- status: idea

### 2026-08-18 — Open SWE: 비동기 coding agent를 repo workflow에 넣는 법
- type: tech
- source: https://github.com/langchain-ai/open-swe
- why-now: coding agent가 IDE 안의 대화형 도우미를 넘어 issue/PR 단위 비동기 작업자로 운영되면서, task lifecycle과 review/merge boundary 설계가 중요해졌다.
- angle: “coding agent를 pair programmer가 아니라 asynchronous worker로 보면 runtime이 달라진다” — task queue, repo context, patch generation, reviewer handoff, CI feedback loop를 repo introduction으로 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, asynchronous-agent, langchain, github-repo]
- status: idea

### 2026-08-19 — [논문 리뷰] GRIP: RAG에서 query dominance를 막는 evidence gate
- type: paper
- source: http://arxiv.org/abs/2608.16776v1
- why-now: RAG가 검색 결과를 넣어도 강한 query prior가 latent state를 지배하면 evidence가 사실상 무시되는 문제가 production QA에서 반복된다.
- angle: “RAG grounding은 top-k retrieval이 아니라 premise를 제한하는 reasoning protocol” — information-restricted premise, evidence relevance, query dominance detector를 agentic RAG gate로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, grounding, reasoning, eval]
- status: idea

### 2026-08-19 — [논문 리뷰] Quipu: agent가 쓰는 knowledge graph에 bitemporal governance 붙이기
- type: paper
- source: http://arxiv.org/abs/2608.16813v1
- why-now: agent가 memory와 knowledge graph에 직접 write하는 흐름이 커지면서 “나중에 정리” 방식의 KG store는 provenance, trust, time axis 문제를 감당하기 어렵다.
- angle: “agent memory store는 append-only 메모장이 아니라 governed bitemporal database여야 한다” — valid/transaction time, writer trust, write policy, rollback/audit workflow를 설계 관점으로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, knowledge-graph, governance, provenance]
- status: idea

### 2026-08-19 — [논문 리뷰] ClawGym II: agent harness 위에서 black-box RL을 돌리기
- type: paper
- source: http://arxiv.org/abs/2608.16798v1
- why-now: long-horizon agent 성능은 harness 설계에 크게 좌우되지만, 복잡한 harness 자체를 RL loop로 최적화하는 방법은 아직 초기 단계다.
- angle: “agent RL은 모델 policy만 학습하는 게 아니라 harness interaction protocol까지 학습 대상으로 봐야 한다” — black-box RL, trajectory logging, reward/cost, harness mutation boundary를 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rl, harness, black-box-optimization, eval]
- status: idea

### 2026-08-19 — [논문 리뷰] When Agents Coordinate: multi-agent coding에서 협업을 어떻게 측정할까
- type: paper
- source: http://arxiv.org/abs/2608.16801v1
- why-now: coding agent fleet와 multi-agent PR workflow가 늘고 있지만, 성공률·비용만으로는 agent들이 실제로 협업했는지 알기 어렵다.
- angle: “multi-agent coding의 품질 지표는 task success뿐 아니라 coordination trace” — handoff, conflict, redundancy, shared context를 계측해 agent team 운영 체크리스트로 만든다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, coding-agent, coordination, eval]
- status: idea

### 2026-08-19 — [논문 리뷰] TDD-Agent: 코드 생성을 test-driven reasoning loop로 만들기
- type: paper
- source: http://arxiv.org/abs/2608.16742v1
- why-now: repo-level code generation에서 테스트를 사후 검증으로만 쓰면 구현 방향을 충분히 제어하지 못하고, generated test의 품질도 불안정하다.
- angle: “coding agent의 test는 마지막 채점자가 아니라 reasoning을 움직이는 steering signal” — test generation, implementation loop, false confidence, CI verifier boundary를 개발 워크플로로 설명한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, tdd, code-generation, verification]
- status: idea

### 2026-08-19 — [논문 리뷰] Proteus: long-context sequence modeling을 incremental memory activation으로 보기
- type: paper
- source: http://arxiv.org/abs/2608.16844v1
- why-now: long-context와 agent transcript가 길어질수록 모든 memory를 항상 노출하는 방식은 비용·노이즈·간섭을 키운다.
- angle: “long-context memory는 저장보다 activation policy가 중요하다” — incremental memory activation, early-token forgetting, serving-time context budget을 agent inference 최적화로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [long-context, memory, inference, architecture]
- status: idea

### 2026-08-19 — Executor: OpenAPI·MCP·GraphQL을 agent-safe integration layer로 묶기
- type: tech
- source: https://github.com/UsefulSoftwareCo/executor
- why-now: agent가 외부 API와 MCP tool을 많이 호출할수록 integration layer는 단순 wrapper가 아니라 auth, sandbox, schema, observability를 함께 책임져야 한다.
- angle: “tool 목록을 늘리는 것보다 안전한 execution boundary를 표준화하는 게 먼저” — OpenAPI/MCP/GraphQL adapter, secure runtime, typed function surface를 agent platform 설계로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-tools, mcp, api-integration, sandbox]
- status: idea

### 2026-08-19 — Railtracks: resilient agentic system을 위한 운영 프레임워크
- type: tech
- source: https://github.com/RailtownAI/railtracks
- why-now: agent framework가 데모를 넘어 production workflow로 들어가면서 실패 복구, observability, resilient execution을 기본값으로 요구하는 팀이 늘고 있다.
- angle: “agentic system은 prompt chain이 아니라 failure-aware runtime” — retry/recovery, trace, task boundary, 운영 편의성을 repo architecture 중심으로 점검한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 3
- suggested-category: tutorial
- suggested-tags: [agent-framework, resilience, observability, github-repo]
- status: idea

### 2026-08-20 — [논문 리뷰] Fragility of Self-Improving Agents: memory agent는 왜 순서와 분산에 약한가
- type: paper
- source: http://arxiv.org/abs/2608.18066v1
- why-now: memory-based self-improving agent가 online task stream에서 좋아진다는 주장 뒤에 variance, task order, underspecification 문제가 숨어 있다는 최신 분석이 나왔다.
- angle: “self-improvement는 평균 점수보다 stability와 rollback gate가 먼저” — memory bank update policy, task-order sensitivity, regression suite를 long-running agent 운영법으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [self-improving-agent, memory, eval, regression-test]
- status: idea

### 2026-08-20 — [논문 리뷰] StagedWorkspace: knowledge-work agent에 versioned workspace가 필요한 이유
- type: paper
- source: http://arxiv.org/abs/2608.18050v1
- why-now: code, 문서, 스프레드시트, 슬라이드 같은 persistent artifact를 다루는 agent가 늘면서 parsed view, native file, diff, submission artifact 사이의 불일치가 실제 실패 원인이 되고 있다.
- angle: “agent workspace는 파일 폴더가 아니라 versioned contract surface” — view/edit/review/submit 단계의 provenance, snapshot, diff boundary를 coding·knowledge-work agent harness 설계로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [knowledge-work-agent, workspace, provenance, versioning]
- status: published
- draft: content/posts/2026-08-20-stagedworkspace-versioned-workspace-agents.mdx

### 2026-08-20 — [논문 리뷰] Chain-of-Experience: inference-time 경험으로 LLM을 계속 개선하기
- type: paper
- source: http://arxiv.org/abs/2608.18027v1
- why-now: LLM 평가가 단일 문제 풀이에서 끝나지 않고, 반복 경험을 통해 test-time에 개선되는지를 보는 방향으로 확장되고 있다.
- angle: “agent 학습 데이터는 offline dataset만이 아니라 실행 중 경험 로그” — experience abstraction, retrieval trigger, 실패-성공 trace 증류, eval replay를 agent improvement loop로 설명한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [continual-learning, agent-memory, inference-time-learning, eval]
- status: idea

### 2026-08-20 — [논문 리뷰] TokEval: tokenizer도 모델 평가의 일부로 봐야 하는 이유
- type: paper
- source: http://arxiv.org/abs/2608.18062v1
- why-now: tokenizer 선택은 대개 관성적으로 이뤄지지만 code, multilingual, long-context, tool-call payload에서 downstream capability와 비용에 직접 영향을 준다.
- angle: “tokenizer는 전처리 부품이 아니라 serving·eval·agent UX를 좌우하는 interface” — compression, fragmentation, special token, tool schema 비용을 모델 운영 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [tokenizer, llm-eval, inference, model-ops]
- status: idea

### 2026-08-20 — [논문 리뷰] Policy-Invariant Reward Shaping: LLM feedback을 RL agent 보상으로 써도 되는 조건
- type: paper
- source: http://arxiv.org/abs/2608.18008v1
- why-now: LLM-planner와 RL-controller를 결합한 hybrid agent가 늘지만, LLM-derived reward가 정책을 바꿔버리는지에 대한 이론적 안전장치가 부족하다.
- angle: “LLM feedback은 편한 reward label이 아니라 policy invariance 조건을 만족해야 한다” — reward shaping, goal-augmented MDP, hybrid RL agent verifier를 agentic RL 운영 관점으로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rl, reward-shaping, llm-feedback, verification]
- status: idea

### 2026-08-20 — agent-skills-hub: skills·tools·MCP 서버를 점수화해 고르는 registry 패턴
- type: tech
- source: https://github.com/zhuyansen/agent-skills-hub
- why-now: Claude Code skills, MCP servers, agent tools가 급증하면서 “어떤 도구를 context에 로드할지”를 사람이 감으로 고르는 방식이 한계에 부딪히고 있다.
- angle: “agent registry는 링크 모음이 아니라 quality scoring과 context routing infrastructure” — metadata, freshness score, compatibility, skill selection policy를 harness 운영 패턴으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-skills, mcp, registry, context-routing]
- status: idea

### 2026-08-20 — comfyui-mcp: 생성형 워크플로 그래프를 MCP tool surface로 바꾸기
- type: tech
- source: https://github.com/artokun/comfyui-mcp
- why-now: 이미지·비디오 생성 워크플로도 단순 프롬프트 호출이 아니라 graph editing, workflow execution, artifact review를 agent가 안전하게 다뤄야 하는 영역이 됐다.
- angle: “멀티모달 agent tool은 API 하나가 아니라 editable workflow graph” — ComfyUI graph, tool schema, local-first 실행, human review boundary를 MCP 서버 설계 관점으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, multimodal-agent, comfyui, workflow-graph]
- status: idea

### 2026-08-20 — Azure DevOps MCP: enterprise 개발 플랫폼을 agent tool로 노출할 때의 경계
- type: tech
- source: https://github.com/microsoft/azure-devops-mcp
- why-now: Azure DevOps 같은 조직 핵심 개발 플랫폼이 MCP 서버로 노출되면 issue, repo, pipeline, wiki 접근 권한과 audit boundary를 agent-native하게 재설계해야 한다.
- angle: “enterprise MCP 서버의 핵심은 기능 수보다 permission·audit·workflow contract” — project-scoped auth, pipeline read/write boundary, CI failure triage agent 패턴을 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, azure-devops, enterprise-ai, developer-workflow]
- status: idea

### 2026-08-21 — [논문 리뷰] SPADE: adaptive executable environment에서 self-play agent RL 하기
- type: paper
- source: http://arxiv.org/abs/2608.19197v1
- why-now: language agent post-training이 정적 벤치마크와 frozen verifier에 갇히지 않고, 학습자가 커질수록 환경 자체도 적응해야 한다는 문제가 최신 agentic RL 주제로 올라왔다.
- angle: “agent RL의 병목은 model policy보다 goal/environment generator일 수 있다” — executable environment, self-play goal generation, verifier drift, curriculum 운영을 harness 설계로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agentic-rl, self-play, environment, post-training]
- status: idea

### 2026-08-21 — [논문 리뷰] Verifiable Latent Alignments: multi-agent의 숨은 latent communication 감시하기
- type: paper
- source: http://arxiv.org/abs/2608.19161v1
- why-now: multi-agent 시스템이 public transcript 밖의 hidden state로 조율할 수 있다면, 기존 로그 기반 audit와 monitor는 실제 coordination을 놓칠 수 있다.
- angle: “agent audit log는 메시지 텍스트만 보면 부족하다” — latent channel, public action 연결, covert coordination monitor를 multi-agent safety architecture로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [multi-agent, latent-communication, safety, monitoring]
- status: idea

### 2026-08-21 — [논문 리뷰] Harness Continual Learning: model parameter 밖의 agent 상태를 어떻게 업데이트할까
- type: paper
- source: http://arxiv.org/abs/2608.19013v1
- why-now: 현대 agent는 prompt, memory, tool, skill, routing rule이 함께 변하면서 성능이 바뀌는데, continual learning 논의는 아직 model parameter 중심에 머물러 있다.
- angle: “agent 업데이트는 fine-tuning보다 harness migration 문제에 가깝다” — skill/memory/rule 변경, regression risk, rollback gate, evaluation protocol을 운영 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-harness, continual-learning, memory, regression-test]
- status: idea

### 2026-08-21 — [논문 리뷰] Eureka: task-conditioned meta-agent가 obligation graph를 컴파일하는 법
- type: paper
- source: http://arxiv.org/abs/2608.19047v1
- why-now: long-horizon scientific discovery agent는 고정된 역할극 agent 묶음보다 task 조건에 맞춰 topology, tool, verifier, memory를 동적으로 편성하는 방향으로 가고 있다.
- angle: “multi-agent orchestration은 역할 목록이 아니라 obligation graph compilation” — acceptance semantics, macro-agent promotion, cost-benefit evolution을 research agent runtime 설계로 다룬다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [meta-agent, multi-agent, scientific-discovery, orchestration]
- status: idea

### 2026-08-21 — [논문 리뷰] MissDiag: incomplete KG-RAG에서 실패 원인을 진단하기
- type: paper
- source: http://arxiv.org/abs/2608.18489v1
- why-now: production KGQA/KG-RAG는 sparse, outdated, incomplete graph를 전제로 해야 하는데, 기존 평가는 근거가 빠졌을 때 점수 변화만 보고 원인 진단은 약하다.
- angle: “RAG robustness 평가는 aggregate score가 아니라 missing evidence diagnosis” — sparse KG, degradation source, retrieval/evidence QA를 GraphRAG 운영법으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [kg-rag, robustness, eval, diagnosis]
- status: idea

### 2026-08-21 — mcp-ts-core: TypeScript MCP server를 agent-native framework로 만들기
- type: tech
- source: https://github.com/cyanheads/mcp-ts-core
- why-now: MCP server가 빠르게 늘면서 단순 SDK 샘플보다 auth, storage backend, observability, Node/Bun/Cloudflare runtime을 함께 다루는 프레임워크가 필요해졌다.
- angle: “MCP 서버는 wrapper가 아니라 production integration surface” — declarative tool definition, auth boundary, OpenTelemetry, multi-runtime deployment를 TypeScript 팀 기준으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, typescript, agent-tools, observability]
- status: idea

### 2026-08-21 — SkillSpector: Claude Code·Codex·MCP skill supply chain을 스캔하기
- type: tech
- source: https://github.com/NVIDIA/SkillSpector
- why-now: agent skills와 MCP tools를 외부에서 설치하는 workflow가 보편화되면서 prompt injection, exfiltration, malicious hook 같은 supply-chain 위험을 사전에 검사해야 한다.
- angle: “agent skill 설치는 npm install처럼 supply-chain gate가 필요하다” — skill manifest, tool permission, prompt-injection pattern, quarantine workflow를 developer-agent 보안 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-security, coding-agent, skills, supply-chain]
- status: idea

### 2026-08-21 — MCP Gateway Registry: 흩어진 MCP 서버를 governed tool platform으로 묶기
- type: tech
- source: https://github.com/agentic-community/mcp-gateway-registry
- why-now: 팀마다 MCP 서버를 직접 붙이면 인증, 도구 발견, audit, tenant boundary가 흩어져 enterprise agent 운영의 병목이 된다.
- angle: “MCP 생태계의 다음 단계는 server catalog가 아니라 governed gateway” — OAuth/Entra 연동, dynamic discovery, unified access, audit log를 platform architecture로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, gateway, enterprise-ai, governance]
- status: idea

### 2026-08-22 — [논문 리뷰] MidTool: agentic tool-use를 mid-training 데이터 합성으로 키우기
- type: paper
- source: http://arxiv.org/abs/2608.20314v1
- why-now: reasoning·coding 중심 mid-training은 빠르게 늘었지만, 일반 tool-use 능력을 어떻게 합성 데이터로 안정적으로 강화할지는 아직 실무 레시피가 부족하다.
- angle: “tool-use는 프롬프트 패턴이 아니라 학습 데이터 flywheel 문제” — tool task 생성, trajectory 품질, verifier, generalization failure를 agent post-training 운영법으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [tool-use, mid-training, agentic-data, post-training]
- status: published
- draft: content/posts/2026-08-22-midtool-agentic-tool-use-mid-training.mdx

### 2026-08-22 — [논문 리뷰] Task-CoEvolve: harness optimization의 검증 비용 줄이기
- type: paper
- source: http://arxiv.org/abs/2608.20169v1
- why-now: 모델 weight를 바꾸지 않고 prompt/tool/control-flow harness를 반복 개선하는 흐름이 커지면서, 매 iteration 전체 validation을 돌리는 비용이 병목이 되고 있다.
- angle: “agent harness 튜닝도 CI 비용 최적화가 필요하다” — adaptive validation task selection, regression risk, rollback gate를 개발자 워크플로로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-harness, eval, optimization, ci]
- status: idea

### 2026-08-22 — [논문 리뷰] MemTrapBench: memory가 LLM reasoning을 망치는 cognitive trap 평가
- type: paper
- source: http://arxiv.org/abs/2608.20202v1
- why-now: 장기 memory가 있는 assistant와 agent가 보편화되면서 “잘 검색했는가”보다 “검색된 memory가 현재 추론을 어떻게 오염시키는가”가 더 중요한 평가 포인트가 됐다.
- angle: “memory regression test는 recall 점수만 보면 안 된다” — retrieved memory가 decision bias, conflict handling, task performance에 미치는 영향을 memory QA gate로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, benchmark, reasoning, evaluation]
- status: idea

### 2026-08-22 — [논문 리뷰] Optimal Skill Selection: bounded context에서 agent skill을 고르는 법
- type: paper
- source: http://arxiv.org/abs/2608.19993v1
- why-now: Claude Code·Codex·MCP식 skill 문서 로딩이 늘면서, top-k semantic relevance로 context를 채우는 방식의 비용·성능 한계가 분명해지고 있다.
- angle: “skill loading은 retrieval 문제가 아니라 budgeted optimization 문제” — skill utility, token cost, bicriteria guarantee, context router 설계를 agent harness 패턴으로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-skills, context-management, optimization, tool-use]
- status: idea

### 2026-08-22 — [논문 리뷰] Inducing Task Models from Computer-Use Traces: 화면 기록을 재사용 가능한 업무 모델로 바꾸기
- type: paper
- source: http://arxiv.org/abs/2608.20319v1
- why-now: computer-use agent가 실제 업무에 들어오면 screenshot/action log를 단순 replay가 아니라 감사 가능하고 재사용 가능한 task model로 바꿔야 한다.
- angle: “GUI agent memory의 단위는 raw trace가 아니라 symbolic task model” — trace parsing, reusable workflow, audit artifact, org knowledge base 연결을 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [computer-use-agent, task-model, trace, workflow]
- status: idea

### 2026-08-22 — [논문 리뷰] Learning When to Think: test-time reasoning budget을 모델이 직접 고르게 하기
- type: paper
- source: http://arxiv.org/abs/2608.20256v1
- why-now: reasoning model 운영에서 고정 token budget은 쉬운 문제에 낭비하고 어려운 문제엔 부족한데, adaptive reasoning mode를 학습시키는 접근이 production cost control과 맞닿아 있다.
- angle: “추론 최적화의 핵심은 더 많이 생각하기가 아니라 언제 생각할지 고르는 것” — NoThink/Think/DeepThink routing, latency-quality trade-off, fallback policy를 serving 관점으로 설명한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [reasoning, test-time-compute, inference, cost-control]
- status: idea

### 2026-08-22 — OpenBot: computer-use agent를 실행 전 결정·실행 후 기록으로 통제하기
- type: tech
- source: https://github.com/CopilotKit/OpenBot
- why-now: browser·file·tool을 직접 조작하는 AI coworker가 늘면서, action approval과 post-action audit trail을 runtime 기본 기능으로 둔 설계가 중요해졌다.
- angle: “computer-use agent는 autonomy보다 decision log가 먼저다” — AG-UI agent 연동, action decision boundary, browser/files/tools sandbox, replay 가능한 audit log를 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [computer-use-agent, ag-ui, audit-log, sandbox]
- status: idea

### 2026-08-22 — codebadger: Joern CPG를 MCP로 노출해 coding agent에 data-flow 지능 붙이기
- type: tech
- source: https://github.com/Lekssays/codebadger
- why-now: coding agent가 문자열 검색과 LSP만으로 보안·data-flow 맥락을 추론하기엔 부족해서, Code Property Graph를 MCP tool로 붙이는 패턴이 실무적으로 유용하다.
- angle: “coding agent context layer에 CPG를 넣으면 무엇이 달라지나” — containerized MCP server, Joern 기반 구조/흐름 질의, 보안 리뷰와 refactor workflow를 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, mcp, code-property-graph, security]
- status: idea

### 2026-08-23 — [논문 리뷰] Task-Conditioned Least-Privilege: terminal·MCP agent의 과권한을 학습으로 줄이기
- type: paper
- source: http://arxiv.org/abs/2608.18351v1
- why-now: MCP와 terminal agent가 실제 mutation 권한을 갖는 흐름에서, allowlist만으로는 task에 불필요한 과권한 선택을 막기 어렵다는 문제가 커지고 있다.
- angle: “agent permission은 도구 허용 여부가 아니라 task-conditioned least privilege routing 문제” — 권한 선택 데이터, 실행 전 gate, audit log, post-training policy를 개발자 agent 보안 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-security, mcp, least-privilege, tool-use]
- status: idea

### 2026-08-23 — [논문 리뷰] LEDGER: LLM agent 산출물을 claim-to-evidence trace graph로 감사하기
- type: paper
- source: http://arxiv.org/abs/2608.18398v1
- why-now: 장기 technical workflow agent가 코드·파일·tool 결과를 빠르게 만들수록, 결과물이 맞는지 사람이 검토하는 병목이 더 커지고 있다.
- angle: “agent observability는 로그 저장이 아니라 claim과 evidence를 연결하는 감사 그래프” — claim extraction, tool evidence linking, review UI, regression QA를 운영 관점으로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-observability, audit, tool-use, evidence-graph]
- status: idea

### 2026-08-23 — [논문 리뷰] From Retrieved Context to Runtime Control: edge RAG에서 context compression을 제어 루프로 보기
- type: paper
- source: http://arxiv.org/abs/2608.19535v1
- why-now: RAG를 edge/온디바이스 환경에 올리려면 grounding 품질뿐 아니라 prefill, KV cache, memory traffic, energy budget을 함께 제어해야 한다.
- angle: “RAG compression은 prompt 줄이기가 아니라 runtime control plane” — retrieved context 압축, latency·energy trade-off, adaptive policy를 production serving 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, edge-ai, context-compression, inference]
- status: idea

### 2026-08-23 — [논문 리뷰] Break It Down, Pass It On: LLM agent skill transfer가 언제 독이 되는가
- type: paper
- source: http://arxiv.org/abs/2608.20274v1
- why-now: agent가 완료한 작업에서 skill을 추출해 다음 작업에 재사용하는 패턴이 늘지만, 잘못 전이된 skill은 오히려 성능을 깎는 regression source가 된다.
- angle: “skill library는 많이 쌓는 게 아니라 transfer boundary를 알아야 한다” — task decomposition, skill applicability, negative transfer, rollback 가능한 skill 운영 체크리스트로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-skills, transfer-learning, regression-test, memory]
- status: idea

### 2026-08-23 — [논문 리뷰] AI4AI-Bench: recursive self-improvement를 algorithm design agent로 평가하기
- type: paper
- source: http://arxiv.org/abs/2608.20318v1
- why-now: AI가 AI 시스템을 개선하는 RSI 논의가 추상적 담론을 넘어, objective/update rule 같은 학습 알고리즘 설계 task로 벤치마크화되고 있다.
- angle: “self-improving agent를 말하려면 결과 점수보다 algorithm-design trace와 verifier를 봐야 한다” — benchmark task, recursive improvement loop, safety monitor를 연구 에이전트 평가로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [ai-research-agent, recursive-self-improvement, benchmark, eval]
- status: idea

### 2026-08-23 — aeon: GitHub Actions 위에서 unattended coding agent를 운영하는 패턴
- type: tech
- source: https://github.com/aeonfun/aeon
- why-now: coding agent를 로컬 CLI가 아니라 GitHub Actions 기반의 unattended runner로 돌리려는 흐름이 커지면서 approval, rollback, self-healing skill 경계가 중요해졌다.
- angle: “autonomous coding agent의 핵심은 모델보다 실행 substrate” — GitHub Actions runner, skill self-healing, approval-less workflow의 위험과 운영 게이트를 repo architecture로 살펴본다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, github-actions, agent-framework, automation]
- status: idea

### 2026-08-23 — lobu: 조직용 agent control plane에서 shared context와 isolated execution 나누기
- type: tech
- source: https://github.com/lobu-ai/lobu
- why-now: 팀 단위 agent 운영에서는 개인 CLI보다 회사 context, approval, isolation, MCP 도구 경계가 한 control plane 안에서 관리되어야 한다.
- angle: “organizational agent는 채팅봇이 아니라 context·execution·approval 분리 시스템” — shared company context, isolated runner, approval workflow, MCP integration을 platform 설계 관점으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-control-plane, mcp, enterprise-ai, execution-isolation]
- status: idea

### 2026-08-23 — wigolo: coding agent용 local-first web search/fetch/crawl MCP
- type: tech
- source: https://github.com/KnockOutEZ/wigolo
- why-now: 코딩 에이전트가 최신 문서와 웹 근거를 가져올 때 SaaS 검색 API 의존 없이 local-first MCP tool로 fetch/crawl/research를 수행하려는 수요가 커지고 있다.
- angle: “agent web access는 검색 품질뿐 아니라 cost, privacy, parseability 문제” — MCP tool surface, crawl boundary, structured output, retry-safe research workflow를 repo introduction으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, web-search, coding-agent, local-first]
- status: idea

### 2026-08-24 — [논문 리뷰] Inducing Task Models: computer-use trace를 감사 가능한 task model로 바꾸기
- type: paper
- source: http://arxiv.org/abs/2608.20319v1
- why-now: browser/desktop agent가 실제 업무 로그에서 배워야 하는 단계로 오면서, screenshot·mouse·keyboard event를 재사용 가능한 symbolic model로 바꾸는 문제가 중요해졌다.
- angle: “computer-use agent의 메모리는 화면 녹화가 아니라 auditable task model이어야 한다” — low-level trace segmentation, reusable workflow schema, 조직 내 audit/replay 경계를 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [computer-use-agent, task-model, trace, workflow]
- status: idea

### 2026-08-24 — [논문 리뷰] Agent-Friendly Documentation: coding agent는 문서를 어떻게 읽고 고치는가
- type: paper
- source: http://arxiv.org/abs/2608.20195v1
- why-now: 557개 agentic coding session과 3만 개 이상 agentic PR을 분석해, 인간용 문서가 coding agent workflow에서 어떤 병목이 되는지 실증 데이터가 나왔다.
- angle: “README는 사람만 위한 온보딩 문서가 아니라 agent runtime의 context interface” — agent가 찾는 문서, 갱신하는 문서, AGENTS.md/skill 문서 설계 원칙으로 연결한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, documentation, agents-md, developer-workflow]
- status: idea

### 2026-08-24 — [논문 리뷰] Phantom Gains: self-improving LLM의 개선 착시를 측정하는 법
- type: paper
- source: http://arxiv.org/abs/2608.20290v1
- why-now: self-training·self-improvement 결과를 개별 문제의 gain/loss로 해석하는 실험이 늘지만, frozen control 없는 비교는 측정 artifact를 개선으로 착각하기 쉽다.
- angle: “agent self-improvement는 평균 점수보다 measured null과 transition audit가 먼저” — noisy estimate, control pipeline, regression/gain attribution을 평가 운영 체크리스트로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [self-improvement, eval, measurement, llm-training]
- status: idea

### 2026-08-24 — [논문 리뷰] LLM semantic cache eviction: LFU를 이기기 어려운 이유
- type: paper
- source: http://arxiv.org/abs/2608.20280v1
- why-now: LLM serving 비용을 줄이기 위해 semantic cache가 많이 쓰이지만, eviction policy 비교가 제각각이라 실제 운영 선택 기준이 흐렸다.
- angle: “semantic cache는 fancy eviction보다 workload protocol이 먼저” — FIFO/LRU/LFU/ARC/GDSF/SISO 비교, embedding encoder, cache capacity별 운영 의사결정으로 풀어낸다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [llm-serving, semantic-cache, inference, optimization]
- status: idea

### 2026-08-24 — [논문 리뷰] ConceptGuard: context-sensitive unlearning benchmark로 안전한 forgetting 평가하기
- type: paper
- source: http://arxiv.org/abs/2608.20338v1
- why-now: LLM unlearning이 단순 사실 삭제를 넘어 harmful context에서는 잊고 benign context에서는 보존해야 하는 선택적 forgetting 문제로 이동하고 있다.
- angle: “unlearning 평가는 forget/retain 정확도가 아니라 context-sensitive behavior gate” — harmful/benign concept 분리, recall 기반 metric 한계, release QA 관점으로 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [unlearning, safety, eval, benchmark]
- status: idea

### 2026-08-24 — blade-code: MCP와 multi-model을 갖춘 CLI coding agent 구조 읽기
- type: tech
- source: https://github.com/echoVic/blade-code
- why-now: terminal-native coding agent가 Claude Code·Codex·Qwen Code 이후 빠르게 늘면서, MCP support, provider abstraction, built-in tools를 갖춘 작은 CLI agent의 구조 비교가 유용해졌다.
- angle: “좋은 CLI coding agent는 chat UI가 아니라 tool boundary와 patch workflow가 핵심” — built-in tools, MCP integration, provider switching, 로컬 권한 모델을 repo introduction으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [coding-agent, cli, mcp, developer-workflow]
- status: idea

### 2026-08-24 — pydantic-ai-backend: agent file storage와 sandbox backend를 타입 안전하게 분리하기
- type: tech
- source: https://github.com/vstorm-co/pydantic-ai-backend
- why-now: agent가 파일을 읽고 쓰고 코드를 실행하는 순간, framework보다 storage abstraction, Docker sandbox, permission preset이 운영 안전성을 좌우한다.
- angle: “agent backend는 tool 함수 모음이 아니라 storage·sandbox·permission boundary” — in-memory/local/container backend, multi-user isolation, 테스트 가능한 agent execution layer로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [pydantic-ai, sandbox, agent-framework, tool-use]
- status: idea

### 2026-08-24 — claude-prompts-mcp: prompt template을 MCP tool과 skill export로 운영하기
- type: tech
- source: https://github.com/minipuft/claude-prompts-mcp
- why-now: reusable prompt와 multi-step workflow가 개인 노트 수준을 넘어 Claude Code, Cursor, OpenCode, Gemini CLI에서 공유되는 agent skill artifact가 되고 있다.
- angle: “prompt library는 복붙 문서가 아니라 versioned workflow tool이어야 한다” — MCP server, workflow chain, quality gate, native skill export를 agent harness 운영 패턴으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, prompt-engineering, agent-skills, workflow]
- status: idea

### 2026-08-24 — [논문 리뷰] ReCache: tool-augmented agent의 KV cache를 schema 조합 단위로 재사용하기
- type: paper
- source: http://arxiv.org/abs/2608.19662v1
- why-now: tool·skill schema가 요청마다 다른 순서와 조합으로 반복되면서 prefix cache만으로는 agent serving 비용을 줄이기 어렵다는 병목이 뚜렷해졌다.
- angle: “agent inference 최적화는 대화 prefix보다 tool schema state 재사용이 핵심” — schema permutation, KV cache reuse/compression, tool registry와 serving layer 경계를 정리한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-serving, kv-cache, tool-use, inference]
- status: idea

### 2026-08-24 — [논문 리뷰] Credit Without Ground Truth: executed replay로 agent credit assignment 감사하기
- type: paper
- source: http://arxiv.org/abs/2608.19760v1
- why-now: long-horizon agent post-training에서 step-level reward와 LLM-judge 신호를 많이 쓰지만, 실제 실행 replay 기준으로 어떤 step이 원인이었는지 검증하는 연구가 필요해졌다.
- angle: “agent 학습 신호는 judge 점수보다 실행 가능한 counterfactual replay가 먼저” — step credit signal, causal replay, reward model QA를 agent RL 운영법으로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-rl, credit-assignment, eval, replay]
- status: idea

### 2026-08-24 — [논문 리뷰] Remember, Verify, or Ask?: agent memory commit boundary 평가하기
- type: paper
- source: http://arxiv.org/abs/2608.19564v1
- why-now: persistent memory를 가진 개인화 agent가 늘면서, 정보를 바로 저장할지 검증할지 사용자에게 물을지 결정하는 memory hygiene 문제가 실무 리스크가 됐다.
- angle: “agent memory의 핵심은 retrieval보다 commit policy” — clarification boundary, durable update risk, verify-or-ask gate를 개인 비서/팀 agent 설계로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-memory, personalization, eval, clarification]
- status: idea

### 2026-08-24 — [논문 리뷰] When Text and Numbers Disagree: LLM evidence arbitration을 운영 지표로 보기
- type: paper
- source: http://arxiv.org/abs/2608.20116v1
- why-now: LLM agent가 문서 요약, 숫자 관측값, tool output이 충돌하는 상황에서 어떤 근거를 우선하는지 모르면 데이터 분석·운영 자동화에서 위험하다.
- angle: “RAG grounding은 근거를 찾는 것뿐 아니라 상충 evidence를 중재하는 정책” — text/numeric/tool evidence conflict, arbitration metric, data-agent QA gate로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [llm-eval, tool-use, evidence, data-agent]
- status: idea

### 2026-08-24 — [논문 리뷰] EchoCoT: hidden chain-of-thought 추출 위험과 reasoning trace 보안
- type: paper
- source: http://arxiv.org/abs/2608.20055v1
- why-now: reasoning model이 hidden CoT를 공개하지 않는 방향으로 운영되지만, black-box 상호작용만으로 내부 reasoning asset이 누출될 수 있는지 보안 관점에서 봐야 한다.
- angle: “reasoning trace는 디버깅 자료이면서 모델 IP와 safety surface” — hidden CoT extraction, trace redaction, agent audit log 공개 범위를 정리한다.
- difficulty: high
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [reasoning, security, chain-of-thought, model-safety]
- status: idea

### 2026-08-24 — Tracely-ai: production agent failure를 CI regression test로 되돌리기
- type: tech
- source: https://github.com/Jwuthri/Tracely-ai
- why-now: agent 앱이 production trace를 남기는 단계에서 멈추지 않고, 실패 세션을 hermetic regression case로 얼려 PR gate에 넣는 흐름이 중요해지고 있다.
- angle: “agent observability의 다음 단계는 dashboard가 아니라 failure-to-test loop” — trace clustering, replay fixture, CI blocking, regression budget을 repo introduction으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [agent-eval, observability, ci, github-repo]
- status: idea

### 2026-08-24 — Boucle-framework: structured memory와 safety hook을 갖춘 autonomous agent loop
- type: tech
- source: https://github.com/Bande-a-Bonnot/Boucle-framework
- why-now: agent framework가 단순 tool wrapper에서 structured memory, loop management, safety hook을 기본 런타임 기능으로 포함하는 방향으로 수렴하고 있다.
- angle: “autonomous agent framework의 최소 단위는 planner가 아니라 memory·loop·safety hook contract” — runtime 구조, hook boundary, self-improving agent 운영 리스크를 살펴본다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 3
- suggested-category: tutorial
- suggested-tags: [agent-framework, memory, safety-hooks, github-repo]
- status: idea

### 2026-08-24 — coding-tools-mcp: coding agent에 개발 도구 묶음을 MCP surface로 붙이기
- type: tech
- source: https://github.com/xyTom/coding-tools-mcp
- why-now: 여러 coding agent가 같은 repo 도구를 호출할 때, 개별 CLI glue보다 MCP server 형태의 도구 묶음과 권한 경계가 재사용성이 높다.
- angle: “coding agent tool layer는 ad-hoc shell 명령이 아니라 typed MCP toolbox” — tool catalog, 권한·입출력 contract, IDE/CI workflow 연결을 repo 소개로 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, coding-agent, developer-tools, github-repo]
- status: idea

### 2026-08-25 — [논문 리뷰] AUSO: agent skill lifecycle을 action 단위로 최적화하기
- type: paper
- source: http://arxiv.org/abs/2608.21292v1
- why-now: agent가 skill library를 단순 retrieval 대상으로 쓰는 단계를 넘어, skill을 언제 내재화하고 언제 외부 호출로 남길지 결정하는 운영 문제가 커지고 있다.
- angle: “skill은 prompt 조각이 아니라 internalization→formation→utilization lifecycle을 갖는다” — action-level skill optimization, skill selection gate, skill regression budget을 agent harness 운영법으로 해석한다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [agent-skills, tool-use, agent-rl, eval]
- status: idea

### 2026-08-25 — [논문 리뷰] Utility Under Attack: agent memory poisoning이 실제 효용을 얼마나 깎는가
- type: paper
- source: http://arxiv.org/abs/2608.21230v1
- why-now: persistent memory agent에서 false assertion이 한 번 저장되면 이후 세션에 반복 주입되는 문제가 content screening만으로 막기 어렵다는 점이 뚜렷해졌다.
- angle: “memory 보안은 악성 prompt 탐지가 아니라 저장된 정보의 장기 효용 손실을 재는 문제” — LongMemEval poisoning, provenance ranking 한계, memory quarantine·repair workflow를 persistent memory agent 보안 관점으로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 5
- suggested-category: paper-review
- suggested-tags: [agent-memory, security, poisoning, eval]
- status: published
- draft: content/posts/2026-08-25-utility-under-attack-memory-poisoning.mdx

### 2026-08-25 — [논문 리뷰] AID-Guard: delegated agent effect를 상태 기반 authorization으로 묶기
- type: paper
- source: http://arxiv.org/abs/2608.21159v1
- why-now: tool-using agent가 결제·예약·전송 같은 외부 effect를 만들 때, 승인 시점과 실제 commit 시점 사이의 상태 변화와 retry가 보안 구멍이 된다.
- angle: “agent 권한은 one-shot approval이 아니라 authorization-to-commit state machine이어야 한다” — delivery, retry, response loss, duplicate effect 방지를 tool gateway 설계로 풀어낸다.
- difficulty: high
- freshness: 5
- practicality: 5
- confidence: 5
- suggested-category: paper-review
- suggested-tags: [agent-security, authorization, tool-use, mcp]
- status: idea

### 2026-08-25 — [논문 리뷰] EnSI-RAG: entity-structure index로 긴 문서 QA를 안정화하기
- type: paper
- source: http://arxiv.org/abs/2608.21252v1
- why-now: 긴 문서 기반 QA에서 raw chunk embedding만으로는 entity 관계를 여러 chunk에 걸쳐 따라가기 어려워, RAG index 자체를 구조화하는 접근이 다시 중요해지고 있다.
- angle: “RAG 성능은 generator보다 index schema에서 갈린다” — entity-structure indexing, 관계 기반 retrieval, long-document QA 평가를 production RAG 설계 체크리스트로 정리한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, retrieval, entity-index, long-context]
- status: idea

### 2026-08-25 — [논문 리뷰] Specification Portability: coding agent 사이에 spec을 옮겨도 동작할까
- type: paper
- source: http://arxiv.org/abs/2608.21208v1
- why-now: 팀이 Claude Code, Codex, Copilot, 사내 agent를 섞어 쓰면서 “한 agent용 spec이 다른 agent에서도 재현 가능한가”가 migration·refactor 품질 이슈가 됐다.
- angle: “agent lock-in을 줄이는 핵심은 prompt가 아니라 portable executable specification” — Oracle→PostgreSQL migration 실험, spec-first workflow, cross-agent compatibility gate를 다룬다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [coding-agent, specification, migration, eval]
- status: idea

### 2026-08-25 — [논문 리뷰] Trustworthy RAG: misinformation·knowledge poisoning을 평가 agent로 잡기
- type: paper
- source: http://arxiv.org/abs/2608.21095v1
- why-now: RAG 시스템은 semantic relevance가 높아도 retrieved document 자체가 오염되면 틀린 답을 자신 있게 생성하므로, retrieval 이후의 truth gate가 필요하다.
- angle: “RAG에는 retriever score와 별개인 보안·진실성 평가 agent가 필요하다” — misinformation detection, knowledge poisoning benchmark, verifier agent를 RAG QA pipeline으로 해석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: paper-review
- suggested-tags: [rag, security, misinformation, eval-agent]
- status: idea

### 2026-08-25 — Network-AI: TypeScript multi-agent orchestrator에 shared state와 guardrail 붙이기
- type: tech
- source: https://github.com/Jovancoding/Network-AI
- why-now: agent orchestration이 LangGraph류 대형 프레임워크와 ad-hoc script 사이에서, 작은 TypeScript 팀이 읽고 수정 가능한 runtime 패턴을 요구하고 있다.
- angle: “multi-agent orchestrator의 기본기는 agent 수가 아니라 shared state·guardrail·adapter boundary” — traffic-light식 제어, provider adapter, state contract를 production agent 설계 기준으로 소개한다.
- difficulty: medium
- freshness: 5
- practicality: 4
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [multi-agent, typescript, agent-framework, guardrails]
- status: idea

### 2026-08-25 — agent-tool: coding agent용 MCP toolbox에 debugger·SSH·process memory 묶기
- type: tech
- source: https://github.com/knewstimek/agent-tool
- why-now: coding agent가 파일 수정만 하는 수준을 넘어 debugger, 원격 파일, 프로세스 상태를 다룰 때 권한·입출력 contract가 명확한 MCP toolbox가 필요하다.
- angle: “coding agent의 shell access를 MCP tool surface로 쪼개면 무엇이 안전해지나” — encoding-aware file tool, DAP debugger, SSH/SFTP, process memory 기능을 agent-safe workflow로 분석한다.
- difficulty: medium
- freshness: 5
- practicality: 5
- confidence: 4
- suggested-category: tutorial
- suggested-tags: [mcp, coding-agent, debugger, developer-tools]
- status: idea
