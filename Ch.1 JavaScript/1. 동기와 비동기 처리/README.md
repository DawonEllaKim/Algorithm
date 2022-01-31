## ✏️  Synchronous 동기

- 순차적, 직렬적으로 테스크를 수행
- 작업을 시작 후 그 작업이 끝나길 **“기다렸다가”** 다음일을 진행한다.

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

## ✏️  Asynchronous 비동기

- 병렬적으로 테스크를 수행
- 작업을 시작 후 그 작업이 끝나길 **“안 기다리고”** 다음일을 진행한다.

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

- 만약 클라이언트-서버 사이의 데이터 처리를 비동기적으로 처리하지 않는다면, 데이터의 요청-응답까지 걸리는 시간을 계속 기다렸다가 그다음 동작이 실행되기 때문에 그동안 사용자는 정지된 웹을 보게 된다.
- 자바스크립트는 싱글스레드로 프로그램이 동작, 비동기 처리방식은 다중스레드가 동작하는 멀티태스킹 작업인데 어떻게 비동기 처리가 가능?
  - 자바스크립트엔진은 자바스크르립트를 돌리는 하나의 쓰레드가 존재한다. 또한 이 엔진 뿐만 아니라 비동기식 처리 모델인 Web API라는 것이 함께 동작하면서 여기에서 비동기적인 데이터 (가져오는데 시간이 소요되는 데이터)들을 처리한다.
  - Web API들이 자바스크립트 엔진 스레드와 다르게 비동기 처리를 따로 돌면서 Callback함수를 가지고 이벤트 loop에 들어가 처리되는대로 Callback함수를 다시 자바스크립트 엔진을 돌려보내

## ✏️  동기/비동기, CallBack, promise, async/await

- 자바스크립트는 동기적 언어 → 가끔 비동기적으로 처리 필요 (문제) → settimeout, AJAX 같은 것들 사용 (해결방안) → 원치 않는 순서로 값이 undefined일 수 있음 (문제) → 콜백함수를 인자로 사용 (해결방안) → callback hell 발생 (문제) → promise async/awit 사용 (해결방안)

---

[참고: [lsj8367.log](https://velog.io/@lsj8367/Javascript-%EB%8F%99%EA%B8%B0%EC%99%80-%EB%B9%84%EB%8F%99%EA%B8%B0%EB%B0%A9%EC%8B%9D%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90)]
