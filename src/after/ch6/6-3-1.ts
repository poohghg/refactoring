import { printResult } from '../../common';

interface IOrder {
  quantity: number;
  itemPrice: number;
}

export function price({ itemPrice, quantity }: IOrder) {
  // 가격(price) = 기본가격 - 수량할인 + 배송비

  // 긴 표현식의 경우 각각의 부분에 의미있는 변수를 사용하는게 좋다
  const basePrice = quantity * itemPrice;
  const quantityDiscount = Math.max(0, quantity - 500) * itemPrice * 0.05;
  const shipping = Math.min(basePrice * 0.1, 100);

  return basePrice - quantityDiscount + shipping;
}

printResult(price({ itemPrice: 100, quantity: 600 }));