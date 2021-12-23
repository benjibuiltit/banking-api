import { forwardRef } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AccountsRepository } from '../accounts/accounts.repo';
import { AccountsModule } from '../accounts/accounts.module';
import { AccountsService } from '../accounts/accounts.service';
import { TransfersService } from './transfers.service';
import { TransfersRepository } from './transfers.repo';
import { PrismaService } from '../prisma.service';

describe('TransfersService', () => {
  let service: TransfersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [forwardRef(() => AccountsModule)],
      providers: [
        TransfersService,
        TransfersRepository,
        AccountsService,
        AccountsRepository,
        PrismaService,
      ],
    }).compile();

    service = module.get<TransfersService>(TransfersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
