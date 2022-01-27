import React from "react"
import pokemons from "../data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      typedText: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      typedText: target.value,
    });
    console.log(this.state.typedText);
  }

  render () {
    return (
      <>
        <h1 className="pokedex-title">Pokedex</h1>

        <input onChange={this.handleChange} type="text"/>

        <div className="pokedex">
          { pokemons.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon}/> 
          ))}
        </div>
      </>
    );
  }
}

export default Pokedex;