import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './board.css';
class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      PLAYER_ONE: 'X',
      PLAYER_TWO: 'O',
      currentTurn: 'X',
      board: [
        '', '', '', '', '', '', '', '', ''
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.message}</h2>
        </div>
        <div className="board">
          {this.state.board.map((cell) => {
            return <div className="square">{cell}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
