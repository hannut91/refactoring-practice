import Range from './Range';

describe('Range', () => {
  it('returns range', () => {
    const range = new Range(5, 10);

    expect(range.min).toBe(5);
    expect(range.max).toBe(10);
  });

  describe('contains', () => {
    context('with contains value', () => {
      it('returns true', () => {
        const range = new Range(5, 10);

        expect(range.contains(7)).toBe(true);
      });
    });

    context('with not contains value', () => {
      it('returns true', () => {
        const range = new Range(5, 10);

        expect(range.contains(30)).toBe(false);
      });
    });
  });
});
