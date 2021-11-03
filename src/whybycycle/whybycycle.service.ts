import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWhybycycleDto } from './dto/create-whybycycle.dto';
import { UpdateWhybycycleDto } from './dto/update-whybycycle.dto';
import { Whybycycle, WhybycycleDocument } from './entities/whybycycle.entity';

@Injectable()
export class WhybycycleService {
  constructor(
    @InjectModel(Whybycycle.name) private readonly model: Model<WhybycycleDocument>,
  ) {}

  async findAll(): Promise<Whybycycle[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Whybycycle> {
    return await this.model.findById(id).exec();
  }

  async create(createWhybycycleDto: CreateWhybycycleDto): Promise<Whybycycle> {
    return await new this.model({
      ...createWhybycycleDto,
      createdAt: new Date(),
    }).save();
  }

  async update(
    id: string,
    updateWhybycycleDto: UpdateWhybycycleDto,
  ): Promise<Whybycycle> {
    return await this.model.findByIdAndUpdate(id, updateWhybycycleDto).exec();
  }

  async delete(id: string): Promise<Whybycycle> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}



























// import { Injectable } from '@nestjs/common';
// import { CreateWhybycycleDto } from './dto/create-whybycycle.dto';
// import { UpdateWhybycycleDto } from './dto/update-whybycycle.dto';

// @Injectable()
// export class WhybycycleService {
//   create(createWhybycycleDto: CreateWhybycycleDto) {
//     return 'This action adds a new whybycycle';
//   }

//   findAll() {
//     return `This action returns all whybycycle`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} whybycycle`;
//   }

//   update(id: number, updateWhybycycleDto: UpdateWhybycycleDto) {
//     return `This action updates a #${id} whybycycle`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} whybycycle`;
//   }
// }
