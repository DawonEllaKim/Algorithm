# 2. JSX

## 🔖 JSX?

- JavaScript + XML (XML은 HTML의 표현법을 확장한 문법)
- 하나의 파일에 자바스크립트와 HTML을 동시에 작성할 수 있어서 편리한 자바스크립트 확장 문법
- JSX 형식으로 작성된 코드는 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용해 일반 자바스크립트 형태의 코드로 변환된다.

---

## 🔖 JSX의 장점

1. 보기 쉽고 익숙함 - HTML 코드를 작성하는 것과 비슷해 가독성이 높다.
2. 높은 활용도 - HTML 태그를 사용할 수 있을 뿐만 아니라, JSX 안에 컴포넌트를 작성할 수 있다.

---

## 🔖 리액트 컴포넌트에서 undefined를 렌더링하지 않기

리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안 된다. 어떤 값이 undefined일 수도 있다면, or 연산자를 사용해 해당 값이 undefined일 때 사용할 값을 지정함으로써 오류를 방지할 수 있다.

```jsx
function App() {
  const name = undefined;
  return name || "값이 undefined입니다.";
}
```

반면 JSX 내부에서 undefined를 렌더링하는 것은 괜찮다.

```jsx
function App() {
  const name = undefined;
  return <div>{name}</div>;
}
```

---

## 🔖 var vs. let & const

- const는 한번 지정하고 나면 변경이 불가능한 상수 선언할 때 사용
- let 동적인 값을 담을 수 있는 변수를 선언할 때 사용

📌 var는 scope가 **함수 단위**

```jsx
function myFunction() {
  var a = "hello";
  if (true) {
    var a = "bye";
    console.log(a); // bye
  }
  console.log(a); // bye
}
myFunction();
```

📌 let과 const는 scope가 **블록 단위**

```jsx
function myFunction() {
  let a = "hello";
  if (true) {
    let a = "bye";
    console.log(a); // bye
  }
  console.log(a); // hello
}
myFunction();
```

---

## 🔖 리액트에서 style을 선언 할때 카멜케이스로 바꾸는 이유

리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어 주어야 하기 때문이다.

```jsx
function App() {
  const name = "리액트";
  return <div style={{ backgroundColor: "black" }}>{name}</div>;
}
```

---

[참조: 리액트를 다루는 기술]
