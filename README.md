# 이전 상태값을 참조하는 상태값 update 에 대한 clean code

## 새 state 가 이전 state 를 참조하는 경우, 단순히 setState 에 값세팅으로 하는 것이 아니라 함수형으로 하여 이전 상태값을 인자로 받아서 쓰는 로직으로 작성하여야 문제가 없다.

## Tyler Hawkins 의 `clean code` 8번째 글 `Setting State That Relies on the Previous State` 에서 발췌

- <https://betterprogramming.pub/8-ways-to-write-clean-react-code-610c502ccf39>

- worst state update

```js
const handleInc = () => setIncState(incState + 1);
```

- clean state update

```js
const handleInc = () => setIncState((prevState) => prevState + 1);
```
