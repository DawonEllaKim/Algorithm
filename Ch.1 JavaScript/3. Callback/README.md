# 3. Callback

## 🔖 일반적인 함수

- 입력(파라미터)이 있고 출력(리턴값)이 있음

```tsx
function findUser(id) {
  const user = {
    id: id,
    name: "User" + id,
    email: id + "@test.com",
  };
  return user;
}

const user = findUser(1);
console.log("user:", user);

// 결과
// user: {id: 1, name: "User1", email: "1@test.com"}
```

## 🔖 콜백 함수

- 출력값이 없고 그 대신에 콜백 함수를 입력받는 함수
- 콜백 함수는 다른 함수에 인자로 넘어가서 실행될 로직을 담게 됨

```tsx
function findUserAndCallBack(id, cb) {
  const user = {
    id: id,
    name: "User" + id,
    email: id + "@test.com",
  };
  cb(user);
}

// 이게 콜백 함수
findUserAndCallBack(1, function (user) {
  console.log("user:", user);
});

// 결과
// user: {id: 1, name: "User1", email: "1@test.com"}
```

- 지금까지는 그냥 스타일 차이로 보일 수 있지만, 비동기처리와 같이 쓰여지면 둘의 차이점이 보인다.

## 🔖 콜백 함수를 사용하지 않은 비동기 처리

```tsx
function findUser(id) {
  let user;
  setTimeout(function () {
    console.log("waited 0.1 sec.");
    user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com",
    };
  }, 100);
  return user;
}

const user = findUser(1);
console.log("user:", user);

// 결과
// user: undefined
// waited 0.1 sec.
```

- setTimeout 부분이 처리 되는 동안에 이미 return user이 되어서 결과가 undefined로 나와버림
- 이와 같이 `setTimeout()`과 같은 비동기 함수를 호출하게 되면, 함수의 실행이 완료도 되기 전에 다음 라인이 실행되어 버리기 때문에 각별히 주의를 해야한다.
- 코드 실행 순서가 뒤죽박죽이 될 수 있는 상황에서는 콜백 함수를 이용해서 해결할 수 있다.
- 함수로 부터 결과값을 리턴 받기를 포기하고, 결과값을 이용해서 처리할 로직을 콜백 함수에 담아 인자로 던지면 된다.

## 🔖 콜백 함수를 사용한 비동기 처리

```tsx
function findUserAndCallBack(id, cb) {
  setTimeout(function () {
    console.log("waited 0.1 sec.");
    const user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com",
    };
    cb(user);
  }, 100);
}

findUserAndCallBack(1, function (user) {
  console.log("user:", user);
});

// 결과
// waited 0.1 sec.
// user: {id: 1, name: "User1", email: "1@test.com"}
```

- 비동기 함수를 호출할 때는 결과값을 리턴 받으려고 하지말고, 결과값을 통해 처리할 로직을 콜백 함수로 넘기는 스타일로 코딩을 해줘야 예상된 결과를 얻을 수 있다.

## 🔖 무한콜백 (callback hell)

- 왜냐하면 콜백 함수를 중첩해서 사용하게 되면 계속해서 코드를 들여쓰기 해야하고 그러다보면 코드 가독성이 현저하게 떨어지게 된다.

```tsx
function Callback(callback) {
  function Callback2(callback) {
    function Callback3(callback) {
      console.log("무한콜백");
    }
  }
}
```

- 콜백헬을 해결하기 위해서 ES7에서는 `Promise`를 ES8에서는 `async/await`를 지원한다.

---

[ 참고: [DaleSeo](https://www.daleseo.com/js-async-callback/)]
