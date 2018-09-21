import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import data from './request/Places';
import Home from './pages/Home';

import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(data);
  }

  render() {
    return (<MuiThemeProvider>
      <Home></Home>
    </MuiThemeProvider>);
  }
}
export default App;
