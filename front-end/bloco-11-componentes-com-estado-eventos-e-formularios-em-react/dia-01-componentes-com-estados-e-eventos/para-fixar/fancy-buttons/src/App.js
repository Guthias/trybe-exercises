import React from 'react';

class App extends React.Component {
  showMessage() {
    console.log('Você clicou no botão')
  }

  render () {
    return (
      <div>
        <button onClick={this.showMessage}>Clique em mim</button>
      </div>
    );
  }
}

export default App;
