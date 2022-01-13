# 2016년

## 📍 문제 & 입출력

<img src="./Images/1.png">

## 📍 내가 푼 방법

<img src="./Images/2.png">

## 📍 정리

### 👉🏻 Problem

- `const date = new Date(2016, a, b).getDay()` 이렇게 할당을 했는데 틀린 답이 출력

### 👉🏻 Try

- `console.log(new Date(2021, 12, 24).getDay())` 크리스마스 이브인 오늘 날짜를 콘솔에 넣어 보았음 → 이것도 틀린 값이 출력 → Date 객체를 잘못 씀을 깨달음
- `console.log(new Date("2021, 12, 24").getDay())` 이렇게 날짜를 따옴표로 묶어서 요일을 출력 → 제대로 된 값 출력

### 👉🏻 Solution

- 위에 방법 처럼 `new Date(`2016, ${a}, ${b}`).getDay()` 백틱을 추가해 출력 → 문제 해결 🤓

---

[ 문제 출처: [Programmers](https://programmers.co.kr/) ]
