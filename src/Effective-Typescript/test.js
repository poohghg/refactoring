const book1 = {
  point: 200,
  member: {
    point: 100,
    get: function () {
      console.log(this === book.member); // true
      return this.point;
    },
    getArrow: () => {
      console.log(this);
      // {} //왜 {}가 나오는가?
      // 화살표 함수는 자신만의 this를 가지지 않고, 자신이 선언된 함수의 this를 그대로 사용한다.
      return this.point;
    },
    getArrow1() {
      console.log(this); // { point: 100, get: [Function: get], getArrow: [Function: getArrow], getArrow1: [Function: getArrow1] }
      return this.point;
    },
  },
};

// console.log(book.member.get()); // 100
// console.log(book.member.getArrow()); // undefined
// console.log(book1.member.getArrow1()); // undefined

// const book = {
//   prototype: {
//     constructor: book,
//     __proto__: {},
//   },
// };

function Person(first, last, age, gender, interests) {
  // 속성과 메소드 정의
  this.first = first;
  this.last = last;
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

const arrowFunction = () => {
  console.log('arrowFunction ' + this.first + ' .');
};

Person.prototype.greeting = arrowFunction;

Person.prototype.greeting1 = function () {
  console.log("Hi! I'm " + this.first + '.');
};

const person1 = new Person('Bob', 'Smith', 21, 'M', ['music', 'skiing']);

const bindFunction = arrowFunction.bind(person1);

// person1.greeting(); // Hi! I'm undefined.
// person1.greeting1(); // Hi! I'm Bob.
bindFunction(); // Hi! I'm Bob.

// person1의 프로토타입을 확인해보면 Person 생성자 함수의 prototype 객체가 할당되어 있다.
// console.log(Object.getPrototypeOf(person1) === Person.prototype); // true
// console.log(person1.__proto__ === Person.prototype); // true

// person1 객체가 valueOf() 메소드를 가지고 있는지 체크
// person1의 프로토타입 객체(Person() 생성자의 프로토타입)에 valueOf() 메소드가 있는지 체크
// Person() 생성자의 프로토타입 객체의 프로토타입 객체(Object() 생성자의 프로토타입)가 valueOf() 메소드를 가지고 있는지 체크

// console.log(person1.valueOf()); // Person { first: 'Bob', last: 'Smith ', age: 21, gender: 'M', interests: [ 'music', 'skiing' ] }

const a = {
  b: 1,
  c: {
    b: 2,
    c_arrow: () => {
      console.log(this); // {}
      console.log(this.b); // undefined
    },
    c_function: function () {
      console.log(this); // { b: 2, c: { b: 2, c: [Circular], c_arrow: [Function: c_arrow], c_function: [Function: c_function] }, d: [Function: d] }
      console.log(this.b); // 2
    },
  },
  d: function () {
    const that = this;
    console.log('this', this); // { b: 1, c: { b: 2, c: [Circular], c_arrow: [Function: c_arrow], c_function: [Function: c_function] }, d: [Function: d] }
    const d_arrow = () => {
      console.log(this === that); // true
    };
    return {
      d_arrow,
    };
  },
};

// console.log(a.d().d_arrow());
// a.c.c().c_function();
// a.c.c().c_arrow();
