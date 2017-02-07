
import Node from './node';
import { isNull } from "util";
import { isNullOrUndefined } from "util";

export default class BinarySearchTree <T> {
  private root : Node<T> = null;
  
  push (value : T) : void {
    const node = new Node(value);
    if (isNull(this.root)) {
      this.root = node;
    } else {
      const currentNode : Node<T> = this.root;
       
    }
    
    
    // else {
    //   let currentNode : Node<T> = this.root;
    //
    // }
    // var currentNode = root;
    // var newNode = new Node(val);
    //
    // while(currentNode){
    //   if(val < currentNode.value){
    //     if(!currentNode.left){
    //       currentNode.left = newNode;
    //       break;
    //     }
    //     else{
    //       currentNode = currentNode.left;
    //     }
    //   }
    //   else{
    //     if(!currentNode.right){
    //       currentNode.right = newNode;
    //       break;
    //     }
    //     else{
    //       currentNode = currentNode.right;
    //     }
    //   }
    
    
    
  }
  
  inOrderTraverse () : void {
    
  }
  
  postOrderTraverse () : void {
    
  }
  
  findNode (value : T) : Node<T> {
    let currentNode : Node<T> = this.root;
    while (currentNode.value !== value) {
      currentNode = value < currentNode.value ? currentNode.left : currentNode.right;
      if (isNull(currentNode)) throw new Error('node not found.');
    }
    return currentNode;
  }
  
}