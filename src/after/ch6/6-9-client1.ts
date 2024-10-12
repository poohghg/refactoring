import { acquireReading } from './6-9';

const aReading = acquireReading();
// const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
console.log(aReading.baseCharge);