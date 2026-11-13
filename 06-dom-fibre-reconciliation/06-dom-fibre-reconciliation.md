# DOM Fibre Reconciliation

- `createRoot()` of `ReactDOM` selects the root HTML element and injects the React root, which can later be modified to show or hide different elements. `createRoot()` creates an alternate DOM of the page, compares it with the original DOM, and then replaces the newly updated parts in the page's DOM with respect to its virtual DOM.

- In vanilla web projects, the browser reloads the entire page when an event triggers navigation to another page. This process takes additional time and resources because the DOM is reconstructed and repainted. It also optimizes frequent updates by dropping intermediate updates or batching multiple updates together.

- React Fiber is the core algorithm behind rendering and reconciliation in React. It enables smooth animations, layouts, and gestures through incremental rendering, which splits rendering work into chunks and spreads it across multiple frames. It can also pause, resume, or abort rendering work and reuse previous work when processing new updates. It assigns priorities to updates and enables concurrent rendering primitives.

- When the UI receives very frequent updates, React uses a priority queue to prioritize important updates, such as animations, to maintain a smooth user experience, while less important updates can be skipped or deferred to optimize performance.

- React supports both push-based and pull-based approaches. In the push-based approach, developers trigger updates, while in the pull-based approach, React decides when and how to process updates.

- Hydration is the process of attaching React's JavaScript functionality and event handlers to server-rendered HTML, making it interactive without recreating the entire DOM.

- Reconciliation is the process of comparing two Virtual DOM trees, identifying what has changed, and determining the necessary updates. These updates usually occur when a state change triggers a re-render of the React application.

- React's API is designed to simplify state updates and the re-renders they trigger. Developers only need to define the new state, while React takes care of propagating changes to the UI, transitioning it from the old state to the new state, and optimizing the updates without reloading entire page.

- In real-world applications, re-rendering the entire app on every change is costly in terms of performance. React allows developers to write code as if the entire app re-renders after every state change, while react internally updates only the necessary parts of the DOM through optimizations called reconciliation.

- Reconciliation is the internal mechanism behind what is popularly known as the "Virtual DOM". It generates an element tree in memory that describes the application and uses it to create the actual DOM in the browser. When the application is initially rendered or updated, React generates an element tree of node (elements) in memory. On subsequent updates, React generates a new element tree, compares it with the previous tree to identify the changes, and performs the necessary DOM operations to update the rendered application.

- The old algorithm was Stack Reconciler, which was rewritten from the ground up and replaced by Fiber Reconciler in React 16. The new implementation focuses on:
  1. If the component types are different, React considers them different components and does not compare their internal trees. Instead, it destroys the old component tree and creates a new one.
  2. Keys of components are used as a differentiating factor to determine whether elements are the same or different. Keys should be:
     - Unique: Each sibling element should have a unique key.
     - Predictable: The key should consistently identify the same item across renders.
     - Stable: The key should not change between renders for the same item.tween renders for the same item.

- Fiber Reconciler works with the browser's DOM as well as other rendering environments, such as React Native, React Native for Windows, Android, IOS/macOS, and TV.
