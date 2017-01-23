
export class Node <T> {
  
  private _value : T;
  private _next : Node<T> = null;
  
  constructor (value : T) {
    this._value = value;
  }
  
  set next (node : Node<T>) {
    this._next = node;
  }
  
  get next () {
    return this._next;
  }
  
  get value () {
    return this._value;
  }
}
