import * as bcrypt from "bcrypt";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: "student" })
  role: string;

  @BeforeInsert()
  async HashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
