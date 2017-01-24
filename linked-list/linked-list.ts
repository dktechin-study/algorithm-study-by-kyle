import { Node } from "./node";

export class LinkedList <T> {
  
  private head : Node<T> = new Node(null);
  private _length : number = 0;
  
  constructor (...values : T []) {
    values.forEach(value => this.push(value));
  }
  
  checkOutOfBounce (index : number) : boolean {
    return index > this._length || index < 0
  }
  
  private getNode (index : number) : Node<T> {
    let node : Node<T> = this.head;
    if (this.checkOutOfBounce(index)) node = new Node(null);
    else for (let i = 0; i < index; i++) node = node.next;
    return node;
  }
  
  get (index : number) : T {
    return this.getNode(index).value;
  }
  
  get length () : number {
    return this._length;
  }
  
  push (value : T) : T {
    let node = new Node(value);
    if (this._length === 0) this.head = node;
    else if (this._length === 1) this.head.next = node;
    else this.getNode(this.length - 1).next = node;
    this._length += 1;
    return node.value;
  }
  
  toString () {
    let node : Node<T> = this.head;
    console.log('\n >> Print Node');
    for (let i = 0; i < this.length; i++) {
      let next = node.next;
      if (next !== null) node = next;
    }
  }
  
  insert ( value : T, index : number) : T {
    if (this.checkOutOfBounce(index)) throw new Error('index out of bounce.');
    let node = new Node(value);
    if (index === 0) {
      let head = this.head;
      this.head = node;
      this.head.next = head;
    } else {
      let prevNode = this.getNode(index - 1);
      let nextNode = this.getNode(index + 1);
      prevNode.next = node;
      node.next = nextNode;
    }
    
    this._length += 1;
    return node.value;
  }
  
  remove (index : number) : void {
    if (index < 0 || index > this.length - 1) throw new Error('index out of bounce.');
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let prevNode = this.getNode(index - 1);
      let nextNode = this.getNode(index + 1);
      nextNode ? prevNode.next = nextNode : prevNode.next = new Node(null);
    }
    this._length -= 1;
  }
}
