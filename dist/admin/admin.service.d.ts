import { Model } from 'mongoose';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin, AdminDocument } from './entities/admin.entity';
export declare class AdminService {
    private readonly model;
    constructor(model: Model<AdminDocument>);
    findAll(): Promise<Admin[]>;
    findOne(id: string): Promise<Admin>;
    create(createAdminDto: CreateAdminDto): Promise<Admin>;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<Admin>;
    delete(id: string): Promise<Admin>;
}
