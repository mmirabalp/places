import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAppBar from './components/navigation/MyAppBar';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    //console.log(data);
  }

  render() {
    return (<MuiThemeProvider>
      <MyAppBar/>
      {this.props.children}
    </MuiThemeProvider>);
  }
}
export default App;
