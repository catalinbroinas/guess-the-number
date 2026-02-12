
export function randomInt(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    console.error(`${min} and ${max} must be numbers!`);
    return;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
