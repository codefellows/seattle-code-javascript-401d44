import React from 'react';

// our theme singleton
export const ThemeContext = React.createContext();

class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'light',
      fontSize: '12px',
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default Theme;
