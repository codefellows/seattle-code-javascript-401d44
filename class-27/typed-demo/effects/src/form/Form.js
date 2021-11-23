import { useState } from 'react';

function Form(props) {

  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    let { value } = e.target;
    setInputValue(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {text: inputValue}
    props.onSubmit(payload);
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
      <input onChange={handleInput} type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
