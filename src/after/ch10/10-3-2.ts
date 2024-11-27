export default {};

interface IInstrument {
  capital: number;
  interestRate: number;
  duration: number;
  income: number;
  adjustmentFactor: number;
}

export function adjustedCapital(instrument: IInstrument) {
  const isCapitalPositive = () => {
    return (
      instrument.capital > 0 &&
      instrument.interestRate > 0 &&
      instrument.duration > 0
    );
  };

  const calculateAdjustedCapital = () => {
    return (
      (instrument.income / instrument.duration) * instrument.adjustmentFactor
    );
  };

  return isCapitalPositive() ? calculateAdjustedCapital() : 0;
}
