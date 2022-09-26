# 12. 화살표 함수

## ⭕️ 함수 선언식 / 표현식 코드

<aside>
💡 **함수 선언식**

```jsx
function addNumber () {
	return "Add Number"
}
```

</aside>

<aside>
💡 **함수 표현식**

```jsx
const addNumber = function() {
	return "Add Number"
}
```

</aside>

## ⭕️ 화살표 함수

```jsx
const addNumber = () => {
	return "Add Number"
}
```

## ⭕️ 익명 함수

```jsx
// 예시1
<button onClick={() => console.log("Add Number"}>This is button</button>

// 예시2
{array.map((item) => <div>{item}<div>)}
```