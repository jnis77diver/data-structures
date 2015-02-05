var Queue = function(){

  var someInstance = {};
  var firstEntry = 0;
  var lastEntry = -1;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    // increment last entry
    lastEntry++;
    // insert into object using last entry as key
    someInstance[lastEntry] = value;
  };

  someInstance.dequeue = function(){
    // delete first entry
    var result = someInstance[firstEntry];
    delete someInstance[firstEntry];
    // increment first entry
    if ( someInstance.size() >= 1 ) {
      firstEntry++;
    }
    return result;
  };

  someInstance.size = function(){

    // return lastentry - firstentry + 1
    return lastEntry - firstEntry + 1;
  };
  return someInstance;
};





