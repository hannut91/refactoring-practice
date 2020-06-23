import Clock from './clock';

const printBanner = () => {
  console.log('** 고객 채무 **');
};

const calculateOutstanding = (orders) => orders.reduce((acc, { amount }) => acc + amount, 0);

const calculateDueDate = (day) => new Date(day.getFullYear(), day.getMonth(), day.getDate() + 30);

const printDetail = (customer, outstanding, dueDate) => {
  console.log(`고객명: ${customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${dueDate.toLocaleDateString('en-US')}`);
};

export default function printOwing(invoice) {
  printBanner();

  const outstanding = calculateOutstanding(invoice.orders);

  const dueDate = calculateDueDate(Clock.today);

  printDetail(invoice.customer, outstanding, dueDate);
}
