'use strict';

const halfWay = (math => {
  let number = math.length;
  let middleNumber = Math.round(number / 2);
  console.log(middleNumber)
  return middleNumber;
})

const insertShiftArray = ((array, val) => {
  let index = halfWay(array)
  console.log('index', index);
  array.splice(index, 0, val);
  return array;
})

module.exports = insertShiftArray;
