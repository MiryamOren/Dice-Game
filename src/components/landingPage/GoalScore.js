import React from 'react'
import './goalScore.css'
const GoalScore = (props) => {
  const winningScore = [50, 100, 200, 300];
  return (
    <div className="goal-score">
      <h1>Wellcome to Dice Game!</h1>
      <h2>Game Rules</h2>
      <p>In each turn, a player rolls 2 dices as many times as he wishes.
      Each result will get added to his round’s score.
      But if the player rolls a double six all his round’s score gets lost.
      After that, its the next player’s turn.
      A player can choose to ‘Hold’, which means that his round’s score
      gets added to his global score. After that, its the next players turn.
      The first player to reach the goal score points wins.</p>
      <label>choose the goal score</label>
      <div className="goal-score_btns">
        {winningScore.map(score => <button 
          onClick={ () => {props.func(score)}}>
          {score}</button>)}
      </div>
      
    </div>
  );
}
export default GoalScore;