
import { LinkedList } from "../linked-list/linked-list";

describe('Linked List for jasmine', function () {
  it("test of constructor", function() {
    let linkedList:LinkedList<number> = new LinkedList<number>(0, 1, 2);
    expect(linkedList.get(0)).toEqual(0);
    expect(linkedList.get(1)).toEqual(1);
    expect(linkedList.get(2)).toEqual(2);
  });
  
  it('should return null, if not exist.', function () {
    let linkedList:LinkedList<number> = new LinkedList<number>();
    expect(linkedList.get(10)).toEqual(null);
  });
  
  it("should throw exception, if index below 0 ", function () {
    let linkedList:LinkedList<number> = new LinkedList<number>();
    expect(() => linkedList.insert(0, -1)).toThrow(new Error('index out of bounce.'));
  });
  
  it("should return inserted value.", function () {
    let linkedList:LinkedList<number> = new LinkedList<number>();
    linkedList.insert(0, 0);
    expect(linkedList.get(0)).toEqual(0);
    
    linkedList.insert(1, 1);
    expect(linkedList.get(1)).toEqual(1);
    
    linkedList.insert(2, 2);
    expect(linkedList.get(2)).toEqual(2);
  
    linkedList.insert(3, 3);
    expect(linkedList.get(3)).toEqual(3);
  
    linkedList.insert(11, 0);
    expect(linkedList.get(0)).toEqual(11);
    expect(linkedList.get(1)).toEqual(0);
    expect(linkedList.get(2)).toEqual(1);
    expect(linkedList.length).toEqual(5);
    
    expect(() => linkedList.insert(100, 100)).toThrow(new Error('index out of bounce.'));
  });
  
  it("should removed", function () {
    let linkedList:LinkedList<number> = new LinkedList<number>(0, 1, 2, 3, 4, 5);
    // length = 6
    expect(() => linkedList.remove(6)).toThrow(new Error('index out of bounce.'));
    linkedList.remove(5);
    expect(linkedList.length).toEqual(5);
    expect(linkedList.get(5)).toEqual(null);
  
    linkedList.remove(2);
    expect(linkedList.get(2)).toEqual(3);
    
    linkedList.toString();
  });
  
  it("should pop", function () {
    let linkedList:LinkedList<number> = new LinkedList<number>(0, 1, 2, 3, 4, 5);
    // length = 6
    linkedList.pop();
    expect(linkedList.length).toEqual(5);
    linkedList.pop();
    expect(linkedList.get(4)).toEqual(null);
    expect(linkedList.length).toEqual(4);
  });
});