import React from 'react';

class ColorBox extends React.Component {
  componentDidMount() {
    this.props.randomColor();
  }
  render() {
    let {red, green, blue} = this.props.color;
    const colorBox = {
      width: "250px",
      height: "250px",
      borderRadius: "20px",
      backgroundColor: `rgb(${red}, ${green}, ${blue})`
    }

    return (
      <div>
        <h3 style={{textAlign: "center"}}>Target</h3>
        <div 
          style={colorBox}
          className="color-box"
        />
      </div>
    )
  }
}

export default ColorBox;