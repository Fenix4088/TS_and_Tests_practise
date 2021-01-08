import {StudentType} from '../02-objects/02';
import { addSkill, doesStudentLiveIn, makeStudentActive } from './03';
let student: StudentType;

beforeEach(() => {
  student = {
    id: 1,
    'name': 'Yehor',
    age: 32,
    isActive: false,
    address: {
      street: 'Surg 2',
      city: {
        title: 'Kiev',
        country: 'Ukrain'
      }
    },
    technologies: [
      {
        id: 1,
        title: 'HTML'
      },
      {
        id: 2,
        title: 'CSS'
      }
    ]
  };
})

test("new skill should be added to student", () => {
  addSkill(student, "JS");

  expect(student.technologies.length).toBe(3);
  expect(student.technologies[2].title).toBe("JS");

})

test("student should be active", () => {
  expect(student.isActive).toBe(false);

  makeStudentActive(student);

  expect(student.isActive).toBe(true);


})

test("student lives in city?", () => {

  let result1 = doesStudentLiveIn(student, "Moscow");
  let result2 = doesStudentLiveIn(student, "Ukrain");

  expect(result1).toBe(false);
  expect(result2).toBe(true);

})