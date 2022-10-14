const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class Queue {
  constructor() {
    this.top = null;
    this.tail = null;
    this.length = 0;
  }


  getUnderlyingList(value) {
    return this.head;
  }

  enqueue(value) {
    let node = new ListNode(value);

    if (this.length == 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return node;

    /* Тоже работает
    let arr = this.items;
    arr.push(value);
    return arr; */
  }

  dequeue() {
    let current = this.head;
    this.head = this.head.next;
    this.length--;
    return current.value;

    /* Тоже работает
    let arr = this.items;
    let headEl = arr.splice(0, 1);
    return +headEl; */
  }
}

module.exports = {
  Queue
};
