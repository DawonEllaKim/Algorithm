# 1. git stash

<aside>
❗ git stash는 변경사항을 commit 없이 임시로 저장할 수 있도록 도와주는 기능
회사에서 일을 하다보면 내가 작업하던 도중에 급하게 처리할 일들이 생긴다. 그때마다 새로운 브렌치 파는것도 번거롭고 또 일일이 삭제할 수도 없다. 그럴때에는 git stash를 활용하면 된다.

</aside>

### 1. 저장하기

```jsx
git stash
```

### 2. 임시 저장된 리스트 확인하기

```jsx
git stash list
```

### 3. 특정 로그 보기

```jsx
git stash show stash@<index>
```

### 4. 마지막에 임시 저장된 것 불러오기

```jsx
git stash pop
```

---

[ 참고: [GitKraken](https://www.gitkraken.com/learn/git/git-stash#:~:text=Git%20Stash%20List&text=The%20Git%20stash%20list%20command,stash%40%20and%20the%20desired%20index.) ]
