import {Teachers} from './Teachers';
import Students from './Students';

class Course {
  courseId: number;
  courseName: string;
  teacher: Teachers;
  students: Students[];

  constructor(courseId: number, courseName: string, teacher: Teachers) {
    this.courseId = courseId;
    this.courseName = courseName;
    this.teacher = teacher;
    this.students = [];
  }

  addStudent(student: Students): void {
    this.students.push(student);
  }

  showStudents(): void {
    const studentNames = this.students.map(student => student.name);
    console.log(`Students enrolled in ${this.courseName}: ${studentNames}`);
  }
}

export default Course;