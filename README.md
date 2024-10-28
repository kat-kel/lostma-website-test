# Test

Test environment for react web app.

## Deployment

Website is deployed at [https://kat-kel.github.io/lostma-website-test/](https://kat-kel.github.io/lostma-website-test/).

## Development

### Set up

1. Check your version of `node` (22 or greater).

    ```shell
    npm update -g npm
    ```

2. Check your version of `npm` (10 or greater).

    ```shell
    nvm install node
    ```

3. Change into the [`src`](docs/src) directory and install the app's dependencies.

    ```shell
    cd docs
    npm install
    ```

4. Run the app to test it.

    ```shell
    npm run start
    ```

## Organization

How is the React app organized?

### Start

The logic of the React app stems from the [`index.html`](docs/public/index.html) and [`index.js`](docs/src/index.js) files. This HTML file is the backbone of the website's pages. The CSS and JavaScript in its `<head>` are applied to all views rendered by the app. The content of each page is rendered inside the `<body>`, specifically in the `<div id="root">` element of the base `index.html` file.

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="..."/>
    <script src="..."/>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

The [`index.js`](docs/src/index.js) file serves the base HTML with the block of HTML that the `App` component generates. The latter's block of HTML is inserted into the base HTML's `<div id="root">` element.

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### App

The `App` component returns a block of HTML that the `index.js` script inserts into the base HTML when serving the website's home / index page. The home page's block of HTML is imported from a JavaScript file in the [`views/`](docs/src/views/) folder.

```js
import * as RecordTypes from './components'

const rtypes = Object.keys(RecordTypes);

function App() {
  return (
    <div>
      <h1>LostMa Record Types</h1>
      {rtypes.map(i => {
        const RT = RecordTypes[i];
        return <RT />
      })}
  </div>
  );
}

export default App;
```
