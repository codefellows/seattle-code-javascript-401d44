import { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';
import Form from './form/Form';
import Display from './display/Display.js';

function App() {

  let [pokemon, setPokemon] = useState([]);
  let [results, setResults] = useState({});
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => {
        setLoading(false);
        setResults(response.data);
      }).catch(e => {
        console.log(e);
        setLoading(false);
      });
  }, [pokemon]);

  return (
    <div className="App">
      <Form
        setPokemon={setPokemon}
      />
      {loading
        ? <p>Loading</p>
        : <Display results={results} />
      }
    </div>
  );
}

export default App;

