import React from 'react';

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

export default UserInputs;