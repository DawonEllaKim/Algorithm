# 9. async/await

## 🔖 async & await 이란?

- `async` 키워드를 쓰면 `Promise` 오브젝트가 절로 생성된다.
- `async` 키워드를 쓴 함수 안에서는 `await`을 사용가능하다.
- `await`은 그냥 `프로미스.then()` 대체품으로 생각하면 된다.하지만 `then`보다 훨씬 문법이 간단합니다.

```jsx
// promise 버전
function pickFruits() {
  // promise도 너무 길게 체이닝을 하면, 콜백 지옥과 비슷한 결과가 나온다.
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

// 똑같은 버전을 async로 만들어보기
// try , catch를 이용한 에러 처리
async function pickFruits() {
  try {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
  } catch (err) {
    console.log(err);
  }
}
```

## 🔖 async/await의 예외처리

• `try & catch` 구문 사용해서 에러 처리를 해줄 수 있다.

```tsx
async function pickFruits() {
  try {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
  } catch (err) {
    console.log(err);
  }
}
```

---

[ 참고: [MDN](https://developer.mozilla.org/en-US/), [gil0127.log](https://velog.io/@gil0127/Promise-async-await)]
