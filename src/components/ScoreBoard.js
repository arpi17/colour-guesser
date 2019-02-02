import React from 'react'

function ScoreBoard(props) {
  return (
    <div
      className="score"
      style={{visibility: props.guessed ? "visible" : "hidden"}}>
      <h2>Score: {props.score}%</h2>
      {/* <table>
        <tbody>
          <tr>
            <th></th>
            <th>Color</th>
            <th>Guess</th>
          </tr>
          <tr>
            <td>Red:</td>
            <td>{props.color.red}</td>
            <td>{props.guess.red}</td>
          </tr>
          <tr>
            <td>Green:</td>
            <td>{props.color.green}</td>
            <td>{props.guess.green}</td>
          </tr>
          <tr>
            <td>Blue:</td>
            <td>{props.color.blue}</td>
            <td>{props.guess.blue}</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  )
}

export default ScoreBoard