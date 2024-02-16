class Teachers {
    id: number;
    name: string;
    coursesTaught: string[];
  
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
      this.coursesTaught = [];
    }
  
    addCourse(courseName: string): void {
      this.coursesTaught.push(courseName);
    }
  
    showCourses(): void {
      console.log(`${this.name}'s taught courses: ${this.coursesTaught}`);
    }
  
    toString(): string {
      return `Teacher - ID: ${this.id}, Name: ${this.name}`;
    }
  }


export {Teachers};