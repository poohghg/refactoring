export default {};

interface IEmployee {
  isSeparated: boolean;
  isRetired: boolean;
}

export function payAmount(employee: IEmployee) {
  if (employee.isSeparated) {
    return { amount: 0, reasonCode: 'SEP' };
  }

  if (employee.isRetired) {
    return { amount: 0, reasonCode: 'RET' };
  }

  return { amount: 999, reasonCode: 'UNICORN' };
}
