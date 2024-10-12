let defaultOwner = { firstName: '마틴', lastName: '파울러' };

export interface IOwner {
  firstName: string;
  lastName: string;
}

class Owner implements IOwner {
  static defaultOwner: Owner = new Owner({
    firstName: '마틴',
    lastName: '파울러',
  });

  private readonly data: IOwner;

  constructor(data: IOwner) {
    this.data = data;
  }

  get getData(): IOwner {
    return this.data;
  }

  get lastName() {
    return this.data.lastName;
  }

  get firstName() {
    return this.data.firstName;
  }
}

// class를 이용해 데이터를 캡슐화하고, defaultOwner를 Owner 클래스의 static 변수로 선언
export function getDefaultOwner() {
  return Owner.defaultOwner;
}

const spaceshipOwner = getDefaultOwner();
const spaceshipOwner2 = getDefaultOwner();
