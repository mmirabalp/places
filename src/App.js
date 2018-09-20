import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        console.log(data);
    }

    places() {
            return data.places.map((place, index) => {
                    return ( < div className = "col-xs-12 col-sm-4" key = { index } >
                        <Card >
                        <CardMedia >
                        <img class = "pictures" src = { process.env.PUBLIC_URL + place.imageUrl }/> </CardMedia> <CardTitle title = { place.title } > < /CardTitle> <CardText > { place.description } < /CardText> </Card> </div>);
                    })
            }

            render() {
                return ( < MuiThemeProvider >
                    <section >

                    </section> </MuiThemeProvider>)
                }
            }
            export default App;
