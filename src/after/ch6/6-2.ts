import { printResult } from '../../common';

interface IDriver {
  numberOfLateDeliveries: number;
}

// 예제 1
export function rating({ numberOfLateDeliveries }: IDriver) {
  return numberOfLateDeliveries > 5 ? 2 : 1;
  // return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

// 해당 함수가 재사용성이 떨어지고, rating 함수 내부에서만 사용되므로 rating 함수 내부로 이동시킨다.
// function moreThanFiveLateDeliveries(dvr) {
//   return dvr.numberOfLateDeliveries > 5;
// }

rating({ numberOfLateDeliveries: 10 });

interface ICustomer {
  name: string;
  location: string;
}

// 예제 2
function reportLines(customer: ICustomer) {
  return Object.entries(customer);
}

printResult(
  reportLines({
    name: 'khg',
    location: '서울',
  }),
);

// 해당 함수도 너무 잘게 나눠져있어 인라인 처리한다.
// function gatherCustomerData(out, customer) {
//   out.push(['name', customer.name]);
//   out.push(['location', customer.location]);
// }