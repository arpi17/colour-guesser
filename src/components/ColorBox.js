import React from 'react';
import PropTypes from 'prop-types';

class ColorBox extends React.Component {
  componentDidMount() {
    if (this.props.randomColor) {
      this.props.randomColor();
    } 
  }
  render() {
    let {red, green, blue} = this.props.color;

    return (
      <div>
        {this.props.mode === "game" &&
          (<h3 style={{textAlign: "center"}}>Target</h3>)
        }
        
        <div 
          style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`}}
          className="color-box"
        />
      </div>
    )
  }
}

ColorBox.propTypes = {
  color: PropTypes.shape({
    red: PropTypes.number.isRequired,
    green: PropTypes.number.isRequired,
    blue: PropTypes.number.isRequired
  }).isRequired,
  randomColor: PropTypes.func,
  mode: PropTypes.string.isRequired
}

export default ColorBox;