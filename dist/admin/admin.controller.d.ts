import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly service;
    constructor(service: AdminService);
    index(): Promise<import("./entities/admin.entity").Admin[]>;
    find(id: string): Promise<import("./entities/admin.entity").Admin>;
    create(user: CreateAdminDto): Promise<import("./entities/admin.entity").Admin>;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<import("./entities/admin.entity").Admin>;
    delete(id: string): Promise<import("./entities/admin.entity").Admin>;
}
