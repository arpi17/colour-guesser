import React from 'react';

import Description from './components/layout/Description';
import Game from './components/Game';
import Intro from './components/Intro';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.changeMode = this.changeMode.bind(this);

    this.state = {
      mode: "intro"
    }
  }

  changeMode() {
    if (this.state.mode === "intro") {
      this.setState({mode: "game"})
    } else {
      this.setState({mode: "intro"})
    }
  }

  render () {
    let element;
    switch (this.state.mode) {
      case "game":
        element = <Game mode={this.state.mode}/>;
        break;
      case "intro":
        element = <Intro mode={this.state.mode}/>;
        break;
      default:
        element = <Intro mode={this.state.mode}/>;
        break;
    }
    return (
      <div>
        <Description />
        {element}
        <button 
          onClick={this.changeMode}
        >
          {this.state.mode === "intro" ? "Play!" : "Practice more"}
        </button>
      </div>
    );
  }
}

export default App