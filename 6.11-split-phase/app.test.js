function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0)
    * product.basePrice
    * product.discountRate;
  const shippingPerCase = basePrice > shippingMethod.discountThreshold
    ? shippingMethod.discountedFee
    : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;

  return price;
}

describe('priceOrder', () => {
  const product = {
    basePrice: 5000,
    discountRate: 0.1,
    discountThreshold: 0,
  };

  const shippingMethod = {
    discountThreshold: 20000,
    discountedFee: 500,
    feePerCase: 1000,
  };

  it('returns price', () => {
    expect(priceOrder(product, 1, shippingMethod)).toBe(5500);
    expect(priceOrder(product, 10, shippingMethod)).toBe(50000);
  });
});
