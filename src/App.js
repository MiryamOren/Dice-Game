/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React from 'react';
import './App.css';
import Game from './components/game/Game'
import LandingPage from './components/landingPage/LandingPage'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {display : 'LandingPage'};
    this.winningScore = null;
    this.players = {
        player1 : {},
        player2 : {},
      };

  }
  getGameData(player1, player2, winningScore){
    this.players.player1 = player1;
    this.players.player2 = player2;
    this.winningScore = winningScore;
    this.setState({display : 'Game'});
  }
  render() {
    return (
      (this.state.display === 'LandingPage' &&
      <LandingPage func={this.getGameData.bind(this)}/>) ||
      (this.state.display === 'Game' && 
      <Game 
      players={this.players} 
      winningScore={this.winningScore}
      />)
    )
  }
}


export default App;
