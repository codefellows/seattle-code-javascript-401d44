import axios from 'axios';

const initialState = [
  {name: 'Jacob', voteCount: 0},
  {name: 'Adrian', voteCount: 0}
];


function reducer(state = initialState, action) {

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
    case 'FETCH_CANDIDATES':
      return payload;
    case 'ADD_CANDIDATE':
      return [...state, payload];
    default:
      return state;
  }
}

export const fetchCandidates = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3003/');

  dispatch({
    type: 'FETCH_CANDIDATES',
    payload: response.data
  });
}

export const addCandidate = (name) => async (dispatch) => {
  const response = await axios.post('http://localhost:3003/candidate', {
    name
  });
  const data = response.data;
  dispatch({
    type: 'ADD_CANDIDATE',
    payload: data,
  });
}

export default reducer;
