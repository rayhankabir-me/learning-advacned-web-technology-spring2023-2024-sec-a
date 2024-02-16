"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teachers = void 0;
var Teachers = /** @class */ (function () {
    function Teachers(id, name) {
        this.id = id;
        this.name = name;
        this.coursesTaught = [];
    }
    Teachers.prototype.addCourse = function (courseName) {
        this.coursesTaught.push(courseName);
    };
    Teachers.prototype.showCourses = function () {
        console.log("".concat(this.name, "'s taught courses: ").concat(this.coursesTaught));
    };
    Teachers.prototype.toString = function () {
        return "Teacher - ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return Teachers;
}());
exports.Teachers = Teachers;
