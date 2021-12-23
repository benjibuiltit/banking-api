import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { AccountsRepository } from './accounts.repo';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AccountsController],
  providers: [AccountsService, AccountsRepository, PrismaService],
})
export class AccountsModule {}
