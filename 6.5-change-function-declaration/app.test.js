import { circum, Book, inNewEngland } from './app';

describe('circum', () => {
  it('returns calculated value', () => {
    const radius = 3;
    expect(circum(radius)).toBe(Math.PI * 2 * radius);
  });
});

describe('Book', () => {
  describe('addReservation', () => {
    it('appends customer', () => {
      const customer = {
        name: 'Yunseok',
      };
      const book = new Book();
      book.addReservation(customer);

      expect(book.reservations[0]).toEqual(customer);
    });
  });
});

describe('inNewEngland', () => {
  context('with customer live in England', () => {
    it('returns true', () => {
      const customer = {
        address: {
          state: 'MA',
        },
      };

      expect(inNewEngland(customer)).toBe(true);
    });
  });

  context('with customer not live in England', () => {
    it('returns false', () => {
      const customer = {
        address: {
          state: 'NOT_IN_ENGLAND',
        },
      };

      expect(inNewEngland(customer)).toBe(false);
    });
  });
});
