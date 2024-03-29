"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const categories_service_1 = require("../categories/categories.service");
const category_entity_1 = require("../entities/category.entity");
const course_entity_1 = require("../entities/course.entity");
const user_entity_1 = require("../entities/user.entity");
const courses_controller_1 = require("./courses.controller");
const courses_service_1 = require("./courses.service");
let CoursesModule = class CoursesModule {
};
exports.CoursesModule = CoursesModule;
exports.CoursesModule = CoursesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([course_entity_1.Course, category_entity_1.Category, user_entity_1.User]), auth_module_1.AuthModule],
        controllers: [courses_controller_1.CoursesController],
        providers: [courses_service_1.CoursesService, categories_service_1.CategoriesService, jwt_1.JwtService],
    })
], CoursesModule);
//# sourceMappingURL=courses.module.js.map