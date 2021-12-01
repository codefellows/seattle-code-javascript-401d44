import React from 'react';

import { ThemeContext } from '../../context/theme';

class Layout extends React.Component {

  // add a contextType property to the React.Component constructor
  static contextType = ThemeContext;

  render() {

    console.log(this.context);

    function chooseBackground (mode) {
      switch(mode) {
        case 'dark':
          return 'darkblue'
        case 'light':
          return '#f1f1f1'
        default:
          return 'white'
      }
    }

    const styles = {
      backgroundColor: chooseBackground(this.context.mode),
      minHeight: '500px',
      color: this.context.mode === 'dark' ? 'white' : 'black',
    }

    return (
      <div style={styles}>
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
