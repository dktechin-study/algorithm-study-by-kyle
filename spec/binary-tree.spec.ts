
import BinarySearchTree from "../binary-trees/binary-search-tree";

describe('binary Tree for jasmine', function () {
  
  it('if push a random number, should exist it', function () {
    const bst : BinarySearchTree<number> = new BinarySearchTree<number>();
    bst.push(1);
    expect(bst.findNode(1).value).toEqual(1);
    expect(() => bst.findNode(2)).toThrow(new Error('node not found.'));
    // bst.push(2);
    // expect(bst.findNode(2).value).toEqual(2);
  });
});