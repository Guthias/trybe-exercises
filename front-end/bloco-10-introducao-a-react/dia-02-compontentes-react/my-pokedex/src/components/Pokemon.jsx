import React from "react"

class Pokemon extends React.Component {
  
  render () {
    const { pokemon } = this.props;
    return (
      <div>
        <div>
          <h3>{ pokemon.name }</h3>
          <p>{ pokemon.type }</p>
          <p>Avarege Weigth: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
        </div>
        <div>
          <img src={pokemon.image} alt={`Imagem do ${pokemon.name}`}/>
        </div>
      </div>  
    );
  }
}

export default Pokemon