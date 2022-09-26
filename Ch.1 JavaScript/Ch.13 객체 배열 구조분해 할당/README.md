# 13. 객체/배열 구조분해 할당

## ⭕️ **객체 구조분해 할당**

<aside>
💡 **구조분해 할당 O**

```jsx
const user = { id: 1, name: "ELLA" };

console.log(user.id); // 1
console.log(user.name); // ELLA
```

</aside>

<aside>
💡 **구조분해 할당 X**

```jsx
const { id, name } = user;

console.log(id); // 1
console.log(name); // ELLA
```

</aside>

## ⭕️ **배열 구조분해 할당**

<aside>
💡 **구조분해 할당 O**

```jsx
const fruits = ["grapes", "banana"];

console.log(fruits[0]); // grapes
console.log(fruits[1]); // banana
```

</aside>

<aside>
🔥 **구조분해 할당 X**

```jsx
const [purple, yellow] = games;

console.log(purple); // grapes
console.log(yellow); // banana
```

</aside>

## ⭕️ 함수 인자에서 구조분해 할당

<aside>
💡 **구조분해 할당 사용 O**

```jsx
// user가 객체일 때
const getUserName = (user) => {
  return user.name;
};

// user가 배열일 때
const getUserName = (user) => {
  return user[0];
};
```

</aside>

<aside>
🔥 **구조분해 할당 사용 X**

```jsx
// 객체일 때
const getUserName = ({ name, age }) => {
  return name;
};

// 배열일 때
const getUserName = ([name, age]) => {
  return name;
};
```

</aside>
