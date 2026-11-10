import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");

const reactDom = ReactDOM.createRoot(root);

reactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
