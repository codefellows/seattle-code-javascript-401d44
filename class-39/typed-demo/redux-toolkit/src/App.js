import './App.css';
import { connect } from 'react-redux';

import { add, remove } from './store/people.slice.js';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      {props.people.map(person => {
        return <p key={person.name}>{person.name}</p>
      })}
      <button onClick={() => props.addPerson('test person')}>Add Test person</button>
    </div>
  );
}

const mapStateToProps = state => ({
  people: state.people,
});

const mapDispatchToProps = {
  addPerson: add,
  removePerson: remove,
}

export default connect(mapStateToProps, mapDispatchToProps)(App); // higher order component. there is a function that takes in a component => a cooler component. 
