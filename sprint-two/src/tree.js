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
  };
  for (var i = 0; i < this.children.length; i++){
    if ( this.children[i].contains(target) ){
      return true;
    }
  };
  return false;
};

treeMethods.remove = function(target){
  for (var i = 0; i < this.children.length; i++){
      this.children[i].remove(target);
  }
  if ( this.value === target) {
    var par = this.parent;
    var childs = this.children;
    if( par !== null ){
      var index = par.children.indexOf(this);
      var temp = index === 0? 1: temp;
      console.log("index", index, "temp ", temp, "par.chl ", par.children);
      par.children.splice(index, temp);
      console.log("par.children after is ", par.children);
    }
    var newMe = childs[0];
    if ( newMe != undefined ){
      newMe.parent = par;
      childs.splice(0,1);
      par.children.push(newMe);
      for (var i = 0; i < childs.length; i++){
        childs[i].parent = newMe;
      }
      newMe.children.concat(childs);
    }
  }
};

tree = Tree(1);
tree.addChild(2);
tree.children[0].addChild(3);
tree.remove(3);
console.log(tree.contains(3));

        // var temp = j === 0? 1: j;
        // valueAtIndex.splice(j, temp);


//       7
//     4   8
//    3 6
//       4
//
//



/*
 * Complexity: What is the time complexity of the above functions?
 */
