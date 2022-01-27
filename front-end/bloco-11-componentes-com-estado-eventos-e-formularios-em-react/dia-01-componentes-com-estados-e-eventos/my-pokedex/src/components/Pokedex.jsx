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
  }

  render () {
    return (
      <>
        <h1 className="pokedex-title">Pokedex</h1>

        <input 
          className="pokedex-input"
          onChange={this.handleChange}
          type="text"
          placeholder="Digite o nome de um pokemon"
        />

        <div className="pokedex">
          { pokemons
            .filter(({ name }) =>  name.toLowerCase().includes(this.state.typedText.toLowerCase()))
            .map((pokemon) => (
              <Pokemon key={pokemon.id} pokemon={pokemon}/> 
            ))
          }
        </div>
      </>
    );
  }
}

export default Pokedex;