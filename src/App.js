import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import  RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card';
// import {indigo400, redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors';

// import Title from './components/Title';
import data from './request/places';
import Home from './pages/home';

import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        console.log(data);
    }



            render() {
                return (
                  <MuiThemeProvider>

                      <Home></Home>

                  </MuiThemeProvider>
                );
              }
            }
            export default App;
