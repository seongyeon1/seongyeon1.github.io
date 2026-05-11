# /review-post 명령어

발행 전 포스트를 검토하고 체크리스트를 확인한다.

## 사용법
```
/review-post content/posts/파일명.mdx
```

## 검토 항목

### Frontmatter 검사
- [ ] title 존재
- [ ] date 형식 올바름 (YYYY-MM-DD)
- [ ] category 유효값 여부 (`study` | `paper-review` | `project` | `tutorial`)
- [ ] tags 배열 비어있지 않음
- [ ] summary 150자 이내
- [ ] `draft: true` 제거 여부 확인 (발행 시 삭제 필요)
- [ ] thumbnail 경로 존재 여부 (`public/images/` 확인)

### 본문 검사
- [ ] 첫 헤딩이 h2(`##`)로 시작 (h1은 title에서 자동 생성)
- [ ] `<Paper>` 컴포넌트: paper-review 카테고리면 필수
- [ ] 코드블록에 언어 명시되어 있는지
- [ ] 이미지를 `<img>` 대신 `<Figure>` 또는 `next/image` 사용했는지
- [ ] 외부 링크 동작 확인 (arxiv, github 등)

### 품질 검사
- [ ] summary가 본문 내용을 잘 요약하는지
- [ ] 태그가 검색에 유용한 키워드인지
- [ ] 시리즈 포스트면 이전/다음 편과 내용 연결이 자연스러운지

## 출력
검토 결과를 체크리스트 형태로 출력하고,
문제가 있는 항목은 수정 방법을 함께 제안한다.
