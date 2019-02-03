import React from 'react';
import PropTypes from 'prop-types';

import ColorBox from './ColorBox.js';
import UserInputs from './UserInputs.js';
import './Intro.css';

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
        [color]: parseInt(e.target.value)
      }
    })
  }

  render() {
    let aStyle = {
      color: `rgb(${this.state.color.red},${this.state.color.green},${this.state.color.blue})`
    }
    return (
      <div className="intro-container">
        <section className="intro-text">
          <h2>What is RGB?</h2>
          <p>
            The RGB color model is used to create different colors using only three primitives: <strong>R</strong>ed, <strong>G</strong>reen and <strong>B</strong>lue. Adding different blends of these three colors together we can create more than 16 million unique colors.
          </p>
          <h2>What are these values?</h2>
          <p>
            The value of each color component ranges between 0 and 255 reflecting their own intensity. Lower values represent darker colors while higher values result in brighter ones. Read more <a style={aStyle}href="https://en.wikipedia.org/wiki/RGB_color_model" target="_blank" rel="noopener noreferrer">here</a>, or just simply adjust the sliders on the right.
          </p>
          <h2>Okay, can I play now?</h2>
          <p>
            Off you go!
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

Intro.propTypes = {
  mode: PropTypes.string.isRequired
}

export default Intro