import React from 'react'
import GoalScore from './GoalScore'
import GameMode from './GameMode'
import ChooseNameAndImg from './ChooseNameAndImg'
import './landingPage.css';


class LandingPage extends React.Component {
  constructor(props){
    super(props);

    this.props = props;
    this.state = {display : 'GoalScore'};

    this.player1 = {
      name : 'Player 1',
      img: null,
      currentScore : 0,
      totalScore : 0,
    };
    this.player2 = {
      name : 'Player 2',
      img: null,
      currentScore : 0,
      totalScore : 0,
    };
    this.playersNum = null;
    this.winningScore = null;
    this.CurrentPlayer = 1;
  }

  setGoalScore(score){
    this.winningScore = score;
    this.setState({display : 'GameMode'});
  }

  SetGameMode(num){
    if (num === 2){
      this.playersNum = 2;
    } else if (num === 1){
      this.playersNum = 1;
      this.player2.name = 'Computer'
      this.player2.img = 'https://cdn3.iconfinder.com/data/icons/robots-flat-collection/60/Robots_-_Flat_-_037_-_Bot-512.png'
    }
    this.setState({display : 'ChooseNameAndImg'})
  }

  SetNameAndImg(playerNum, playerObj){
    if (playerNum === 1){
      this.player1.name = playerObj.name;
      this.player1.img = playerObj.img;
      if (this.player2.name !== 'Computer'){
        this.CurrentPlayer = 2;
        this.setState({display : 'ChooseNameAndImg'});
      }
      else {
        this.props.func(this.player1, this.player2, this.winningScore);
      }
    } else if (playerNum === 2){
      this.player2.name = playerObj.name;
      this.player2.img = playerObj.img;
      this.props.func(this.player1, this.player2, this.winningScore);
    }
  }
  render(){
    console.log(this.state.display);
    return (
      <div className="landing-page">
      {(this.state.display === 'GoalScore') &&
      <GoalScore func={this.setGoalScore.bind(this)} />}
      {this.state.display === 'GameMode' &&
      <GameMode func={this.SetGameMode.bind(this)}/>}
      {this.state.display === 'ChooseNameAndImg' &&
      <ChooseNameAndImg 
      playerNum = {this.CurrentPlayer}
      func = {this.SetNameAndImg.bind(this)}
      />}
      </div>
    );
  }
}
// <GoalScore func={this.setGoalScore.bind(this)} />
export default LandingPage;
