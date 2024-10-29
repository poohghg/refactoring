// 같은 도메릭 로직은 응집도를 높히는게 좋다.
// 지나치게 세분화 되어 있으면 인라인화 하는게 좋다.

// export class TrackingInformation {
//   #shippingCompany;
//   #trackingNumber;
//
//   constructor(trackingNumber, shippingCompany) {
//     this.#trackingNumber = trackingNumber;
//     this.#shippingCompany = shippingCompany;
//   }
// }

export class Shipment {
  constructor(
    private _trackingNumber: number,
    private _shippingCompany: string,
  ) {}

  get trackingInfo() {
    return `${this._shippingCompany}: ${this._trackingNumber}`;
  }

  get trackingInformation() {
    return {
      shippingCompany: this._shippingCompany,
      trackingNumber: this._trackingNumber,
    };
  }

  get shippingCompany() {
    return this._shippingCompany;
  }

  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }

  get trackingNumber() {
    return this._trackingNumber;
  }

  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
}

const shipment = new Shipment(999, 'khg');
console.log(shipment.trackingInfo);
shipment.trackingInformation.shippingCompany = 'COSCO';
console.log(shipment.trackingInfo);
