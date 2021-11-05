import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReviewsDto } from './dto/create-review.dto';
import { UpdateReviewsDto } from './dto/update-review.dto';
import { Reviews, ReviewsDocument } from './entities/review.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Reviews.name) private readonly model: Model<ReviewsDocument>,
  ) {}

  async findAll(): Promise<Reviews[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Reviews> {
    return await this.model.findById(id).exec();
  }

  async create(createReviewsDto: CreateReviewsDto): Promise<Reviews> {
    return await new this.model({
      ...createReviewsDto,
      createdAt: new Date(),
    }).save();
  }

  async update(
    id: string,
    updateReviewsDto: UpdateReviewsDto,
  ): Promise<Reviews> {
    return await this.model.findByIdAndUpdate(id, updateReviewsDto).exec();
  }

  async delete(id: string): Promise<Reviews> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
