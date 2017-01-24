
import { LinkedList } from "../linked-list/linked-list";
import { link } from "fs";
describe('Linked List for jasmine', function () {
  it("test of constructor", function() {
    let linkedList:LinkedList<number> = new LinkedList<number>(0, 1, 2);
    expect(linkedList.get(0)).toEqual(0);
    expect(linkedList.get(1)).toEqual(1);
    expect(linkedList.get(2)).toEqual(2);
  });
  
  it("insert test", function () {
    let linkedList:LinkedList<number> = new LinkedList<number>();
    linkedList.insert(0);
    expect(linkedList.get(0)).toEqual(0);
  })
});