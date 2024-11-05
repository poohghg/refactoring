// 아래 코드는 개인적으로 리팩토링 지점이 없다고 생각.
// accountType에 따른 특정 계산을 하는 부분이 있어서 이 부분은 이미 분리 되어 있음.

type TAccount = 'Premium' | 'Normal';

export class AccountType {
  constructor(private _type: TAccount) {}

  get isPremium() {
    return this._type === 'Premium';
  }
}

export class Account {
  private static readonly baseCharge = 4.5;
  private _accountType: AccountType;

  constructor(
    type: TAccount,
    private _daysOverdrawn: number,
  ) {
    this._accountType = new AccountType(type);
  }

  get bankCharge() {
    return this._daysOverdrawn > 0
      ? Account.baseCharge + this.overdraftCharge
      : Account.baseCharge;
  }

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }

  get overdraftCharge() {
    if (!this._accountType.isPremium) return this._daysOverdrawn * 1.75;

    const baseCharge = 10;

    return this._daysOverdrawn <= 7
      ? baseCharge
      : baseCharge + (this._daysOverdrawn - 7) * 0.85;
  }
}

const a = new Account('Premium', 10);
