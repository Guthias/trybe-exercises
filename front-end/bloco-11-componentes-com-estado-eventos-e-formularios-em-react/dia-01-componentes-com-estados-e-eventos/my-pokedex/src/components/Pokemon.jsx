import React from "react"

class Pokemon extends React.Component {
  
  render () {
    const { pokemon } = this.props;
    return (
      <div className="pokemon-card">
        <div className="pokemon-info">
          <p>{ pokemon.name }</p>
          <p>{ pokemon.type }</p>
          <p>Avarege Weigth: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
        </div>
        <div className="pokemon-image">
          <img src={pokemon.image} alt={`Imagem do ${pokemon.name}`}/>
        </div>
      </div>  
    );
  }
}

export default Pokemon