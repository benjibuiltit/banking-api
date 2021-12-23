import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCustomerRequest } from './dto/create-customer.dto';

@Injectable()
export class CustomersRepository {
  constructor(private prisma: PrismaService) {}

  async create(createRequest: CreateCustomerRequest) {
    try {
      return await this.prisma.customer.create({
        data: {
          name: createRequest.name,
        },
      });
    } catch (err) {
      Logger.error(err);
      throw new InternalServerErrorException();
    }
  }
}
