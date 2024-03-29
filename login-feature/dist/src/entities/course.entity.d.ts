import { Category } from './category.entity';
import { User } from './user.entity';
export declare class Course {
    id: number;
    title: string;
    description: string;
    image: string;
    price: string;
    rating: number;
    created_at: Date;
    updated_at: Date;
    category: Category;
    user: User;
    created_by(): any;
}
