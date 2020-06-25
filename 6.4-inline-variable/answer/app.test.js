import isDeliveryFree from './app';

describe('isDeliveryFree', () => {
  context('when basePrice greater than minimum free delivery', () => {
    it('returns true', () => {
      const order = {
        basePrice: 2000,
      };
      expect(isDeliveryFree(order)).toBe(true);
    });
  });

  context('when basePrice less than minimum free delivery', () => {
    it('returns false', () => {
      const order = {
        basePrice: 500,
      };
      expect(isDeliveryFree(order)).toBe(false);
    });
  });
});
