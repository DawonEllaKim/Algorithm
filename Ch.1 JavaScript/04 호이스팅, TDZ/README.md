# 4. 호이스팅, TDZ

## 🚀  호이스팅

```tsx
console.log(score); // undefined
var score = 10; // 변수 선언문
```

- 자바스크립트 코드는 한 줄씩 순차적으로 실행되므로 console.log(score)이 가장 먼저 실행됨 → 하지만 참조에러가 아닌 undefined가 출력된다.
- 왜? 런타임(소스코드가 한 줄씩 실행되는 시점) 이전에 이미 변수 선언은 이미 실행 되었기때문에!
- 호이스팅: 변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립 고유의 특징

(변수 선언뿐 아니라 var, let, const, function, class 키워드를 사용해서 선언하는 모든 식별자(변수, 함수, 클래스 등)는 호이스팅된다. 모든 선언문은 런타임 이전 단계에서 먼저 실행되기 때문이다.)

## 🚀  TDZ (Temporary Dead Zone)

```tsx
console.log(score); // ReferenceError: Cannot access 'score' ...
let score = 10; // 변수 선언문
```

- 스코프 시작 지점부터 초기화 시작 지점까지 변수를 참조할 수 없는 구간을 일시적 사각지대 TDZ라고 부름
- let, const 에서 발생
- 왜 let, const에서만? → 자바스크립트는 3단계를 거쳐서 변수를 생성
  1. 선언: 스코프와 변수 객체 생성, 스코프가 변수 객체 참조
  2. 초기화: 변수 객체 값을 위한 공간을 메모리에 할당. 이때 undefined 라는 값을 할당
  3. 할당: 변수 객체의 값을 할당 (진짜 변수의 값)
  - var는 선언+초기화가 동시에 일어나면서 undefined값이 바로 들어가지만 let/const는 선언만 될 뿐 초기화는 이루어지지 않기때문에 TDZ에 들어가게된다. (초기화 되지 않아서 이를 위한 자리가 메모리에 준비되어 있지 않은 상태)

---

[ 참고: [yceffort](https://yceffort.kr/2020/05/var-let-const-hoisting) ]
