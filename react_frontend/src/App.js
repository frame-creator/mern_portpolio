import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Home from './pages/Home';
import CodeProjects from './pages/CodeProjects';
import PrototypeProjects from './pages/PrototypeProjects';
import Blogs from './pages/Blogs';


import MainNavigation from './elements/navigation/MainNavigaton';


import './App.css';


const App = () => {
 

  let routes;


  routes= (
    <Switch>
     <Route path="/" exact> 
       <Home/>
      
       
       </Route>
       <Route path="/codeprojects" exact>
            <CodeProjects/>
            
          </Route>
       <Route path="/prototypeprojects" exact> 
       <PrototypeProjects/>
       </Route>
       <Route path="/blogs" > 
       <Blogs/>
       </Route>
      <Redirect to="/"/>
      </Switch>
  );


  return (
   
    <Router>
      <MainNavigation/>
      <main>{routes}</main>
    </Router>
 
  );
};

export default App;
