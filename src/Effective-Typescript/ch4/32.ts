interface Name {
  name: string;
}

interface PersonWithBirth extends Name {
  placeOfBirth: string;
  dateOfBirth: Date;
}

type Person1 = Name | PersonWithBirth;

function getPersonName(person: Person1): Person1 {
  if ('placeOfBirth' in person) {
    return person;
  }
  
  return person;
}
