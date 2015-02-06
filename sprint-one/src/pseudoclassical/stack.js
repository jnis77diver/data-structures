var Stack = function() {
  this.counter = 0;
};


Stack.prototype.push = function( value ){
  this[this.counter++] = value;
};

Stack.prototype.pop = function(){
  var result = this[this.counter - 1];
  delete this[this.counter - 1];
  if (this.size() > 0 ){
    this.counter--;
  }
  return result;
};

Stack.prototype.size = function(){
  return this.counter;
};
