# 3. Quick Start

## Redux Toolkit과 React-Redux 설치

```jsx
yarn add @reduxjs/toolkit react-redux
```

## Redux Store 생성

Create a file named `src/app/store.js`. 

Import the `configureStore`API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:

```jsx
app/store.js

import { configureStore } from "@reduxjs/toolkit"

export default configureStore({
	reducer: {}
})
```