import { Category } from "src/entities/category.entity";
import { Course } from "src/entities/course.entity";
import { Order } from "src/entities/order.entity";
import { User } from "src/entities/user.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
  type: "postgres",
  database: "login",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  entities: [Course, Category, User, Order],
  synchronize: true,
};

export default config;
