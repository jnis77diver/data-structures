var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  // create new "node" / tree / branch
  var newChild = Tree(value);
  // add child to children array
  this.children.push(newChild);
};

treeMethods.contains = function(target){

  if ( this.value === target) {
    return true;
  };

  for (var i = 0; i < this.children.length; i++){
    if ( this.children[i].contains(target) ){
      return true;
    }
  };

  return false;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
