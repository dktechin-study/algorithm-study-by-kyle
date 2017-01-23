
import { Node } from "../linked-list/node";

describe('1st Test for jasmine', function () {
  let node = new Node();
  it("contains spec with an expectation", function() {
    expect(node.getValue()).toEqual('test');
  });
});