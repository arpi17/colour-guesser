import React from 'react';

import Game from './components/Game';
import Intro from './components/Intro';
import './App.css';

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
    let Screen;
    switch (this.state.mode) {
      case "game":
        Screen = <Game mode={this.state.mode}/>;
        break;
      case "intro":
        Screen = <Intro mode={this.state.mode}/>;
        break;
      default:
        Screen = <Intro mode={this.state.mode}/>;
        break;
    }

    return (
      <div>
        <h1>RGB color guesser</h1>
        {Screen}
        <div className="mode-button-container">
          <button
            id="mode-button"
            onClick={this.changeMode}
          >
            {this.state.mode === "intro" ? "Play!" : "Practice more"}
          </button>
        </div>
      </div>
    );
  }
}

export default App