//Imports from library React Created when created application boilerplate
import React, { Component } from 'react';

//Imports MuiThemeProvider from material-ui library
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Imports my MyAppBar navegation from ./components/navigation/MyAppBar
import MyAppBar from './components/navigation/MyAppBar';

//Imports the general CSS Styles for the application
import './App.css';


//Exports the App component whtch represent the component that wrap all the other components
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // MuiThemeProvider is a component that makes the theme available down the React tree thanks to React context 
      <MuiThemeProvider> 
        {/* MyAppBar is my Navigation component */}
        <MyAppBar/>
          {/* this represent the App object an receive the properties of the entire application */}
          {this.props.children}
      </MuiThemeProvider>);
    }
}

