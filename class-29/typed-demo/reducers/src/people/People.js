import { useReducer } from 'react';

function People() {

  let intialState = {
    count: 0,
    data: [],
  }
  let reducer = (state, action) => {
    switch(action.type) {
      case 'ADD_PERSON':
        return {
          count: state.count + 1,
          data: [...state.data, action.payload]
        }
      default:
        return state;
    }
  }

  // getter and setter (setter now injest and action to supply the reducer)
  let [state, dispatch] = useReducer(reducer, intialState);


  // our addPerson action creator
  function handleAddPerson(name) {

    let action = {
      type: 'ADD_PERSON',
      payload: name,
    }

    dispatch(action);
  }

  return (
    <>
      <p>{state.count}</p>
      {state.data.map((person) => <p>{person}</p>)}
      <button onClick={(e) => handleAddPerson(e.target.value)}value="Jacob">Add Jacob</button>
    </>
  )
}

export default People;
