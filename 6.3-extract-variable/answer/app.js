const SALE_PERCENT = 0.05;

const MIN_DISCOUNT_QUANTITY = 500;

const MIN_DELIVERY_PRICE = 100;

const DELIVERY_PERCENT = 0.1;

export default function price({ quantity, itemPrice }) {
  const basePrice = quantity * itemPrice;
  const quantityDiscount = Math.max(0, quantity - MIN_DISCOUNT_QUANTITY) * itemPrice * SALE_PERCENT;
  const deliveryPrice = Math.min(basePrice * DELIVERY_PERCENT, MIN_DELIVERY_PRICE);
  return basePrice - quantityDiscount + deliveryPrice;
}
