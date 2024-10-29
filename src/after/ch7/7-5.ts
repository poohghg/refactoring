// 해당 코드는 나쁘지 않은 코드다 하지만 클래스 하나당 하나의 책임, 하나의 도메인을 가지는것이 훨씬 좋다.

// class Person1 {
//   #name;
//   #officeAreaCode;
//   #officeNumber;
//
//   constructor(name, areaCode, number) {
//     this.#name = name;
//     this.#officeAreaCode = areaCode;
//     this.#officeNumber = number;
//   }
//
//   get name() {
//     return this.#name;
//   }
//
//   set name(arg) {
//     this.#name = arg;
//   }
//
//   get telephoneNumber() {
//     return `(${this.officeAreaCode}) ${this.officeNumber}`;
//   }
//
//   get officeAreaCode() {
//     return this.#officeAreaCode;
//   }
//
//   set officeAreaCode(arg) {
//     this.#officeAreaCode = arg;
//   }
//
//   get officeNumber() {
//     return this.#officeNumber;
//   }
//
//   set officeNumber(arg) {
//     this.#officeNumber = arg;
//   }
// }

// Department가 다형성을 통해 생성되는게 맞지 않을까?
class Department {
  constructor(
    private _officeAreaCode: string,
    private _officeNumber: string,
  ) {}

  get officeAreaCode() {
    return this._officeAreaCode;
  }

  set officeAreaCode(arg) {
    this._officeAreaCode = arg;
  }

  get officeNumber() {
    return this._officeNumber;
  }

  set officeNumber(arg) {
    this._officeNumber = arg;
  }

  get officeTelephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }
}

class Person2 extends Department {
  constructor(
    private _name: string,
    _officeAreaCode: string,
    _officeNumber: string,
  ) {
    super(_officeAreaCode, _officeNumber);
  }

  get name() {
    return this._name;
  }

  set name(arg: string) {
    this._name = arg;
  }

  get telephoneNumber() {
    return super.officeTelephoneNumber;
  }
}

const person = new Person2('name', '010', '666-6666');

console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
