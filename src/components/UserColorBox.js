import React from 'react';
import PropTypes from 'prop-types';

function UserColorBox(props) {
  let {red, green, blue} = props.color;
  const userColorBox = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    visibility: props.guessed ? "visible" : "hidden"
  }

  return (
    <div>
      <h3 style={{textAlign: "center", visibility: props.guessed ? "visible" : "hidden"}}>Your Guess</h3>
      <div 
        style={userColorBox}
        className="color-box"
      />
    </div>
  )
}

UserColorBox.propTypes = {
  color: PropTypes.shape({
    red: PropTypes.number,
    green: PropTypes.number,
    blue: PropTypes.number,
  }).isRequired,
  guessed: PropTypes.bool.isRequired
}

export default UserColorBox
