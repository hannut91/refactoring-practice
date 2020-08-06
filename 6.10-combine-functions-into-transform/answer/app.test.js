import _ from 'lodash';

const taxThreshold = () => 500;

const baseRate = () => 1000;

const calculateBaseCharge = (aReading) => (
  baseRate(aReading.month, aReading.year) * aReading.quantity
);

const enrichReading = (reading) => _.cloneDeep(reading);

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
      const aReading = acquireReading();
      const charge = calculateBaseCharge(aReading);

      expect(charge).toBe(10000);
    });
  });
});

describe('enrichReading', () => {
  it('returns deep copied reading', () => {
    const originReading = {};
    const reading = enrichReading(originReading);

    reading.text = 'some text';

    expect(originReading).toEqual({});
  });
});