import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import {green500, greenA200, lime500} from 'material-ui/styles/colors';

export default class Benefit extends React.Component {
  render() {
    return (<ul>
      <Card className="Header-Benefit">
        <CardText>
          <div className="row">
            <div className="Header-Benefit-image" style={{
                'backgroundColor' : green500
              }}>
              <img alt="images" src={process.env.PUBLIC_URL + '/images/heart.png'}/>
            </div>
            <div className="Header-Benefit-content">
              <h3>
                Places Emotional Evaluation.
              </h3>
              <p>
                Evaluate places base in your experience there
              </p>
            </div>
          </div>
        </CardText>
      </Card>

      <Card className="Header-Benefit">
        <CardText>
          <div className="row">
            <div className="Header-Benefit-image" style={{
                'backgroundColor' : greenA200
              }}>
              <img alt="images" src={process.env.PUBLIC_URL + '/images/no-Wifi.png'}/>
            </div>
            <div className="Header-Benefit-content">
              <h3>
                No internet, No Problem
              </h3>
              <p>
                Places work without internet or slow signal area
              </p>
            </div>
          </div>
        </CardText>
      </Card>

      <Card className="Header-Benefit">
        <CardText>
          <div className="row">
            <div className="Header-Benefit-image" style={{
                'backgroundColor' : lime500
              }}>
              <img alt="images" src={process.env.PUBLIC_URL + '/images/star.png'}/>
            </div>
            <div className="Header-Benefit-content">
              <h3>
                List of Favorites Places
              </h3>
              <p>
                Make a list of your favorite places
              </p>
            </div>
          </div>
        </CardText>
      </Card>
    </ul>);
  }
}