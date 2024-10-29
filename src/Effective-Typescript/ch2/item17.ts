function parseTaggedText(lines: string[]): string[][] {
  const para: string[][] = [];
  const currPara: string[] = [];

  const addPara = () => {
    if (currPara.length) {
      para.push(currPara); // 오류발생지점
      currPara.length = 0; // 오류발생지점
    }
  };

  for (const line of lines) {
    if (!line) {
      addPara();
    } else {
      currPara.push(line);
    }
  }
  addPara();
  return para;
}

// output : [[],[],[]]

function covertParseTaggedText(lines: string[]) {
  const para: (readonly string[])[] = [];
  let currPara: readonly string[] = [];

  const addPara = () => {
    if (currPara.length) {
      para.concat([...currPara]);
      currPara = [];
    }
  };

  for (const line of lines) {
    if (!line) {
      addPara();
    } else {
      currPara = currPara.concat([line]);
    }
  }
  addPara();
  return [...para];
}
