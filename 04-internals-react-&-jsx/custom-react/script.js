console.log("Script Loaded!");

const root = document.querySelector("#root");

const elementObject = {
  type: "a",
  props: {
    href: "www.google.com",
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
