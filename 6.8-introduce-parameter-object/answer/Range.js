export default class Range {
  #min;
  #max;
  
  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }

  get min() {
    return this.#min;
  }

  get max() {
    return this.#max;
  }

  contains(value) {
    return this.#min <= value && value <= this.#max;
  }
}
