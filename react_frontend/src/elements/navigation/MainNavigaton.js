import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../images/port.png'

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = props => {
    return (
        <MainHeader>
         
         
      <ul className="main-links">
        <Link to="/"><li class="logo-box ">
       <img src={Logo} alt="logo" class="logo"/>
           
       </li></Link>
       <li className="main-navigation__name">
        <h2> Developer Kwon Koo Yon </h2>
        </li>
        </ul>
      
      
      <nav className="main-navigation__header-nav">
       <NavLinks/>
      </nav>  

        </MainHeader>
    );
};

export default MainNavigation;