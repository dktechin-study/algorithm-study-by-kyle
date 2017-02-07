

export default class Node<T> {
  private _value : T = null;
  private _left : Node<T>;
  private _right : Node<T>;
  
  constructor (value : T, left? : T, right? : T) {
    this._value = value;
    this._left = left ? new Node(left) : null;
    this._right = right ? new Node(right) : null;
  }
  
  get value () : T {
    return this._value;
  }
  
  get left () : Node<T> {
    return this._left;
  }
  
  get right () : Node<T> {
    return this._right;
  }
}