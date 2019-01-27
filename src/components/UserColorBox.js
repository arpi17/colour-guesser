import React from 'react'

function UserColorBox(props) {
  let {red, green, blue} = props.color;
  const userColorBox = {
    width: "250px",
    height: "250px",
    borderRadius: "20px",
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

export default UserColorBox
