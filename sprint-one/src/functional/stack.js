var Stack = function(){
  var someInstance = {};
  var counter = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    someInstance[counter] = value;
    counter++;

  };

  someInstance.pop = function(){
    if (counter > 0){
      var result = someInstance[counter - 1];
      delete someInstance[counter - 1];
      counter--;
      return result;
    }
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
