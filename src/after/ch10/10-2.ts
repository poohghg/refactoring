interface IEmployee {
  seniority: number;
  monthsDisabled: number;
  isPartTime: boolean;
}

function disabilityAmount(employee: IEmployee) {
  return isNotEligibleForDisability(employee) ? 0 : 1;
}

const isNotEligibleForDisability = (employee: IEmployee) => {
  return (
    employee.seniority < 2 ||
    employee.monthsDisabled > 12 ||
    employee.isPartTime
  );
};
