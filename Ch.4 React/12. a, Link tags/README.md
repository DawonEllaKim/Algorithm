# 12. `<a> vs. <Link>`

## 🛳 `<a>`

- `<a>`태그를 사용하면 페이지를 리렌더링되면서 이동이 된다. 때문에 새로운 데이터를 다시 불러오게된다.
- → 상태값을 잃고 속도가 저하된다.

## 🛳 `<Link>`

- react-router-dom에서 제공하는 `<Link>`태그는 SPA인 리액트 환경에 맞게 바뀌어야 하는 화면망 리렌더링이 되고 나머지 데이터는 그대로 유지된다는 장점이 있다.
- → 필요한 부분만 데이터를 불러올 수 있어서 속도 향상 도움

```jsx
import {Link} from "reacto-router-dom";
...
<Link to="/">Home</Link>
```

---