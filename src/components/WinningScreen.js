import React from 'react'
import Button from './Button'
import './WinningScreen.css'
const GameWinningScreen = (props) => {
  return (
    <div className="winning-screen_container">
      <div className="winning-screen">
        <div className="winner">
          <div className="winner_img">
            <img src={props.winnerImg} alt="winner-icon"></img>
          </div>
          <div className="winner_name">
            <p>{props.winnerName} Wins!!!</p>
          </div>
        </div>
        <div className="winning-screen_btns"></div>
          <Button txt="New Game" func={props.newGame}/>
          <Button txt="Exit" func={window.close}/>
      </div>
    </div>
  );
}

export default GameWinningScreen;