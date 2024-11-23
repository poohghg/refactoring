export {};

// 예제 1
class Order {
  private _baseTotal: number;

  constructor() {
    this._discount = 0;
    this._baseTotal = 0;
  }

  private _discount: number;

  set discount(value: number) {
    // discount의 업데이트는 discount에만 영향을 주도록 한다.
    // set discount는 하나의 책임만 가지도록 한다.
    // const old = this._discount;
    this._discount = value;
    // this._discountedTotal += old - value;
  }

  // 다른 코드 있다고 가정
  get discountedTotal() {
    // discountedTotal get시 질의함수로 변경
    // return this._discountedTotal;
    return this._baseTotal - this._discount;
  }
}

// 예제 2
// class ProductionPlan {
//   // 다른 코드 있다고 가정
//   get production() {
//     // production에서 질의 함수로 변경
//     // return this._production;
//     // return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
//   }
//
//   applyAdjustment(adjustment) {
//     // this._adjustments.push(adjustment);
//     // 아래 로직을 production에서 질의 함수로 변경한다.
//     // this._production += adjustment.amount;
//   }
// }
