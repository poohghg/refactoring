interface IVoyage {
  zone: string;
  length: number;
}

interface IHistory {
  zone: string;
  profit: number;
}

class VoyageRating {
  protected readonly _voyage: IVoyage;
  protected readonly _history: IHistory[];
  protected readonly _baseVoyageProfitFactor: number = 2;

  constructor(voyage: IVoyage, history: IHistory[]) {
    this._voyage = voyage;
    this._history = history;
  }

  get voyageProfitFactor() {
    let result = this._baseVoyageProfitFactor;
    if (this._voyage.zone === 'east-indies') result += 1;
    if (this._history.length > 8) result += 1;
    if (this._voyage.length > 14) result -= 1;

    return result;
  }

  get voyageRisk() {
    let result = 1;
    if (this._voyage.length > 4) result += 2;
    if (this._voyage.length > 8) result += this._voyage.length - 8;
    if (['china', 'east-indies'].includes(this._voyage.zone)) result += 4;

    return Math.max(result, 0);
  }

  get captainHistoryRisk() {
    let result = 1;
    if (this._history.length < 5) result += 4;
    result += this._history.filter((v) => v.profit < 0).length;

    return Math.max(result, 0);
  }

  get rating() {
    const profitPoint = this.voyageProfitFactor * 3;
    const riskPoint = this.voyageRisk + this.captainHistoryRisk * 2;
    return profitPoint > riskPoint ? 'A' : 'B';
  }
}

class VoyageChinaRating extends VoyageRating {
  constructor(voyage: IVoyage, history: IHistory[]) {
    super(voyage, history);
  }

  get voyageProfitFactor() {
    // 중국을 경유하는 여정이면 추가 1점 + 중국을 경유하는 여정이면서 중국 이력이 있는 경우 추가 3점
    const voyageChinaPoint = 1;
    const voyageChinaAndHistoryPoint = 3;

    let result =
      this._baseVoyageProfitFactor +
      voyageChinaPoint +
      voyageChinaAndHistoryPoint;

    if (this._history.length > 10) result += 1;
    if (this._voyage.length > 12) result += 1;
    if (this._voyage.length > 18) result -= 1;
    return result;
  }

  get captainHistoryRisk() {
    const chinaHistoryRiskPoint = -2;
    return Math.max(super.captainHistoryRisk + chinaHistoryRiskPoint, 0);
  }
}

export function rating(voyage: IVoyage, history: IHistory[]) {
  const isChinaZoneAndHasChinaHistory = () => {
    return voyage.zone === 'china' && history.some((v) => 'china' === v.zone);
  };

  return isChinaZoneAndHasChinaHistory()
    ? new VoyageChinaRating(voyage, history).rating
    : new VoyageRating(voyage, history).rating;
}

//
// function voyageRisk(voyage) {
//   // 항해 경로 위험요소
//   let result = 1;
//   if (voyage.length > 4) result += 2;
//   if (voyage.length > 8) result += voyage.length - 8;
//   if (['china', 'east-indies'].includes(voyage.zone)) result += 4;
//   return Math.max(result, 0);
// }
//
// function captainHistoryRisk(voyage, history) {
//   // 선장의 항해 이력 위험 요소
//   let result = 1;
//   if (history.length < 5) result += 4;
//   result += history.filter((v) => v.profit < 0).length;
//   if (voyage.zone === 'china' && hasChina(history)) result -= 2;
//   return Math.max(result, 0);
// }
//
// function hasChina(history) {
//   // 중국을 경유하는가?
//   return history.some((v) => 'china' === v.zone);
// }
//
// function voyageProfitFactor(voyage, history) {
//   // 수익 요인
//   let result = 2;
//   if (voyage.zone === 'china') result += 1;
//   if (voyage.zone === 'east-indies') result += 1;
//   if (voyage.zone === 'china' && hasChina(history)) {
//     result += 3;
//     if (history.length > 10) result += 1;
//     if (voyage.length > 12) result += 1;
//     if (voyage.length > 18) result -= 1;
//   } else {
//     if (history.length > 8) result += 1;
//     if (voyage.length > 14) result -= 1;
//   }
//   return result;
// }
//
// const voyage = { zone: 'west-indies', length: 10 };
// const history = [
//   { zone: 'east-indies', profit: 5 },
//   { zone: 'west-indies', profit: 15 },
//   { zone: 'china', profit: -2 },
//   { zone: 'west-africa', profit: 7 },
// ];
//
// const rate = rating(voyage, history);
// console.log(rate);
