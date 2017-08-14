import React from 'react';

const TextBox = props => {

  return(
    <div>
      <label htmlFor={props.label}>{props.label}</label>
      <input type="text" id={props.label} name={props.name} placeholder={props.label} onChange={props.changeMethod}/>
    </div>
  )
}

export default TextBox;
