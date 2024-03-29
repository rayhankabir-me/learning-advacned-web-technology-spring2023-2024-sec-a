/// <reference types="cookie-parser" />
import { Request, Response } from 'express';
import { OrderItemDto } from './dto/order-item.dto';
import { OrderItemService } from './order-item.service';
export declare class OrderItemController {
    private readonly ordersService;
    constructor(ordersService: OrderItemService);
    create(orderItemDto: OrderItemDto, response: Response): Promise<string>;
    getCookie(request: Request): Promise<Record<string, any>>;
}
