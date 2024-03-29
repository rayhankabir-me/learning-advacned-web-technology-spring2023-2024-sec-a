import { Category } from 'src/entities/category.entity';
import { Course } from 'src/entities/course.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CoursesService {
    private readonly courseRepository;
    private readonly categoryRepository;
    constructor(courseRepository: Repository<Course>, categoryRepository: Repository<Category>);
    create(createCourseDto: CreateCourseDto, user: User): Promise<Course>;
    findAll(): Promise<Course[]>;
    findOne(id: number): Promise<Course>;
    searchCourses(terms: any): Promise<Course[]>;
    update(id: number, updateCourseDto: UpdateCourseDto, user: User): Promise<Course>;
    remove(id: number): Promise<void>;
}
