"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course = /** @class */ (function () {
    function Course(courseId, courseName, teacher) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.teacher = teacher;
        this.students = [];
    }
    Course.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Course.prototype.showStudents = function () {
        var studentNames = this.students.map(function (student) { return student.name; });
        console.log("Students enrolled in ".concat(this.courseName, ": ").concat(studentNames));
    };
    return Course;
}());
exports.default = Course;
