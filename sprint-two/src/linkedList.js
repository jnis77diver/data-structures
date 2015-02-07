var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if( list.tail !== null ) {
      list.tail.next = newNode;
    } else {
      list.head = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    var headToRemove = list.head;
    var newHead = list.head.next;
    list.head = newHead;
    return headToRemove.value;
  };

  list.contains = function(target){
    //if we get to list.tail and no value found, doesn't exit in ll
    //return undefined
    for( var iterate = list.head; iterate !== null; iterate = iterate.next ) {
      if( iterate.value === target ) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};
