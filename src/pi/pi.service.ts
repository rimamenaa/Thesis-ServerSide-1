import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePiDto } from './dto/create-pi.dto';
import { UpdatePiDto } from './dto/update-pi.dto';
import { Pi, PiDocument } from './entities/pi.entity';

@Injectable()
export class PiService {
  constructor(
    @InjectModel(Pi.name) private readonly model: Model<PiDocument>,
  ) {}

  async findAll(): Promise<Pi[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Pi> {
    return await this.model.findById(id).exec();
  }

  async create(createPiDto: CreatePiDto): Promise<Pi> {
    return await new this.model({
      ...createPiDto,
      createdAt: new Date(),
    }).save();
  }

  async update(
    id: string,
    updatePiDto: UpdatePiDto,
  ): Promise<Pi> {
    return await this.model.findByIdAndUpdate(id, updatePiDto).exec();
  }

  async delete(id: string): Promise<Pi> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
