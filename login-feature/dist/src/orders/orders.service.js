"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("../entities/order.entity");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("typeorm");
let OrdersService = class OrdersService {
    constructor(orderRepository, categoryRepository) {
        this.orderRepository = orderRepository;
        this.categoryRepository = categoryRepository;
    }
    async create(createOrderDto, user) {
        const { order_date, updated_at, ...orderData } = createOrderDto;
        const order = this.orderRepository.create({
            ...orderData,
            order_date: new Date(),
            updated_at: new Date(),
            user,
        });
        return await this.orderRepository.save(order);
    }
    async findAll() {
        const orders = await this.orderRepository.find({
            relations: ['user'],
        });
        if (!orders) {
            throw new common_1.NotFoundException('Sorry, no oders found');
        }
        return orders;
    }
    async myOrders(user) {
        const orders = await this.orderRepository.find({
            where: { user },
            relations: ['user'],
        });
        if (!orders) {
            throw new common_1.NotFoundException('Sorry, no oder found');
        }
        return orders;
    }
    async findOne(id) {
        const order = await this.orderRepository.findOne({
            where: { id },
            relations: ['user'],
        });
        if (!order) {
            throw new common_1.NotFoundException('Sorry, the order was not found');
        }
        return order;
    }
    async myOrder(id, user) {
        const order = await this.orderRepository.findOne({
            where: { id, user },
            relations: ['user'],
        });
        if (!order) {
            throw new common_1.NotFoundException('Sorry, there is no such order');
        }
        return order;
    }
    async update(id, updateOrderDto) {
        const orderFound = await this.orderRepository.findOne({
            where: { id },
            relations: ['user'],
        });
        if (!orderFound) {
            throw new common_1.NotFoundException('Sorry, the order not found');
        }
        orderFound.order_status = updateOrderDto.order_status;
        orderFound.updated_at = new Date();
        return await this.orderRepository.save(orderFound);
    }
    async remove(id) {
        const orderToDelete = await this.orderRepository.findOneBy({
            id: id,
        });
        if (!orderToDelete) {
            throw new common_1.NotFoundException('Sorry, the order not found');
        }
        try {
            await this.orderRepository.remove(orderToDelete);
            return 'Order deleted successfully!';
        }
        catch (error) {
            throw new Error('Sorry, Failed to delete the order');
        }
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], OrdersService);
//# sourceMappingURL=orders.service.js.map