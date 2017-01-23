
import { LinkedList } from "../linked-list/linked-list";
describe('Linked List for jasmine', function () {
  it("When 0 is pushed, the value of the 0th index is 0", function() {
    let linkedList:LinkedList<number> = new LinkedList<number>(0);
    expect(linkedList.get(0)).toEqual(0);
  });
  
  it("When 0, 1 is pushed, the value of the 1th index is 1", function() {
    let linkedList:LinkedList<number> = new LinkedList<number>(0, 1);
    expect(linkedList.get(1)).toEqual(0);
  });
});