export default function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => r.temp < range.min || r.temp > range.max);
}
