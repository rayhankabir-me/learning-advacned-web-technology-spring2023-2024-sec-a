"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemService = void 0;
const common_1 = require("@nestjs/common");
let OrderItemService = class OrderItemService {
    async create(orderItemDto, response) {
        const cookieOptions = {
            maxAge: 3600000,
            secure: true,
            path: '/',
        };
        const serializedDto = JSON.stringify(orderItemDto);
        response.cookie('orderItem', serializedDto, cookieOptions);
        return await 'Order items are added to cart successfully!';
    }
    async getCookie(request) {
        return await request.cookies;
    }
};
exports.OrderItemService = OrderItemService;
exports.OrderItemService = OrderItemService = __decorate([
    (0, common_1.Injectable)()
], OrderItemService);
//# sourceMappingURL=order-item.service.js.map