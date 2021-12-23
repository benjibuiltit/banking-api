import { Module, forwardRef } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { AccountsRepository } from './accounts.repo';
import { PrismaService } from 'src/prisma.service';
import { TransfersModule } from 'src/transfers/transfers.module';

@Module({
  imports: [forwardRef(() => TransfersModule)],
  controllers: [AccountsController],
  providers: [AccountsService, AccountsRepository, PrismaService],
  exports: [AccountsService, AccountsRepository],
})
export class AccountsModule {}
