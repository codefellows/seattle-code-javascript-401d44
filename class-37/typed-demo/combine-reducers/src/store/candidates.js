const initialState = [
  {name: 'Jacob', voteCount: 0},
  {name: 'Adrian', voteCount: 0},
];

function candidateReducer(state = initialState, action) {

  let {type, payload} = action;

  switch(type) {
    case 'INCREMENT':
      let updatedState = state.map(candidate => {
        if (candidate.name === payload) {
          candidate.voteCount += 1;
        }
        return candidate;
      });
      return updatedState;
    default:
      return state;
  }
}

export default candidateReducer;
