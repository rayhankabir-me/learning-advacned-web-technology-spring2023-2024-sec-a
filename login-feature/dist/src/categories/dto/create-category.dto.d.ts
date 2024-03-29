import { CreateCourseDto } from 'src/courses/dto/create-course.dto';
export declare class CreateCategoryDto {
    id: number;
    name: string;
    description: string;
    image_url: string;
    courses: CreateCourseDto[];
}
