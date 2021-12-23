import { Module, forwardRef } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { TransfersController } from './transfers.controller';
import { TransfersRepository } from './transfers.repo';
import { AccountsModule } from 'src/accounts/accounts.module';
import { PrismaService } from 'src/prisma.service';
@Module({
  imports: [forwardRef(() => AccountsModule)],
  controllers: [TransfersController],
  providers: [TransfersService, TransfersRepository, PrismaService],
  exports: [TransfersService],
})
export class TransfersModule {}
