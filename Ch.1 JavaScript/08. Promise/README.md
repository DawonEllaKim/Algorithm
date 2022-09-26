# 8. promise

## 🔖 Promise란

- `Promise`는 비동기 작업의 최종 완료 또는 실패를 나타내는 객체
- 비동기 작업을 마치 동기 작업처럼 값을 반환할 수 있다.
- 전통적인 콜백 패턴으로 인한 콜백 헬 때문에 ES6에서 도입한 또 다른 비동기 처리 패턴

```jsx
function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.log("Error generating audio file: " + error);
}

// 일반적인 콜백 함수
createAudioFileAsync(audioSettings, successCallback, failureCallback);

// createAudioFileAsync() 함수가 Promise를 반환하도록 수정
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);

// 조금 더 간단히 쓰면...
const promise = createAudioFileAsync(audioSettings);
promise.then(successCallback, failureCallback);
```

## 🔖 Promise를 사용해 얻는 이점

콜백 함수를 전달해주는 고전적인 방식과는 달리, Promise는 아래와 같은 특징을 보장한다.

- `then()`을 여러번 사용하여 여러개의 콜백을 추가 할 수 있다. 그리고 각각의 콜백은 주어진 순서대로 하나 하나 실행되게 된다.
- 콜백은 자바스크립트 Event Loop이 현재 실행중인 콜 스택을 완료하기 이전에는 절대 호출되지 않는다.

## 🔖 Promise의 상태값

- pending: 비동기 처리 수행 전(resolve, reject가 아직 호출되지 않음)
- fulfilled: 수행 성공(resolve가 호출된 상태)
- rejected: 수행 실패(reject가 호출된 상태)
- settled: 성공 or 실패(resolve나 reject가 호출된 상태)

```jsx
// then! 출력
const promise1 = new Promise((resolve, reject) => {
  resolve();
});
promise1
  .then(() => {
    console.log("then!");
  })
  .catch(() => {
    console.log("catch!");
  });
```

```jsx
// catch! 출력
const promise1 = new Promise((resolve, reject) => {
  reject();
});
promise1
  .then(() => {
    console.log("then!");
  })
  .catch(() => {
    console.log("catch!");
  });
```

## 🔖 Chaining

- 프라미스는 후속 처리 메서드를 체이닝해서 여러 개의 프라미스를 연결할 수 있다. 이걸로 콜백 헬을 해결

```jsx
new Promise((resolve, reject) => {
	setTimeout(() => resolve("promise 1"), 1000);
}).then((result) => { // 후속 처리 메서드 하나를 쓰고,
	console.log(result); // promise 1
	return "promise 2";
}).then((result) => { // 이렇게 연달아 then을 써서 이어주는 거예요.
	console.log(result);
	return "promise 3";
}).then(...);
```

## 🔖 Promise 정리

- Promise 를 만드는 순간 비동기 작업이 시작
- 비동기 작업을 성공으로 간주하고 싶을 때 `resolve`를 호출, 실패라 간주하고 싶다면 `reject` 함수를 호출
- 비동기 작업이 성공했을 때 후속 조치를 지정하고 싶다면 `then`으로, 실패 시의 후속 조치는 `catch`로 지정

---

[ 참고: [MDN](https://developer.mozilla.org/en-US/), [Under The Pencil](https://elvanov.com/2597)]
