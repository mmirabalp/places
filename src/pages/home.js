import 'React', { Component } from 'react';

export default class Home extends React.Components {
    render() {
        return (

            <
            div className = "Header-background" >
            <
            div style = {
                {
                    "width": "80%",
                    "margin": "0 auto"
                }
            } >
            <
            div className = "Header-Main" >
            <
            Title > < /Title>

            <
            RaisedButton label = "Create free account"
            secondary = { true }
            /> <
            img className = "Header-ilustration"
            src = { process.env.PUBLIC_URL + '/images/globe-map-icon.png' }
            height = "300px" / >
            <
            /div> <
            div className = "" >
            <
            ul >

            <
            Card className = "Header-Benefit" >
            <
            CardText >
            <
            div className = "row" >
            <
            div className = "Header-Benefit-image"
            style = {
                {
                    'backgroundColor': green500
                }
            } > < img src = { process.env.PUBLIC_URL + '/images/heart.png' }
            /></div >
            <
            div className = "Header-Benefit-content" >
            <
            h3 > Places Emotional Evaluation. < /h3> <
            p > Evaluate places base in your experience there < /p> < /
            div > <
            /div> < /
            CardText > <
            /Card>

            <
            Card className = "Header-Benefit" >
            <
            CardText >
            <
            div className = "row" >
            <
            div className = "Header-Benefit-image"
            style = {
                {
                    'backgroundColor': greenA200
                }
            } > < img src = { process.env.PUBLIC_URL + '/images/no-Wifi.png' }
            /></div >
            <
            div className = "Header-Benefit-content" >
            <
            h3 > No internet, No Problem < /h3> <
            p > Places work without internet or slow signal area < /p> < /
            div > <
            /div> < /
            CardText > <
            /Card>

            <
            Card className = "Header-Benefit" >
            <
            CardText >
            <
            div className = "row" >
            <
            div className = "Header-Benefit-image"
            style = {
                {
                    'backgroundColor': lime500
                }
            } > < img src = { process.env.PUBLIC_URL + '/images/star.png' }
            /></div >
            <
            div className = "Header-Benefit-content" >
            <
            h3 > List of Favorites Places < /h3> <
            p > Make a list of your favorite places < /p> < /
            div > <
            /div> < /
            CardText > <
            /Card>

            <
            /ul> < /
            div > <
            /div>

            <
            /div> <
            div style = {
                {
                    'background-color': indigo400,
                    'padding': '50px'
                }
            } >
            <
            h3 style = {
                {
                    'fontSize': '24px',
                    color: 'white'
                }
            } > Popular Sites < /h3> <
            div className = "row" > { this.places() } <
            /div> < /
            div >

        );

    }

}