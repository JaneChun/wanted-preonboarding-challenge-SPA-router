# React와 History API 사용하여 SPA Router 기능 구현하기
**1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**

- `/` → `root` 페이지
- `/about` → `about` 페이지

**2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**

- 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)

**3) Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.**

```tsx
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

**4) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.**

```tsx
const { push } = useRouter();
```

---

## 📍구현 화면
![Jul-07-2023 14-26-47](https://github.com/JaneChun/wanted-preonboarding-challenge-SPA-router/assets/108467211/3cd3f94e-497f-48f5-83fe-ae56c4b7a470)

## 📍구현하면서 어려웠던 부분
처음에 hook으로 분리하지 않고 Router 컴포넌트 내에서 로직을 작성할 때는 상태(state)로 `currentPath`를 관리해서, `currentPath`가 업데이트될 때마다 화면이 리렌더링되며 경로에 따라 알맞은 컴포넌트가 렌더링되었다.
<br/>
[블로깅 - [원티드 프리온보딩 챌린지] React에서 History API 사용하여 SPA Router 기능 구현하기](https://velog.io/@wlwl99/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%EC%B1%8C%EB%A6%B0%EC%A7%80-React%EC%99%80-History-API-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-SPA-Router-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
<br/>
<br/>
그런데 useRouter 훅으로 분리하고 나니, `currentPath` 업데이트가 일어나도 리렌더링이 일어나지 않았다.
이유를 찾아보니 History API의 `pushState` 메소드는 popstate 이벤트를 발생시키지 않기 때문이었다.
그래서 이벤트 객체를 직접 생성하고 `dispatchEvenet()` 메소드에 전달해 직접 popstate 이벤트를 트리거시켜줘야 했다.
