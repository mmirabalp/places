import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
// import logo from './logo.svg';
import { indigo400 } from 'material-ui/styles/colors';

import Title from './components/Title';
import './App.css';



class App extends Component {



  render() {
    return (
      <MuiThemeProvider>
        <div className="Header-background">
          <div style={{ "width": "80%", "margin": "0 auto" }}>
            <div className="Header-Main">
              <Title></Title>

              <RaisedButton label="Create free account" secondary={true} />
              <img className="Header-ilustration" src={process.env.PUBLIC_URL + '/images/Australia.jpg'} height="300px" />
            </div>
          </div>
          <div style={{ 'background-color': indigo400 }}>
            <ul>
              <li>
                <h3>Evaluate Places based in your Emotions</h3>
                <p>Evaluate your places with experiences, not with numbers</p>
              </li>
              <li>
                <h3>No internet, No Problem</h3>
                <p>Places work without internet or slow signal area</p>
              </li>
              <li>
                <h3>Your favorite Places</h3>
                <p>Define a list of your favorite places</p>
              </li>
            </ul>
          </div>
        </div>
      </MuiThemeProvider >
    )
  }
}

export default App;
