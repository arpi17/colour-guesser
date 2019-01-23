import React from 'react';

class Color extends React.Component {
  componentDidMount() {
    this.props.randomColor();
  }
  render() {
    let {red, green, blue} = this.props.color;

    const colorBox = {
      width: "100px",
      height: "100px"
    }

    colorBox.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    return (
      <div>
        <div id="colorBox" style={colorBox}>
        </div>
      </div>
    )
  }
}

export default Color;