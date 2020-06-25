const MINIMUM_FREE_DELIVERY_PRICE = 1000;

export default function isDeliveryFree({basePrice}) {
  return basePrice > MINIMUM_FREE_DELIVERY_PRICE;
}
