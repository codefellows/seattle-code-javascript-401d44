import React from 'react';
import './App.scss';

import Form from './form/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jacob',
    }
  }

  updateName = (value) => {
    // why can't I do this?
    // this.state.name = value; // this property in considereb "immutatble" on render.

    // we have to tell react that something is changing and we need a re-render.
    this.setState({name: value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {this.state.name}
          </p>
        </header>
        {/* every attribute acts like a parameter on thje props object */}
        <Form updateName={this.updateName}/>
     </div>
    )
  }
}



// const App = () => {

//   // react has created hooks to deal with the lack of `this` in a function.

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World.
//         </p>
//       </header>
//     </div>
//   );
// }

export default App;
