import { useState } from 'react';

function Form(props) {
  console.log(props);

  // this.state = {}
  let [params, setParams] = useState(''); // hooks are always run as function, the intial state is passed in

  function handleInput(e) {
    let { value, name } = e.target;
    console.log(value, name);
    setParams(value);
  }

  function handleForm(event) {
    event.preventDefault();
    props.updateName(params);
  }

  return(
    <form onSubmit={handleForm}>
      <input onChange={handleInput} type="text" name="param"/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;
