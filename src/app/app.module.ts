import { Module } from '@nestjs/common';
import { AccountsModule } from '../accounts/accounts.module';
import { CustomersModule } from '../customers/customers.module';
import { TransfersModule } from '../transfers/transfers.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AccountsModule, CustomersModule, TransfersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
