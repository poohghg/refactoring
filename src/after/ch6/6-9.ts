// export function acquireReading() {
//   return reading;
// }
//
// export function baseRate(month, year) {
//   if (year === 2017 && month === 5) return 0.1;
//   return 0.2;
// }

interface IReading {
  customer: string;
  quantity: number;
  month: number;
  year: number;
}

class Reading {
  private readonly data: IReading;

  constructor(data: IReading) {
    this.data = data;
  }

  get customer() {
    return this.data.customer;
  }

  get quantity() {
    return this.data.quantity;
  }

  get month() {
    return this.data.month;
  }

  get year() {
    return this.data.year;
  }

  get baseRate() {
    if (this.year === 2017 && this.month === 5) return 0.1;
    return 0.2;
  }

  get baseCharge() {
    return this.baseRate * this.quantity;
  }

  get taxThreshold() {
    return 0.1;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - this.taxThreshold);
  }
}

const reading = new Reading({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
});

export function acquireReading() {
  return reading;
}
