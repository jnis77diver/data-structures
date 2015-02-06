var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.firstIndex = 0;
  someInstance.lastIndex = -1;
  return someInstance;
};

queueMethods = {};

queueMethods.enqueue = function(value){
  this[++this.lastIndex] = value;
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
