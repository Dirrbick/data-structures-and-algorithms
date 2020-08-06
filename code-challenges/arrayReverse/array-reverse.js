'use strict';

//arrayReverse that takes in array reverses it with no helper functions
//create function in place of .push
//create function in place of .remove
//create array

let array = [1, 2, 3, 4, 5, 6];

const arrayReverse = (arr) => {
  //do something
  let newArray = [];
  console.log('before for loop: ' + newArray);
  for( let i = arr.length - 1; i >= 0; i --){
    push(newArray, arr[i]);
    console.log('inside for loop: ' + newArray);
  }
  return newArray;
};


const push = (arr, val) => {
  //adds to array
  arr[arr.length] = val;
};


console.log(arrayReverse(array));

