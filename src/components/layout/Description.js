import React from 'react'

function Description() {
  return (
    <section style={welcomeStyle} id="welcome">
      <h1>Welcome to the RGB Color Guesser!</h1>
      <h2>Can you guess the colour?</h2>
    </section>
  )
}

const welcomeStyle = {
  width: "80%",
  margin: "auto",
  textAlign: "center",
}

export default Description;