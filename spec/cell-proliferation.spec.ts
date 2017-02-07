import AlphaCell from "../cell-proliferation/alpha-cell";
describe('cell proliferation spec', function () {
  
  it('cell', function () {
    const case1 : AlphaCell = new AlphaCell(5, [ 1, 2, 3, 4, 5 ]);
    expect(case1.invoke()).toEqual([
      [ 3, -2, -1, 5, 5 ]
    ]);
    
    const case2 : AlphaCell = new AlphaCell(5, [ 1, 3, 0, 3, 0 ]);
    expect(case2.invoke()).toEqual([
      [ 1, 0, 2, 0, 1 ],
      [ 0, 1, 0, 1, 0 ],
      [ 0, 0, 1, 0, 0 ],
      [ -1, 1, 1, 0, -1 ]
    ]);
    
    const case3 : AlphaCell = new AlphaCell(7, [ 0, 0, 1, 0, 2, 0, 1 ]);
    expect(case3.invoke()).toEqual([
      [ 0, 0, 0, 1, 0, 1, 0 ],
      [ 0, 0, 0, 0, 1, 0, 0 ],
      [ 1, -1, -1, 1, 1, 0, -1 ]
    ]);
  });
});