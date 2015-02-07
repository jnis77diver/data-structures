var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


var BinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.right = null;
  newTree.left = null;
  extend(newTree, binaryTreeMethods);
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value){
  var newBranch = BinarySearchTree(value);
  var parent = this.getParent(this, value);
  if ( value > parent.value ){
    parent.right = newBranch;
  } else{
    parent.left = newBranch;
  }
};

binaryTreeMethods.getParent = function(branch, val){
  var child;
  if (branch.value < val){
    child = branch.right;
  } else {
    child = branch.left;
  }
  if( child === null ){
    return branch;
  } else {
    return branch.getParent(child, val);
  }
};

binaryTreeMethods.contains = function(val, branch){
  var child;
  if (branch === null){
    return false;
  }
  if (branch === undefined){
    branch = this;
  }
  if (branch.value === val){
    return true;
  } else{
    if ( branch.value < val ){
      child = branch.right;
    } else{
      child = branch.left;
    }
    return this.contains(val, child);
  }
};


binaryTreeMethods.print = function(branch){
  this.depthFirstLog(console.log);
};

binaryTreeMethods.depthFirstLog = function(func, branch){
  if( branch === null ) {
    return null;
  } else if ( branch === undefined ) {
    branch = this;
  }
  func(branch.value);
  this.depthFirstLog(func, branch.left);
  this.depthFirstLog(func, branch.right);
};
/*
binarySearchTree = BinarySearchTree(5);
binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.insert(6);
binarySearchTree.insert(8);
binarySearchTree.print();
*/

/*dfl(cl, head(5));
dfl(cl, branch(2));
dfl(cl, null);
2
dfl(cl, branch(3));
dfl(cl, null)
3
dfl(cl, null);
5
dfl(cl, branch(7));
dfl(cl, branch(6));
dfl(cl, null);
6
dfl(cl, null);
7
dfl(cl, branch(8));
dfl(cl, null);
8
dfl(cl, null);*/
/*
 * Complexity: What is the time complexity of the above functions?
 */


//      5
//   2     7
//    3   6 8
//
