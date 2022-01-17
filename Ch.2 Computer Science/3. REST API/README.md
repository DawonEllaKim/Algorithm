# 3. REST API

### ✏️  REST vs REST API?

웹이 HTTP를 제대로 사용하지 못하고 있는 상황을 보고 HTTP의 장점을 최대한 활용할 수 있는 아키텍처로서 REST를 소개했고 이는 HTTP프로토콜을 위도에 맞게 디자인하도록 유도하고 있다. REST의 기본 원칙을 성실히 지킨 서비스 디자인을 `“RESTful”`이라고 표현한다.

- `REST`는 HTTP를 기반으로 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍처
- `REST API`는 REST를 기반으로 서비스 API를 구현한 것

### ✏️  REST API의 구성

- REST API는 자원, 행위, 표현의 3가지 요소로 구성된다.
- REST는 자체 표현 구조로 구성되어 REST API만으로 HTTP 요청의 내용을 이해할 수 있다.

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
