function Form({ setPokemon }) {

  function handleSubmit(e) {
    e.preventDefault();
    let name = e.target.pokemon.value;
    setPokemon(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Pokemon Name: </p>
        <input name="pokemon"/>
      </label>
    </form>
  )
}

export default Form;
