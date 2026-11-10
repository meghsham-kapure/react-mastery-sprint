# Flow and Structure of React

- Every web framework ultimately converts its code to HTML, CSS, and JavaScript. In React, the code is served through `index.html` during development, and the build process outputs a `./build` folder containing everything a website needs to run.

## Internal flow and working of a React app created with CRA

1. Running default script `start: npm start` from `package.json` calls `react-scripts start`. `react-scripts` is

2. `react-scripts` loads the Webpack () and Babel configuration.
   - Webpack is A module bundler that combines all project files (JS, CSS, images) and their dependencies into optimized bundles for the browser. Webpack starts from the entry point `src/index.js` and builds a dependency graph of all imported files.
   - Babel is A JavaScript compiler that transpiles JSX and modern JavaScript into older, browser-compatible JavaScript. Babel transpiles JSX and modern JavaScript into browser-compatible JavaScript.

3. Webpack bundles everything into JavaScript bundles held in memory.

4. The dev server starts (default `localhost:3000`) and serves `public/index.html`,

5. `react-scripts` injects the bundled code into it as a `<script>` tag.

6. The browser loads the bundle, and `src/index.js` runs.

7. `document.getElementById("root")` selects the `<div id="root">` element from `index.html`.

8. `ReactDOM.createRoot(...)` creates a React root bound to that DOM element, which React manages from then on.

9. `root.render(<App />)` makes React call `App` and its child components to build a virtual DOM tree.

10. React compares the virtual DOM with the real DOM (initially empty) and commits the result into `#root`.

11. `<React.StrictMode>` adds extra development-only checks, such as rendering components twice to detect side effects.

12. On file changes, Webpack rebuilds and the browser updates through hot reload.

## Internal flow and working of a React app created with Vite

1. Running default script `dev: npm run dev` from `package.json` calls `vite`. `vite` is

2. Vite loads `vite.config.js` and the React plugin.

3. Vite pre-bundles dependencies from `node_modules` with esbuild.

4. The dev server starts (default `localhost:5173`) and serves `index.html`.

5. `index.html` contains `<script type="module" src="/src/main.jsx">`.

6. The browser requests `src/main.jsx`, and Vite transforms JSX on demand and serves it as native ES modules.

7. Each `import` triggers another browser request, so only the needed files are served.

8. `document.getElementById("root")` selects the `<div id="root">` element from `index.html`.

9. `createRoot(...)` creates a React root bound to that DOM element, which React manages from then on.

10. `.render(<App />)` makes React call `App` and its child components to build a virtual DOM tree.

11. React compares the virtual DOM with the real DOM (initially empty) and commits the result into `#root`.

12. `<StrictMode>` adds extra development-only checks, such as rendering components twice to detect side effects.

13. On file changes, Vite updates only the changed module through HMR.

### CRA vs Vite:

|                      | CRA                                                   | Vite                                                |
| -------------------- | ----------------------------------------------------- | --------------------------------------------------- |
| Bundler (dev)        | Webpack bundles the whole app before serving          | Serves source files as native ES modules on demand  |
| Bundler (production) | Webpack                                               | Rollup                                              |
| Dev server start     | Slow, grows with project size                         | Almost instant                                      |
| HMR                  | Slower in large projects                              | Fast regardless of size                             |
| Configuration        | Hidden inside `react-scripts` (needs eject to change) | Simple `vite.config.js`                             |
| Entry file           | `src/index.js`                                        | `src/main.jsx`                                      |
| File format          | Every file uses `.js` (JSX is allowed in `.js`)       | Components use `.jsx` and logic uses `.js` stickily |
| Default dev port     | `3000`                                                | `5173`                                              |
| Start command        | `npm start`                                           | `npm run dev`                                       |
| Build output         | `build` folder                                        | `dist` folder                                       |
| Status               | Deprecated                                            | Actively maintained                                 |

## JSX

JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like markup inside JavaScript code. Babel transpiles it into `React.createElement()` calls, which produce the React elements that React renders to the DOM.

### Rules of JSX

- Component names must start with a capital letter (`App`, not `app`).
- A component must return a single root element (use a wrapper element or a fragment `<>...</>` [Recommended]).
- Every tag must be closed (`<img />`, `<input />`, `<br />`).
- Use `className` instead of `class`, and `htmlFor` instead of `for`.
- Attributes use camelCase (`onClick`, `tabIndex`).
- JavaScript expressions go inside curly braces `{}`.
- Inline styles are written as objects (`style={{ color: "red" }}`).
- Comments inside JSX use `{/* comment */}`.
- Components must be exported so they can be imported elsewhere; without `export` and `import` statements, a component cannot be used in other files.

### Syntax

```jsx
// FileName: ComponentName.jsx
function ComponentName() {
  return <>{/* Html Component */}</>;
}

export default ComponentName;
```
