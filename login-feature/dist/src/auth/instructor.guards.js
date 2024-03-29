"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructorGuard = void 0;
const common_1 = require("@nestjs/common");
let InstructorGuard = class InstructorGuard {
    canActivate(context) {
        const user = context.switchToHttp().getRequest().user;
        if (!user || user.role !== 'instructor') {
            throw new common_1.UnauthorizedException('Sorry, only instructors can do this!');
        }
        return true;
    }
};
exports.InstructorGuard = InstructorGuard;
exports.InstructorGuard = InstructorGuard = __decorate([
    (0, common_1.Injectable)()
], InstructorGuard);
//# sourceMappingURL=instructor.guards.js.map