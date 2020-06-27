import { circumference, Book, inNewEngland } from './app';

describe('circum', () => {
  it('returns calculated value', () => {
    const radius = 3;
    expect(circumference(radius)).toBe(Math.PI * 2 * radius);
  });
});

describe('Book', () => {
  describe('addReservation', () => {
    it('appends customer', () => {
      const customer = {
        name: 'Yunseok',
      };
      const book = new Book();
      book.addReservation(customer, true);

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

      expect(inNewEngland(customer.address.state)).toBe(true);
    });
  });

  context('with customer not live in England', () => {
    it('returns false', () => {
      const customer = {
        address: {
          state: 'NOT_IN_ENGLAND',
        },
      };

      expect(inNewEngland(customer.address.state)).toBe(false);
    });
  });
});
