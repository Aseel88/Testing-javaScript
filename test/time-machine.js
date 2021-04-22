import test from 'ava';
import timeMachine from '../src/time-machine.js';

test('test traveling 66 years back', (t) => {
    const currentYear = 2050;
  
    const year = 1986;
    t.is(timeMachine.yearsToTravel(), year);
});

// test('test hacking too much time', (t) => {});