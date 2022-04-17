/**
 * Add describes an addition operation.
 * @param a First number
 * @param b Second Number
 * @returns Adder result
 */
export function add(a: number, b: number): number {
  return a + b;
}

// Language: typescript
// hacer uso del patron facade para desarrollar la suma y el producto

export class Adder {
  public simpleAdd(a: number, b: number): number {
    return a + b;
  }

  public complexAdd(...myArgs: number[]): number {
    return myArgs.reduce((acc, curr) => acc + curr);
  }
}

export class Product {
  public simpleProduct(a: number, b: number): number {
    return a * b;
  }

  public complexProduct(...myArgs: number[]): number {
    return myArgs.reduce((acc, curr) => acc * curr);
  }
}

export class Facade {
  constructor(private adder: Adder, private product: Product) {}

  public powAndNumber(base: number, exponent: number, delta: number[]): number {
    const myNum = [];

    for (let i = 0; i < exponent; i++) {
      myNum.push(base);
    }

    return this.product.complexProduct(...myNum) + 
      this.adder.complexAdd(...delta);
  }
}

export function clientCode(facade: Facade): number {
  const delta = [1, 2, 3];
  return facade.powAndNumber(2, 3, delta);
}

console.log(clientCode(new Facade(new Adder(), new Product())));