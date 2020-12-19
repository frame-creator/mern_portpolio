import React from 'react';

import Card from '../elements/uielements/Card';
import StackItem from './StackItem';
import './StackList.css';

const StackList = props => {
  
  return (
    <ul className="stack-list">
      {props.items.map(stack => (
        <StackItem
          key={stack.id}
          id={stack.id}
          image={stack.imageUrl}
          
          title={stack.title}
          description={stack.description}
        />
      ))}
    </ul>
  );
};

export default StackList;
