import React from 'react';

import ColorBox from './ColorBox.js'
import UserInputs from './UserInputs.js';
import './Intro.css'

class Intro extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      color: {
        red: 255,
        green: 128,
        blue: 0
      }
    }
  }

  handleChange(e, color) {
    this.setState({
      color: {
        ...this.state.color,
        [color]: e.target.value
      }
    })
  }

  render() {
    return (
      <div className="intro-container">
        <section className="intro-text">
          <p>
            The additive color model of RGB allows screens to render millions of colors only by combining three primary colors: <strong>R</strong>ed, <strong>G</strong>reen and <strong>B</strong>lue. The values of these color components range from 0 to 255 reflecting their intensity. Values closer to 0 represent darker colorrs while values towards 255 result in brighter colors. 
          </p>
          <p>
            For example the color <i>rgb(255, 128, 0)</i> contains 255 units of <i>red</i>, 128 units of <i>green</i> and 0 units of <i>blue</i>. Adding these up result in color orange. You can read more about the RGB model <a href="https://en.wikipedia.org/wiki/RGB_color_model" target="_blank" rel="noopener noreferrer">here</a> or you can try it out here on the right.
          </p>
          <p>
            In this simple game you can test your knowledge and perception about colors. You will see a target color and the task is to try guess its RGB code as accurately as possible. Sounds simple right?
          </p>
        </section>

        <div>
          <ColorBox
            mode={this.props.mode}
            color={this.state.color}
          />
          <UserInputs
            mode={this.props.mode}
            guess={this.state.color}
            onChange={this.handleChange}
          />
        </div>

      </div>
    )
  }
}

export default Intro