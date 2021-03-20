import React from 'react'
import './Button.css'
const Button = (props) => { 
  return <button onClick={props.func}>{props.txt}</button>
}
export default Button