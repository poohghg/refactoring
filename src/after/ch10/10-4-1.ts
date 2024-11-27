export default {};

interface IBird {
  name: 'Swallow' | 'Parrot';
  type: 'EuropeanSwallow' | 'AfricanSwallow' | 'NorwegianBlueParrot';
}

interface IEuropeanSwallow extends IBird {
  name: 'Swallow';
  type: 'EuropeanSwallow';
  numberOfCoconuts: number;
}

interface IAfricanSwallow extends IBird {
  name: 'Swallow';
  type: 'AfricanSwallow';
  numberOfCoconuts: number;
}

interface INorwegianBlueParrot extends IBird {
  name: 'Parrot';
  type: 'NorwegianBlueParrot';
  voltage: number;
  isNailed: boolean;
}

type BirdType = AfricanSwallow | EuropeanSwallow | NorwegianBlueParrot;

// 확장 가능하게 BirdType 배열 정의
type BirdInstance = Bird<IBird>;

export function speeds<T extends BirdInstance>(
  birds: T[],
): Map<string, number> {
  return new Map(birds.map((b) => [b.name, b.airSpeedVelocity]));
}

abstract class Bird<T extends IBird> {
  protected _data: T;

  protected constructor(data: T) {
    this._data = data;
  }

  abstract get plumage(): string;

  abstract get airSpeedVelocity(): number;

  public get name(): string {
    return this._data.name;
  }
}

class EuropeanSwallow extends Bird<IBird> {
  constructor(data: IBird) {
    super(data);
  }

  get plumage(): string {
    return 'average';
  }

  get airSpeedVelocity(): number {
    return 35;
  }
}

class AfricanSwallow extends Bird<IAfricanSwallow> {
  constructor(data: IAfricanSwallow) {
    super(data);
  }

  get plumage(): string {
    return this._data.numberOfCoconuts > 2 ? 'tired' : 'average';
  }

  get airSpeedVelocity(): number {
    return 40 - 2 * this._data.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird<INorwegianBlueParrot> {
  constructor(data: INorwegianBlueParrot) {
    super(data);
  }

  get plumage(): string {
    return this._data.voltage > 100 ? 'scorched' : 'beautiful';
  }

  get airSpeedVelocity(): number {
    return this._data.isNailed ? 0 : 10 + this._data.voltage / 10;
  }
}

const birds: BirdType[] = [
  new EuropeanSwallow({
    name: 'Swallow',
    type: 'EuropeanSwallow',
  }),
  new AfricanSwallow({
    name: 'Swallow',
    type: 'AfricanSwallow',
    numberOfCoconuts: 2,
  }),
];

console.log(speeds(birds));
