import React from 'react';

import Color from './Color';
import UserInputs from './UserInputs.js'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      color: {
        red: null,
        green: null,
        blue: null
      },
      guess: {
        red: '',
        green: '',
        blue: ''
      }
    }
  }

  handleChange(e, color) {
    this.setState({
      guess: {
        ...this.state.guess,
        [color]: e.target.value
      }
    })
  }

  randomColor = () => {
    function randomNum() {
      return Math.floor(Math.random() * 256);
    };

    this.setState({
      color: {
        red: randomNum(),
        green: randomNum(),
        blue: randomNum()
      }
    });
  }
  
  render() {
    return (
      <div>
        <Color 
          color={this.state.color}
          randomColor={this.randomColor}
        />
        <br/>
        <UserInputs
          guess={this.state.guess}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Game;
