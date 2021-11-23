import { useState, useEffect } from 'react';

function Counter() {

  const [count, setCount] = useState(0);

  // only runs when the counter is updated.
  useEffect(() => {
    console.log('Counter is updated');
  }, [count]);

  return (
    <div id="counter">
      <button onClick={() => setCount(count + 1)}>Up</button>
      <p data-testid="count-results">Current Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>Down</button>
    </div>
  )
}

export default Counter;
