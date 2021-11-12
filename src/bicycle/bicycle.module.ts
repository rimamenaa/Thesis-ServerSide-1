import { Module } from '@nestjs/common';
import { BicycleService } from './bicycle.service';
import { BicycleController } from './bicycle.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bicycle, BicycleSchema } from './entities/bicycle.entity';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  providers: [BicycleService],
  controllers: [BicycleController],
  imports: [
    MongooseModule.forFeature([{ name: Bicycle.name, schema: BicycleSchema }]),
    CloudinaryModule,
  ],
})
export class BicycleModule {}
