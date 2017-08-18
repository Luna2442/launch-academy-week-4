import React from 'react';
import { Link } from 'react-router';

const CerealTile = props => {
  return(
    <div>
      <Link to={`/cereals/${props.id}`}><h1>{props.name}</h1></Link>
    </div>
  )
}

export default CerealTile;
