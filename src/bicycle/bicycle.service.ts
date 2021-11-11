import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { CreateBicycleDto } from './dto/create-bicycle.dto';
import { UpdateBicycleDto } from './dto/update-bicycle.dto';
import { Bicycle, BicycleDocument } from './entities/bicycle.entity';

@Injectable()
export class BicycleService {
  constructor(
    @InjectModel(Bicycle.name) private readonly model: Model<BicycleDocument>,
    private cloudinary: CloudinaryService,
  ) {}

  async findAll(): Promise<Bicycle[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Bicycle> {
    return await this.model.findById(id).exec();
  }

  async uploadImageToCloudinary(file: Express.Multer.File) {
    return await this.cloudinary.uploadImage(file).catch((err) => {
      console.log(err);
    });
  }

  async uploadImage(file: Express.Multer.File) {
    const url = await this.cloudinary.uploadImage(file);
    return url;
  }

  async create(createBicycleDto: CreateBicycleDto): Promise<Bicycle> {
    return await new this.model({
      ...createBicycleDto,
      createdAt: new Date(),
    }).save();
  }

  async update(
    id: string,
    updateBicycleDto: UpdateBicycleDto,
  ): Promise<Bicycle> {
    return await this.model.findByIdAndUpdate(id, updateBicycleDto).exec();
  }

  async delete(id: string): Promise<Bicycle> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
