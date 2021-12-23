import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateAccountRequest } from './dto/create-account.dto';
import { PrismaService } from '../prisma.service';
import { GetAccountParams } from './dto/get-account.dto';

@Injectable()
export class AccountsRepository {
  constructor(private prisma: PrismaService) {}

  async create(createRequest: CreateAccountRequest) {
    try {
      if (createRequest.initialDeposit) {
        return await this.prisma.account.create({
          data: {
            customerId: createRequest.customerId,
            balance: createRequest.initialDeposit,
            name: createRequest.name,
            deposits: {
              create: [
                {
                  amount: createRequest.initialDeposit,
                },
              ],
            },
          },
        });
      } else {
        return await this.prisma.account.create({
          data: {
            customerId: createRequest.customerId,
            balance: 0,
            name: createRequest.name,
          },
        });
      }
    } catch (err) {
      Logger.log(err);
      throw new InternalServerErrorException();
    }
  }

  async getById({ accountId }: GetAccountParams) {
    try {
      const account = await this.prisma.account.findUnique({
        where: {
          id: accountId,
        },
      });

      if (!account) throw new NotFoundException();
      return account;
    } catch (err) {
      Logger.error(err);
      throw new InternalServerErrorException();
    }
  }
}
