
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSuggestionsDto } from './dto/create-suggestion.dto';
import { UpdateSuggestionsDto } from './dto/update-suggestion.dto';
import { Suggestions, SuggestionsDocument } from './entities/suggestion.entity';

@Injectable()
export class SuggestionsService {
  constructor(
    @InjectModel(Suggestions.name) private readonly model: Model<SuggestionsDocument>,
  ) {}

  async findAll(): Promise<Suggestions[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Suggestions> {
    return await this.model.findById(id).exec();
  }

  async create(createSuggestionsDto: CreateSuggestionsDto): Promise<Suggestions> {
    return await new this.model({
      ...createSuggestionsDto,
      createdAt: new Date(),
    }).save();
  }

  async update(
    id: string,
    updateSuggestionsDto: UpdateSuggestionsDto,
  ): Promise<Suggestions> {
    return await this.model.findByIdAndUpdate(id, updateSuggestionsDto).exec();
  }

  async delete(id: string): Promise<Suggestions> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
