import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBicycleDto } from './dto/create-bicycle.dto';
import { UpdateBicycleDto } from './dto/update-bicycle.dto';
import { Bicycle } from './entities/bicycle.entity';

@Injectable()
export class BicycleService {
  constructor(
    @InjectRepository(Bicycle)
    private bicycle: Repository<Bicycle>,
  ) {}
  create(createBicycleDto: CreateBicycleDto) {
    return this.bicycle.save(createBicycleDto);
  }

  findAll() {
    return this.bicycle.find();
  }

  findOne(id: number) {
    return this.bicycle.findOne(id);
  }

  update(id: number, updateBicycleDto: UpdateBicycleDto) {
    return this.bicycle.update(id, updateBicycleDto);
  }

  remove(id: number) {
    return this.bicycle.delete(id);
  }
}
