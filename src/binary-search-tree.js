const { NotImplementedError } = require('../extensions/index.js')
const { Node } = require('../extensions/list-tree.js')

/**
* Implement simple binary search tree according to task description
* using Node from extensions
* thanks to: www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
*/
class BinarySearchTree {
  // constructor() {
  //   this.root = null
  // }

  root() {
    return this.treeRoot?this.treeRoot:null
  }

  add(data) {
    const node = new Node(data)

    if (!this.treeRoot) {
      this.treeRoot = node
    } else {
      let current = this.treeRoot
      while(current) {
        if(node.data<current.data) {
          if(!current.left) {
            current.left = node
            break
          }
          current = current.left
        } else {
          if(!current.right) {
            current.right = node
            break
          }
          current = current.right
        }
      }
    }
  }

  has(data) {
    return this.find(data)?true:false
  }

  find(data) {
    let current = this.treeRoot
    while(current) {
      if(data<current.data) {
        current = current.left
      } else if(data>current.data) {
        current = current.right
      } else {
        return current
      }
    }
    return null
  }

  remove(data, treeRoot = this.treeRoot) {
    if (!treeRoot||!this.has(data)) {
      return null
    }

    if (data < treeRoot.data) {
      treeRoot.left = this.remove(data, treeRoot.left)
    } else if (data > treeRoot.data) {
      treeRoot.right = this.remove(data, treeRoot.right)
    } else {
      if (!treeRoot.left) {
        return treeRoot.right
      } else if (!treeRoot.right) {
        return treeRoot.left
      } else {
        treeRoot.data = this.min(treeRoot.right)
        treeRoot.right = this.remove(treeRoot.data,treeRoot.right)
      }
    }
    return treeRoot
  }
  min() {
    if(!this.treeRoot){
      return
    }
    let current = this.treeRoot
    while(current.left) {
      current = current.left
    }
    return current.data
  }

  max() {
    if(!this.treeRoot){
      return
    }
    let current = this.treeRoot
    while(current.right) {
      current = current.right
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};
