import { Course } from 'src/entities/course.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CoursesController {
    private readonly courseRepository;
    private readonly coursesService;
    constructor(courseRepository: Repository<Course>, coursesService: CoursesService);
    findAll(): Promise<Course[]>;
    searchCourse(terms: any): Promise<Course[]>;
    create(createCourseDto: CreateCourseDto, user: User): Promise<Course>;
    findOne(id: number): Promise<Course>;
    update(id: number, updateCourseDto: UpdateCourseDto, user: User): Promise<Course>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
