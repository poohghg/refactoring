function acquireData(input: string) {
  const lines = input.split('\n');
  let firstLine = true;
  const result = [];

  for (const line of lines) {
    if (firstLine) {
      firstLine = false;
      continue;
    }

    if (line.trim() === '') continue;

    const record = line.split(',');

    if (record[1].trim() === 'India') {
      result.push({ city: record[0].trim(), phone: record[2].trim() });
    }
  }
  return result;
}

interface City {
  city: string;
  phone: string;
}

function acquireData2(data: string) {
  const isEmptyTrimmed = (line: string) => line.trim() === '';

  const addIndiaCounty = (result: City[], line: string): City[] => {
    const record = line.split(',');
    const country = record[1].trim();

    if (country === 'India') {
      result.push({
        city: record[0].trim(),
        phone: record[2].trim(),
      });
    }
    
    return result;
  };

  return data
    .split('\n')
    .splice(1)
    .filter((line) => !isEmptyTrimmed(line))
    .reduce<City[]>((result, line) => addIndiaCounty(result, line), []);
}

const input = `office, country, telephone\n
Chicago, USA, +1 312 373 1000\n
Beijing, China, +86 4008 900 505\n
Bangalore, India, +91 80 4064 9570\n
Porto Alegre, Brazil, +55 51 3079 3550\n
Chennai, India, +91 44 660 44766`;

console.log(acquireData(input));
console.log(acquireData2(input));
