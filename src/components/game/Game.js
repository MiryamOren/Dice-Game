/* eslint-disable no-useless-constructor */
import React from 'react'
import Player from './Player'
import RollDice from './RollDice'
import Button from './Button'
import WinningScreen from './WinningScreen'
import './Game.css';
class Game extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
    this.winningScore = props.winningScore;
    this.child = React.createRef();

    this.state = {
      gameEnd : false,
      currentPlayer : 'player1',
      player1 : this.props.players.player1,
      player2 : this.props.players.player2,
    }
    this.rollDice = <RollDice 
    func={this.rollHandler.bind(this)}
    ref={this.child} 
    computerTurn={this.state[this.state.currentPlayer].name === 'Computer'}/>
  }
  componentDidUpdate(){
    if (this.state.player2.name === 'Computer' && 
    this.state.currentPlayer === 'player2'){
      if ((this.state.player2.currentScore +
        this.state.player2.totalScore) < 
        this.winningScore){
          this.computerTurn();
        } else if(!this.state.gameEnd){
          this.holdHandler();
        }  
    }
  }
  computerTurn(){
    setTimeout(() => {
      this.child.current.roll();
    }, 1500);
  }
  switchPlayer(){
    const prev = this.state;
    this.setState({
      gameEnd : false,
      currentPlayer : prev.currentPlayer === 'player1' ? 'player2' : 'player1',
      player1 : prev.player1,
      player2 : prev.player2,
    })
  }
  rollHandler(res1, res2){
    const numbers = {
      'one' : 1,
      'two' : 2,
      'three' : 3,
      'four' : 4,
      'five' : 5,
      'six' : 6
    };
    const res = numbers[res1] + numbers[res2];
    const prev = this.state;
    const currentPlayer = prev.currentPlayer;
    const anotherPlayer = prev.currentPlayer === 'player1' ? 'player2' : 'player1'
    if (res === 12){
      this.setState({
        gameEnd : false,
        currentPlayer : currentPlayer,
        [currentPlayer] : {
          name : prev[currentPlayer].name,
          img : prev[currentPlayer].img,
          totalScore : prev[currentPlayer].totalScore,
          currentScore : 0,
        },
        [anotherPlayer] : prev[anotherPlayer],
      });
      this.switchPlayer();
    } else {
      this.setState({
        gameEnd : false,
        currentPlayer : currentPlayer,
        [currentPlayer] : {
          name : prev[currentPlayer].name,
          img : prev[currentPlayer].img,
          currentScore : prev[currentPlayer].currentScore + res,
          totalScore : prev[currentPlayer].totalScore
        },
        [anotherPlayer] : prev[anotherPlayer],
      });
    }
  }
  holdHandler(){
    const prev = this.state;
    const currentPlayer = prev.currentPlayer;
    const anotherPlayer = prev.currentPlayer === 'player1' ? 'player2' : 'player1'
    const total = prev[currentPlayer].currentScore + prev[currentPlayer].totalScore; 

    // is this a winning?
    if (total >= this.winningScore){
      this.setState ({gameEnd : true});

    } else {
      this.setState({
        gameEnd : false,
        [currentPlayer] : {
          name : prev[currentPlayer].name,
          img : prev[currentPlayer].img,
          currentScore : 0,
          totalScore : total
        },
        [anotherPlayer] : prev[anotherPlayer],
        currentPlayer : anotherPlayer
      });
    }
  }

  newGameHandler(){
    this.setState({
      gameEnd : false,
      currentPlayer : 'player1',
      player1 : this.props.players.player1,
      player2 : this.props.players.player2,
    });
  }

  render (){
    const player1 = this.state.player1;
    const player2 = this.state.player2;
    return(
      <div className="game">
      {(this.state.gameEnd && 
          <WinningScreen 
            winnerImg={this.state[this.state.currentPlayer].img}
            winnerName={this.state[this.state.currentPlayer].name}
            newGame={this.newGameHandler.bind(this)}
            exit={this.props.exit}
          />)}
        <div className="game-board">
          <div className="turn">
          {this.state[this.state.currentPlayer].name} it's your turn!
          </div>
          <div className="dices">
            <RollDice 
            func={this.rollHandler.bind(this)}
            ref={this.child} 
            computerTurn={this.state[this.state.currentPlayer].name === 'Computer'}/>
          </div>
          <div className="game-btns">
            {this.state[this.state.currentPlayer].name !== 'Computer' &&
             <Button txt="Hold" func={this.holdHandler.bind(this)}/>}
          </div>
        </div>
        <div className="players">
          <Player 
            currentPlayer = {this.state.currentPlayer === 'player1'}
            name = {player1.name}
            img = {player1.img}
            currentScore = {player1.currentScore}
            totalScore = {player1.totalScore}
          />
          <Player 
          currentPlayer = {this.state.currentPlayer === 'player2'}
            name = {player2.name}
            img = {player2.img}
            currentScore = {player2.currentScore}
            totalScore = {player2.totalScore}
          />
        </div>
      </div>
    )
    
  }
}

export default Game;