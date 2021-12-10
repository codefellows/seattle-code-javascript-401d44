import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { addCandidate, fetchCandidates } from './store/candidates';
import { connect }  from 'react-redux';

// desctructuring props into individual properties
function App({ candidates, increment, postCandidate, getCandidates }) {

  const handleForm = (e) => {
    e.preventDefault();
    let name = e.target.candidate.value;
    postCandidate(name);
  }

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <div className="App">
      {candidates.map((candidate, idx) => (
        <button key={idx} onClick={() => increment(candidate.name)}>{candidate.name}: {candidate.voteCount}</button>
      ))}
      <form onSubmit={handleForm}>
        <input name="candidate" type="text" />
      </form>
    </div>
  );
}

// this performs our blocking request first BEFORE talking to Redux
const voteAsync = async (id, dispatch) => {
  const response = await axios.post('http://localhost:3003/vote', { id });

  console.log(response.data);

  dispatch({
    type: 'INCREMENT',
    payload: id,
  });
}


const mapStateToProps = (state) => ({
  candidates: state.candidates,
});

const mapDispatchToProps = (dispatch) => ({
  increment: async (name) => {
    await voteAsync(name, dispatch);
  },
  postCandidate: (name) => dispatch(addCandidate(name)),
  getCandidates: () => dispatch(fetchCandidates()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
