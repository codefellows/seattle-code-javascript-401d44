import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import SettingsProvider from './context/settings';
import PeopleProvider from './context/people';
import AuthProvider from './context/auth';

class Main extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <PeopleProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </PeopleProvider>
      </SettingsProvider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
