import { Module } from '@nestjs/common';
import { SuggestionsService } from './suggestions.service';
import { SuggestionsController } from './suggestions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Suggestions, SuggestionsSchema } from './entities/suggestion.entity';

@Module({
  providers: [SuggestionsService],
  controllers: [SuggestionsController],
  imports: [
    MongooseModule.forFeature([
      { name: Suggestions.name, schema: SuggestionsSchema },
    ]),
  ],
})
export class SuggestionsModule {}
