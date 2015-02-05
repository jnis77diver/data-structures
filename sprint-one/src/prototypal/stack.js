var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.counter = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this[this.counter] = val;
  this.counter++;
};

stackMethods.pop = function() {
  var result = this[this.counter - 1];
  delete this[this.counter - 1];
  if( this.size() > 0 ) {
    this.counter--;
  }
  return result;
};

stackMethods.size = function() {
  return this.counter;
};

