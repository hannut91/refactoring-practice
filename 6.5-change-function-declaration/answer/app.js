// 함수 이름 바꾸기
export function circumference(radius) {
  return Math.PI * 2 * radius;
}

// 매개변수 추가하기
export class Book {
  constructor() {
    this.reservations = [];
  }

  addReservation(customer, isPriority) {
    if (isPriority) {
      this.reservations.push(customer);
    }
  }
}

// 매개변수를 속성으로 바꾸기
export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
