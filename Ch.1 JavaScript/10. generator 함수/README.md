# 10. generator 함수

## 🔖 **비동기 특성을 동기적 코드방식으로 관리**

- 비동기 처리를 위해 자바스크립트 콜백함수 사용 → 콜백 지옥 (코드 가독성의 문제 발생) → 프로미스 등장 (함수 중첩을 함수의 연쇄적 호출표현으로 변경) → then( ), catch( )함수가 이중, 삼중으로 겹쳐져서 또 다른 가독성의 문제 발생 → Async/await 등장 (비동기적 구조를 동기적으로 작성할 수 있게 도와줌)
- 제네레이터 함수도 동기적으로 작성할 수 있다. 사실 `Async/await 는 제네레이터 기반`해 만들어졌다.

```jsx
//이터레이터를 작성한 코드
const iterableObj = {
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        step++;
        if (step === 1) {
          return { value: "This", done: false };
        } else if (step === 2) {
          return { value: "is", done: false };
        } else if (step === 3) {
          return { value: "iterable.", done: false };
        }
        return { value: "", done: true };
      },
    };
  },
};
for (const val of iterableObj) {
  console.log(val);
}
```

```jsx
//제너레이터로 다시 작성한 코드
function* iterableObj() {
  yield "This";
  yield "is";
  yield "iterable.";
}

for (const val of iterableObj()) {
  console.log(val);
}
```

## 🔖 Iterable 이란?

- 반복 가능한(iterable, 이터러블) 객체. `for..of` 반복문을 적용 가능
- ex. 배열, 문자열 ...

---

[ 참고: [모던 자바스크립트](https://ko.javascript.info/iterable) [rohkorea86.log](https://velog.io/@rohkorea86/Generator-%ED%95%A8%EC%88%98%EB%A5%BC-%EC%9D%B4%ED%95%B4%ED%95%B4%EB%B3%B4%EC%9E%90-%EC%9D%B4%EB%A1%A0%ED%8E%B8-%EC%99%9C-%EC%A0%9C%EB%84%A4%EB%A0%88%EC%9D%B4%ED%84%B0-%ED%95%A8%EC%88%98%EB%A5%BC-%EC%8D%A8%EC%95%BC-%ED%95%98%EB%8A%94%EA%B0%80) ]
