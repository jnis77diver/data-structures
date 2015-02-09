var Queue = function() {
  this.firstIndex = 0;
  this.lastIndex = -1;
};

Queue.prototype.enqueue = function(value) {
  this[++this.lastIndex] = value;
};

Queue.prototype.dequeue = function() {
  var result = this[this.firstIndex];
  delete this[this.firstIndex];
  if(this.size() > 0) {
    this.firstIndex++;
  }
  return result;
};

Queue.prototype.size = function() {
  return this.lastIndex - this.firstIndex + 1;
};

// test

