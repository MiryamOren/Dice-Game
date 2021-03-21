import React from 'react'
import './chooseNameAndImg.css'

const ChooseNameAndImg = (props) => {
  const imgs = [
    'https://cdn2.iconfinder.com/data/icons/monster-1-1/450/monster_alien_space._5-512.png',
    'https://cdn2.iconfinder.com/data/icons/monster-1-1/450/monster_alien_space._9-512.png',
    'https://cdn2.iconfinder.com/data/icons/monster-1-1/450/monster_alien_space._11-512.png',
    'https://cdn2.iconfinder.com/data/icons/monster-1-1/450/monster_alien_space._10-512.png',
    'https://cdn2.iconfinder.com/data/icons/monster-1-1/450/monster_alien_space.3-512.png',
    'https://cdn2.iconfinder.com/data/icons/monster-1-1/450/monster_alien_space._1-512.png',
  ];
  const obj ={
    name : `Player ${props.playerNum}`,
    img : imgs[0],
  }
  return (
    <div className = "choose-name-and-img">
    <h1>Player {props.playerNum}</h1>
    <div className="choose-name-and-img_name">
      <label>Choose Name</label>
      <input defaultValue={`Player ${props.playerNum}`}/>
    </div>
      <label>Choose Image</label>
      <div className="imgs">
        {imgs.map((imgSrc, indx) => {
          return <img
            onClick={() => {
              obj.img = imgSrc;
              document.querySelectorAll('img').forEach(img =>
                img.classList.remove('checked'));
              document.querySelector(`.img${indx}`).classList.add('checked');
            }}
            className = {indx === 0 ?`img img${indx} checked`:`img img${indx}`}
            src={imgSrc} 
            alt="">
          </img>
        })}
      </div>
      <button onClick={() => {
        obj.name = document.querySelector('input').value;
        props.func(props.playerNum, obj);
        document.querySelector('input').value = `Player 2`;
        obj.img = imgs[0];
        console.log(obj);
        document.querySelectorAll('img').forEach((img, indx) => {
          indx === 0? img.classList.add('checked') : img.classList.remove('checked');
        });
      }}>Continue</button>
    </div>
  )
}

export default ChooseNameAndImg;