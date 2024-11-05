interface Photo {
  title: string;
  location: string;
  date: Date;
}

interface Person {
  name: string;
  photo: Photo;
}

// 유틸 함수로 분리
function renderParagraphWithInfo(title: string, description: string) {
  return `<p>${title}: ${description}</p>`;
}

export function photoDiv(photo: Photo) {
  return ['<div>', emitPhotoData(photo), '</div>'].join('\n');
}

function emitPhotoData(photo: Photo) {
  const result: string[] = [];
  result.push(renderParagraphWithInfo('title', photo.title));
  result.push(renderParagraphWithInfo('location', photo.location));
  result.push(renderParagraphWithInfo('date', photo.date.toDateString()));
  return result.join('\n');
}

function renderPhoto(photo: Photo) {
  return '';
}

export function renderPerson(person: Person) {
  const result: string[] = [];

  // 사람 처리 로직 분기
  result.push(`<p>${person.name}</p>`);

  // 사진 처리 로직 분기
  result.push(renderPhoto(person.photo));
  result.push(`<p>title: ${person.photo.title}</p>`);
  result.push(emitPhotoData(person.photo));

  return result.join('\n');
}
