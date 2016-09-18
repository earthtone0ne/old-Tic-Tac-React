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
      ],
      winningCombos: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [2,4,7], [1,5,8], [0,4,8], [2,4,6]],
      won: false
    };
  }
  handleClick (index) {
    if (this.state.board[index] === '' && !this.state.won) {
      this.state.board[index] = this.state.currentTurn;
      this.setState({
        board: this.state.board,
        currentTurn: this.state.currentTurn === this.state.PLAYER_TWO ? this.state.PLAYER_ONE : this.state.PLAYER_TWO
      });
      this.checkForWin();
    }
  }

  checkForWin () {
      let board = this.state.board;
      let self=this;
      this.state.winningCombos.forEach(function(combo){
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
          alert(board[combo[0]] + ' won the game!');
          self.setState({won: true});
        }
      });
  }

  playAgain () {
    this.setState({
      board: [
        '', '', '', '', '', '', '', '', ''
      ],
      won: false,
      currentTurn: this.state.currentTurn === 'X' ? 'O' : 'X'
    })
  }
  render () {
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
          <div>
            <button type="submit" id="replay-btn" onClick={this.playAgain.bind(this)} className="Primary">
              Play Again
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
