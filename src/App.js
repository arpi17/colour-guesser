import React from 'react';

import Game from './components/Game';
import Intro from './components/Intro';
import { modes, ModeContext } from './context/mode-context';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.changeMode = this.changeMode.bind(this);

    this.state = {
      mode: modes.intro
    };
  }

  changeMode() {
    const { intro, game } = modes;
    this.setState({
      mode: this.state.mode === intro ? game : intro
    });
  }

  render() {
    const { intro, game } = modes;
    let Screen;
    switch (this.state.mode) {
      case game:
        Screen = <Game />;
        break;
      default:
        Screen = <Intro />;
        break;
    }

    return (
      <div>
        <h1>RGB color guesser</h1>
        <ModeContext.Provider value={this.state.mode}>
          {Screen}
        </ModeContext.Provider>
        <div className="mode-button-container">
          <button id="mode-button" onClick={this.changeMode}>
            {this.state.mode === intro ? 'Play!' : 'Practice more'}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
