import {Strategy} from '../Strategy/strategy';

/**
 * Class Solver describes the context in which the strategy is used.
 */
export class Solver {
  constructor(private data: number[], private strategy: Strategy) {
  }
  /**
   * Data() returns the data used.
   * @returns Number[]
   */
  getData() {
    return this.data;
  }

  /**
   * setStrategy sets the strategy to be used.
   * @param strategy Type is Strategy
   */
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }
  /**
   * getStrategy returns the strategy used.
   * @returns Strategy used
   */
  getStrategy() {
    return this.strategy;
  }

  /**
   * Logic() solves the problem using the strategy.
   */
  logic() {
    this.strategy.execute(this.data);
  }
}