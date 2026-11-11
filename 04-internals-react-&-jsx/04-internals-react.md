# Internals of React

## How React Renders Elements into the DOM

- Theory: React uses `createRoot(container)` to create a root for a target DOM element. Then `root.render(element)` takes a React element, which is a plain JavaScript object that describes the UI. React converts this object into real DOM nodes and inserts them into the target element, replacing any existing content inside it.

  ```html
  // filename: index.html
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Custom React</title>
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      <div id="root">Hello</div>
      <script src="./script.js"></script>
    </body>
  </html>
  ```

  ```css
  // filename: style.css
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```

  ```js
  // filename: script.js

  console.log("Script Loaded!");

  const root = document.querySelector("#root");

  const elementObject = {
    type: "a",
    props: {
      href: "http://www.google.com",
      target: "_blank",
    },
    children: "Click me visit Google",
  };

  function render(targetElement, reactElement) {
    const newDomElement = document.createElement(reactElement.type);
    newDomElement.innerHTML = reactElement.children;
    newDomElement.setAttribute("href", reactElement.props.href);
    newDomElement.setAttribute("target", reactElement.props.target);

    setTimeout(() => {
      targetElement.replaceChildren();
      targetElement.appendChild(newDomElement);
    }, 3000);
  }

  // render(root, rootElement);

  function renderOptimized(targetElement, reactElement) {
    const newDomElement = document.createElement(reactElement.type);

    for (const prop in reactElement.props) {
      if (prop === "children") continue;
      newDomElement.setAttribute(prop, reactElement.props[prop]);
    }

    newDomElement.innerHTML = reactElement.children;

    setTimeout(() => {
      targetElement.replaceChildren();
      targetElement.appendChild(newDomElement);
    }, 3000);
  }

  renderOptimized(root, elementObject);
  ```

## How JSX Components Work

A JSX component is a JavaScript function that returns a description of the UI (a React element, which is a plain JavaScript object). After rendering, React converts this description into real HTML elements in the DOM.

```jsx
// filename: main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// works
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// works
createRoot(document.getElementById("root")).render(App());

const elementObject = {
  type: "h1",
  props: {
    id: "title",
    className: "heading",
    title: "Custom element",
  },
  children: "I am a plain object!",
};

// does not work
createRoot(document.getElementById("root")).render(elementObject);
```

Passing `<App />` is the correct way, because JSX is converted into a React element and React handles the component. Calling `App()` directly works only because it returns a React element, but it bypasses React's component handling, such as hooks, state, and optimizations. Passing a plain object like `elementObject` does not work because React's `render()` method does not recognize it as a valid React element; real elements need internal fields such as `$$typeof`, which are created by JSX or `React.createElement`.

```jsx
// filename: main.jsx
import React from "react";
import { createRoot } from "react-dom/client";

const reactElement = React.createElement(
  "a",
  {
    href: "http://www.google.com",
    target: "_blank",
  },
  "Click to visit Google",
);

createRoot(document.getElementById("root")).render(reactElement);
```

## JSX takes evaluated expressions rather than variable names

An evaluated expression is a JavaScript expression that is resolved to a final value, which React can then render on the screen. In JSX, curly braces `{}` hold such an expression (for example `{name}` or `{1 + 2}`), and its result is rendered, not the expression text itself.

```jsx
function App() {
  const name = "Sam Altman";
  const one = 1;
  const ten = 10;

  return (
    <>
      <div>
        <p>Hi I am {name}</p> {/* Hi I am Sam Altman */}
        <p>Sum: {one + ten}</p> {/* Hi I am Sam Altman */}
      </div>
    </>
  );
}

export default App;
```

### JSX Rules in React

1. JSX must return a single parent element. Use a React Fragment (`<>...</>`) when you don't want an additional DOM element.

2. All JSX elements must be properly closed, including self-closing elements such as `<img />` and `<input />`.

3. Use `className` instead of `class` to assign CSS classes and `htmlFor` instead of `for` in HTML labels as both are keyword in JS and user in different context

4. Use curly braces `{}` to embed JavaScript expressions inside JSX. JavaScript expressions can be used inside JSX, but statements such as `if`, `for`, and `switch` cannot be written directly inside JSX.

5. Use `{/* */}` for comments inside JSX.

6. Use camelCase for most JSX attributes and event handlers, such as `onClick`, `onChange`, and `tabIndex`.

7. Use curly braces to pass JavaScript values and expressions as props. Use quotes for string literals.

8. Boolean props can be specified without assigning a value, such as `<input disabled />`.

9. Use `style` with a JavaScript object, and specify CSS properties in camelCase.

10. Use `key` as a unique and stable identifier when rendering lists. Avoid using array indexes when items can be reordered, inserted, or deleted.

11. Use `map()` to render lists of elements.

12. Event handlers must receive function references or callback functions, not the result of calling a function during rendering.

13. Use conditional rendering with ternary operators (`condition ? A : B`) or logical AND (`condition && A`).

14. Use `{null}`, `{undefined}`, or boolean values to render nothing.

15. Use `dangerouslySetInnerHTML` only when necessary and only with trusted or properly sanitized HTML.

16. Use lowercase names for native HTML elements and PascalCase names for React components.

17. Custom components must start with an uppercase letter.

18. JSX attributes that contain hyphens in HTML must generally retain their HTML names, such as `data-*` and `aria-*`.

19. Use PascalCase for dynamically referenced component variables, such as `<ComponentName />`.

20. Use `React.Fragment` with a `key` when rendering multiple elements inside a list without adding a DOM element.

21. Use spread syntax (`{...props}`) to pass multiple props to a component.

22. Do not use reserved JavaScript keywords as JSX attribute names when JSX provides an alternative, such as `className` and `htmlFor`.

23. Use `data-*` and `aria-*` attributes with their original lowercase, hyphenated names.

24. Use explicit boolean expressions when necessary, such as `disabled={isDisabled}`.

25. Avoid rendering numeric values directly with logical AND (`&&`) when zero might be displayed unintentionally.

26. Use parentheses to improve readability when embedding multiline JavaScript expressions in JSX.

27. Use curly braces to render JavaScript variables, function calls, and computed values.

28. Do not mutate state directly inside JSX or during rendering.

29. Avoid defining unnecessary functions or performing expensive calculations directly inside JSX.

30. Use semantic HTML elements instead of generic `<div>` elements whenever appropriate.

31. Ensure that dynamically generated JSX elements have stable, unique `key` values among their siblings.

32. Use proper JSX syntax for SVG attributes, such as `strokeWidth`, `fillRule`, and `viewBox`.

33. Do not place HTML comments (`<!-- -->`) inside JSX. Use JSX comments (`{/* */}`) instead.
