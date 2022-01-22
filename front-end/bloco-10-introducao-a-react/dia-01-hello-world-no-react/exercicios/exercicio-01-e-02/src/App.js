import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const taskList = ['Acordar', 'Ligar o computador', 'Abrir o vs code', 'Codar', 'Dormir'];
  return (
    <div>
      <h1>Lista de tarefas</h1>
      <ol>
        { taskList.map(task => Task(task)) }
      </ol>
    </div>
  );
}

export default App;
