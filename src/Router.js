//Imports from library React Created when created application boilerplate
import React from 'react';
import {
  BrowserRouter as ReactRouter,
  Route
} from 'react-router-dom'

//Imports all the commponents to be routed to
import Home from './pages/Home';
import Login from './pages/Login';
import Singup from './pages/Singup';
import App from './App';

//This is Router component to hangle the applications routes.
export default class Router extends React.Component{
  render(){
    return(
        <ReactRouter>
          <App>   
              <Route exact path="/" component={Home}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/singup" component={Singup}></Route>
          </App>
        </ReactRouter>  
    );
  }
}