# 9. useEffect

- 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 hook

## 🛳 componentDidMount

```jsx
useEffect(() => {
	abc();
}, []) // 마운트 될 때만 실행

useEffect(() => {
	abc();
}) // 렌더링 될 때마다 실행
```

- deps 위치에 빈배열을 넣으면, 컴포넌트가 화면에 가장 처음 렌더링 됐을 때만 실행
- deps 위치에 아무것도 넣지 않으면, 리렌더링 될 때마다 실행

## 🛳 Side Effect

컴포넌트가 화면에 렌더링된 후에 비동기로 처리되어야 하는 부수적인 효과.

---

[ 참고: [https://velog.io/@clementbwkim/React-Hooks-useEffect-란](https://velog.io/@clementbwkim/React-Hooks-useEffect-%EB%9E%80) ]