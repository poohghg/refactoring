export default {};

interface IDate {
  isBefore(date: Date): boolean;

  isAfter(date: Date): boolean;
}

interface IPlan {
  summerStart: Date;
  summerEnd: Date;
  summerRate: number;
  regularRate: number;
  regularServiceCharge: number;
}

function calculateCharge(date: IDate, quantity: number, plan: IPlan) {
  const isSummer = () =>
    !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);

  const summerCharge = () => quantity * plan.summerRate;

  const regularCharge = () =>
    quantity * plan.regularRate + plan.regularServiceCharge;

  return isSummer() ? summerCharge() : regularCharge();
}
