'use strict';

const e = require("express");

class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insert(val) {
        try {

            let currentNode = this.head;
            let newNode = new Node(val);
            
            if( !currentNode ) {
                this.head = newNode;
                return;
            }
            
            while( currentNode.next ) {
                currentNode = currentNode.next;
            }
            
            currentNode.next = newNode;
        } catch {
            throw 'Error!!';
        }
    }

    includes(val) {
        try {
            let currentNode = this.head;

            while ( currentNode ) {
                if ( currentNode.val === val ) {
                    return true;
                }
                currentNode = currentNode.next;
            }
                if ( currentNode !== val ) {
                    return false;
                }
        } catch {
            throw 'Error!!';
        }
    }

    toString() {
        try {
            let currentNode = this.head;
            let str = '';

            while ( currentNode ) {
                str += '['  + currentNode.val + '] -> ';
                currentNode = currentNode.next;
            }

            str += 'null';
            return str;
        } catch {
            throw 'Error!!';
        }
    }
}


module.exports = LinkedList;