interface Bar {
  a: string;
}

interface Foo {
  b: string;
}

const processBar = (b: Bar) => {};

const expressionReturningFoo = (): Foo => {
  return {
    b: 'hello',
  };
};

const f1 = () => {
  // 사용 하지 말아야 함
  // 문맥 전체를 오염시킴
  const foo: any = expressionReturningFoo();
  processBar(foo);
  return foo; // any 타입의 값이 반환
};
const f2 = () => {
  const foo = expressionReturningFoo();
  // 해당 위치에서만 any로 변환
  processBar(foo as any);
  return foo; // Foo 타입의 값이 반환
};
