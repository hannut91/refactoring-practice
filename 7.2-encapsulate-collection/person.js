export default class Person {
  #name

  #courses = [];

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return this.#courses;
  }

  set courses(aList) {
    this.#courses = aList;
  }
}
