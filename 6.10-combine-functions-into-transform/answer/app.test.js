import _ from 'lodash';

const taxThreshold = () => 500;

const baseRate = () => 1000;

const calculateBaseCharge = (aReading) => (
  baseRate(aReading.month, aReading.year) * aReading.quantity
);

const enrichReading = (reading) => {
  const result = _.cloneDeep(reading);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));
  return result;
};

const acquireReading = () => ({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
});

describe('TeaCharge', () => {
  describe('client 1', () => {
    it('returns calcualted base charge', () => {
      const rawReading = acquireReading();
      const aReading = enrichReading(rawReading);
      const charge = aReading.baseCharge;

      expect(charge).toBe(10000);
    });
  });

  describe('client2', () => {
    it('returns calculated charge with tax', () => {
      const rawReading = acquireReading();
      const aReading = enrichReading(rawReading);
      const { taxableCharge } = aReading;

      expect(taxableCharge).toBe(9500);
    });
  });

  describe('client3', () => {
    it('returns calculated charge with tax', () => {
      const rawReading = acquireReading();
      const aReading = enrichReading(rawReading);
      const charge = aReading.baseCharge;

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
