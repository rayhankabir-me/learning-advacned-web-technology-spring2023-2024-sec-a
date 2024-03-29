"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../entities/category.entity");
const course_entity_1 = require("../entities/course.entity");
const typeorm_2 = require("typeorm");
let CoursesService = class CoursesService {
    constructor(courseRepository, categoryRepository) {
        this.courseRepository = courseRepository;
        this.categoryRepository = categoryRepository;
    }
    async create(createCourseDto, user) {
        const { created_at, updated_at, categoryId, ...courseData } = createCourseDto;
        const course = this.courseRepository.create({
            ...courseData,
            created_at: new Date(),
            updated_at: new Date(),
            category: { id: categoryId },
            user,
        });
        return await this.courseRepository.save(course);
    }
    async findAll() {
        const courses = await this.courseRepository.find({
            relations: ['user', 'category'],
        });
        if (!courses) {
            throw new common_1.NotFoundException('Sorry, no courses found');
        }
        return courses;
    }
    async findOne(id) {
        const course = await this.courseRepository.findOne({
            where: { id },
            relations: ['user', 'category'],
        });
        if (!course) {
            throw new common_1.NotFoundException('Sorry, the course not found');
        }
        return course;
    }
    async searchCourses(terms) {
        const { categoryId, type, term } = terms;
        const result = await this.courseRepository
            .createQueryBuilder('course')
            .leftJoinAndSelect('course.category', 'category')
            .leftJoinAndSelect('course.user', 'user');
        if (categoryId) {
            result.andWhere('category.id = :categoryId', { categoryId });
        }
        if (type === 'free') {
            result.andWhere('course.price = :price', { price: '0.00' });
        }
        else if (type === 'paid') {
            result.andWhere('course.price > :price', { price: '0.00' });
        }
        if (term) {
            result.andWhere('(course.title LIKE :term OR course.description LIKE :term)', {
                term: `%${term}%`,
            });
        }
        return result.getMany();
    }
    async update(id, updateCourseDto, user) {
        const course = await this.courseRepository.findOne({
            where: { id, user },
            relations: ['user', 'category'],
        });
        if (!course) {
            throw new common_1.NotFoundException('Sorry the course not found');
        }
        course.title = updateCourseDto.title;
        course.description = updateCourseDto.description;
        course.image = updateCourseDto.image;
        course.price = updateCourseDto.price;
        course.rating = updateCourseDto.rating;
        course.updated_at = new Date();
        course.category = updateCourseDto.categoryId;
        return await this.courseRepository.save(course);
    }
    async remove(id) {
        const courseToDelete = await this.courseRepository.findOneBy({
            id: id,
        });
        if (!courseToDelete) {
            throw new common_1.NotFoundException('Sorry, the course not found');
        }
        await this.courseRepository.remove(courseToDelete);
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CoursesService);
//# sourceMappingURL=courses.service.js.map