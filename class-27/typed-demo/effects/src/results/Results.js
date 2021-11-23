import {useEffect} from 'react';

function Results(props) {

  useEffect(() => {
    console.log('Something changed in my parent');
  }, [props.data]);


  useEffect(() => {
    return () => console.log('Results going away');
  });

  return (
    <div id="results">
      <p data-testid="data">Form results: {props.data.text}</p>
    </div>
  )
}

export default Results;
