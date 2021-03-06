describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5,2,3]);
  });

  it('should have methods named "remove"', function() {
    expect(binarySearchTree.remove).to.be.a("function");
  });

  it('should be able to remove a value', function() {
    binarySearchTree.insert(5);
    binarySearchTree.insert(6);
    expect(binarySearchTree.remove(6)).to.equal(undefined);
    expect(binarySearchTree.contains(6)).to.equal(false);
  });

  it('should delete a node without deleting its children', function(){
    binarySearchTree.insert(5);
    binarySearchTree.insert(4);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    expect(binarySearchTree.remove(4)).to.equal(undefined);
    expect(binarySearchTree.contains(8)).to.equal(true);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(6)).to.equal(true);
    expect(binarySearchTree.contains(4)).to.equal(false);
    expect(binarySearchTree.contains(3)).to.equal(true);
    expect(binarySearchTree.contains(2)).to.equal(true);

  });




});
