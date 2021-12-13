let initialState = [
    {name: 'Jacob'},
    {name: 'Adrian'},
    {name: 'Hexx'}
  ];

  const peopleReducer = (state = initialState, action) => {

    switch(action.type) {
      case 'ADD_PERSON':
        return [...state, { name: action.payload }];
      case "REMOVE_PERSON":
         return state.filter(person => person.name !== action.payload);
      default:
        return state;
    }
  }

  export const addPerson = name => {
    return {
      type: 'ADD_PERSON',
      payload: name,
    }
  }

  export const removePerson = name => {
    return {
      type: 'REMOVE_PERSON',
      payload: name,
    }
  }

  export default peopleReducer;
