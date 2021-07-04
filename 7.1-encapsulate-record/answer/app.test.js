class Organization {
  #name;

  #country;

  constructor({ name, country }) {
    this.#name = name;
    this.#country = country;
  }

  get name() {
    return this.#name;
  }

  get country() {
    return this.#country;
  }

  set name(name) {
    this.#name = name;
  }

  set country(country) {
    this.#country = country;
  }
}

test('organization', () => {
  const organization = new Organization({
    name: '애크미 구스베리',
    country: 'GB',
  });

  expect(organization.name).toBe('애크미 구스베리');
  expect(organization.country).toBe('GB');
});
