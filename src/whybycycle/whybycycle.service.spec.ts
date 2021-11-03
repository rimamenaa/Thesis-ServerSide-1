import { Test, TestingModule } from '@nestjs/testing';
import { WhybycycleService } from './whybycycle.service';

describe('WhybycycleService', () => {
  let service: WhybycycleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhybycycleService],
    }).compile();

    service = module.get<WhybycycleService>(WhybycycleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
