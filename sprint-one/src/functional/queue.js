var Queue = function(){

  var someInstance = {};
  var firstIndex = 0;
  var lastIndex = -1;
  var storage = {};

  someInstance.enqueue = function(value){
    someInstance[++lastIndex] = value;
  };

  someInstance.dequeue = function(){
    var result = someInstance[firstIndex];
    delete someInstance[firstIndex];
    if ( someInstance.size() >= 1 ) {
      firstIndex++;
    }
    return result;
  };

  someInstance.size = function(){
    return lastIndex - firstIndex + 1;
  };
  return someInstance;
};


// test comment


