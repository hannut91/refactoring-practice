const organization = {
  name: '애크미 구스베리',
  country: 'GB',
};

test('organization', () => {
  expect(organization.name).toBe('애크미 구스베리');
  expect(organization.country).toBe('GB');
});
