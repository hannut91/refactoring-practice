export default function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => !range.contains(r.temp));
}
