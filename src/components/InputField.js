import React from 'react'

function InputField(props) {
  const sliderStyle = {
    appearance: "none",
    backgroundColor: "red"
  }

  return (
    <div>
      <label>{props.color.charAt(0).toUpperCase()}</label>
      <input 
        type="range" 
        min="0" 
        max="255"
        style={sliderStyle}
        value={props.guess}
        onChange={e => {
          if(!props.guessed) {
            props.onChange(e, props.color)}
          }
        }
      />
      <span className="current-color-value">{props.guess}</span>
    </div>
  )
}

export default InputField
