import React from 'react';

import InputField from './InputField.js';

function UserInputs(props) {
  return (
    <div>
      <InputField 
        color='red' 
        guess={props.guess.red} 
        onChange={props.onChange} 
      />
      <InputField 
        color='green' 
        guess={props.guess.green} 
        onChange={props.onChange}
      />
      <InputField 
        color='blue' 
        guess={props.guess.blue} 
        onChange={props.onChange}
      />
      <br/>
      <button 
        type="submit"
        onClick={() => 
          console.log(
            `Your guess is: rgb(
              ${props.guess.red},
              ${props.guess.green},
              ${props.guess.blue}
            )`)}>Submit guess
      </button>
    </div>
  )
}

export default UserInputs;