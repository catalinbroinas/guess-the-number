
export const GAME_STATUS = {
  idle: 'idle',
  playing: 'playing',
  end: 'end'
};

export const GAME_RESULT = {
  won: 'won',
  lost: 'lost'
};

export const FEEDBACK_MESSAGES = {
  tooLow: (number) => `Number ${number} is too small.`,
  tooHigh: (number) => `Number ${number} is too high.`,
};
