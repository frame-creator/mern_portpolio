import React from 'react';

import Card from '../elements/uielements/Card';
import PrototypeItem from './PrototypeItem';
import './PrototypeList.css';

const PrototypeList = props => {
  

  return (
    <ul className="prototype-list">
      {props.items.map(prototype => (
        <PrototypeItem
          key={prototype.id}
          id={prototype.id}
          image={prototype.imageUrl}
          title={prototype.title}
          description={prototype.description}
          tools={prototype.tools}
          url={prototype.prototypeUrl}
        />
      ))}
    </ul>
  );
};

export default PrototypeList;
