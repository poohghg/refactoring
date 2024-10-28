// export class Person {
//   #name;
//   #courses;
//   constructor(name) {
//     this.#name = name;
//     this.#courses = [];
//   }
//
//   get name() {
//     return this.#name;
//   }
//
//   get courses() {
//     return this.#courses;
//   }
//
//   set courses(courses) {
//     this.#courses = courses;
//   }
// }
//
// export class Course {
//   #name;
//   #isAdvanced;
//   constructor(name, isAdvanced) {
//     this.#name = name;
//     this.#isAdvanced = isAdvanced;
//   }
//
//   get name() {
//     return this.#name;
//   }
//
//   get isAdvanced() {
//     return this.#isAdvanced;
//   }
// }
//
// const ellie = new Person('엘리');

// 기조은 코드의 경우 코스에 직접 접근하여 클래스 내 데이터를 변경할 수 있었다.
// 이는 캡슐화를 위반하는 행위이다.

// ellie.courses.push(new Course('리팩토링', true));
// console.log(ellie.courses.length);

class Course {
  private readonly _name: string;
  private readonly _isAdvanced: boolean;

  constructor(name: string, isAdvanced: boolean) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }

  get name() {
    return this._name;
  }

  get isAdvanced() {
    return this._isAdvanced;
  }
}

class Person {
  constructor(name: string) {
    this._name = name;
  }

  private _courses: Course[] = [];

  get courses() {
    return this._courses.slice();
  }

  private _name: string;

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get coursesNames() {
    return this._courses.map((course) => course.name);
  }

  public addCourse(course: Course) {
    this._courses.push(course);
  }

  public removeCourse(courseName: Course['name']) {
    const index = this._courses.findIndex(
      (course) => course.name === courseName,
    );

    if (index === -1) {
      console.log('해당 코스가 존재하지 않습니다.');
      console.log('현재 코스 목록: ', this.coursesNames);
      return;
    }

    return this._courses.splice(index, 1);
  }
}

const khg = new Person('khg');

khg.addCourse(new Course('리팩토링', true));
khg.addCourse(new Course('자바스크립트', true));
khg.removeCourse('리팩토링11');

console.log(khg.courses);
