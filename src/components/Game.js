import React from 'react';
import PropTypes from 'prop-types';

import ColorBox from './ColorBox';
import UserColorBox from './UserColorBox.js';
import UserInputs from './UserInputs.js';
import ScoreBoard from './ScoreBoard.js';
import './Game.css';

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      color: {
        red: 0,
        green: 0,
        blue: 0
      },
      guess: {
        red: 0,
        green: 0,
        blue: 0
      },
      guessed: false,
      stats: {
        score: 0,
        highScore: 0 //TODO: if you want highscore to persist lift it to App state!
      }
    }
  }

  handleChange(e, color) {
    this.setState({
      guess: {
        ...this.state.guess,
        [color]: parseInt(e.target.value)
      }
    })
  }

  handleClick() {
    if (!this.state.guessed) {
      const newScore = this.evalGuess();
      const best = this.state.stats.highScore;
      this.setState({
        guessed: !this.state.guessed,
        stats: {
          score: newScore,
          highScore: newScore > best ? newScore : best
        }
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
        stats: {
          ...this.state.stats,
          score: 0
        }
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
    return parseFloat((100 - (100 / Math.sqrt(3 * Math.pow(256,2))) * Math.sqrt(sqrSum)).toFixed(2));
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
    const { color, guess, guessed, stats: {score, highScore} } = this.state;
    return (
      <div>
        <ScoreBoard
          color={color} 
          guess={guess}
          guessed={guessed}
          score={score}
          highScore={highScore}
          onClick={this.handleClick}
        />
        <div className="game">
          <ColorBox
            mode={this.props.mode} // TODO move props.mode to Context API
            color={color}
            randomColor={this.randomColor}
          />
          <UserInputs
            mode={this.props.mode}
            color={color}
            guess={guess}
            guessed={guessed}
            onChange={this.handleChange}
            onClick={this.handleClick}
          />
          <UserColorBox
            color={guess}
            guessed={guessed}
          />
        </div>
      </div>
    )
  }
}

Game.propTypes = {
  mode: PropTypes.string.isRequired
}

export default Game;
