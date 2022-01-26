import React from 'react';

class App extends React.Component {
  constructor () {
    super();

    this.showMessage = this.showMessage.bind(this);
  }

  showMessage() {
    console.log(this)
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
