import React from 'react';

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

export default ColorBox;