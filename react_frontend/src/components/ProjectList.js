import React from 'react';

import Card from '../elements/uielements/Card';
import ProjectItem from './ProjectItem';
import './ProjectList.css';

const ProjectList = props => {
  
  return (
    <ul className="project-list">
      {props.items.map(project => (
        <ProjectItem
          key={project.id}
          id={project.id}
          image={project.imageUrl}
          title={project.title}
          description={project.description}
          tools={project.tools}
          weburl={project.webUrl}
          githuburl={project.githubUrl}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
