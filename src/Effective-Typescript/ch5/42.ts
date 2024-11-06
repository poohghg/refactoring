// ✅ Use `never` for values that will never occur
// const a: never = 2;
let a: never;

a = 2 as never;

const a1: number = a; // number

// ✅ Use `unknown` for values that could be anything
let b: unknown = 1;

const b1: number = b as number; // number

const parse = <T>(val: unknown): T => {
  return val as T;
};
