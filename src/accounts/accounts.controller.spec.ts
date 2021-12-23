import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { AccountsController } from './accounts.controller';
import { AccountsRepository } from './accounts.repo';
import { AccountsService } from './accounts.service';
import { TransfersService } from '../transfers/transfers.service';
import { TransfersModule } from '../transfers/transfers.module';
import { forwardRef } from '@nestjs/common';
import { TransfersRepository } from '../transfers/transfers.repo';

describe('AccountsController', () => {
  let controller: AccountsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [forwardRef(() => TransfersModule)],
      controllers: [AccountsController],
      providers: [
        AccountsService,
        AccountsRepository,
        TransfersService,
        TransfersRepository,
        PrismaService,
      ],
    }).compile();

    controller = module.get<AccountsController>(AccountsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
