// export function inNewEngland(aCustomer) {
//   return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
// }

// 함수의 인수값을 함수 내부에 사용되는 값만 사용한다면 객체 전체를 전달하지 않고 필요한 값만 넘겨서 확인가능하다.
// 이렇게 하면 함수를 호출할 때마다 객체를 넘길 필요가 없고, 해당 함수의 재상용성이 증대된다.

const NEW_ENGLAND_STATES = ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'];

export function inNewEngland(state: string) {
  return NEW_ENGLAND_STATES.includes(state);
}
