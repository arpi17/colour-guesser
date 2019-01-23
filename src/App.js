import React from 'react';

import Description from './components/layout/Description';
import Game from './components/Game';

class App extends React.Component {
  render () {
    return (
      <div>
        <Description />
        <Game/>
      </div>
    );
  }
}

export default App