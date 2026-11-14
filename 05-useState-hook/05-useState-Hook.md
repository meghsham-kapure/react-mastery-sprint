# `useState()` Hooks

- In React, a local variable change does not trigger a re-render, and if a re-render does not happen, then even if the value is updated, it does not get reflected in the UI.

- `useState()` solves this issue by creating a tracked value and a way to update it. If the value is updated through this, React triggers a re-render.

## `useState()` Usage

- When creating a state variable with the `useState()` hook, it takes the default value of the state as input and returns an array of two values.
  1. The first is the state value reference, used to access the value.
  2. The second is a function that takes a new value for the state, sets it, and re-renders the UI.

```jsx
import { useState } from "react";

const [state, setState] = useState(initialValue);
```

## `useState()` conventions

- The state variable and its setter are named in the pattern `[something, setSomething]`, using array destructuring.
- `useState()` is called only at the top level of a component or custom hook, not inside loops, conditions, or nested functions.

### Problem statement

- When state is updated multiple times within a single event using direct values, React batches the updates and processes them together. Each update receives the state value from the current render as input, so every update uses the same value and produces the same result rather than accumulating the changes.

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return <button onClick={handleClick}>{count}</button>;
}
```

- As Result, `count` becomes `1`, not `3`, because all three updates use the same initial state value (`0`).

### Solution

- To accumulate multiple state updates, use a functional updater by passing an arrow function to the setter. React automatically provides the previous state value (`prev`) as an argument to the function. Each updater receives the result of the previous update, allowing state changes to accumulate.

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
  }

  return <button onClick={handleClick}>{count}</button>;
}
```

- As Result, `count` becomes `3`.

### Better Approach

- Anticipate multiple state updates and perform a single state update to avoid unnecessary re-renders.
