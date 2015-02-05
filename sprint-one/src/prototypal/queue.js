var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.firstIndex = 0;
  newQueue.lastIndex = -1;
  return newQueue;
};

queueMethods = {};

queueMethods.enqueue = function( input ){
  this.lastIndex++;
  this[this.lastIndex] = input;
};

queueMethods.dequeue = function(){
  var result = this[this.firstIndex];
  delete this[this.firstIndex];
  if (this.size() > 0){
    this.firstIndex++;
  }
  return result;
};

queueMethods.size = function(){
  return this.lastIndex - this.firstIndex + 1;
};
