import React from 'react';

const CerealInformation = props => {
  return(
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <h3>Sugar Content: {props.sugarContent}</h3>
      <h3>Deliciousness: {props.deliciousness}</h3>
    </div>
  )
}

export default CerealInformation;
