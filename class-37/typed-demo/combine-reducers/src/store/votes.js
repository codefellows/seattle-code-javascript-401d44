const initialState = 0;

function votesReducer(state = initialState, action) {

  let { type } = action;

  switch(type){
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export default votesReducer;
