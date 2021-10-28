import { Module } from '@nestjs/common';
import { BicycleService } from './bicycle.service';
import { BicycleController } from './bicycle.controller';
import { Bicycle } from './entities/bicycle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Bicycle])],

  controllers: [BicycleController],
  providers: [BicycleService],
})
export class BicycleModule {}
