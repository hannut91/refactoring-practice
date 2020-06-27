export default function isDeliveryFree(anOrder) {
  const { basePrice } = anOrder;
  return (basePrice > 1000);
}
