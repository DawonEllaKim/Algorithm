# 3. REST API

### ✏️  REST(Representational State Transfer)

- 소프트웨어 아키텍쳐 (설계 지침, 원리)
- RESTful 통신 시 HTTP를 사용
  - 요청 시: 메소드를 통해 클라이언트가 뭘 원하는지 파악 가능
  - 응답 시: 상태 값으로 서버가 어떻게 처리했는지 파악 가능

### ✏️  REST API의 구성

- REST API는 자원(resource), 행위(method), 표현(representation)의 3가지 요소로 구성된다.
- REST API만으로 HTTP 요청의 내용을 이해할 수 있다.

### ✏️  REST API 설계 원칙

1. URI는 리소스를 표현해야 한다.

   ```jsx
   #bad
   GET /getTodos/1
   GET /todos/show/1

   #good
   GET /todos/1
   ```

2. 리소스에 대한 행위는 HTTP 요청 메서드로 표현한다.

   ```jsx
   #bad
   GET /todos/delete/1

   #good
   DELETE /todos/1
   ```

### ✏️  HTTP 요청 메서드

| HTTP 요청 메서드 | 종류           | 목적                  | 페이로드 |
| ---------------- | -------------- | --------------------- | -------- |
| GET              | index/retrieve | 모든/특정 리소스 취득 | X        |
| POST             | create         | 리소스 생성           | O        |
| PUT              | replace        | 리소스의 전체 교체    | O        |
| PATCH            | modify         | 리소스의 일부 수정    | O        |
| DELETE           | delete         | 모든/특정 리소스 삭제 | X        |

---

참고: [모던 자바스크립트 DeepDive]
