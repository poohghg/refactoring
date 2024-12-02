export default {};

export class Site {
  private readonly _customer: Customer;

  constructor(customerName: string) {
    this._customer =
      customerName === 'unknown'
        ? new UnknownCustomer(customerName)
        : new Customer(customerName);
  }

  get customer() {
    return this._customer;
  }
}

export class Customer {
  private readonly _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

export class UnknownCustomer extends Customer {
  // constructor(name: string = 'occupant') {
  //   super(name);
  // }

  get name() {
    return 'occupant';
  }
}

// 사용하는 부분
export function customerName(site: Site) {
  // const aCustomer = site.customer;
  // // 더 많은 코드가 여기에 있음
  // let customerName;
  // if (aCustomer === 'unknown') customerName = 'occupant';
  // else customerName = aCustomer.name;
  // return customerName;

  return site.customer.name;
}
