import rating from './app';

describe('rating', () => {
  context('when numberOfLateDeliveries more than 5', () => {
    it('returns 2', () => {
      const driver = {
        numberOfLateDeliveries: 10,
      };

      expect(rating(driver)).toBe(2);
    });
  });

  context('when numberOfLateDeliveries lest than equal 5', () => {
    it('returns 1', () => {
      const driver = {
        numberOfLateDeliveries: 5,
      };

      expect(rating(driver)).toBe(1);
    });
  });
});
