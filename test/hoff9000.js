
import test from 'ava';
import hoff9000 from '../src/hoff9000.js';

test('test opening the doors', (t) => {
    t.is(hoff9000.open(), "I'm sorry. I can' let you do that.");
});

test('test closing the doors', (t) => {
    t.is(hoff9000.close(), 'Did anyone tell you... not to hassle the Hoff 9000?' );
});