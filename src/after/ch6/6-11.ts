interface IProduct {
  basePrice: number;
  discountRate: number;
  discountThreshold: number;
}

interface IShippingMethod {
  discountThreshold: number;
  feePerCase: number;
  discountedFee: number;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

class PriceOrder {
  private readonly _product: IProduct;
  private readonly _quantity: number;
  private readonly _shippingMethod: IShippingMethod;

  constructor(
    data: IProduct,
    quantity: number,
    shippingMethod: IShippingMethod,
  ) {
    this._product = data;
    this._quantity = quantity;
    this._shippingMethod = shippingMethod;
  }

  get price() {
    return this.basePrice - this.discount + this.shippingCost;
  }

  private get discount() {
    const numberOfDiscount = Math.max(
      this._quantity - this._product.discountThreshold,
      0,
    );

    return (
      numberOfDiscount * this._product.basePrice * this._product.discountRate
    );
  }

  // 배송비를 관리 해주는 클래스가 더 좋지 않을까?
  private get shippingPerCase() {
    return this.basePrice > this._shippingMethod.discountThreshold
      ? this._shippingMethod.discountedFee
      : this._shippingMethod.feePerCase;
  }

  private get shippingCost() {
    return this._quantity * this.shippingPerCase;
  }

  private get basePrice() {
    return this._product.basePrice * this._quantity;
  }
}

const price = new PriceOrder(product, 5, shippingMethod).price;

console.log(price);
