var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = Tree(value);
  newChild.parent = this;
  this.children.push(newChild);
};

treeMethods.contains = function(target){
  if ( this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++){
    if ( this.children[i].contains(target) ){
      return true;
    }
  }
  return false;
};

treeMethods.remove = function(target){
  for (var i = 0; i < this.children.length; i++){
      // recursive call
      this.children[i].remove(target);
  }
  if ( this.value === target) {
    // if the value is found get reference to parent and children - named for clarity
    var par = this.parent;
    var childs = this.children;
    // check to see if we are at the head
    if( par !== null ){
      // find target nodes index within parent's children array
      var index = par.children.indexOf(this);
      // splice out node
      par.children.splice(index, 1);
    }
    // find the child to replace the target nodes only excecute if target node had children
    var newMe = childs[0];
    if ( newMe !== undefined ){
      // set its parent
      newMe.parent = par;
      // take the replacement node out of targets children array
      childs.splice(0,1);
      // add replacement node to parents children array
      par.children.push(newMe);
      // set the new parent of targets remaining children
      for (var j = 0; j < childs.length; j++){
        childs[j].parent = newMe;
      }
      // merger replacement's children with orphans children
      newMe.children.concat(childs);
    }
  }
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
