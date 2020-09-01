'use strict';

const LinkedList = require('./linked-list.js');

/*
let myList = new LinkedList();

myList.insert('a');
myList.insert('b');
myList.insert('c');

console.log(myList.head);

console.log(myList.toString());

console.log(myList.includes('c'), '-----includes');

*/

describe('passes all lab tests', () => {
  it('successfully instantiates an empty list', () => {
    expect(() => {
      new LinkedList();
    }).not.toThrow();
  });

  it('can properly insert a value into the list', () => {
    let newList = new LinkedList();
    newList.insert('A');
    let str = newList.toString();

    expect(str).toBe('[A] -> null');
  });

  it('head property will correctly point to the beginning of the list', () => {
    let newList = new LinkedList();
    newList.insert('A');

    expect(newList.head.val).toBe('A');
  });

  it('makes it into string', () => {
    let myList = new LinkedList();

    myList.insert('a');
    myList.insert('b');
    myList.insert('c');
    
    let result = myList.toString();

    expect(result).toEqual('[a] -> [b] -> [c] -> null');
  });

  it('passes the include function', () => {
    let myList = new LinkedList();

    myList.insert('a');
    myList.insert('b');
    myList.insert('c');
    
    let trueResult = myList.includes('a');
    let falseResult = myList.includes('d');

    expect(trueResult).toBe(true);
    expect(falseResult).toBe(false);
  })
})