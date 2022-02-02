# 6. 클로저

## 📍 클로저

```tsx
function outter() {
  var title = "coding everybody";
  return function () {
    console.log(title);
  };
}

inner = outter();
inner();
console.log(inner); // [Function (anonymous)]
```

예제의 실행순서를 주의깊게 살펴보자. 7행에서 함수 outter를 호출하고 있다. 그 결과가 변수 inner에 담긴다. 그 결과는 이름이 없는 함수다. 실행이 8행으로 넘어오면 outter 함수는 실행이 끝났기 때문에 이 함수의 지역변수는 소멸되는 것이 자연스럽다. 하지만 8행에서 함수 inner를 실행했을 때 coding everybody가 출력된 것은 외부함수의 지역변수 title이 소멸되지 않았다는 것을 의미한다. 클로저란 내부함수가 외부함수의 지역변수에 접근 할 수 있고, 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성을 의미한다.

---

참고: [[생활코딩](https://opentutorials.org/course/743/6544)]