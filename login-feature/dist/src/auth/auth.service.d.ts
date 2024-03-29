import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class AuthService {
    private readonly userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    loginUser(createUserDto: CreateUserDto): Promise<{
        access_token: string;
    }>;
    allUsers(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    myProfile(user: User): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
}
