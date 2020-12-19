import React from 'react';
import Video from '../images/videomobile.mp4';
import Card from '../elements/uielements/Card';
import Button from '../elements/uielements/Button';
import Ios from "../images/download-app.svg";
import Android from "../images/download-app-android.png";
import Github from "../images/github-1.png";
import Browser from "../images/browserblack.png";
import './MobileItem.css';


const MobileListItem = props => {
  return <li className="tag">{props.value}</li>
}

const MobileItem = props => {
  const tools = props.tools;
  const MobileListItems = tools.map((tool) =>
  <MobileListItem key={tool.toString()} value={tool}/>);
  return (
   
    <li className="project-mobile-item">
      <Card big className="project-mobile-item__content">
       
        <div className="project-mobile-item__image ">
        
        <video autoPlay playsInline muted loop >
          <source src={props.image} type="video/mp4"/>
        </video>
        </div>
       
        
        <div className="project-mobile-item__tag tag-list">
          {MobileListItems}
        </div>
        <div className="project-mobile-item__info">
          <h2>{props.title}</h2>
          
          <p>{props.description}</p>
        </div>
        
        <div className="project-mobile-item__actions">
        <a href={props.iosurl} class="btn-app"><img src={Ios} alt="App Store Button"/></a>
         <a href={props.androidurl} class="btn-app"><img src={Android} alt="Play Store Button"/></a>
         
         <a href={props.githuburl} class="btn-app"><img src={Github} alt="Play Store Button"/></a>
         <a href={props.weburl} class="btn-app"><img src={Browser} alt="App Store Button"/></a>
         
                
        </div>
      </Card>
    </li>
  );
};

export default MobileItem;