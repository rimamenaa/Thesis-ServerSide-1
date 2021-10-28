import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private admin: Repository<Admin>,
  ) {}
  create(createAdminDto: CreateAdminDto) {
    return this.admin.save(createAdminDto);
  }

  findAll() {
    return this.admin.find();
  }

  findOne(id: number) {
    return this.admin.findOne(id);
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.admin.update(id, updateAdminDto);
  }

  remove(id: number) {
    return this.admin.delete(id);
  }
}
