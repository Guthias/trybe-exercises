import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';

function App() {
  return (
    <>
      { pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon}/> 
      ))}
    </> 
  );
}

export default App;
