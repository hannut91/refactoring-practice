import readingOutsideRange from './app';

describe('readingOutsideRange', () => {
  const station = {
    name: 'ZB1',
    readings: [
      { temp: 47, time: '2016-11-10 09:10' },
      { temp: 53, time: '2016-11-10 09:20' },
      { temp: 58, time: '2016-11-10 09:30' },
      { temp: 53, time: '2016-11-10 09:40' },
      { temp: 51, time: '2016-11-10 09:50' },
    ],
  };
  const min = 52;
  const max = 57;

  it('returns ranges in normal', () => {
    const readings = readingOutsideRange(station, min, max, null);

    expect(readings).toHaveLength(3);
  });
});
