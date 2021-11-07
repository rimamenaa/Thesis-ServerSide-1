import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { MongooseModule } from '@nestjs/mongoose';
import { BicycleModule } from './bicycle/bicycle.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WhybycycleModule } from './whybycycle/whybycycle.module';

import { AdminModule } from './admin/admin.module';
import { StationModule } from './station/station.module';
import { SuggestionsModule } from './suggestions/suggestions.module';
import { ReviewsModule } from './reviews/reviews.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGO_URI,
      useNewUrlParser: true,
      synchronize: true,
      logging: true,
    }),
    UserModule,
    BicycleModule,
    AuthModule,
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
