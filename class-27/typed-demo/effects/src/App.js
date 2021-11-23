import { useState, useEffect } from 'react';
import './App.css';

import Counter from './counter/Counter';
import Form from './form/Form';
import Results from './results/Results';

function App() {

  const [data, setData] = useState({text: 'initial value'});

  // if we only want something to happen right before our component renders
  useEffect(() => {
    console.log('App about to render!!');
  }, []); // add state variables / something from a hook to only change when that variable mutates.

  // this will run everytime the app updates.
  useEffect(() => {
    console.log('App has updated!!!');
  });

  // useEffect(() => console.log('component unmounted'));


  return (
    <div className="App">
      <Counter />
      <Form onSubmit={setData}/>
      {data.text !== 'initial value' ? <Results data={data} /> : null}
    </div>
  );
}

export default App;
