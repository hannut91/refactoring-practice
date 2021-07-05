import Course from './course';
import Person from './person';

test('Get all advanced courses', () => {
  const courses = [
    new Course('영어', false),
    new Course('전자기학', true),
    new Course('컴퓨터공학', true),
  ];
  const john = new Person('John');
  john.courses = courses;

  const advancedCourses = john.courses.filter((it) => it.isAdvanced);

  expect(advancedCourses).toHaveLength(2);
});
