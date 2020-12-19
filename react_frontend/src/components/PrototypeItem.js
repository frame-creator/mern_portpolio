import React from 'react';
import Video from '../images/video3.mp4';
import Card from '../elements/uielements/Card';
import Button from '../elements/uielements/Button';
import Url from '../images/url.png';
import './PrototypeItem.css';

const ListItem = props => {
  return <li className="prototype-tag">{props.value}</li>
}

const PrototypeItem = props => {
  const tools = props.tools;
  const listItems = tools.map((tool) =>
  <ListItem key={tool.toString()} value={tool}/>);
  return (
   
    <li className="prototype-item">
      <Card big className="prototype-item__content">
        <div className="prototype-item__image ">
        
          <img src={props.image} type="video/mp4"/>
        
        </div>
        
        
        <div className="prototype-item__info ">
        <ul className="prototype-tag-list">
          {listItems}
        </ul>
          <h2>{props.title}</h2>
          
          <p>{props.description}</p>
        </div>
        
        <div className="prototype-item__actions ">
          
          <a href={props.url} class="btn-app"><img src={Url} alt="Play Store Button"/></a>
        </div>
      </Card>
    </li>
  );
};

export default PrototypeItem;