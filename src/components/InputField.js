import React from 'react'

function InputField(props) {
  return (
    <div>
      <input 
        type="number" 
        min="0" 
        max="255"
        value={props.guess}
        onChange={e => props.onChange(e, props.color)}
      />{props.color.charAt(0).toUpperCase()}
    </div>
  )
}

export default InputField
