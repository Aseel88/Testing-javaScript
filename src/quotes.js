import uniqueRandomArray from 'unique-random-array';

const quotes = [
  'Did anyone tell you... not to hassle the Hoff 9000?',
  'Game over.',
  'Hey, you got a permit for those guns?',
  "I'm disarming you.",
  'Open the doors, Hoff.',
  "You don't need that spine. It's holding your back.",
];

export default {
  all: quotes,
  random: uniqueRandomArray(quotes),
};