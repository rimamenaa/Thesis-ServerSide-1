import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Reviews, ReviewsSchema } from './entities/review.entity';

@Module({
  providers: [ReviewsService],
  controllers: [ReviewsController],
  imports: [
    MongooseModule.forFeature([{ name: Reviews.name, schema: ReviewsSchema }]),
  ],
})
export class ReviewsModule {}
