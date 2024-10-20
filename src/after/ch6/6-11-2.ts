import fs from 'fs';

run(process.argv);

/**
 * 1. run 함수를 분리하여 노드 process의 디펜던시를 제거한다.
 * 2. parseCommand 함수를 분리하여 명령행 인자를 처리하는 코드를 분리한다. (데이터 처리)
 * 3. 데이터를 받아와 필요한 기능을 수행하는 함수로 분리한다
 */

function run(args: string[]) {
  const command = parseCommand(args);
  countOrders(command);
}

function parseCommand(args: string[]) {
  if (args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }

  const fileName = `./${args[2]}.json`;

  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  const hasReadOnly = args.includes('-r');

  return {
    fileName,
    hasReadOnly,
  };
}

function countOrders(command: { fileName: string; hasReadOnly: boolean }) {
  const rawData = fs.readFileSync(command.fileName);
  const orders = JSON.parse(rawData.toString());
  const filtered = command.hasReadOnly
    ? orders.filter((order: { status: string }) => order.status === 'ready')
    : orders;
  
  console.log(filtered.length);
}