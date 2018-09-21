import React from 'react';
import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import {indigo400} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

import Title from '../components/Title';
import Benefit from '../components/Benefits';
import data from '../request/Places';

export default class Home extends React.Component {

  places() {
    return data.places.map((place, index) => {
      return (<div className="col-xs-12 col-sm-4" key={index}>
        <Card>
          <CardMedia>
            <img className="pictures" alt={this.props} src={process.env.PUBLIC_URL + place.imageUrl}/>
          </CardMedia>
          <CardTitle title={place.title}></CardTitle>
          <CardText>
            {place.description}
          </CardText>
        </Card>
      </div>);
    })
  }

  render() {
    return (<section>
      <div className="Header-background">
        <div style={{
            "width" : "80%",
            "margin" : "0 auto"
          }}>
          <div className="Header-Main">
            <Title></Title>
            <RaisedButton label="Create free account" secondary={true}/>
            <img alt="images" className="Header-ilustration" src={process.env.PUBLIC_URL + '/images/globe-map-icon.png'} height="300px"/>
          </div>
          <div className="">
            <Benefit></Benefit>
          </div>
        </div>
      </div>
      <div style={{
          'backgroundColor' : indigo400,
          'padding' : '50px'
        }}>
        <h3 style={{
            'fontSize' : '24px',
            color: 'white'
          }}>
          Popular Sites</h3>
        <div className="row">
          {this.places()}
        </div>
      </div>
    </section>);
  }
}