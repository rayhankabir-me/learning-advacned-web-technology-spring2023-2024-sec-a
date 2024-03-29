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
exports.OrderItemController = void 0;
const common_1 = require("@nestjs/common");
const order_item_dto_1 = require("./dto/order-item.dto");
const order_item_service_1 = require("./order-item.service");
let OrderItemController = class OrderItemController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    create(orderItemDto, response) {
        return this.ordersService.create(orderItemDto, response);
    }
    getCookie(request) {
        return this.ordersService.getCookie(request);
    }
};
exports.OrderItemController = OrderItemController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_item_dto_1.OrderItemDto, Object]),
    __metadata("design:returntype", void 0)
], OrderItemController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderItemController.prototype, "getCookie", null);
exports.OrderItemController = OrderItemController = __decorate([
    (0, common_1.Controller)('order-item'),
    __metadata("design:paramtypes", [order_item_service_1.OrderItemService])
], OrderItemController);
//# sourceMappingURL=order-item.controller.js.map