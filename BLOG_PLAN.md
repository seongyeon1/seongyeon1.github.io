# 블로그 포스팅 계획

## 예정 포스팅 (추가 예정)

### 1. 스스로 코드를 수정하는 AI: Darwin Gödel Machine
- **날짜**: 2026-06-13 예정
- **카테고리**: study
- **태그**: agents, self-improvement, code-generation, ai-reliability, evolution
- **시리즈**: AI 논문 리뷰
- **논문**: Darwin Gödel Machine: Leveraging Evolution and Self-Modification
- **저자**: Jenny Zhang, Shengran Hu, Cong Lu, Robert Lange, Jeff Clune (Sakana AI)
- **arXiv**: https://arxiv.org/abs/2505.22954
- **GitHub**: https://github.com/jennyzzt/dgm
- **핵심 포인트**:
  - 괴델 머신 + 진화 알고리즘으로 코드 스스로 개선
  - Python 코드베이스를 자동으로 이해·수정
  - SWE-bench: 20% → 50% 성능 향상
  - 보상 함수 해킹 감시 및 안전성 관리
  - 다양한 프로그래밍 언어로 일반화 가능
- **예상 섹션**:
  - 자가수정 AI의 필요성
  - Darwin Gödel Machine 구조와 진화 메커니즘
  - 코드 생성·개선·검증 루프
  - 실험 결과 (SWE-bench, Polyglot)
  - 안전성과 투명성 메커니즘

### 2. AI의 기억력을 구축하다: 장기기억 메모리 시스템
- **날짜**: 2026-06-14 예정
- **카테고리**: study
- **태그**: long-term-memory, ai-personalization, memory-systems, context-management, rag
- **시리즈**: AI 시스템 아키텍처
- **주요 기술**:
  - Supermemory: AI 메모리 & 컨텍스트 엔진 (벤치마크 3종 1위)
  - Mem0: Long-Term 메모리 솔루션 (다단계 메모리)
  - Turbo-graph: Constrained RAG를 위한 그래프 메모리
- **핵심 포인트**:
  - AI 모델의 문맥 길이 한계를 메모리로 극복
  - 다층 메모리 구조 (사용자 / 세션 / 에이전트 / 사건)
  - 자동 메모리 추출, 정제, 망각 처리
  - 하이브리드 검색 (Memory + RAG 결합)
  - 제약 조건 관리 (ACL, 시간 윈도우, 메타데이터)
- **예상 섹션**:
  - 왜 AI는 기억이 필요한가? (문맥 한계의 현실)
  - 세 가지 메모리 솔루션의 설계 철학 비교
  - 다단계 메모리 구조의 효율성
  - 자동 망각과 정보 정제의 중요성
  - 실무 도입 가이드 (챗봇, 에이전트, RAG 시스템)
  - 미해결 과제 (신뢰성, 개인정보, 스케일링)
  - 향후 연구 방향

### 3. 취향이 경쟁력이다: AI 시대 엔지니어의 3가지 능력
- **날짜**: 2026-06-13 예정
- **카테고리**: essay
- **태그**: ai-engineering, engineering-philosophy, taste, productivity, skill-development
- **시리즈**: AI 시대의 엔지니어링
- **내용 출처**: GeekNews (ID: 30338)
- **핵심 포인트**:
  - AI가 코딩을 자동화하면서 엔지니어의 경쟁력이 "타이핑 속도"에서 "판단력"으로 이동
  - 취향(taste)의 3가지 형태: 인식, 나침반, 비전
  - "무엇을 만들 것인가"의 판단이 모든 가치 창출의 중심
  - 취향 개발 90일 실천 계획
  - 취향 있는 엔지니어 = 30배의 가치 창출
- **예상 섹션**:
  - 전제: AI가 바꾼 엔지니어링의 정의
  - 취향의 3가지 형태 (예시 포함)
  - 90일 실천 계획 (1개월 분석 → 2개월 비교 → 3개월 적용)
  - 30배 효율의 실제 영향
  - 취향은 후천적이다 (시작 방법)

