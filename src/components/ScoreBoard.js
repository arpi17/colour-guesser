import React from 'react';
import PropTypes from 'prop-types';

function ScoreBoard({ highScore, score, guessed }) {
  return (
    <div className="score">
      <h2 style={{visibility: highScore ? "visible" : "hidden"}}>
        Best: {highScore}%
      </h2>
      <h2 style={{visibility: guessed ? "visible" : "hidden"}}>
        Score: {score}%
      </h2>
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

ScoreBoard.propTypes = {
  highScore: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired
}

export default ScoreBoard
