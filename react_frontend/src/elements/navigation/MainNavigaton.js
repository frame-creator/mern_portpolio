import React, {useState}  from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../images/port.png'

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';
import SideDrawer from './SideDrawer';

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true) ;
  }

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  }
    return (

      <React.Fragment>
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
        <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
         
      <ul className="main-links">
        <Link to="/"><li class="logo-box ">
       <img src={Logo} alt="logo" class="logo"/>
           
       </li></Link>
       <li className="main-navigation__name">
        <h2>Developer Koo Yon Kwon</h2>
        </li>
        </ul>
      
      
      <nav className="main-navigation__header-nav">
       <NavLinks/>
      </nav>  

        </MainHeader>
        </React.Fragment>
    );
};

export default MainNavigation;