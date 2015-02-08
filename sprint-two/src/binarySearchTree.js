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
  var parent = this.whereShouldParentBe(this, value);
  if ( value > parent.value ){
    parent.right = newBranch;
  } else{
    parent.left = newBranch;
  }
};

binaryTreeMethods.contains = function(val, branch){
  // We should have used a callback function and depthFirstLog
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


binaryTreeMethods.remove = function(val){
  var parent = this.getParentRemove(val);
  var target;
  var temp;
  var replacement;
  var repsParent;
  if( parent.right !== null && parent.right.value === val ) {
    target = parent.right;
    temp = "right";
  } else {
    target = parent.left;
    temp = "left";
  }
  //get replacement node
  if (target.right !== null) {
    replacement = target.right._getMin();
    repsParent = this.getParentRemove(replacement.value);
    repsParent.left = replacement.right;
    replacement.right = target.right;
    replacement.left = target.left;
    parent[temp] = replacement;
  } else if( target.left !== null ){
    replacement = target.left._getMax();
    repsParent = this.whereShouldParentBe(target, replacement.value);
    repsParent.right = replacement.left;
    replacement.left = target.left;
    parent[temp] = replacement;
  } else {
    parent[temp] = null;
  }
};

binaryTreeMethods.getParentRemove = function(val) {
  var target;
  var func = function( node ){
    if ((node.right !== null && node.right.value === val) ||
       (node.left  !== null && node.left.value  === val)) {
      target = node;
    }
  };
  this.orderedCountHelper(func);
  return target;
};


binaryTreeMethods.orderedCountCheck = function(arrayToCheck) {
  var treeNums = [];
  this.orderedCountHelper(function(node) {
    treeNums.push(node.value);
  }, this);
  for(var i = 0; i < treeNums.length; i++ ) {
    if( treeNums[i] !== arrayToCheck[i] ) {
      return false;
    }
  }
  if( treeNums.length !== arrayToCheck.length ) {
    return false;
  }
  return true;
};

binaryTreeMethods.orderedCountHelper = function(func, branch) {
  if( branch === null ) {
    return null;
  } else if ( branch === undefined ) {
    branch = this;
  }
  this.orderedCountHelper(func, branch.left);
  func(branch);
  this.orderedCountHelper(func, branch.right);
};

binaryTreeMethods.whereShouldParentBe = function(branch, val){
  var child;
  if (branch.value < val){
    child = branch.right;
  } else {
    child = branch.left;
  }
  if( child === null ){
    return branch;
  } else {
    return branch.whereShouldParentBe(child, val);
  }
};

binaryTreeMethods._print = function(branch){
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

binaryTreeMethods._getMax = function() {
  if( this.right === null ) {
    return this;
  } else {
    return this.right._getMax();
  }
};


binaryTreeMethods._getMin = function() {
  for (var branch = this; branch.left !== null; branch = branch.left ) {
    // empty on purpose. Iterating through the branches to get to min
  }
  return branch;
};

