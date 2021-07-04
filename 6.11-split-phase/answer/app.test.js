function calculateTotalPrice(product, quantity) {
  return product.basePrice * quantity;
}

function calculateDiscountPrice(product, quantity) {
  return Math.max(quantity - product.discountThreshold, 0)
  * product.basePrice
  * product.discountRate;
}

function calculateShippingCost(totalPrice, quantity, shippingMethod) {
  const { discountThreshold, discountedFee, feePerCase } = shippingMethod;

  const shippingPerCase = totalPrice > discountThreshold
    ? discountedFee
    : feePerCase;

  return quantity * shippingPerCase;
}

function priceOrder(product, quantity, shippingMethod) {
  const totalPrice = calculateTotalPrice(product, quantity);
  const discount = calculateDiscountPrice(product, quantity);
  const shippingCost = calculateShippingCost(
    totalPrice,
    quantity,
    shippingMethod,
  );
  return totalPrice - discount + shippingCost;
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
