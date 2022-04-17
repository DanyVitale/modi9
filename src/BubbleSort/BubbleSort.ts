import {Strategy} from '../Strategy/strategy';

/**
 * BubbleSort implements the strategy pattern.
 */
export class BubbleSort implements Strategy {
  /**
   * Execute() sorts the data using the bubble sort algorithm.
   * @param data Number[]
   */
  execute(data: number[]): number[] {
    data = data.slice(); // creates a copy of the data

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - 1; j++) {
        if (data[j] > data[j + 1]) {
          const swap = data[j];
          data[j] = data[j + 1];
          data[j + 1] = swap;
        }
      }
    }
    console.log(`Bubble sort applied to ${data}`);
    return data;
  }
}
