'use strict';

const insertShiftArray = require('./array-shift.js');


describe('this inserts beautifully', () => {
  it('inserts into middle of array', () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
    expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toStrictEqual([4, 8, 15, 16, 23, 42]);
  })


});
