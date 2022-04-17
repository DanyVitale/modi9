/**
 * Interface for strategy pattern
 */
export interface Strategy {
    execute(data: number[]): number[];
}