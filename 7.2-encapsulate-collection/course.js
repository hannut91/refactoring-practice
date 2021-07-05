export default class Course {
  #name

  #isAdvanced

  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}
