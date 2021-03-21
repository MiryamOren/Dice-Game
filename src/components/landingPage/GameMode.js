import React from 'react'
import './gameMode.css'

const GameMode = (props) => {
  return (
    <div className="game-mode">
    <h1>Choose Game Mode</h1>
      <div className="game-mode_btns">
        <button className="game-mode_btns_2"
        onClick={() => {props.func(2)}}></button>
        <button className="game-mode_btns_1"
        onClick={() => {props.func(1)}}></button>
      </div>
    </div>
  )
}
export default GameMode;