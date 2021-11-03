import { Module } from '@nestjs/common';
import { WhybycycleService } from './whybycycle.service';
import { WhybycycleController } from './whybycycle.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Whybycycle, WhybycycleSchema } from './entities/whybycycle.entity';

@Module({
  providers: [WhybycycleService],
  controllers: [WhybycycleController],
  imports: [
    MongooseModule.forFeature([{ name: Whybycycle.name, schema: WhybycycleSchema }]),
  ],
})
export class WhybycycleModule {}





















// import { Module } from '@nestjs/common';
// import { WhybycycleService } from './whybycycle.service';
// import { WhybycycleController } from './whybycycle.controller';

// @Module({
//   controllers: [WhybycycleController],
//   providers: [WhybycycleService]
// })
// export class WhybycycleModule {}
