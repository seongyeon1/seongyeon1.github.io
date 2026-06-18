# 포스트 작성 가이드

## 파일 네이밍
```
content/posts/YYYY-MM-DD-slug.mdx
예) 2025-04-01-transformer-attention.mdx
    2025-04-15-gpt4-paper-review.mdx
```

## Frontmatter 템플릿

### 개념 학습 (concept)
```yaml
---
title: "트랜스포머 어텐션 메커니즘 완전 정복"
date: "2025-04-01"
category: "concept"
tags: ["transformer", "attention", "NLP"]
summary: "Self-Attention이 왜 작동하는지, Q·K·V 행렬의 의미를 처음부터 이해한다."
series: "트랜스포머 공부기"
seriesOrder: 2
math: true
thumbnail: "/images/transformer-attention.png"
---
```

### 가이드 / 튜토리얼 (guide)
```yaml
---
title: "리눅스 네트워크 디버깅 — ss, curl, dig, tcpdump 실전 정리"
date: "2025-04-05"
category: "guide"
tags: ["linux", "network", "debugging"]
summary: "네트워크 문제를 만났을 때 바로 꺼내 쓰는 명령어를 실전 시나리오로 정리한다."
---
```

> `concept`은 이론·원리 학습, `guide`는 도구·명령·인프라 how-to/레퍼런스. 직접 만든 것은 `project`(제작기), 오픈소스 도구·repo 소개는 `tool`.

### 논문 리뷰
```yaml
---
title: "[논문 리뷰] Attention Is All You Need"
date: "2025-04-10"
category: "paper-review"
tags: ["transformer", "attention", "2017", "NeurIPS"]
summary: "트랜스포머 아키텍처를 제안한 원조 논문. RNN 없이 순수 어텐션만으로 SOTA 달성."
math: true
thumbnail: "/images/paper-attention.png"
---
```

### 프로젝트 후기
```yaml
---
title: "RAG 챗봇 개발기 — 삽질의 연속"
date: "2025-04-20"
category: "project"
tags: ["RAG", "LangChain", "FastAPI", "후기"]
summary: "2주 만에 사내 RAG 챗봇을 만들면서 겪은 문제들과 해결 과정."
thumbnail: "/images/rag-chatbot.png"
---
```

## 포스트 내 컴포넌트 사용

### Callout
```mdx
<Callout type="note">
핵심 개념을 강조할 때 사용
</Callout>

<Callout type="warning">
주의해야 할 사항
</Callout>

<Callout type="tip">
실용적인 팁
</Callout>
```

### 논문 카드 (paper-review 카테고리 필수)
```mdx
<Paper
  title="Attention Is All You Need"
  authors="Vaswani et al."
  year="2017"
  venue="NeurIPS"
  arxiv="1706.03762"
/>
```

### 수식
```mdx
인라인: $Q \cdot K^T / \sqrt{d_k}$

블록:
$$
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$
```

### 코드블록 (언어 + 파일명)
````mdx
```python title="attention.py"
import torch
import torch.nn.functional as F

def scaled_dot_product_attention(Q, K, V):
    d_k = Q.size(-1)
    scores = torch.matmul(Q, K.transpose(-2, -1)) / d_k ** 0.5
    weights = F.softmax(scores, dim=-1)
    return torch.matmul(weights, V)
```
````

### 이미지 (캡션 있는 경우)
```mdx
<Figure
  src="/images/attention-map.png"
  alt="어텐션 가중치 시각화"
  caption="헤드별로 다른 패턴의 어텐션이 학습됨"
/>
```

## 글 구조 권장 템플릿

### 논문 리뷰
```
1. 논문 한 줄 요약 (Paper 컴포넌트)
2. 배경 — 이 논문이 왜 나왔는가
3. 핵심 아이디어
4. 방법론 (수식/그림 포함)
5. 실험 결과
6. 내 생각 / 한계점
7. 참고 자료
```

### 공부 기록
```
1. 공부하게 된 계기
2. 개념 설명 (Bottom-up)
3. 코드로 확인하기
4. 삽질 기록 (있으면)
5. 정리 및 다음 편 예고
```

### 프로젝트 후기
```
1. 프로젝트 소개 (목적, 기간, 스택)
2. 아키텍처 결정
3. 주요 구현 과정
4. 겪은 문제들과 해결책
5. 결과 및 회고
6. GitHub 링크
```
