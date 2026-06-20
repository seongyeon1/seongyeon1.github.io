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
- status: drafted
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
- status: drafted
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
- status: drafted
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
- status: drafted
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
- status: idea

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

