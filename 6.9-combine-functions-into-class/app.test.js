const taxThreshold = (year) => 500;

const baseRate = (month, year) => 1000;

const baseCharge = (aReading) => baseRate(aReading.month, aReading.year) * aReading.quantity;

const acquireReading = () => ({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
});

describe('TeaCharge', () => {
  describe('client 1', () => {
    it('returns calcualted base charge', () => {
      const aReading = acquireReading();
      const charge = baseRate(aReading.month, aReading.year)
        * aReading.quantity;

      expect(charge).toBe(10000);
    });
  });

  describe('client 2', () => {
    it('returns calculated charge with tax', () => {
      const aReading = acquireReading();
      const base = baseRate(aReading.month, aReading.year)
        * aReading.quantity;
      const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

      expect(taxableCharge).toBe(9500);
    });
  });

  describe('client 3', () => {
    it('returns calculated charge with tax', () => {
      const aReading = acquireReading();
      const charge = calculateBaseCharge(aReading);

      function calculateBaseCharge(aReading) {
        return baseRate(aReading.month, aReading.year) * aReading.quantity;
      }

      expect(charge).toBe(10000);
    });
  });
});
