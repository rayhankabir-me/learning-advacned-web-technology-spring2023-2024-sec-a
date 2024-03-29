import { Course } from './course.entity';
export declare class Category {
    id: number;
    name: string;
    description: string;
    image_url: string;
    courses: Course[];
}
