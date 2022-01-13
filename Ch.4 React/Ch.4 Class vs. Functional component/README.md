## 🔖 클래스형 컴포넌트 vs. 함수형 컴포넌트

```jsx
// 클래스형 컴포넌트
import React, { component } from "react";

class App extends component {
  render() {
    const name = "리액트";
    return <div className="react">{name}</div>;
  }
}
export default App;

// 함수형 컴포넌트
import "./App.css";

function App() {
  const name = "리액트";
  return <div className="react">{name}</div>;
}
export default App;
```

## 🔖 함수형 컴포넌트 장점

1. 클래스형 컴포넌트보다 선언하기 훨씬 편하다.
2. 메모리 자원을 덜 사용한다.

## 🔖 함수형 컴포넌트 단점

1. state를 사용할 수 없다. → Hooks라는 기능이 도입되면서 해결
2. 라이프사이클 API를 사용할 수 없다.

---

[참고: 리액트를 다루는 기술]
