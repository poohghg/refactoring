interface IVoyage {
  zone: string;
  length: number;
}

interface IHistory {
  zone: string;
  profit: number;
}

// 전략 인터페이스 정의
interface IVoyageStrategy {
  calculateVoyageProfitFactor(): number;

  calculateCaptainHistoryRisk(): number;

  calculateVoyageRisk(): number;
}

// 기본 전략 (기본 여정에 대한 로직)
class BaseVoyageStrategy implements IVoyageStrategy {
  constructor(
    protected voyage: IVoyage,
    protected history: IHistory[],
  ) {}

  calculateVoyageProfitFactor(): number {
    let result = 2; // 기본 점수
    if (this.voyage.zone === 'east-indies') result += 1;
    if (this.history.length > 8) result += 1;
    if (this.voyage.length > 14) result -= 1;
    return result;
  }

  calculateCaptainHistoryRisk(): number {
    let result = 1; // 기본 점수
    if (this.history.length < 5) result += 4;
    result += this.history.filter((v) => v.profit < 0).length;
    return Math.max(result, 0);
  }

  calculateVoyageRisk(): number {
    let result = 1; // 기본 점수
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) result += this.voyage.length - 8;
    if (['china', 'east-indies'].includes(this.voyage.zone)) result += 4;
    return Math.max(result, 0);
  }
}

// 중국 여정 전략
class ChinaVoyageStrategy extends BaseVoyageStrategy {
  calculateVoyageProfitFactor(): number {
    let result = super.calculateVoyageProfitFactor() + 4; // 기본 점수 + 중국 특수 점수
    if (this.history.length > 10) result += 1;
    if (this.voyage.length > 12) result += 1;
    if (this.voyage.length > 18) result -= 1;
    return result;
  }

  calculateCaptainHistoryRisk(): number {
    return Math.max(super.calculateCaptainHistoryRisk() - 2, 0); // 중국 관련 리스크 감소
  }

  calculateVoyageRisk(): number {
    return super.calculateVoyageRisk(); // 중국 여정에 추가 리스크 없음 (필요 시 조정 가능)
  }
}

// 여정 평가 클래스
class VoyageRating {
  constructor(private strategy: IVoyageStrategy) {}

  get rating() {
    const profitPoint = this.strategy.calculateVoyageProfitFactor() * 3;
    const riskPoint =
      this.strategy.calculateVoyageRisk() +
      this.strategy.calculateCaptainHistoryRisk() * 2;
    return profitPoint > riskPoint ? 'A' : 'B';
  }
}

// 외부에서 사용하는 rating 함수
export function rating(voyage: IVoyage, history: IHistory[]): string {
  const strategy =
    voyage.zone === 'china' && history.some((v) => v.zone === 'china')
      ? new ChinaVoyageStrategy(voyage, history)
      : new BaseVoyageStrategy(voyage, history);

  return new VoyageRating(strategy).rating;
}
