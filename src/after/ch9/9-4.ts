export {};

interface IPersonData {
  name: string;
  areaCode: string;
  number: string;
}

class Person {
  constructor(name: string, areaCode: string, number: string) {
    this._name = name;
    this._telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  private _name;

  get name() {
    return this._name;
  }

  set name(arg) {
    this._name = arg;
  }

  private _telephoneNumber;

  get telephoneNumber() {
    return this._telephoneNumber.toString;
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }

  // 불변성을 지키기 위해 새로운 인스턴스를 생성한다.
  set officeAreaCode(value: string) {
    this._telephoneNumber = new TelephoneNumber(value, this.officeNumber);
  }

  get officeNumber() {
    return this._telephoneNumber.number;
  }

  set officeNumber(value: string) {
    this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, value);
  }
}

// 해당 인스턴스의 불변성을 지키기 위해 set를 제거한다.
class TelephoneNumber {
  private readonly _areaCode;
  private readonly _number;

  constructor(area: string, number: string) {
    this._areaCode = area;
    this._number = number;
  }

  get areaCode() {
    return this._areaCode;
  }

  get number() {
    return this._number;
  }

  get toString() {
    return `(${this._areaCode}) ${this._number}`;
  }
}

const person = new Person('엘리', '010', '12345678');
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
