
export const GAME_MODE = {
  single: 'single',
  multi: 'multi'
};

export const GAME_STATUS = {
  idle: 'idle',
  playing: 'playing',
  end: 'end'
};

export const GAME_RESULT = {
  won: 'won',
  lost: 'lost'
};

export const DEFAULT_SETTINGS = {
  min: null,
  max: null,
  mode: GAME_MODE.single,
  player1Name: '',
  player2Name: '',
  attempts: null,
  leftAttempts: null,
};

export const DEFAULT_GAME_SETTINGS_FORM = {
  min: '',
  max: '',
  mode: GAME_MODE.single,
  player1Name: '',
  player2Name: '',
  attempts: ''
};

export const FEEDBACK_MESSAGES = {
  tooLow: (number) => `Number ${number} is too small.`,
  tooHigh: (number) => `Number ${number} is too high.`,
};
