// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

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
    valueAtIndex.push([k,v]);
    this._storage.set(i, valueAtIndex);
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
  if( valueAtIndex === undefined ) {
    return null;
  } else {
    for( var j = 0; j < valueAtIndex.length; j++ ) {
      if( valueAtIndex[j][0] === k ) {
        var val = valueAtIndex[j];
        var temp = j === 0? 1: j;
        valueAtIndex.splice(j, temp);
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
