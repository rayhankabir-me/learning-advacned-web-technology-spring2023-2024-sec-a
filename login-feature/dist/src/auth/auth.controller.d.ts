import { User } from 'src/entities/user.entity';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<User>;
    login(createUserDto: CreateUserDto): Promise<{
        access_token: string;
    }>;
    allUsers(): Promise<User[]>;
    myProfile(user: User): Promise<User>;
    profile(user: User): User;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
}
