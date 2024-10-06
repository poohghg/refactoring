interface ICustomer {
  id: string;
}

export default class Book {
  private reservations: ICustomer[] = [];

  constructor() {}

  // 이미 생성된 함수에서 추가 기능을 추가하고 싶을 때는 함수를 새로 만들어서 호출하도록 한다.
  // 그게 아니라면 기존 함수 호출을 변경하지 않고 새로운 인수를 만들고,해당 인수가 기존 함수의 로직에 영향이 없도록 한다.

  // 기존 메서드
  // addReservation(customer: ICustomer) {
  //   this.#reservations.push(customer);
  // }

  public addReservation(customer: ICustomer, priority: boolean = false) {
    // 가능하다면 우선순위 큐를 만들어서 사용
    if (priority) {
      this.reservations.unshift(customer);
      return;
    }

    this.reservations.push(customer);
  }

  public hasReservation(customerId: string) {
    return this.reservations.some(
      (reservedCustomer) => reservedCustomer.id === customerId,
    );
  }
}
