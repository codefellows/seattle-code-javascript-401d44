import React from 'react';
import { PeopleContext } from '../../context/people.js';

class People extends React.Component {
  constructor(props) {
    super(props);
  }


  // this is the magic line that just makes a `context` property available on `this`
  static contextType = PeopleContext;
  
  handlePerson = () => {
    let payload = {
      name: 'Jacob',
      role: 'instructor'
    }

    this.context.addPerson(payload);
  }

  render() {
    return (
      <>
        {this.context.people.map(person =>  {
          return <p>{person.name}</p>
        })}
        <button onClick={this.handlePerson}>Add Person</button>
      </>
    )
  }
}

export default People;
