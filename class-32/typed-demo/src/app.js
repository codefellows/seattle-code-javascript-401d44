import React from 'react';

import ToDo from './components/todo/todo.js';
import People from './components/people/People';

export default class App extends React.Component {
  render() {
    return (
      <>
        <ToDo />
        <People />
      </>
    );
  }
}
