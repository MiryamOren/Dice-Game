/* eslint-disable no-useless-constructor */
import React from 'react';
// import './App.css';
import Game from './components/Game'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      winningScore : 30,
      players: {
        player1 : {
          name : 'Player1',
          img : 'https://cdn2.iconfinder.com/data/icons/monster-1-1/450/monster_alien_space._2-512.png',
          currentScore : 0,
          totalScore : 0,
        },
        player2 : {
          name : 'Player2',
          img : 'https://cdn2.iconfinder.com/data/icons/monster-1-1/450/monster_alien_space._5-512.png',
          currentScore : 0,
          totalScore : 0,
        },
      },
    }
  }
  render() {
    return (
      <Game 
        players={this.state.players} 
        winningScore={this.state.winningScore}
      />
    )
  }
}
export default App;
