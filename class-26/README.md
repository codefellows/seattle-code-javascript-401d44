# Component Based UI

Component based UI systems like `React`, `Angular`, `Vue` and the like all operate on a variation of "Atomic Design", using "Components" as the means of delivery.

"Thinking in React" means re-evaluating how you look at a web application: Breaking down it's functional parts, data dependencies, behaviors, and styles into independent, deliverable, re-usable components.

## Learning Objectives

### Students will be able to

#### Describe and Define

- SASS - Nesting and Variables
- "Component Architecture"
- Application and Component "State"
- Debate/Discuss Libraries vs Frameworks
- Basics of a React App
  - index.html in public (root div)
  - index.js as an untouchable "bootstrap" or "entry point"
  - React Renders into that div
  - JSX is actually javascript but it looks like markup
  - Components can be classes or functions. What gets "returned" gets "rendered"
    - Class - `render() { return(jsx) }`
    - Function - `return(jsx)`
  - Components can load and render each other
  - Components can load their own css

#### Execute

- Begin a React project locally with `create-react-app`
- Use codesandbox.io to work live on a React application
- Create and render `Class` and `Functional` React components to the DOM
- Add event listeners to React components
- Update React component state
- Style React applications/components using SASS

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

As a component based system, React does an awful lot for us, principally, it gets out out of the way and makes it EASY to implement your application the way you see it, using familiar tools.

> JSX looks like markup, but it's actually Javascript. If you had to code it out, you wouldn't...

JSX

```javascript
const element = () => {
  return {
    <h1 className="greeting">
      Hello, world!
    </h1>
  }
);
```

Behind the scenes...

```javascript
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

### Basic (Basic) React

1. React is a series of modules (components) that can be ES6 Classes or Functions. They "render" what they "return"
1. An "index" that imports 'React', includes components, which returns their output into the DOM into `<div id="root"></div>`

   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom';
   import App from './app.js';

   class Main extends React.Component {
     render() {
       return <App />;
     }
   }

   const rootElement = document.getElementById('root');
   ReactDOM.render(<Main />, rootElement);
   ```

1. An "app" that imports other components and "renders" what they "return"

   ```javascript
   import React from 'react';
   import Content from './content.js';

   class App extends React.Component {
     render() {
       return (
         <React.Fragment>
           <Header />
           <Main />
           <Footer />
         </React.Fragment>
       );
     }
   }

   export default App;

   ```

1. Components that do work and render content

   ```javascript
   import React from 'react';

   class Content extends React.Component {
     handleClick = () => {
       console.log('clicked');
     }
     render() {
       return (
         <div>
           <button onClick={this.handleClick}>Click Me!</button>
         </div>
       );
     }
   }

   export default Content;

   ```
