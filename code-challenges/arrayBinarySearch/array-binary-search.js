'use strict';

// func BinarySearch(par1, par2)
// sorted array and search key
// 

const arr = [2, 3, 5, 8, 10];

const BinarySearch = (arr, val) => {
  return -1;
}

const largeArray = () => {
  let largeArray = [];

  for (let i = 0; i < 10000000000; i++) largeArray.push(i);
  return largeArray;
}

console.log(BinarySearch(largeArray, 44));
