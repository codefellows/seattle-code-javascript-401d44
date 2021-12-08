let initialState= {
  candidates: [
    { name: 'Jacob', voteCount: 0 },
    { name: 'Adrian', voteCount: 0 },
    { name: 'Hexx', voteCount: 0 },
  ],
  totalVotes: 0,
};

function candidateReducer(state = initialState, action) {

  let { type, payload } = action;

  switch(type) {
    case 'ADD_VOTE':

      let totalVotes = state.totalVotes + 1;
      let candidates = state.candidates.map(candidate => {
        if (candidate.name === payload) {
          return {...candidate, voteCount: candidate.voteCount + 1};
        } else {
          return candidate;
        }
      });

      return { candidates, totalVotes }
    case 'RESET_VOTES':
      return initialState;
    default:
      return state;
  }
}

export default candidateReducer;
