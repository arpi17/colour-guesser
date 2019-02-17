import React from 'react';
import PropTypes from 'prop-types';
import { modes, ModeContext } from '../context/mode-context';

class ColorBox extends React.Component {
  componentDidMount() {
    if (this.props.randomColor) {
      this.props.randomColor();
    }
  }
  render() {
    const { red, green, blue } = this.props.color;
    const { game } = modes;

    // Use Context
    const mode = this.context;

    return (
      <div>
        {mode === game && <h3 style={{ textAlign: 'center' }}>Target</h3>}

        <div
          style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
          className="color-box"
        />
      </div>
    );
  }
}
ColorBox.contextType = ModeContext;

ColorBox.propTypes = {
  color: PropTypes.shape({
    red: PropTypes.number.isRequired,
    green: PropTypes.number.isRequired,
    blue: PropTypes.number.isRequired
  }).isRequired,
  randomColor: PropTypes.func
};

export default ColorBox;
