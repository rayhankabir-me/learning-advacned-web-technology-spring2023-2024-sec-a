"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_entity_1 = require("./src/entities/category.entity");
const course_entity_1 = require("./src/entities/course.entity");
const order_entity_1 = require("./src/entities/order.entity");
const user_entity_1 = require("./src/entities/user.entity");
const config = {
    type: 'postgres',
    database: 'onlineLearningPlatform',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    entities: [course_entity_1.Course, category_entity_1.Category, user_entity_1.User, order_entity_1.Order],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map