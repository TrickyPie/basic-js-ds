const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = [];

  }

  push(value) {
    let arr = this.items;
    if (arr.length == 0) {
      arr[0] = value;
    } /* else {
      for (let i = arr.length; i > 0; i--) {
        arr[i] = value;
      }
    } */
    else {
      for (let i = arr.length; i > 0; i--) {
        arr[i] = value;
        break
      }
    }
    return arr;
  }

  pop(value) {
    let arr = this.items;
    let deletedEl = arr.splice(arr.length - 1, 1);
    return +deletedEl;
  }

  peek() {
    let arr = this.items;
    return arr[arr.length - 1]
  }
}

module.exports = {
  Stack
};
