import { Test, TestingModule } from '@nestjs/testing';
import { WhybycycleController } from './whybycycle.controller';
import { WhybycycleService } from './whybycycle.service';

describe('WhybycycleController', () => {
  let controller: WhybycycleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhybycycleController],
      providers: [WhybycycleService],
    }).compile();

    controller = module.get<WhybycycleController>(WhybycycleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
