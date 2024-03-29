import { User } from 'src/entities/user.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(): Promise<import("src/entities/order.entity").Order[]>;
    myOrders(user: User): Promise<import("src/entities/order.entity").Order[]>;
    create(createOrderDto: CreateOrderDto, user: User): Promise<import("src/entities/order.entity").Order>;
    findOne(id: string): Promise<import("src/entities/order.entity").Order>;
    myOrder(id: string, user: User): Promise<import("src/entities/order.entity").Order>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<import("src/entities/order.entity").Order>;
    remove(id: string): Promise<string>;
}
