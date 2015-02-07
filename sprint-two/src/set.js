var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.push(item);
};

setPrototype.contains = function(item){
  return this._storage.indexOf(item) >= 0;
};

setPrototype.remove = function(item){
  var index = this._storage.indexOf(item);
  if( index === 0 ){
    this._storage.splice(0, 1);
  } else {
    this._storage.splice(index, index);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
