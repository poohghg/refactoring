type Department1 = 'HR' | 'Engineering' | 'Finance';

// key of T의 부분집합으로 K를 사용하면, K가 T의 key 중 하나임을 보장한다.
const pluck = <T, K extends keyof T>(recode: T[], key: K) => {
  return recode.map((r) => r[key]);
};

const temp: {
  name: string;
  department: Department1;
}[] = [
  { name: 'Alice', department: 'Engineering' },
  { name: 'Bob', department: 'HR' },
  { name: 'Eve', department: 'Engineering' },
];

const result1 = pluck(temp, 'name');
const result2 = pluck(temp, 'department');

interface CaseCell {
  0: number;
  1: string;
  2: Department1;
  length: 3;
}

const caseCell: CaseCell = [1, 'hello', 'HR'];
