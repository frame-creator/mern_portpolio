import React from 'react';

import './Square.css';

const Square = props => {
  return (
    <div className={`square ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
      
    </div>
  );
};

export default Square;