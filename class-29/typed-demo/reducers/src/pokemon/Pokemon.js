import { useState, useEffect } from 'react';
import axios from 'axios';

function Pokemon() {

  let [results, setResults] = useState([]);


  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
      setResults(response.data.results);
    });
  }, []);// empty array means run once on mount

  // useEffect(() => {

  // }, [request])

  return (
    <>
      <section data-testid="results">
        {results.map((pokemon, idx) =>
          <p key={idx} data-testid={pokemon.name}>{pokemon.name}</p>
        )}
      </section>
    </>
  )
}

export default Pokemon;
