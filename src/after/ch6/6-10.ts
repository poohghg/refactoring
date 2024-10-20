import * as _ from 'lodash';

interface IReading {
  customer: string;
  quantity: number;
  month: number;
  year: number;
}

interface IEnrichedReading extends IReading {
  baseCharge: number;
  taxableCharge: number;
}

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

const taxThreshold = 0.1;

export function acquireReading() {
  return reading;
}

export function enrichReading(original: IReading): IEnrichedReading {
  // ts 잉여 속성 체크 준수하기
  const cloneDate = _.cloneDeep(original);

  return {
    ...cloneDate,
    baseCharge: calculateBaseCharge(cloneDate),
    taxableCharge: Math.max(0, calculateBaseCharge(cloneDate) - taxThreshold),
  };
}

function calculateBaseCharge(aReading: IReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

export function baseRate(month: number, year: number) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}