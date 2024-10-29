type TPriority = 'low' | 'normal' | 'high' | 'rush';

interface IOrder {
  priority: TPriority;
}

export class Order {
  priority: Priority;

  constructor(priority: Priority) {
    this.priority = priority;
  }

  // Order 클래스에서 isHighPriority 여부를 확인하도록 하여 Order 관련 기능을 분리 한다.
  // 유지보수성 및 재사용성이 좋아진다.
  public get isHighPriority() {
    return this.priority.higherThan(Priority.Normal);
  }
}

// 우선순위 관련한 데이터를 관리한다.
// 미리 데이터를 생성해서 재사용이 가능하도록 한다.
class Priority {
  static Low = new Priority('low');
  static Normal = new Priority('normal');
  static High = new Priority('high');
  static Rush = new Priority('rush');

  private static readonly PrioritiesGrade: Record<TPriority, number> = {
    low: 0,
    normal: 1,
    high: 2,
    rush: 3,
  };

  private gradeIndex: number = Priority.PrioritiesGrade[this.name];

  private constructor(private name: TPriority) {}

  public toString() {
    return this.name;
  }

  public equals(other: Priority) {
    return this.gradeIndex === other.gradeIndex;
  }

  public higherThan(other: Priority) {
    return this.gradeIndex > other.gradeIndex;
  }

  public lowerThan(other: Priority) {
    return this.gradeIndex < other.gradeIndex;
  }
}

const orders = [
  new Order(Priority.Low),
  new Order(Priority.High),
  new Order(Priority.Normal),
];

const highPriorityCount = orders.filter((order) => order.isHighPriority).length;
