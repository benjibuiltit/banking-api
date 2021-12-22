import { Module } from '@nestjs/common';
import { AccountsModule } from 'src/accounts/accounts.module';
import { CustomersModule } from 'src/customers/customers.module';
import { TransfersModule } from 'src/transfers/transfers.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AccountsModule, CustomersModule, TransfersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
