const height = 100;
const weight = 100;

const a = height * weight;

test('area', () => {
  expect(a).toBe(10000);
});
