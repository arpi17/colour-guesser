import React from 'react';
import PropTypes from 'prop-types';

import { modes, ModeContext } from '../context/mode-context';
import InputField from './InputField.js';

class UserInputs extends React.Component {
  render() {
    const { guess, guessed, onChange, onClick } = this.props;
    const mode = this.context;
    const { intro } = modes;
    return (
      <div className="slider-area">
        <InputField
          color="red"
          guess={guess.red}
          guessed={guessed}
          onChange={onChange}
        />
        <InputField
          color="green"
          guess={guess.green}
          guessed={guessed}
          onChange={onChange}
        />
        <InputField
          color="blue"
          guess={guess.blue}
          guessed={guessed}
          onChange={onChange}
        />

        <br />

        <div style={{ display: mode === intro ? 'none' : 'block' }}>
          <button onClick={onClick}>
            {guessed ? 'Play again!' : 'Submit guess'}
          </button>
        </div>

        <span
          className="action-text"
          style={{ display: mode !== intro ? 'none' : 'block' }}
        >
          Change me!
        </span>
      </div>
    );
  }
}
UserInputs.contextType = ModeContext;

UserInputs.mode = UserInputs.propTypes = {
  guess: PropTypes.shape({
    red: PropTypes.number,
    green: PropTypes.number,
    blue: PropTypes.number
  }).isRequired,
  guessed: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func.isRequired
};

export default UserInputs;
