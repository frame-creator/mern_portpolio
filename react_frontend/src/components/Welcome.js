import React from 'react';


import Video00 from '../img/port.mp4'

import './Welcome.css';


const Welcome = props => {
    

return (
    <React.Fragment>
   <div className="place-page">
   <video autoPlay playsInline muted loop >
          <source src={Video00} type="video/mp4"/>
        </video>
   
       
        
    
    <div class="header-content text-md-center">
      <h1>Developer Koo Yon Kwon</h1>
      <p>안녕하세요. 코딩을 좋아하는 개발자 권구연입니다.</p>
      
    </div>
    </div>
    
</React.Fragment>
);

};
export default Welcome;