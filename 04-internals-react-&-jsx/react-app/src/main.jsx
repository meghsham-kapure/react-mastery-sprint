import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// works
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

// works
// createRoot(document.getElementById("root")).render(App());

// const reactElement = {
//   type: "h1",
//   props: {
//     id: "title",
//     className: "heading",
//     title: "Custom element",
//   },
//   children: "I am a plain object!",
// };

// does not work
// createRoot(document.getElementById("root")).render(reactElement);

// const reactElement = React.createElement(
//   "a",
//   {
//     href: "http://www.google.com",
//     target: "_blank",
//   },
//   "Click to visit Google",
// );
// createRoot(document.getElementById("root")).render(reactElement);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App prop={name} />
  </StrictMode>,
);
