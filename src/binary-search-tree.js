const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    let rootTree = this.rootTree;
    return rootTree;
  }

  add(val) {
    this.rootTree = addInto(this.rootTree, val);

    function addInto(node, val) {
      if (!node) {
        return new Node(val);
      }
      if (node.val === val) {
        return node;
      }
      if (val < node.val) {
        node.left = addInto(node.left, val);
      } else {
        node.right = addInto(node.right, val);
      }
      return node;
    }
  }

  has(val) {
    //шото ему тут не нравится
    return search(this.rootTree, val);

    function search(node, val) {
      if (!node) {
        return false;
      }

      if (node.val === val) {
        return true;
      }

      if (val < node.val) {
        return search(node.left, val)
      } else {
        return search(node.right, val)
      }
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(val) {
    this.rootTree = removeNode(this.rootTree, val);

    function removeNode(node, val) {
      if (!node) {
        return null;
      }

      if (val < node.val) {
        node.left = removeNode(node.left, val);
        return node;
      } else if (val > node.val) {
        node.right = removeNode(node.right, val);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.val = minRight.left;
        node.right = removeNode(node.right, minRight);
        return node;
      }
    }
  }

  min() {
    if (!this.rootTree) {
      return "undefined";
    }

    let node = this.rootTree;
    while (node.left) {
      node = node.left;
    }
    return node.val;
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};