import './App.css';

import Layout from './components/layout/Layout';
import Header from './components/header/Header';

import { ThemeContext } from './context/theme';
import { SettingsContext } from './context/site';

function App() {
  return (
    <div className="App">
      <Layout >
        <Header />
      </Layout>

      <SettingsContext.Consumer>
        {(settingsContext) => (
          <p>{settingsContext.title} : Settings consumers go here</p>
        )}
      </SettingsContext.Consumer>

      <ThemeContext.Consumer>
        {(themeContext) => (
          <p>{themeContext.mode} : Theme consumers go here</p>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

export default App;
