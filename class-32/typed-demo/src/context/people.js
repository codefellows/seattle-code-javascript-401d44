import React, { useState } from 'react';

export const PeopleContext = React.createContext();

function PeopleProvider({ children }) {

  // In order for context behaviors to hook into our react application, we should define them using state / reducer hooks.
  const [currentPerson, setCurrentPerson] = useState({});
  const [people, setPeople] = useState([]); 

  const values = {
    currentPerson,
    people,
    setCurrentPerson: ({ name, role }) => {
      if (!name || !role) {
        throw new Error('Invalid person submitted');
      } else {
        setCurrentPerson({name, role});
      }
    },
    addPerson: ({name, role}) => {
      if (!name || !role) {
        throw new Error('Invalid person submitted');
      } else {
        setPeople([...people, {name, role}]);
      }
    }
  }


  return (
    <PeopleContext.Provider value={values}>
      {children}
    </PeopleContext.Provider>
  )
}

export default PeopleProvider;
