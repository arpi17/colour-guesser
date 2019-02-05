import React from 'react';
import PropTypes from 'prop-types';

function UserColorBox({ color: {red, green, blue}, guessed }) {
  const userColorBox = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    visibility: guessed ? "visible" : "hidden"
  }

  return (
    <div>
      <h3 style={{textAlign: "center", visibility: guessed ? "visible" : "hidden"}}>Your Guess</h3>
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
