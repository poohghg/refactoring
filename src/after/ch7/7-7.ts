export class Department {
  constructor(
    private _manager: string,
    private _chargeCode: number,
  ) {}

  get chargeCode() {
    return this._chargeCode;
  }

  set chargeCode(arg) {
    this._chargeCode = arg;
  }

  get manager() {
    return this._manager;
  }

  set manager(arg) {
    this._manager = arg;
  }
}

class Person extends Department {
  constructor(
    private _name: string,
    manager: Department['_manager'],
    chargeCode: Department['_chargeCode'],
  ) {
    super(manager, chargeCode);
  }

  get name() {
    return this._name;
  }

  get department() {
    return {
      manager: this.manager,
      chargeCode: this.chargeCode,
    };
  }

  set department({
    manager,
    chargeCode,
  }: {
    manager: Department['_manager'];
    chargeCode: Department['_chargeCode'];
  }) {
    this.manager = manager;
    this.chargeCode = chargeCode;
  }
}

const department = new Department('Tom', 1234);

const person = new Person('Tom', 'KWON', 1234);
console.log(person.name);
console.log(person.manager);
console.log(person.department);
