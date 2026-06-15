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

