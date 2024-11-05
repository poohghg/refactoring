// 해당 함수는 두가지 일을 처리하고 있으니 해당 기능을 분기 처리한다.
// export function reportYoungestAgeAndTotalSalary(people) {
//   let youngest = people[0] ? people[0].age : Infinity;
//   let totalSalary = 0;
//   for (const p of people) {
//     if (p.age < youngest) youngest = p.age;
//     totalSalary += p.salary;
//   }
//
//   return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
// }

interface People {
  age: number;
  salary: number;
}

export function reportYoungestAgeAndTotalSalary(people: People[]) {
  const youngestAge = (people: People[]) => {
    if (!people.length) return Infinity;
    return Math.min(...people.map((p) => p.age));
  };

  const totalSalary = (people: People[]) =>
    people.reduce((total, current) => total + current.salary, 0);

  return `youngestAge: ${youngestAge(people)}, totalSalary: ${totalSalary(people)}`;
}
