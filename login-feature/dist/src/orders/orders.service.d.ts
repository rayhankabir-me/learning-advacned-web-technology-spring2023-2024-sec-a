import { Order } from 'src/entities/order.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersService {
    private readonly orderRepository;
    private readonly categoryRepository;
    constructor(orderRepository: Repository<Order>, categoryRepository: Repository<User>);
    create(createOrderDto: CreateOrderDto, user: User): Promise<Order>;
    findAll(): Promise<Order[]>;
    myOrders(user: any): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    myOrder(id: number, user: any): Promise<Order>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order>;
    remove(id: number): Promise<string>;
}
