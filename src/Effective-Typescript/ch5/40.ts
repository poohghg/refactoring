const shallowObjectEqual = <T extends Object>(a: T, b: T) => {
  const aKeys = Object.keys(a) as (keyof T)[];
  const bKeys = Object.keys(b) as (keyof T)[];

  if (aKeys.length !== bKeys.length) return false;

  for (const aKey of aKeys) {
    // 얕은 비교
    if (!(aKey in b) || !Object.is(a[aKey], b[aKey])) return false;
  }

  return true;
};

console.log(shallowObjectEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
