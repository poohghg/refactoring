class Account {
  constructor(
    private _number: number,
    private _type: AccountType,
  ) {}

  get interestRate() {
    return this._type.interestRate;
  }
}

class AccountType {
  constructor(
    private _name: string,
    private _interestRate: number,
  ) {}

  get interestRate() {
    return this._interestRate;
  }
}

const accuout = new Account(1234, new AccountType('normal', 0.02));
