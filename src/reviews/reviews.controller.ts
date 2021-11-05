import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateReviewsDto } from './dto/create-review.dto';
import { UpdateReviewsDto } from './dto/update-review.dto';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly service: ReviewsService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() station: CreateReviewsDto) {
    return await this.service.create(station);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateReviewsDto: UpdateReviewsDto,
  ) {
    return await this.service.update(id, updateReviewsDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
