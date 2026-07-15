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
- suggested-category: tutorial
- suggested-tags: [pytorch, profiling, inference, optimization]
- status: idea

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
- status: idea

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
- status: idea

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
