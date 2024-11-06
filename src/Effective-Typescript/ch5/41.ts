export default {};

const test1 = (a: string[]) => {};
const test2 = (a: (string | number)[]) => {};

const result = []; // any[]

result.push('a'); // string[]

test1(result);

result.push(1); // (string | number)[]

test2(result);
