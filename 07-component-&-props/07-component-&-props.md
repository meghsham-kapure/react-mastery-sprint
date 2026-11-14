# Props and Components

## Component

- A React component is a reusable, independent piece of UI defined as a JavaScript function that returns React elements (JSX).

- React follows the principle of keeping related concerns together by keeping content (JSX), logic (JS/TS), and styling (Tailwind CSS) in the same file for each component.

### React Component Best Practices

- Keep components small and focused on a single responsibility and Avoid deeply nested component definitions making components reusable where appropriate.
- Use PascalCase for component meaningful and descriptive names.
- Extract complex logic into custom hooks and Separate business logic from UI when complexity increases.
- Keep components pure; avoid side effects during rendering.
- Use stable, unique keys when rendering lists.

## Props

- Props (properties) are read-only data passed from a parent component to a child component to configure its behavior and appearance.
- Props are passed as attributes from the parent component and destructured from the props object in the child component.

  ```jsx
  function ParentComponent() {
    return (
      <>
        <ChildComponent property1="SomeValue1" property2="SomeValue2" />
      </>
    );
  }

  function ChildComponent({ property1, property2 }) {
    return (
      <>
        <p>Property 1: {property1}</p>
        <p>Property 2: {property2}</p>
      </>
    );
  }
  ```

  - When passing props, direct string values can be passed using quotes, while JavaScript variables and expressions must be passed inside curly braces (`{}`).

  - When receiving props, destructure them to avoid using the dot operator and make accessing values easier. Handle `null` or `undefined` values with appropriate checks or provide default values to prevent runtime errors.
