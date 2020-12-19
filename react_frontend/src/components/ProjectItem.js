import React from 'react';
import Video from '../images/video3.mp4';
import Card from '../elements/uielements/Card';
import Button from '../elements/uielements/Button';
import './ProjectItem.css';
import Github from "../images/github-1.png";
import Browser from "../images/browserblack.png";

const ListItem = props => {
  return <li className="tag">{props.value}</li>
}

const ProjectItem = props => {
  const tools = props.tools;
  const listItems = tools.map((tool) =>
  <ListItem key={tool.toString()} value={tool}/>);
  return (
   
    <li className="project-item">
      <Card big className="project-item__content">
        <div className="project-item__image ">
        
        <video autoPlay playsInline muted loop >
          <source src={props.image} type="video/mp4"/>
        </video>
        </div>
        
        <div className="project-item__tag tag-list">
          {listItems}
        </div>
        <div className="project-item__info">
          <h2>{props.title}</h2>
          
          <p>{props.description}</p>
        </div>
        
        <div className="project-item__actions">
          
          <div className="project-mobile-item__actions">
        
          <a href= {props.weburl} class="btn-app"><img src={Browser} alt="App Store Button"/></a>
         <a href={props.githuburl} class="btn-app"><img src={Github} alt="Play Store Button"/></a>
 
         
                
        </div>
        </div>
      </Card>
    </li>
  );
};

export default ProjectItem;
