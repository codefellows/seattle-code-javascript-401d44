import './App.css';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { connect } from 'react-redux';

function App(props) {

  return (
    <div className="App">
      <Grid sx={{ margin: '50px 0px 0px 0px',}} justifyContent="center" container spacing={1}>
        {props.votes.candidates.map((candidate, idx) => {
          return (
            <Grid key={idx} item>
              <Card>
                <Button onClick={() => {
                  props.increment(candidate.name);
                }}>Vote For {candidate.name}!</Button>
                <Typography>{candidate.voteCount}</Typography>
              </Card>
            </Grid >
          )
        })}
      </Grid>
      <Button onClick={() => {
        props.reset();
      }}>Reset Votes</Button>
    </div>
  );
}

// layer the state to props
const mapStateToProps = state => {
  return {
    votes: state.votes,
  }
}

// this allows actions to be pumped through our reducer.
const mapDispatchToProps = dispatch => ({
  increment: (name) => dispatch({type: 'ADD_VOTE', payload: name}),
  reset: () => dispatch({ type: 'RESET_VOTES' })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
