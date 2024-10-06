import { printResult } from '../../common';

interface IReadings {
  temp: number;
  time: string;
}

// 관련된 기능을 하는 데이터와 로직을 한곳에 묶는다.
class NumberRange {
  min: number;
  max: number;

  constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  contains(arg: number) {
    return arg >= this.min && arg <= this.max;
  }
}

// export function readingsOutsideRange(station, min, max) {
//   return station.readings.filter((r) => r.temp < min || r.temp > max);
// }

// 책에서는 매개변수의 갯수를 줄이는게 좋다고 나와있는데 잘 모르겠다..
export function readingsOutsideRange(
  readings: IReadings[],
  range: {
    min?: number;
    max?: number;
  },
) {
  const isNumber = (num?: number) => typeof num === 'number';

  if (!isNumber(range.min) && !isNumber(range.max))
    throw new Error('비교 가능 값이 없습니다.');

  return readings.filter(({ temp }) => {
    if (isNumber(range.min) && isNumber(range.max)) {
      return temp < range.min || temp > range.max;
    }

    if (isNumber(range.min)) {
      return temp < range.min;
    }

    if (isNumber(range.max)) {
      return temp > range.max;
    }

    return false;
  });
}

export function readingsOutsideRange2(
  station: { readings: IReadings[] },
  range: NumberRange,
) {
  return station.readings.filter((r) => !range.contains(r.temp));
}

const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};
const operationPlan = {
  temperatureFloor: 51,
  temperatureCeiling: 53,
};

printResult(
  readingsOutsideRange(station.readings, {
    min: operationPlan.temperatureFloor,
    max: operationPlan.temperatureCeiling,
  }),
);

printResult(readingsOutsideRange2(station, new NumberRange(51, 53)));