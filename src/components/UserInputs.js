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

      <div 
        className="buttons-container"
        style={{display: props.mode === "intro" ? "none" : "block"}}>
        <button 
          type="submit"
          onClick={props.onClick}
          >
          Submit guess
        </button>
        <br/>
        <button
          style={{visibility: props.guessed ? "visible" : "hidden"}}
          onClick={props.onClick}
          >
          Play again!
        </button>
      </div>
    </div>
  )
}

export default UserInputs;