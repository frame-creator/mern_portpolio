import React from 'react';

import Card from '../elements/uielements/Card';
import MobileItem from './MobileItem';
import './MobileList.css';
import './MobileItem.css';

const MobileList = props => {
  
  return (
    <ul className="mobile-list">
      {props.items.map(project => (
        <MobileItem
          key={project.id}
          id={project.id}
          image={project.imageUrl}
          title={project.title}
          description={project.description}
          tools={project.tools}
          androidurl={project.androidUrl}
          iosurl={project.iosUrl}
          weburl={project.webUrl}
          githuburl={project.githubUrl}
        />
      ))}
    </ul>
  );
};

export default MobileList;
