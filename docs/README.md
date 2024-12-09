# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React App Architecture

Understanding the application's strucutre.

### Step 1: The Root

The logic of the React app stems from actions on `index` files in two places:

- `docs/public`

- `docs/src`

Every `index` file in a folder in the `docs/` directory is directly interpretted by React. Consequently, the [`docs/public/index.html`](docs/public/index.html) is the HTML template for every page. Rooted in that HTML, file, dynamic content is then generated from JavaScript in the [`docs/src/index.js`](docs/src/index.js) file.

The CSS (`<link>`) and JavaScript (`<script>`) in the `<head>` of the `public/index.html` file are applied to all views rendered by the app.

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="..."/>
    <script src="..."/>
  </head>
  <body>
    <main id="main"></main>
  </body>
</html>
```

The React App generates all pages written in JavaScript Syntax Extension (JSX) that are part of the component rendered inside the root, i.e. the `App` component. In this case, the root is planted in the `<main>` element of the `index.html` tag because it has the id `'main'`.

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```

### Step 2. The App

This project's `App` component includes 3 things:

  1. Header: Static header that's the same on every view.
  2. Router: Routes to all the pages in the application and their content.
  3. Footer: Static footer that's the same on every view.

As a reminder: all of this content is embedded inside the HTML that serves as the `App`'s root in the `public/index.html` file.

```js
// src/App.js
import './App.css';

import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Router from './Router';

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Router />
                <Footer />
            </>
        );
    }
}

export default App;
```

Early on in the logic of React, every view in the web application needs to be declared as a `Route` component in a router.

```js
<Route exact path="PATH" element={<COMPONENT />} />
```

Each `Route` needs to be a child in React's `Routes` component.

According to the logic of this project, every view is based on an `index.js` in a directory that has the same name as the path. As such, the base component for each page in the web application is imported via a directory. The base component is then given as the `element` prop of the `Route` component.

```js
// src/Router/Routes.js
import {
    Route,
    Routes,
} from 'react-router-dom';

import Corpus from '../views/Corpus';
import CorpusData from '../views/Corpus/views/Data';
import CorpusOntology from '../views/Corpus/views/Ontology';
import CorpusWorkflow from '../views/Corpus/views/Workflow';
import Home from '../views/Home';
import News from '../views/News';
import People from '../views/People';

export default function RouteList() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/people" element={<People />} />
            <Route exact path="/corpus" element={<Corpus />} />
            <Route exact path='/news' element={<News />} />
            <Route exact path="/corpus/ontology" element={<CorpusOntology />} />
            <Route exact path="/corpus/workflow" element={<CorpusWorkflow />} />
            <Route exact path="/corpus/data" element={<CorpusData />} />
        </Routes>
    );
};
```

The `Routes`, which include routes to every page in the web application, are descendants of React's `HashRouter` component. Furthermore, the each page's base component can be embedded inside extra HTML children that descend from the root element in `docs/public/index.html`. The HTML (i.e. `<section>` and `<div>` tags) applies to each page.

```js
import React from 'react';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

import NavBar from './Navbar';
import Routes from './Routes';
import StartAtTop from './StartAtTop';

export default function Router() {
    return (
        <HashRouter>
            <StartAtTop />
            <NavBar />
            <section className="py-3 py-md-5">
              <div className="container">
                <Routes />
              </div>
            </section>
            <ScrollToTop smooth className="scroll-to-top" />
        </HashRouter>
    );
};
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
