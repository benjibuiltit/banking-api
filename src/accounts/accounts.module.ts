import { Module, forwardRef } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { AccountsRepository } from './accounts.repo';
import { TransfersModule } from '../transfers/transfers.module';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [forwardRef(() => TransfersModule)],
  controllers: [AccountsController],
  providers: [AccountsService, AccountsRepository, PrismaService],
  exports: [AccountsService, AccountsRepository],
})
export class AccountsModule {}
