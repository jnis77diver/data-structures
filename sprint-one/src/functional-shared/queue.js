var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Queue = function(){
  var someInstance = {};
  someInstance.firstIndex = 0;
  someInstance.lastIndex = -1;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(inputStr) {
  this.lastIndex++;
  this[this.lastIndex] = inputStr;
};

queueMethods.dequeue = function() {
  var result = this[this.firstIndex];
  delete this[this.firstIndex];
  if( this.size() > 0 ) {
    this.firstIndex++;
  }
  return result;
};

queueMethods.size = function() {
  return this.lastIndex - this.firstIndex + 1;
};
