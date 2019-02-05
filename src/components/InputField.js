import React from 'react';
import PropTypes from 'prop-types';

function InputField({ color, guess, guessed, onChange }) {
  const sliderStyle = {
    appearance: "none"
  }

  return (
    <div>
      <label className="current-color-value">
        {color.charAt(0).toUpperCase()}
      </label>
      <input 
        type="range" 
        min="0" 
        max="255"
        style={sliderStyle}
        value={guess}
        onChange={e => {
          if(!guessed) {
            onChange(e, color)}
          }
        }
      />
      <span className="current-color-value">{guess}</span>
    </div>
  )
}

InputField.propTypes = {
  color: PropTypes.string.isRequired,
  guess: PropTypes.number.isRequired,
  guessed: PropTypes.bool,  // Cannot be required since `guessed` is not defined in "intro" mode
  onChange: PropTypes.func.isRequired
}

export default InputField
