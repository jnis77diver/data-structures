var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Queue = function(){
  var someInstance = {};
  someInstance.firstIndex = 0;
  someInstance.lastIndex = -1;
  extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[++this.lastIndex] = value;
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
