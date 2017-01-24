import { Node } from "./node";
export class LinkedList <T> {
  
  private head : Node<T> = null;
  private tail : Node<T> = null;
  private length : number = 0;
  
  constructor (...values : T []) {
    values.forEach(value => this.push(value));
  }
  
  get (idx : number) : T {
    let node : Node<T> = this.head;
    if (idx > this.length || idx < 0) node = null;
    else for (let i = 0; i < idx; i++) node = node.next;
    return node.value;
  }
  
  push (value : T) : T {
    let node = new Node(value);
    let tail = this.tail;
    
    if (this.length === 0) this.head = this.tail = node;
    else if (this.length === 1) this.head.next = this.tail = node;
    else tail.next = this.tail = node;
    this.length ++;
    return node.value;
  }
  
  insert ( value : T, index? : number) : T {
    // if (isNaN(index)) return this.get(this.length - 1);
    // else
    return this.push(value);
  }
}
