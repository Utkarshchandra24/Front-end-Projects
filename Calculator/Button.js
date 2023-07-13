
import React from 'react'

const Button = (props) => {


  return (
    <input type='button' onClick={props.handelClick} value={props.label} />
  )
}

export default Button