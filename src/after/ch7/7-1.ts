class Organization {
  constructor(country: string, name: string) {
    this._country = country;
    this._name = name;
  }

  private _country: string;

  get country() {
    return this._country;
  }

  set country(country: string) {
    this._country = country;
  }

  private _name: string;

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get rowData() {
    // 만약 데이터를 받아서 처리한다면 얕은복사 보단 cloneDeep을 사용하는 것이 좋다.
    return {
      country: this._country,
      name: this._name,
    };
  }
}

const organization = new Organization('GB', 'Acme Gooseberries');

organization.name = 'Dream Coding';

console.log(organization.name);

console.log(organization.country);
