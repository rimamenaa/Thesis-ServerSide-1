import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { BicycleModule } from './bicycle/bicycle.module';

import { WhybycycleModule } from './whybycycle/whybycycle.module';

import { AdminModule } from './admin/admin.module';
import { StationModule } from './station/station.module';
import { SuggestionsModule } from './suggestions/suggestions.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Wissem:brinis@brinisdatabase.gedvh.mongodb.net/bycycle?retryWrites=true&w=majority',
    ),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://Wissem:brinis@brinisdatabase.gedvh.mongodb.net/bycycle?retryWrites=true&w=majority',
      useNewUrlParser: true,
      synchronize: true,
      logging: true,
      entities: [User],
    }),
    UserModule,
    BicycleModule,

    WhybycycleModule,

    AdminModule,
    StationModule,
    SuggestionsModule,
    ReviewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
