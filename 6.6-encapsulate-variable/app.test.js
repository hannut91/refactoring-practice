import defaultOwner from './app';

describe('Get defaultOwner', () => {
  it('has name', () => {
    expect(defaultOwner).not.toBeUndefined();
    expect(defaultOwner.firstName).not.toBeUndefined();
    expect(defaultOwner.firstName).not.toBeUndefined();
  });

  context.skip('when change field', () => {
    it('does not change field', () => {
      const originFirstName = defaultOwner.firstName;
      defaultOwner.firstName = '켄트';

      expect(defaultOwner).not.toBeUndefined();
      expect(defaultOwner.firstName).toBe(originFirstName);
    });
  });
});

describe.skip('Set defaultOwner', () => {
  it('sets defaultOwner', () => {
    defaultOwner = {
      firstName: '켄트',
      lastName: '백',
    };

    expect(defaultOwner.firstName).toBe('켄트');
    expect(defaultOwner.lastName).toBe('백');
  });
});
