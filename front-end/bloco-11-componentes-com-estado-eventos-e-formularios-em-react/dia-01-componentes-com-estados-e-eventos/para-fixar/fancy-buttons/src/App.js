import React from 'react';

class App extends React.Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      countClick: 0,
    }
  }

  handleClick() {
    
    this.setState((oldState, _props) => ({
      countClick: oldState.countClick + 1,
    }))
  }

  render () {
    return (
      <div>
        <p>{ this.state.countClick }</p>
        <button onClick={this.handleClick}>Clique em mim</button>
      </div>
    );
  }
}

export default App;
