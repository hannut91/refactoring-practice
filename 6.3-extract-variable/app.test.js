import price from './app';

describe('price', () => {
  it('returns price', () => {
    const order = {
      quantity: 1000,
      itemPrice: 2000,
    };

    expect(price(order)).toBe(1950100);
  });
});