### 4. AI 에이전트의 현실과 위험: 2026년의 교훈들
- **날짜**: 2026-06-15 예정
- **카테고리**: study
- **태그**: ai-agents, real-world-challenges, safety, cost-management, agentic-ai
- **시리즈**: AI 에이전트 실무
- **내용 출처**: GeekNews 최신 기사 모음
- **핵심 포인트**:
  - Kimi K2.7-Code: 에이전트형 코딩 모델의 효율 개선 (사고 토큰 30% 감소)
  - Claude Fable 5: 지나치게 주도적인 에이전트의 현실 (Relentlessly Proactive)
  - AI 에이전트의 예상 외 비용: DN42 스캔으로 $6531.30 청구 사건
  - Cate IDE: 무한 캔버스 기반 AI 에이전트 통합 개발 환경
  - DeltaDB: 에이전트-인간 협업 기반 새로운 버전 관리 시스템
  - FablePool: 크라우드펀딩 방식의 AI 에이전트 프로젝트 빌드
- **예상 섹션**:
  - 2026년 에이전트 기술의 진화 상황
  - 성공 사례: 자동화·효율 개선
  - 실패와 위험: 비용 폭증, 통제 불가
  - 에이전트의 주도성(Proactivity) vs. 통제성(Controllability)
  - 실무 안전성 체크리스트

### 5. 프롬프트가 스스로 진화한다: 동적 하네스 최적화의 가능성
- **날짜**: 2026-06-12 예정
- **카테고리**: study
- **태그**: prompt-engineering, agents, self-optimization, LLM-capability, harness
- **시리즈**: AI 논문 리뷰
- **논문**: Self-Harness: Harnesses That Improve Themselves
- **저자**: Hangfan Zhang et al.
- **arXiv**: https://arxiv.org/abs/2606.09498
- **핵심 포인트**:
  - 에이전트의 작업 지침(하네스)이 실행 중 자동으로 개선됨
  - 반사(reflection)와 문맥 엔지니어링 기법을 통한 자동 최적화
  - 수동 프롬프트 엔지니어링의 비용 절감
  - GLM-5, Qwen, MiniMax 등 다양한 모델에서 효과 검증
- **예상 섹션**:
  - 문제 정의: 기존 프롬프트 엔지니어링의 한계
  - Self-Harness 메커니즘 설명
  - 자동 개선 루프의 작동 방식
  - 실험 결과 분석
  - 실무 응용 가능성

### 6. 언어 모델의 자기호출: 재귀로 복잡한 문제를 푸는 법
- **날짜**: 2026-06-16 예정
- **카테고리**: study
- **태그**: recursive-models, long-context, reasoning, decomposition, LLM-architecture
- **시리즈**: AI 논문 리뷰
- **논문**: Recursive Language Models
- **저자**: Alex L. Zhang, Tim Kraska, Omar Khattab
- **arXiv**: https://arxiv.org/abs/2512.24601
- **핵심 포인트**:
  - 언어 모델이 자신을 재귀적으로 호출하는 방식
  - 긴 맥락 처리의 한계 극복
  - 복잡한 문제를 부분 문제로 분해
  - 코딩, 검색, 추론 등에서의 성능 향상
- **예상 섹션**:
  - 기존 장기 문맥 처리의 문제점
  - 재귀 구조의 설계
  - 부분 문제 분해 및 독립적 추론
  - 실험 결과 (코딩, 검색, 추론)
  - 재귀 깊이와 효율성 간의 트레이드오프

## 완료된 포스팅
- 2026-06-10: 블로그 배포 자동화: 빌드 캐시와 미리보기
- 2026-06-09: 비전-언어 모델의 시각적 어텐션 헤드 해석하기
- 2026-06-07: AI 필수 논문 3부 - 실무 응용
- 2026-06-06: AI 필수 논문 2부 - NLP와 멀티모달
- 2026-05-23: AI 필수 논문 1부 - 기초 이론
