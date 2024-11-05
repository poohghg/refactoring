export class Customer {
  private readonly _contract: CustomerContract;

  constructor(
    private _name: string,
    discountRate: number,
  ) {
    this._contract = new CustomerContract(new Date(), discountRate);
  }

  get discountRate() {
    return this._contract;
  }

  public becomePreferred() {
    this._contract.discountRate += 0.03;
  }

  // amount를 받아서 할인율을 적용한 금액을 반환하는 메서드
  // public applyDiscount(amount) {
  //   return amount.subtract(amount.multiply(this._contract.discountRate));
  // }
}

class CustomerContract {
  constructor(
    private _startDate: Date,
    private _discountRate: number,
  ) {}

  get discountRate() {
    return this._discountRate;
  }

  set discountRate(value) {
    this._discountRate = value;
  }
}
