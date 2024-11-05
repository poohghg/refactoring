type A = string & {
  brand: 'a';
};

const isTType = (x: string): x is A => {
  return x === 'a';
};

const plusA = (x: string) => {
  if (!isTType(x)) {
    return x;
  }

  return x + 'a';
};

plusA('a'); // 'aa'
