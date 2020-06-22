import printOwing from './app';

global.console = {
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn(),
};

test('고객 채무 출력', () => {
  const invoice = {
    customer: 'yunseok',
    orders: [{
      amount: 10000,
    }, {
      amount: 20000,
    }, {
      amount: 30000,
    }],
  };

  printOwing(invoice);

  expect(global.console.log)
    .toHaveBeenNthCalledWith(1, '** 고객 채무 **');
  expect(global.console.log)
    .toHaveBeenNthCalledWith(2, `고객명: ${invoice.customer}`);
  expect(global.console.log)
    .toHaveBeenNthCalledWith(3, '채무액: 60000');
  expect(global.console.log)
    .toHaveBeenNthCalledWith(4, expect.stringMatching(/마감일: \d+\/\d+\/\d+/));
});
