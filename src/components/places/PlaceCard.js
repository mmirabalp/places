import React from 'react';
import {Card, CardText, CardMedia, CardTitle, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import CSSTransition from 'react-transition-group/CSSTransition';

export default class PlaceCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true
    }

  }

  render() {
    return (<CSSTransition classNames='fade-scale' in={this.props.in}>
      <div className="col-xs-12 col-sm-4">
        <Card>
          <CardMedia>
            <img className="pictures" alt={this.props} src={process.env.PUBLIC_URL + this.props.place.imageUrl}/>
          </CardMedia>
          <CardTitle title={this.props.place.title}></CardTitle>
          <CardText>
            {this.props.place.description}
          </CardText>
          <CardActions style={{
              'textAlign' : 'right'
            }}>
            <FlatButton secondary={true} label="View More"/>
            <FlatButton secondary={true} onClick={() => this.props.onRemove(this.props.place)} label="Hide"/>
          </CardActions>
        </Card>
      </div>
    </CSSTransition>);

  }
}