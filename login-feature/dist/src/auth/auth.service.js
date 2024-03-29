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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async createUser(createUserDto) {
        const { username, email, password, role } = createUserDto;
        const existsName = await this.userRepository.findOneBy({
            username: username,
        });
        const existsEmail = await this.userRepository.findOneBy({
            email: email,
        });
        if (existsName) {
            throw new common_1.BadRequestException('Username already exists!');
        }
        if (existsEmail) {
            throw new common_1.BadRequestException('This email is already used in an account');
        }
        const user = this.userRepository.create({
            username,
            email,
            password,
            role,
        });
        return await this.userRepository.save(user);
    }
    async loginUser(createUserDto) {
        const { username, password } = createUserDto;
        const user = await this.userRepository.findOneBy({ username: username });
        if (user && (await bcrypt.compare(password, (await user).password))) {
            const payload = { username, role: user.role };
            return {
                access_token: await this.jwtService.sign(payload),
            };
        }
        else {
            throw new common_1.UnauthorizedException('Invalid login credentials!');
        }
    }
    async allUsers() {
        const users = await this.userRepository.find();
        if (!users) {
            throw new common_1.NotFoundException('Sorry, no users found!');
        }
        return users;
    }
    async findOne(id) {
        const user = await this.userRepository.findOneBy({
            id: id,
        });
        if (!user) {
            throw new common_1.NotFoundException('Sorry, the user not found');
        }
        return user;
    }
    async myProfile(user) {
        const profile = await this.userRepository.findOneBy({
            username: user.username,
        });
        if (!profile) {
            throw new common_1.NotFoundException('Sorry, the profile not found!');
        }
        return profile;
    }
    async update(id, updateUserDto) {
        const user = await this.userRepository.findOneBy({
            id: id,
        });
        if (!user) {
            throw new common_1.NotFoundException('Sorry the user not found');
        }
        const { username, email } = updateUserDto;
        const existsName = await this.userRepository.findOneBy({
            username: username,
        });
        const existsEmail = await this.userRepository.findOneBy({
            email: email,
        });
        if (existsName) {
            throw new common_1.BadRequestException('Username already exists!');
        }
        if (existsEmail) {
            throw new common_1.BadRequestException('This email is already used in an account');
        }
        user.username = updateUserDto.username;
        user.email = updateUserDto.email;
        user.password = updateUserDto.password;
        user.role = updateUserDto.role;
        return await this.userRepository.save(user);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map