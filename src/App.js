import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui/Card'
import {indigo400, redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors';

import Title from './components/Title';
import './App.css';

class App extends Component {

  render() {
    return (<MuiThemeProvider>
      <div className="Header-background">
        <div style={{
            "width" : "80%",
            "margin" : "0 auto"
          }}>
          <div className="Header-Main">
            <Title></Title>

            <RaisedButton label="Create free account" secondary={true}/>
          <img className="Header-ilustration" src={process.env.PUBLIC_URL + '/images/globe-map-icon.png'} height="300px"/>
          </div>
        </div>

      </div>
      <div style={{
          'background-color' : indigo400,
          'padding' : '50px'
        }}>
        <ul>
          <Card className="Header-Benefit">
            <CardText style={{
                'backgroundColor' : redA400
              }}>
              <img src={process.env.PUBLIC_URL + '/images/heart.png'}/>
              <h3>Evaluate Places based in your Emotions</h3>
              <p>Evaluate your places with experiences, not with numbers
              </p>
            </CardText>
          </Card>
          <Card className="Header-Benefit">
            <CardText style={{
                'backgroundColor' : redA400
              }}>
              <img src={process.env.PUBLIC_URL + '/images/no-Wifi.png'}/>
              <h3>No internet, No Problem</h3>
              <p>Places work without internet or slow signal area</p>
            </CardText>
          </Card>
          <Card className="Header-Benefit">
            <CardText style={{
                'backgroundColor' : redA400
              }}>
              <img src={process.env.PUBLIC_URL + '/images/star.png'}/>
              <h3>Your favorite Places</h3>
              <p>Define a list of your favorite places</p>
            </CardText>
          </Card>

        </ul>
      </div>
    </MuiThemeProvider >)
  }
}

export default App;
