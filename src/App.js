import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
    this.updateNumber = this.updateNumber.bind(this);
  }

  updateNumber() {
    this.setState({
      number: this.state.number + 1
    })
  }

  render() {
    return (
      <section>
        <div>
          <div>
            <Title></Title>
            <h2>{this.state.number}</h2>
            <button onClick={ this.updateNumber }>Free Registration</button>
            <img src={process.env.PUBLIC_URL + '/images/Australia.jpg'} height="300px" />
            <div>
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
        </div>

      </section>
    )
  }
}

export default App;
