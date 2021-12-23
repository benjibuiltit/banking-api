import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { CustomersRepository } from './customers.repo';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService, CustomersRepository, PrismaService],
})
export class CustomersModule {}
