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

