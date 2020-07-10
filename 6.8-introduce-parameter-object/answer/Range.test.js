import Range from './Range';

describe('Range', () => {
  it('returns range', () => {
    const range = new Range(5, 10);

    expect(range.min).toBe(5);
    expect(range.max).toBe(10);
  });
});