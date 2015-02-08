var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


var BinarySearchTree = function(value){
  var newTree    = {};
  newTree.value  = value;
  newTree.parent = null;
  newTree.right  = null;
  newTree.left   = null;
  extend(newTree, binaryTreeMethods);
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function( value, newBranch ){
  if (!newBranch){ newBranch = BinarySearchTree( value ); }
  var parent = this;
  for ( var iterator = this; ; ){
    if ( !iterator ){
      break;
    }
    parent = iterator;
    iterator = parent[iterator.getDirection( newBranch )];
  }
  parent[ parent.getDirection(newBranch) ] = newBranch;
  newBranch.parent = parent;
};

binaryTreeMethods.contains = function( val ){
  var found = false;
  this.depthFirstLog(function( value ){
    if ( value === val ){
      found = true;
    }
  });
  return found;
};

binaryTreeMethods.remove = function( val ){
  // Revmoes a node from the tree
  // find node to remove and node to replace
  removeNode = this.getNode( val );
  replacementNode = this.getReplacement( removeNode );
  // set the parents subranch so that it now points to replacement
  // If removeNode.parent is null then we are dealing with the head.
  if (removeNode.parent && removeNode.parent.right === removeNode){
    removeNode.parent.right = replacementNode;
  } else if (removeNode.parent){
    removeNode.parent.left = replacementNode;
  }
  // As long is there is a valid replacement - if !replacement node then the node to remove has no children
  if (replacementNode){
    // the orphaned branch is orphaned when we remove replacement node. It will need to be reinserted
    var orphanBranch = replacementNode.right ? replacementNode.right : replacementNode.left;
    // delete replacement node by deleteing the reference from its parent
    if (replacementNode.parent.right === replacementNode){
      replacementNode.parent.right = null;
    } else{
      replacementNode.parent.left = null;
    }
    // set replacements nodes references to equal the old node
    replacementNode.right  = removeNode.right;
    replacementNode.left   = removeNode.left;
    replacementNode.parent = removeNode.parent;
    // reinsert orphan branch
    this.insert( null, orphanBranch);
  }
};

binaryTreeMethods.getDirection = function( newBranch ){
  // compares the value of the branch that was called on to the branch that was input.
  // Returns a direction
  if ( newBranch.value > this.value ){
    return "right";
  } else if ( newBranch.value < this.value ){
    return "left";
  }
};

binaryTreeMethods.getNode = function( val ){
  // finds a node with a given value
  var targetNode;
  this.recursiveCall(function(node){
    if ( node.value === val ){
      targetNode = node;
    }
  });
  return targetNode;
};

binaryTreeMethods.getReplacement = function( node ){
  // Method to find the replacement for a given node. Will look for the maximum of left subbranch.
  // If .left == null then look for minimum of right subbranch. Otherwise return false;
  if ( node.left ){
    return node.left._getMax();
  } else if ( node.right ){
    return node.right._getMin();
  }
  return null;
};

binaryTreeMethods.depthFirstLog = function( func ){
  // method needed for the specs. Recursivecall can iterate over both branches and value.
  // All this does is call recursiveCall
  this.recursiveCall( func , true );
};

binaryTreeMethods.recursiveCall = function( func , valBool){
  // recursive method which will apply func to all elements on the tree
  // val is a boolean that will give .value for each branch as input rather than the branch
  if ( !this ){
    return null;
  }
  if (valBool){
    func(this.value);
  } else{
    func(this);
  }
  if ( this.right ){ this.right.recursiveCall( func, valBool ); }
  if ( this.left ){ this.left.recursiveCall( func, valBool ); }
};

binaryTreeMethods._getMax = function() {
  // finds the max for the tree it was called on recursivly
  if( !this.right ) {
    return this;
  }
  return this.right._getMax();
};


binaryTreeMethods._getMin = function() {
  // finds the min for the tree it was called on
  if( !this.left ) {
    return this;
  }
  return this.left._getMin();
};