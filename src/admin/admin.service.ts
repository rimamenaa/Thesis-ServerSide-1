import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin, AdminDocument } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private readonly model: Model<AdminDocument>,
  ) {}

  async findAll(): Promise<Admin[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Admin> {
    return await this.model.findById(id).exec();
  }

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    return await new this.model({
      ...createAdminDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateAdminDto: UpdateAdminDto): Promise<Admin> {
    return await this.model.findByIdAndUpdate(id, updateAdminDto).exec();
  }

  async delete(id: string): Promise<Admin> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
