# 11. React.lazy

## 🛳 코드 분할

- 프로젝트가 커지면 커질수록 번들도 커진다.
- 번들이 커지는 것을 방지하는 방법은 “코드 분할"이다.
- 코드 분할은 앱을 “지연 로딩"하게 도와준다.
- 앱의 코드 양을 줄이지 않고도 사용자가 필요하지 않은 코드를 불러오지 않게 한다.
- 앱의 초기화 로딩에 필요한 비용을 줄인다.

## 🛳 import

```jsx
// beofore
import OtherComponent from './OtherComponent';

// after
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

## 🛳 Suspense

- lazy 컴포넌트는 Suspense 컴포넌트 하위에서 렌더링 되어야 한다.
- fallback prop은 컴포넌트가 로드될 때까지 기다리는 동안 렌더링하는 React 엘리먼트를 받아들인다.

```jsx
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
				<AnotherComponent />
      </Suspense>
    </div>
  );
}
```

## 🛳 Error boundaries

- 네트워크 장애 같은 이유로 다른 모듈 로딩을 실패할 경우 에러를 발생시킬 수 있다.
- Error Boundary를 만들고 lazy 컴포넌트를 감싸면 네트워크 장애가 발생했을 때 에러를 표시할 수 있다.

```jsx
import React, { Suspense } from 'react';
import MyErrorBoundary from './MyErrorBoundary';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

const MyComponent = () => (
  <div>
    <MyErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </MyErrorBoundary>
  </div>
);
```

## 🛳 어디에 적용을 할지?

- React.lazy를 React Router 라이브러리를 사용해서 코드 분할 설정하는 예시

```jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);
```