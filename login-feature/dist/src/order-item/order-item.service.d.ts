/// <reference types="cookie-parser" />
import { Request, Response } from 'express';
import { OrderItemDto } from './dto/order-item.dto';
export declare class OrderItemService {
    create(orderItemDto: OrderItemDto, response: Response): Promise<string>;
    getCookie(request: Request): Promise<Record<string, any>>;
}
