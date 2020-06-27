// 함수 이름 바꾸기
export function circum(radius) {
  return 2 * Math.PI * radius;
}

// 매개변수 추가하기
export class Book {
  constructor() {
    this.reservations = [];
  }

  addReservation(customer) {
    this.reservations.push(customer);
  }
}

// 매개변수를 속성으로 바꾸기
export function inNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}
