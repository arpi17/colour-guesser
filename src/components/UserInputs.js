import React from 'react';

import InputField from './InputField.js';
import ScoreBoard from './ScoreBoard.js';

function UserInputs(props) {
  return (
    <div className="slider-area">
      <InputField 
        color='red' 
        guess={props.guess.red}
        guessed={props.guessed}
        onChange={props.onChange} 
      />
      <InputField 
        color='green' 
        guess={props.guess.green}
        guessed={props.guessed}
        onChange={props.onChange}
      />
      <InputField 
        color='blue' 
        guess={props.guess.blue}
        guessed={props.guessed} 
        onChange={props.onChange}
      />

      <br/>

      <button 
        type="submit"
        onClick={props.onClick}
        >
        Submit guess
      </button>

      {props.guessed &&
        <ScoreBoard
          color={props.color} 
          guess={props.guess}
          score={props.score}
          onClick={props.onClick}
        />
      }
    </div>
  )
}

export default UserInputs;