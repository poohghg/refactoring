interface IItem {
  price: number;
}

class Order {
  private static readonly additionalDiscount = -0.03;

  constructor(
    private _quantity: number,
    private _item: IItem,
  ) {}

  get basePrice() {
    return this._quantity * this._item.price;
  }

  get discountFactor() {
    return this.basePrice > 1000 ? 0.98 + Order.additionalDiscount : 0.98;
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }
}
