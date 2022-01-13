# 1. 동기와 비동기처리

# ✏️  Synchronous 동기

- 순차적, 직렬적으로 테스크를 수행
- 요청을 보낸 후 응답을 받아야지만 다음 동작이 이루어지는 방식

```jsx
function one() {
  console.log("one");
  two();
}

function two() {
  console.log("two");
  three();
}

function three() {
  console.log("three");
}

one();
// one
// two
// three
```

# ✏️  Asynchronous 비동기

- 병렬적으로 테스크를 수행

```jsx
function one() {
  console.log("one");
  two();
}

function two() {
  setTimeout(function () {
    console.log("two");
  }, 0);
  three();
}

function three() {
  console.log("three");
}

one();
// one
// three
// two
```

### ❓왜 비동기 처리가 필요한가요?

만약 클라이언트-서버 사이의 데이터 처리를 비동기적으로 처리하지 않는다면, 데이터의 요청-응답까지 걸리는 시간을 계속 기다렸다가 그다음 동작이 실행되기 때문에 그동안 사용자는 정지된 웹을 보게 된다.

---

이미지 출처: [[lsj8367.log](https://velog.io/@lsj8367/Javascript-%EB%8F%99%EA%B8%B0%EC%99%80-%EB%B9%84%EB%8F%99%EA%B8%B0%EB%B0%A9%EC%8B%9D%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90)]
