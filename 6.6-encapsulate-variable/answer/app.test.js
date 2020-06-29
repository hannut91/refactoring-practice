import { getDefaultOwner, setDefaultOwner } from './app';

describe('Get defaultOwner', () => {
  it('has name', () => {
    const defaultOwner = getDefaultOwner();

    expect(defaultOwner).not.toBeUndefined();
    expect(defaultOwner.firstName).not.toBeUndefined();
    expect(defaultOwner.firstName).not.toBeUndefined();
  });

  context('when change field', () => {
    it('does not change field', () => {
      const originFirstName = getDefaultOwner().firstName;

      getDefaultOwner().firstName = '켄트';

      const defaultOwner = getDefaultOwner();

      expect(defaultOwner).not.toBeUndefined();
      expect(defaultOwner.firstName).toBe(originFirstName);
    });
  });
});

describe('Set defaultOwner', () => {
  it('sets defaultOwner', () => {
    setDefaultOwner({
      firstName: '켄트',
      lastName: '백',
    });

    const defaultOwner = getDefaultOwner();

    expect(defaultOwner.firstName).toBe('켄트');
    expect(defaultOwner.lastName).toBe('백');
  });
});
