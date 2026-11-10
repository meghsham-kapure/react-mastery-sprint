# Create React Project

## Pre-requisite

1. VS Code: (Latest and Stable)
2. Node Js: (Latest and Stable)
3. React docs: [React Dev Docs](react.dev)
4. Git Repos : [React Mastery Sprint](https://github.com/meghsham-kapure/react-mastery-sprint)

## Starting with new project

> A React project name is a string of lowercase letters, numbers, and `-` to separate words, up to 214 characters.

### Creating a project with the CRA command `npx create-react-app my-app`

- It is a deprecated way and is not recommended in modern React practice because it takes too much time.

  ```shell
  linuxUser:~/React$ npx create-react-app cra-demo-app
  Need to install the following packages:
  create-react-app@5.1.0
  Ok to proceed? (y) y
  npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
  npm warn deprecated uid-number@0.0.6: This package is no longer supported.
  npm warn deprecated fstream-ignore@1.0.5: This package is no longer supported.
  npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
  npm warn deprecated glob@7.2.3: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
  npm warn deprecated fstream@1.0.12: This package is no longer supported.
  npm warn deprecated tar@2.2.2: Old versions of tar are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contactingi@izs.me
  npm notice run npx
  npm notice run 'create-react-app' cra-demo-app
  create-react-app is deprecated.

  You can find a list of up-to-date React frameworks on react.dev
  For more info see:https://react.dev/link/cra

  This error message will only be shown once per install.

  Creating a new React app in /home/React/cra-demo-app.

  Installing packages. This might take a couple of minutes.
  Installing react, react-dom, and react-scripts with cra-template...


  added 1290 packages in 51s

  275 packages are looking for funding
    run `npm fund` for details

  Installing template dependencies using npm...

  added 17 packages, and removed 1 package in 4s

  274 packages are looking for funding
    run `npm fund` for details
  npm warn install-scripts 2 packages had install scripts blocked because they are not covered by allowScripts:
  npm warn install-scripts   core-js@3.51.0 (postinstall: node -e "try{require('./postinstall')}catch(e){}")
  npm warn install-scripts   core-js-pure@3.51.0 (postinstall: node -e "try{require('./postinstall')}catch(e){}")
  npm warn install-scripts
  npm warn install-scripts Run `npm install-scripts ls` to review, or `npm install-scripts approve <pkg>` to allow.
  Removing template package using npm...


  removed 1 package, and audited 1306 packages in 5s

  274 packages are looking for funding
    run `npm fund` for details

  34 vulnerabilities (16 low, 5 moderate, 13 high)

  To address issues that do not require attention, run:
    npm audit fix

  To address all issues (including breaking changes), run:
    npm audit fix --force

  Run `npm audit` for details.
  npm warn install-scripts 2 packages had install scripts blocked because they are not covered by allowScripts:
  npm warn install-scripts   core-js@3.51.0 (postinstall: node -e "try{require('./postinstall')}catch(e){}")
  npm warn install-scripts   core-js-pure@3.51.0 (postinstall: node -e "try{require('./postinstall')}catch(e){}")
  npm warn install-scripts
  npm warn install-scripts Run `npm install-scripts ls` to review, or `npm install-scripts approve <pkg>` to allow.

  Success! Created cra-demo-app at /home/React/cra-demo-app
  Inside that directory, you can run several commands:

    npm start
      Starts the development server.

    npm run build
      Bundles the app into static files for production.

    npm test
      Starts the test runner.

    npm run eject
      Removes this tool and copies build dependencies, configuration files
      and scripts into the app directory. If you do this, you can’t go back!

  We suggest that you begin by typing:

    cd cra-demo-app
    npm start

  Happy hacking!
  ```

- Folder Structure

  ```text
  .
  ├── build
  │   ├── asset-manifest.json
  │   ├── favicon.ico
  │   ├── index.html
  │   ├── logo192.png
  │   ├── logo512.png
  │   ├── manifest.json
  │   ├── robots.txt
  │   └── static
  │       ├── css
  │       │   ├── main.f855e6bc.css
  │       │   └── main.f855e6bc.css.map
  │       ├── js
  │       │   ├── 453.ad812b81.chunk.js
  │       │   ├── 453.ad812b81.chunk.js.map
  │       │   ├── main.922c65a0.js
  │       │   ├── main.922c65a0.js.LICENSE.txt
  │       │   └── main.922c65a0.js.map
  │       └── media
  │           └── logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg
  ├── package.json
  ├── package-lock.json
  ├── public
  │   ├── favicon.ico
  │   ├── index.html
  │   ├── logo192.png
  │   ├── logo512.png
  │   ├── manifest.json
  │   └── robots.txt
  ├── README.md
  └── src
      ├── App.css
      ├── App.js
      ├── App.test.js
      ├── index.css
      ├── index.js
      ├── logo.svg
      ├── reportWebVitals.js
      └── setupTests.js

  8 directories, 32 files
  ```

- Folder and file description
  - `./build` : generated after running command `npm run build`and has HTML, CSS and JS file equivalent of react code. used when deploying the application
  - `./src`: source code of the application where react code is written. `main.js` is the entry point of the application where other components are imported and rendered
  - `./public`: static files like images, icons, manifest.json and index.html file which is the entry point of the application
  - `./package-lock.json`: automatically generated file that records the exact version of each installed package and its dependencies
  - `./package.json`: contains project metadata, dependencies, scripts, and configuration settings for the project

#### Clean up the project

- Delete this files from project
  - `facicon.ico` : delete this file and replace it with your own icon in the public folder
  - `manifest.json` : update the name, short_name, description and theme_color in the manifest.json file used for mobile web app and PWA
  - `logo.png / logo.svg` : delete this file and replace it with your own logo in the src folder
  - `robots.txt` : update the robots.txt file to allow or disallow search engine crawlers from indexing your site
  - `reportWebVitals.js` : update this file to customize the web vitals reporting
  - `setupTests.js` : update this file to customize the test setup for the application
  - `./App.test.js`: used to write unit tests for the App component

- Clean up remove boilerplate code from these files
  - `./README.md`: used to give information about the project including project details files and instructions to run the project for developers and users
  - `./src/App.css` & `./src/index .css`: used to write CSS code for styling the application
  - `./src/index.js`: entry point of the application where the App component is rendered to the DOM

    ```jsx
    import React from "react";
    import ReactDOM from "react-dom/client";
    import "./index.css";
    import App from "./App";

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
    ```

    - `./src/App.js`: main component of the application where other components are imported and rendered

      ```jsx
      import "./App.css";

      function App() {
        return (
          <div className="App">
            <header className="App-header">
              <p>Hello World!!!</p>
            </header>
          </div>
        );
      }
      export default App;
      ```

  - Folder Structure after clean up

    ```text
        .
      ├── eslint.config.js
      ├── index.html
      ├── package.json
      ├── package-lock.json
      ├── public
      │   ├── favicon.svg
      │   └── icons.svg
      ├── README.md
      ├── src
      │   ├── App.css
      │   ├── App.jsx
      │   ├── assets
      │   │   ├── hero.png
      │   │   ├── react.svg
      │   │   └── vite.svg
      │   ├── index.css
      │   └── main.jsx
      └── vite.config.js

      4 directories, 15 files
    ```

### Creating a project with Vite `npm create vite@latest`

```shell
devdotmaverick@legion:~/Desktop/React/02-create-react/vite-demo-app$ npm create vite@latest
npm notice run vite-demo-app@0.0.0 npx
npm notice run 'create-vite'

create-vite v9.3.4

│
◇  Project name:
│  vite-demo-app
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Which linter to use?
│  ESLint
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in /home/devdotmaverick/.local/share/Trash/files/vite-demo-app/vite-demo-app...
│
◇  Installing dependencies with npm...

added 143 packages, and audited 144 packages in 3s

31 packages are looking for funding
  run `npm fund` for details

4 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
│
◇  Starting dev server...
npm notice run vite-demo-app@0.0.0 dev
npm notice run vite

  VITE v8.3.7  ready in 185 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

- Folder Structure

  ```text
  .
  ├── eslint.config.js
  ├── index.html
  ├── package.json
  ├── package-lock.json
  ├── public
  │   ├── favicon.svg
  │   └── icons.svg
  ├── README.md
  ├── src
  │   ├── App.css
  │   ├── App.jsx
  │   ├── assets
  │   │   ├── hero.png
  │   │   ├── react.svg
  │   │   └── vite.svg
  │   ├── index.css
  │   └── main.jsx
  ├── vite.config.js
  └── vite-demo-app
      ├── eslint.config.js
      ├── index.html
      ├── package.json
      ├── package-lock.json
      ├── public
      │   ├── favicon.svg
      │   └── icons.svg
      ├── README.md
      ├── src
      │   ├── App.css
      │   ├── App.jsx
      │   ├── assets
      │   │   ├── hero.png
      │   │   ├── react.svg
      │   │   └── vite.svg
      │   ├── index.css
      │   └── main.jsx
      └── vite.config.js

  8 directories, 30 files
  ```

#### Vite

- What is vite? : Vite is a modern frontend build tool that provides a fast development server with instant hot module replacement (HMR) and bundles code for production.
- Why to user it over other : Vite is preferred over alternatives like CRA (Webpack) because:
  - Its dev server starts almost instantly, since it serves source files as native ES modules instead of bundling everything first.
  - Hot module replacement stays fast regardless of project size.
  - Production builds are optimized with Rollup.
  - It needs minimal configuration and is actively maintained, whereas CRA is deprecated.

- Delete this files from project
  - `/public` : delete this folder and replace it with your own static files like images, icons, manifest.json and index.html file which is the entry point of the application
  - `./src/assets` : delete this folder and replace it with your own static files like images, icons, manifest.json and index.html file which is the entry point of the application

- Clean up remove boilerplate code from these files
  - `./src/App.css` & `./src/index .css`: used to write CSS code for styling the application
  - `./README.md`: used to give information about the project including project details files and instructions to run the project for developers and users
  - `./src/main.jsx`: entry point of the application where the App component is rendered to the DOM

  - Folder Structure after clean up

    ```text
        .
      ├── eslint.config.js
      ├── index.html
      ├── package.json
      ├── package-lock.json
      ├── src
      │   ├── App.css
      │   ├── App.jsx
      │   ├── index.css
      │   └── main.jsx
      └── vite.config.js

      2 directories, 9 files
    ```
