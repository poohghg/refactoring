export default {};

class Order {
  private readonly _number: number;
  private readonly _customer: Customer;

  constructor(number: number, customer: Customer) {
    this._number = number;
    this._customer = customer;
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  private readonly _id: string;

  constructor(id: string) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

class CustomerRepository {
  private static readonly instance: CustomerRepository =
    new CustomerRepository();
  private readonly _customers = new Map<string, Customer>();

  //클래스 외부에서 new 키워드를 사용해 인스턴스를 생성하지 못하도록 설정.
  private constructor() {}

  get customers() {
    return new Map(this._customers);
  }

  public static getInstance() {
    if (!this.instance) {
      return new CustomerRepository();
    }
    return this.instance;
  }

  public registerCustomer(id: string): Customer {
    if (!this._customers.has(id)) {
      this._customers.set(id, new Customer(id));
    }
    return this._customers.get(id)!;
  }

  public findCustomer(id: string) {
    return this._customers.get(id);
  }

  public deleteCustomer(id: string) {
    this._customers.delete(id);
  }

  public updateCustomer(id: string, customer: Customer) {
    this._customers.set(id, customer);
  }
}

const customerRepository = CustomerRepository.getInstance();

const order = new Order(1, customerRepository.registerCustomer('1'));
