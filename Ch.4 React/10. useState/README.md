# 10. useState

## 🛳 useState Hook

```jsx
import React, {useState} from 'react'; //useState Hook을 React에 가져오기

const Example () => {
	const [count, setCount] = useState(0); //state변수, state갱신 하는 함수, 초기값

	//button을 클릭하면 setCount함수를 호출해 state 변수를 갱신
	//React는 새로운 count변수를 Example 컴포넌트에 넘기며 해당 컴포넌트를 리렌더링
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
				Click me
			</button>
		</div>
	);
}
```

---
