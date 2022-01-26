import logo from './logo.svg';
import './App.css';

function showMessage() {
  console.log('Você clicou no botão')
}
function App() {
  return (
    <div>
      <button onClick={showMessage}>Clique em mim</button>
    </div>
  );
}

export default App;
