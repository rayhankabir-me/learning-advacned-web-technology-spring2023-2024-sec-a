import Students from './Students';
import {Teachers} from './Teachers';
import Course from './Course';

const teacher1 = new Teachers(1, 'MD Alamin');
const teacher2 = new Teachers(2, 'Most Anika');
const student1 = new Students(1, 'Rayhan');
const student2 = new Students(2, 'Abdullah');

const course1 = new Course(1, 'WebTech', teacher1);
course1.addStudent(student1);
course1.addStudent(student2);

const course2 = new Course(2, 'OS', teacher2);
course2.addStudent(student1);


teacher1.addCourse(course1.courseName);
teacher2.addCourse(course2.courseName);

student1.enrollCourse(course1.courseName);
student1.enrollCourse(course2.courseName);
student2.enrollCourse(course2.courseName);

console.log(student1.toString());
student1.showCourses();

console.log(teacher1.toString());
teacher1.showCourses();

console.log(teacher2.toString());
teacher2.showCourses();

course1.showStudents();
course2.showStudents();