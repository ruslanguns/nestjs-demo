import { Test, TestingModule } from '@nestjs/testing';
import { ProdConfigService } from './prod-config.service';

describe('ProdConfigService', () => {
  let service: ProdConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdConfigService],
    }).compile();

    service = module.get<ProdConfigService>(ProdConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
