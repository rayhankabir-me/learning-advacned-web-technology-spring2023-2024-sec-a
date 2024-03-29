import { User } from './user.entity';
export declare class Order {
    id: number;
    total_price: string;
    order_status: string;
    order_date: Date;
    updated_at: Date;
    user: User;
    order_by(): any;
}
