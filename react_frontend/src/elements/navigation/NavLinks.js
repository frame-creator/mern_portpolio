import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {


return ( <ul className="nav-links">
    <li>
        <NavLink to ="/codeprojects" exact >
            개발 프로젝트
        </NavLink>
    </li>
   
    <li>
      <NavLink to ="/prototypeprojects">
           프로토타입 프로젝트
    </NavLink>
    </li> 
    <li>
      <a href="https://github.com/" class="github-nav">
          깃헙
        </a>
      </li>
    
    <li>
    <a href="https://medium.com/@codeframer00" class="blog-nav">
            블로그
            </a>
    </li>
    
    
      
    </ul>
);  
};
export default NavLinks;