import React from 'react';

import ToDo from './components/todo/todo.js';
import People from './components/people/People';
import Auth from './components/auth/IsAuthorized';
import Login from './components/auth/Login';

export default class App extends React.Component {
  render() {
    return (
      <>
        <ToDo />
        <Login />
        <Auth capability="read">
          <People />
        </Auth>
      </>
    );
  }
}
