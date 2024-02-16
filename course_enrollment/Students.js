"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Students = /** @class */ (function () {
    function Students(id, name) {
        this.id = id;
        this.name = name;
        this.courses = [];
    }
    Students.prototype.enrollCourse = function (cname) {
        this.courses.push(cname);
    };
    Students.prototype.showCourses = function () {
        console.log("Enrolled Courses for ".concat(this.name, ": ").concat(this.courses));
    };
    Students.prototype.toString = function () {
        return "Student - ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return Students;
}());
exports.default = Students;
