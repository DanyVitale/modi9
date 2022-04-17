import 'mocha';
import {expect} from 'chai';
import {Solver} from '../../src/Solver/Solver';
import {BubbleSort} from '../../src/BubbleSort/BubbleSort';
import {MergeSort} from '../../src/MergeSort/MergeSort';

describe('Solver - Tests', () => {
  // Creacion objetos
  const mySolver = new Solver([1, 2, 3], new BubbleSort());
  const mySolver2 = new Solver([4, 5, 6], new MergeSort());

  it('getStrategy works for mysolver', () => {
    expect(mySolver.getStrategy()).to.be.eql(new BubbleSort());
  });

  it('getStrategy works for mysolver2', () => {
    expect(mySolver2.getStrategy()).to.be.eql(new MergeSort());
  });

  it('setStrategy works', () => {
    mySolver2.setStrategy(new BubbleSort());
    expect(mySolver.getStrategy()).to.be.eql(new BubbleSort());
  });

  it('setStrategy works for mySolver', () => {
    mySolver.setStrategy(new MergeSort());
    expect(mySolver.getStrategy()).to.be.eql(new MergeSort());
  });

  //   it('logic works', () => {
  //     expect(mySolver.logic()).to.be.eqls([1, 2, 3]);
  //   });

  it('getData works for mysolver', () => {
    expect(mySolver.getData()).to.be.eql([1, 2, 3]);
  });

  it('getData works for mysolver2', () => {
    expect(mySolver2.getData()).to.be.eql([4, 5, 6]);
  });
});