import { Module } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { TransfersController } from './transfers.controller';
import { AccountsService } from 'src/accounts/accounts.service';
import { TransfersRepository } from './transfers.repo';
import { AccountsModule } from 'src/accounts/accounts.module';
import { PrismaService } from 'src/prisma.service';
import { AccountsRepository } from 'src/accounts/accounts.repo';

@Module({
  imports: [AccountsModule],
  controllers: [TransfersController],
  providers: [
    TransfersService,
    TransfersRepository,
    AccountsService,
    AccountsRepository,
    PrismaService,
  ],
})
export class TransfersModule {}
