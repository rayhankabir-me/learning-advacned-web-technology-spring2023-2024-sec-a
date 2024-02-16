class Students{
    id:number;
    name:string;
    courses:string[];

    constructor(id:number, name:string){
        this.id=id;
        this.name=name;
        this.courses=[];
    }

    enrollCourse(cname:string):void{
        this.courses.push(cname);
    }
    showCourses(): void {
        console.log(`Enrolled Courses for ${this.name}: ${this.courses}`);
    }
    toString(): string {
        return `Student - ID: ${this.id}, Name: ${this.name}`;
    }

}

export default Students;