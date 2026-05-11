# /new-post 명령어

새 블로그 포스트 초안 파일을 생성한다.

## 사용법
```
/new-post
```

## 실행 순서
1. 사용자에게 다음을 질문한다:
   - 포스트 제목
   - 카테고리 (`study` / `paper-review` / `project` / `tutorial`)
   - 태그 (쉼표 구분)
   - 시리즈 여부 (있으면 시리즈명과 순서)
   - 수식 사용 여부

2. `docs/content-guide.md`에서 해당 카테고리의 frontmatter 템플릿과 본문 구조를 참고한다.

3. 파일명을 생성한다: `YYYY-MM-DD-슬러그.mdx`
   - 오늘 날짜 사용
   - 슬러그: 제목을 영문 소문자 + 하이픈으로 변환

4. `content/posts/` 경로에 초안 파일을 생성한다.
   - frontmatter 완성
   - 카테고리별 본문 구조(헤딩만) 포함
   - `draft: true` 로 시작

5. 생성된 파일 경로를 출력한다.
