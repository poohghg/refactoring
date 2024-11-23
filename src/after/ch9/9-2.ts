export {};

interface IOrganizationData {
  name: string;
  country: string;
}

class Organization {
  constructor(data: IOrganizationData) {
    this._name = data.name;
    this._country = data.country;
  }

  private _name: string;

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  private _country: string;

  get country() {
    return this._country;
  }

  set country(value) {
    this._country = value;
  }
}

const organization = new Organization({
  name: '드림코딩',
  country: '대한민국',
});
