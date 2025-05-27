const myFunc = function (a: number, b: number): number {
  return a + b;
};

function myFunc2(name = "TS"): string {
  return `Hello ${name}`;
}

function sayHelloOptional(...args: number[]): number {
  return args.reduce((acc, el) => acc + el, 0);
}

type MathFunction = (one: number, two: number) => number; //function type for math's
const multiply: MathFunction = (x, y) => x / y;      // function with type implemented