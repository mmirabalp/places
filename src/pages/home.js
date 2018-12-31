import React, { Component } from 'react';

import {indigo400} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

import Title from '../components/Title';
import Container from '../components/Container'
import Benefit from '../components/Benefits';
import PlaceCard from '../components/places/PlaceCard';
import data from '../request/Places';
import TransitionGroup from 'react-transition-group/TransitionGroup';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    }
    setTimeout(() => this.setState({places: data.places}), 2000)
    this.hidePlace = this.hidePlace.bind(this);
  }

  places() {
    return this.state.places.map((place, index) => {
      return (<PlaceCard onRemove={this.hidePlace} place={place} key={index}/>);
    })
  }

  hidePlace(place) {
    this.setState({
      places: this.state.places.filter(element => element !== place)
    })
  }

  render() {
    return (<section>
      <div className="Header-background">
      <Container>
          <div className="Header-Main">
            <Title></Title>

            <RaisedButton label="Create free account" secondary={true}/>
            <img alt="" className="Header-ilustration" src={process.env.PUBLIC_URL + '/images/globe-map-icon.png'} height="300px"/>

          </div>
          <div className="">
            <Benefit></Benefit>
          </div>
          </Container>
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
        <TransitionGroup className="row">
          {this.places()}
        </TransitionGroup>
      </div>
      
    </section>);

  }

}