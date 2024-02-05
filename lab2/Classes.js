class Student{
    constructor(name, cgpa){
        this.name = name;
        this.cgpa = cgpa;
    }

    display(){
        console.log(`student name is: ${this.name} and cpga is: ${this.cgpa}`);
    }
}

const studentOne = new Student('Rayhan Kabir',3.5);

studentOne.display();