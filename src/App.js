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
  handleClick (index) {
    if (this.state.board[index] === '') {
      this.state.board[index] = this.state.currentTurn;
      this.setState({
        board: this.state.board,
        currentTurn: this.state.currentTurn === this.state.PLAYER_TWO ? this.state.PLAYER_ONE : this.state.PLAYER_TWO
      })
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.message}</h2>
        </div>
        <div className="board">
          {this.state.board.map((cell,i) => {
            return <div onClick={this.handleClick.bind(this,i)} className="square" key={i}>{cell}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
