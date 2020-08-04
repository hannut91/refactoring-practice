const taxThreshold = () => 500;

const baseRate = () => 1000;

const calculateBaseCharge = (aReading) => (
  baseRate(aReading.month, aReading.year) * aReading.quantity
);

const acquireReading = () => ({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
});

class Reading {
  constructor({ customer, quantity, month, year }) {
    this._customer = customer;
    this._quantity = quantity;
    this._month = month;
    this._year = year;
  }

  get customer() { return this._customer }
  get quantity() { return this._quantity }
  get month() { return this._month }
  get year() { return this._year }

  get calculateBaseCharge() {
    return baseRate(this.month, this.year) * this.quantity
  }
}

describe('TeaCharge', () => {
  describe('client 1', () => {
    it('returns calcualted base charge', () => {
      const aReading = acquireReading();
      const charge = baseRate(aReading.month, aReading.year)
        * aReading.quantity;

      expect(charge).toBe(10000);
    });
  });

  describe('client2', () => {
    it('returns calculated charge with tax', () => {
      const aReading = acquireReading();
      const base = baseRate(aReading.month, aReading.year)
        * aReading.quantity;
      const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

      expect(taxableCharge).toBe(9500);
    });
  });

  describe('client3', () => {
    it('returns calculated charge with tax', () => {
      const rawReading = acquireReading();
      const aReading = new Reading(rawReading);
      const charge = aReading.calculateBaseCharge;

      expect(charge).toBe(10000);
    });
  });
});
