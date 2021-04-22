import test from 'ava';
import quotes from '../src/quotes.js';

test('test get all quotes', (t) => {
    t.deepEqual(quotes.all, [
        'Did anyone tell you... not to hassle the Hoff 9000?',
  'Game over.',
  'Hey, you got a permit for those guns?',
  "I'm disarming you.",
  'Open the doors, Hoff.',
  "You don't need that spine. It's holding your back.",
    ]);
});

test('test specefic quote exists', (t) => {
    t.is(quotes.all[0], 'Did anyone tell you... not to hassle the Hoff 9000?');
});

test('test get random quote exists', (t) => {
    const randomQuote = quotes.random();
    t.true(quotes.all.includes(randomQuote));
});