
/**
 * Tipo item PrimeNumberItem
 */
type PrimeNumberItem = {
    n: number;
}


/**
//  * Clase PrimeNumberInstance -  implementa el patrón de diseño Singleton.
//  */

// Falta implements Iterable<PrimeNumberItem>
export class PrimeNumberInstance {
  private items: PrimeNumberItem[];

  private static primeNumberInstance: PrimeNumberInstance;

  private constructor() {
    this.items = [];
  }

  public static getPrimeNumberInstance(): PrimeNumberInstance {
    if (!PrimeNumberInstance.primeNumberInstance) {
      PrimeNumberInstance.primeNumberInstance = new PrimeNumberInstance();
    }
    return PrimeNumberInstance.primeNumberInstance;
  }

  [Symbol.iterator](): Iterator<PrimeNumberItem> {
    return this.items.values();
  }

  /**
   * Añadir elementos
   * @param item
   */
  addItem(item: PrimeNumberItem): void {
    PrimeNumberInstance.primeNumberInstance.items.push(item);
  }

  getItems(): PrimeNumberItem[] {
    return PrimeNumberInstance.primeNumberInstance.items;
  }

  /**
   * Permite establecer los elemntos
   * @param items
   */
  setItems(items: PrimeNumberItem[]) {
    PrimeNumberInstance.primeNumberInstance.items = items;
  }

  /**
   * Obtener el numero de elementos
   * @returns
   */
  getNumberOfItems(): number {
    return PrimeNumberInstance.primeNumberInstance.items.length;
  }

  /**
   * Obtener un elemento en concreto
   * @param index
   * @returns
   */
  getItem(index: number): PrimeNumberItem | undefined {
    if (index >= PrimeNumberInstance.primeNumberInstance.getNumberOfItems()) {
      return undefined;
    }
    return PrimeNumberInstance.primeNumberInstance.items[index];
  }

  /**
   * Obtener los valores items
   * @param n
   * @returns
   */
  getPrimeNumber(n: number): IterableIterator<number> {
    const temp: number[] = [];
    let count: number = 0;
    let i: number = 1;

    while (count != n) {
      if (this.isPrime(i)) {
        temp.push(i);
        i++;
        count++;
      } else {
        i++;
      }
    }
    return temp.values();
  }

  /**
   * Establecer si en un rango de numero los numeros son primos o no
   * @param m
   * @param num
   * @returns
   */
  isPrimeRange(m: number, num: number): boolean {
    let temp: number = m;
    while (temp < num) {
      for (let i = 2; i < num; i++) {
        if (temp % i === 0) {
          return false;
        } else {
          return true;
        }
      }
      temp++;
    }

    return true;
  }

  /**
   * Establecer si un numero es primo
   * @param num
   * @returns
   */
  isPrime(num: number): boolean {
    let flag: boolean = false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        flag = false;
      } else {
        flag = true;
      }
    }

    if (flag) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Obtener los numeros primos en un rango
   * @param m
   * @param n
   * @returns
   */
  getPrimeRange(m: number, n: number): IterableIterator<number> {
    const temp: number[] = [];
    let count: number = 0;
    let i: number = 1;

    while (count != n) {
      if (this.isPrimeRange(m, n)) {
        temp.push(i);
        i++;
        count++;
      } else {
        i++;
      }
    }
    return temp.values();
  }
}