const acquireReading = () => ({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
});

class Reading {
  constructor({
    customer, quantity, month, year,
  }) {
    this.customer = customer;
    this.quantity = quantity;
    this.month = month;
    this.year = year;
  }

  get customer() { return this.customer; }

  get quantity() { return this.quantity; }

  get month() { return this.month; }

  get year() { return this.year; }

  get baseRate() {
    return 1000;
  }

  get baseCharge() {
    return this.baseRate * this.quantity;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - this.taxThreshold);
  }

  get taxThreshold() {
    return 500;
  }
}

describe('TeaCharge', () => {
  describe('client 1', () => {
    it('returns calcualted base charge', () => {
      const rawReading = acquireReading();
      const aReading = new Reading(rawReading);
      const charge = aReading.baseCharge;

      expect(charge).toBe(10000);
    });
  });

  describe('client2', () => {
    it('returns calculated charge with tax', () => {
      const rawReading = acquireReading();
      const aReading = new Reading(rawReading);
      const { taxableCharge } = aReading;

      expect(taxableCharge).toBe(9500);
    });
  });

  describe('client3', () => {
    it('returns calculated charge with tax', () => {
      const rawReading = acquireReading();
      const aReading = new Reading(rawReading);
      const charge = aReading.baseCharge;

      expect(charge).toBe(10000);
    });
  });
});
