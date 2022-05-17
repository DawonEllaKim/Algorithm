# 1. react-ga

## 🚀 설치

```jsx
npm install react-ga --save
```

## 🚀 사용법

```jsx
import ReactGA from 'react-ga';
ReactGA.initialize('UA-00000-01');
ReactGA.pageview(window.location.pathname + window.location.search);
```

## 🚀 Other Options

```jsx
ReactGA.initialize('UA-00000-01', {
	debug: true,
	titleCase: false,
	gaOptions: {
		userId: 123
	}
})
```

---

[ 출처 : [react-ga](https://www.npmjs.com/package/react-ga) ]