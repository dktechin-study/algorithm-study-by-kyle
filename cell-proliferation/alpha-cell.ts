export default class AlphaCell {
  
  private result : number [][] = [];
  private count : number;
  private pattern : number[];
  private inputIndexes : number[] = [];
  private outputIndexes : number[] = [];
  
  constructor (count : number, pattern : number[]) {
    this.count = count;
    this.pattern = pattern;
    this.makeIndexes();
  }
  
  makeIndexes () : void {
    let odd : number[] = [];
    let even : number[] = [];
    for (let i = 0; i < this.count; i++) {
      if (i % 2 === 0) even.push(i);
      else odd.push(i);
    }
  
    if (this.count % 2 === 0) this.inputIndexes = [...odd.reverse(), ...even];
    else this.inputIndexes = [...even.reverse(), ...odd];
    this.outputIndexes = Object.create(this.inputIndexes).reverse();
  }
  
  invoke () : number[][] {
    let prev = this.restoreSplit();
    while (AlphaCell.isValid(prev)) {
      this.result.push(prev);
      this.pattern = Object.create(prev);
      prev = this.restoreSplit();
    }
    
    this.result.push(prev);
    return this.result
  }
  
  static isValid (arr : number []) : boolean {
    for (let num of arr) {
      if (num < 0) return false;
    }
    return true;
  }
  
  restoreSplit () : number[] {
    let outputValue = 0;
    let prev : number[] = [];
    for (let i = 0; i < this.count; i++) {
      if (i === 0 ) outputValue =  prev[this.outputIndexes[i]] = this.pattern[this.inputIndexes[i]];
      else outputValue = prev[this.outputIndexes[i]] = this.pattern[this.inputIndexes[i]] - outputValue;
    }
    return prev;
  }
}