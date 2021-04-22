import test from 'ava';
import timeMachine from '../src/time-machine.js';

test('test traveling 66 years back', (t) => {
    t.is(1984, timeMachine(66));
  });
  
  test('test hacking too much time', (t) => {
    const error = t.throws(() => timeMachine(3000));
  
    t.is(error.message, 'Error! Hacking too much time!');
  });