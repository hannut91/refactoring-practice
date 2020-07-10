export default function readingsOutsideRange(station, min, max, range) {
  return station.readings.filter((r) => r.temp < min || r.temp > range.max);
}
