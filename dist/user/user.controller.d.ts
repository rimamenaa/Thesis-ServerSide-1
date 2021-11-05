import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly service;
    constructor(service: UserService);
    index(): Promise<import("./entities/user.entity").User[]>;
    find(id: string): Promise<import("./entities/user.entity").User>;
    create(user: CreateUserDto): Promise<import("./entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity").User>;
    delete(id: string): Promise<import("./entities/user.entity").User>;
}
