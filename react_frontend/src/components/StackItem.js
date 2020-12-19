import React from 'react';
import Video from '../images/video3.mp4';
import Card from '../elements/uielements/Card';
import Button from '../elements/uielements/Button';
import './StackItem.css';

const StackItem = props => {
  const backgroundStyle ={
    backgroundImage : `url(${props.image})`,
    
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '60px',
    width: '60px',
    
  }
  return (
    <li className="stack-item">
      <Card small className="stack-item__content">
     
        <div className='stack-item-background-container'>
       <div className='stack-item-background' style={backgroundStyle} > 
      
        </div>
        </div> 
        <div className="stack-item__info ">
          <h2>{props.title}</h2>
          
          <p>{props.description}</p>
        </div>
       
       
      </Card>
    </li>
  );
};

export default StackItem;

/*
import React from 'react';
import Video from '../images/video3.mp4';
import Card from '../elements/uielements/Card';
import Button from '../elements/uielements/Button';
import './StackItem.css';

const StackItem = props => {
  return (
    <li className="stack-item">
      <Card small className="stack-item__content">
     
        <div className='stack-item-background-container'>
        <div className='stack-item-background' style={{ backgroundImage: `url(${props.image})` }}>
        </div>
        </div> 
        <div className="stack-item__info ">
          <h2>{props.title}</h2>
          
          <p>{props.description}</p>
        </div>
       
       
      </Card>
    </li>
  );
};

export default StackItem;


<div className="container">
        <div className="stack-item__image ">
        <img src={props.image} alt={props.title} />
        </div>
        </div>*
  
 */