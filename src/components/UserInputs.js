import React from 'react';
import PropTypes from 'prop-types';

import InputField from './InputField.js';

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

      <div style={{display: props.mode === "intro" ? "none" : "block"}}>
        <button onClick={props.onClick} >
          {props.guessed ? "Play again!" : "Submit guess"}
        </button>
      </div>

      <span
        className="action-text"
        style={{display: props.mode !== "intro" ? "none" : "block"}}>
        Change me!
      </span>
    </div>
  )
}

UserInputs.propTypes = {
  guess: PropTypes.shape({
    red: PropTypes.number,
    green: PropTypes.number,
    blue: PropTypes.number
  }).isRequired,
  guessed: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired
}

export default UserInputs;