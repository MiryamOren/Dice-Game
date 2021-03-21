import React from 'react';
import './Player.css'
  
const Player = (props) => {
  let className = 'player';
  if (props.currentPlayer){
    className += ' current';
  }
  return (
    <div className={className}>
      <div className="player-name">{props.name}</div>
      <div className="player-img"><img src={props.img} alt="player-icon"></img></div>
      <div className="score">Current Score: {props.currentScore}</div>
      <div className="score">Total Score: {props.totalScore}</div>
    </div>
  )
}

export default Player; 