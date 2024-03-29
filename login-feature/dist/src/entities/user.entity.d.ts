import { Course } from './course.entity';
import { Order } from './order.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    role: string;
    HashPassword(): Promise<void>;
    courses: Course[];
    orders: Order[];
}
