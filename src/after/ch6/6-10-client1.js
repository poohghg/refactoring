import { acquireReading, baseRate } from './6-10.ts';

const aReading = acquireReading();

const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
console.log(baseCharge);