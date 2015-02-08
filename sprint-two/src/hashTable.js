var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var valueAtIndex = this._storage.get(i);
  if( !valueAtIndex ) {
    this._storage.set(i, [[k, v]]);
  } else {
    var found = false;
    for (var j = 0; j < valueAtIndex.length; j++) {
      var tuple = valueAtIndex[j];
      if( tuple[0] === k ) {
        tuple[1] = v;
        found = true;
      }
    }
    if( !found ) {
      valueAtIndex.push([k,v]);
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var valueAtIndex = this._storage.get(i);
  if( valueAtIndex === undefined ) {
    return null;
  } else {
    for( var j = 0; j < valueAtIndex.length; j++ ) {
      if( valueAtIndex[j][0] === k ) {
        return valueAtIndex[j][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //set up a var and then get the value at i
  var valueAtIndex = this._storage.get(i);
  //check if undefined
  if( !valueAtIndex ) {
    return null;
  } else {
    for( var j = 0; j < valueAtIndex.length; j++ ) {
      if( valueAtIndex[j][0] === k ) {
        var val = valueAtIndex[j];
        valueAtIndex.splice(j, 1);
        this._storage.set(i, valueAtIndex);
        return val;
      }
    }
  }
  return null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
