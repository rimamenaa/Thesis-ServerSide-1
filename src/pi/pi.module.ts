import { Module } from '@nestjs/common';
import { PiService } from './pi.service';
import { PiController } from './pi.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pi, PiSchema } from './entities/pi.entity';

@Module({
  providers: [PiService],
  controllers: [PiController],
  imports: [
    MongooseModule.forFeature([{ name: Pi.name, schema: PiSchema }]),
  ],
})
export class PiModule {}
