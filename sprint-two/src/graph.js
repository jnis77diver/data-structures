

var Graph = function( val ){
  this.nodes = [];
};

Graph.prototype.addNode = function( value ){
  var newNode = new Node1(value);
  this.nodes.push(newNode);
};

Graph.prototype.contains = function( value ){
  return this.getNodeIndex(value) >= 0;
};

Graph.prototype.removeNode = function( value ){
  var index = this.getNodeIndex(value);
  if (index === 0){
    this.nodes.splice(0,1);
  }
  this.nodes.splice(index, index);
};

Graph.prototype.hasEdge = function(fromValue, toValue){
  var node1 = this.getNode( fromValue );
  var node2 = this.getNode( toValue );
  return node1.connections.indexOf( node2 ) >= 0;
};

Graph.prototype.addEdge = function(fromValue, toValue){
  var node1 = this.getNode( fromValue );
  var node2 = this.getNode( toValue );
  node1.connections.push(node2);
  node2.connections.push(node1);
};

Graph.prototype.removeEdge = function(fromValue, toValue){
  var node1 = this.getNode( fromValue );
  var node2 = this.getNode( toValue );
  var node1ConIndex = node1.connections.indexOf(node2);
  var node2ConIndex = node2.connections.indexOf(node1);
  node1.connections.splice(node1ConIndex);
  node2.connections.splice(node2ConIndex);
};

Graph.prototype.forEachNode = function(func){
  for (var i = 0; i < this.nodes.length; i++){
    func(this.nodes[i].value);
  }
};

Graph.prototype.getNodeIndex = function(value) {
  for (var i = 0; i < this.nodes.length; i++) {
    if( this.nodes[i].value === value ) {
      return i;
    }
  }
  return -1;
};

Graph.prototype.getNode = function(value) {
  return this.nodes[this.getNodeIndex( value )];
}


var Node1 = function(value){
  console.log("This is in the graph.js")
  var node = {};
  node.value = value;
  node.connections = [];
  return node;
};
