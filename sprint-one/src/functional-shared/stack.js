var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Stack = function() {
  var someInstance = {};
  someInstance.counter = 0;
  extend(someInstance, stackMethods);
  return someInstance;
};



var stackMethods = {};

stackMethods.push = function (value) {
  this[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function() {
  var result = this[this.counter - 1];
  delete this[this.counter - 1];
  if (this.size() > 0){
    this.counter--;
  }
  return result;
};

stackMethods.size = function() {
  return this.counter;
};


