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

      if (node.data === val) {
        return node;
      }

      if (val < node.data) {
        node.left = addInto(node.left, val);
      } else {
        node.right = addInto(node.right, val);
      }

      return node;

    }
  }

  has(val) {
    return search(this.rootTree, val);

    function search(node, val) {

      if (node === undefined || node === null) {
        return false;
      }

      if (node.data === val) {
        return true;
      }

      let leftSearch = search(node.left, val);
      if (leftSearch) {
        return true;
      }

      let rightSearch = search(node.right, val);
      return rightSearch;
    }
  }

  find(val) {

    return searchLeaf(this.rootTree, val);

    function searchLeaf(node, val) {

      if (node === undefined || node === null) {
        return null;
      }

      if (node.data === val) {
        return node;
      }

      return node.data > val ?
        searchLeaf(node.left, val) :
        searchLeaf(node.right, val)

    }
  }

  remove(val) {
    this.rootTree = removeLeaf(this.rootTree, val);

    function removeLeaf(node, val) {
      if (node === undefined || node === null) {
        return null;
      }

      //значение меньше
      if (val < node.data) {
        node.left = removeLeaf(node.left, val);
        return node;
      }
      //значение больше
      else if (node.val < val) {
        node.right = removeLeaf(node.right, val);
        return node;
      }
      // равно узлу
      else {
        // тип лист?
        if (!node.left && !node.right) {
          return null;
        }
        // нет левого потомка, только правый
        if (!node.left) {
          node = node.right;
          return node;
        }
        // нет правого потомка, только левый
        if (!node.right) {
          node = node.left;
          return node;
        }

        // епрст, два потомка
        if (node.right && node.left) {

          let littleRight = node.right;

          while (littleRight.left != null) {
            littleRight = littleRight.left;
          }

          node.data = littleRight.val;

          node.right = removeLeaf(node.right, littleRight.val);

          return node;

        }
      }
    }
  }



  min() {
    let node = this.rootTree;
    if (node === undefined || node === null) {
      return null;
    } else {
      let currentVal = node;
      while (currentVal.left != null) {
        currentVal = currentVal.left;
      }
      return currentVal.data;
    }
  }

  max() {
    let node = this.rootTree;
    if (node === undefined || node === null) {
      return null;
    } else {
      let currentVal = node;
      while (currentVal.right != null) {
        currentVal = currentVal.right;
      }
      return currentVal.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};