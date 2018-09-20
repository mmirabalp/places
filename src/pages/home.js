import React from 'react';

import  RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import {indigo400, amberA400, green500, greenA200, lime500} from 'material-ui/styles/colors';

import Title from '../components/Title';
import data from '../request/places';

export default class Home extends React.Component {

  places() {
          return data.places.map((place, index) => {
                  return (
                    <div className = "col-xs-12 col-sm-4" key = {index}>
                      <Card>
                      <CardMedia>
                      <img className="pictures" alt={this.props} src={process.env.PUBLIC_URL + place.imageUrl}/>
                    </CardMedia>
                    <CardTitle title = { place.title } > </CardTitle>
                    <CardText> { place.description } </CardText>
                  </Card>
                </div>
              );
            })
          }

    render() {
        return (
          <section>
            <div className = "Header-background" >
            <div style = {
                {
                    "width": "80%",
                    "margin": "0 auto"
                }
            } >
            <div className = "Header-Main" >
              <Title></Title>

              <RaisedButton label = "Create free account" secondary = { true }/>
              <img className = "Header-ilustration" src ={process.env.PUBLIC_URL + '/images/globe-map-icon.png'} height = "300px" / >
            </div>
            <div className = "" >
            <ul >

            <Card className = "Header-Benefit" >
            <CardText >
            <div className = "row" >
            <div className = "Header-Benefit-image"
            style = {
                {
                    'backgroundColor': green500
                }
            } >
             < img src = { process.env.PUBLIC_URL + '/images/heart.png' }/>
           </div >
            <div className = "Header-Benefit-content" >
            <h3 > Places Emotional Evaluation. < /h3>
             <p > Evaluate places base in your experience there < /p>
             </div >
           </div>
         </CardText >
       </Card>

            <Card className = "Header-Benefit" >
            <CardText >
            <div className = "row" >
            <div className = "Header-Benefit-image"
            style = {
                {
                    'backgroundColor': greenA200
                }
            } >
            <img src = { process.env.PUBLIC_URL + '/images/no-Wifi.png' }/>
          </div >
            <div className = "Header-Benefit-content" >
            <h3 > No internet, No Problem </h3>
            <p > Places work without internet or slow signal area </p>
            </div >
            </div>
          </CardText >
          </Card>

            <Card className = "Header-Benefit" >
            <CardText >
            <div className = "row" >
            <div className = "Header-Benefit-image"
            style = {
                {
                    'backgroundColor': lime500
                }
            } >
            <img src = { process.env.PUBLIC_URL + '/images/star.png' }
            />
          </div >
            <div className = "Header-Benefit-content" >
            <h3 > List of Favorites Places </h3>
            <p > Make a list of your favorite places </p>
            </div >
            </div>
          </CardText > </Card>

            </ul>
          </div >
        </div>

            </div>
            <div style={{'backgroundColor': indigo400, 'padding': '50px'}}>
              <h3 style ={{'fontSize': '24px', color: 'white'}}> Popular Sites</h3>
              <div className = "row"> {this.places()}
            </div>
          </div>
          </section>

        );

    }

}
