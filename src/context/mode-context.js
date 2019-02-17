import React from 'react';

export const modes = {
  intro: 'intro',
  game: 'game'
};

export const ModeContext = React.createContext(modes.intro);
