# Context API - Behaviors

Using the React "Context API" we can create an manage state in a more "global" fashion, making state that matters to your entire application easily available to ... your entire application.

## Learning Objectives

### Students will be able to

#### Describe and Define

- Global State
- Providers and Consumers
- Context Methods

#### Execute

- Use the React Context API to tactically manage global state.

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

Context provides a means of passing state down the component tree through a Provider/Consumer relationship.

At as high a level as makes sense, a "provider" can make it's state available, **along with means of altering it (methods)**.

```javascript
import React from 'react';

export const SettingsContext = React.createContext();

class SettingsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeTitleTo: this.changeTitleTo, // <-- Notice how we're adding the exported method to state?
      title: 'My Amazing Website',
    };
  }

  // Here's a method that we can "provide" to our "consumers" to let them
  // change the state that we manage here in our context
  // Note: it's just a wrapper around useState()
  changeTitleTo = title => {
    this.setState({ title });
  };

  // Becase we're providing our "values" as the whole of state, that will
  // include both the state variables as well as the methods we want to
  // let the users run
  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsProvider;

```

At the app level ...

```javascript
<SettingsContext>
  <Content />
</SettingsContext>
```

At the lower levels any component can "opt-in" and become a "consumer" and receive `this.state` from context.

### In a class style component, you can attach to context in 2 ways:

 Wrap your component with, and use a function to "get" the context object itself, which is `this.state` from the provider component.

```javascript
<SettingsContext.Consumer>
  {context => {
    console.log(context);
  return (
    <div>
      <h1>{context.title}</h1>
      <button onClick={() => context.changeTitleTo('Your Website')}>
        Change Title
      </button>
    </div>
  );
  }}
</SettingsContext.Consumer>
```

Statically declare a connection to the context provider and then use `this.context` to connect to state from the context provider

```javascript
import {SettingsContext} from '../settings/context.js';

class MyComponent extends React.Component {

  static contextType = SettingsContext;

  render() {
    return (
      <div>
        <h1>{this.context.title}</h1>
        <button onClick={() => this.context.changeTitleTo('Your Website')}>
          Change Title
        </button>
      </div>
    );
  )

}
```

In a functional component, you can use the `useContext()` hook to tap right in.

Returns and provides access to whatever your context provider exports

In this example, our context provider gives us a `title` property and a `changeTitleTo()` method that we can call. This is much easier than referencing the context variable inline as you normally would.

Note -- the context API is still critically important even with this hook available. Not every React shop is using hooks, so know both ways.

```javascript
import React from 'react';
import faker from 'faker';
import { useContext } from 'react';
import { SettingsContext } from './settings/context';

function Counter() {
  const context = useContext(SettingsContext);

  return (
    <div>
      <h2>{context.title}</h2>
      <button
        type="button"
        onClick={() => context.changeTitleTo(faker.company.companyName())}
      >
        Change Title
      </button>
    </div>
  );
}

export default Counter;

```
