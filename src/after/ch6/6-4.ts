interface IOrder {
  basePrice: number;
}

export function isDeliveryFree({ basePrice }: IOrder) {
  return basePrice > 1000;
}
