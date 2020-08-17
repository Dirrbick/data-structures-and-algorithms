'use strict';

const reverseArray = require('../arrayReverse/array-reverse.js');

describe('Reverses the array', () => {
    it('Successfully reverses the array', () => {
        let array = [1, 2, 3, 4, 5, 6];
        let newArr = reverseArray(array);

        expect(newArr).toEqual([6, 5, 4, 3, 2, 1])
    })
})