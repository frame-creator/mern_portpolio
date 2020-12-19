import React from 'react';

import './Card.css';

const Card = props => {
  return (
    <div className={`${props.className} card--${props.size || 'default'} ${props.small &&
      'card--small'} ${props.big && 'card--big'}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;