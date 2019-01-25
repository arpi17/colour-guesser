import React from 'react';

import ColorBox from './ColorBox';
import UserColorBox from './UserColorBox.js';
import UserInputs from './UserInputs.js';
import './Game.css';

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      color: {
        red: '',
        green: '',
        blue: ''
      },
      guess: {
        red: '',
        green: '',
        blue: ''
      },
      guessed: false,
      score: 0
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

  handleClick() {
    if (!this.state.guessed) {
      this.setState({
        guessed: !this.state.guessed,
        score: this.evalGuess()
      })
    } else {
      this.randomColor();
      this.setState({
        guess: {
          red: 0,
          green: 0,
          blue: 0
        },
        guessed: !this.state.guessed,
        score: 0,
      })
    }
    
  }

  evalGuess() {
    let sqrSum = 0;
    for (let color in this.state.color) {
      if (this.state.color.hasOwnProperty(color)) {
        sqrSum += Math.pow(this.state.color[color] - this.state.guess[color] ,2);
      }
    }
    return Math.sqrt(sqrSum);
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
      <div className="game">
        <ColorBox
          color={this.state.color}
          randomColor={this.randomColor}
        />
        <br/>
        <UserInputs
          color={this.state.color}
          guess={this.state.guess}
          guessed={this.state.guessed}
          score={this.state.score}
          onChange={this.handleChange}
          onClick={this.handleClick}
        />
        <UserColorBox
          color={this.state.guess}
          guessed={this.state.guessed}
        />
      </div>
    )
  }
}

export default Game;
