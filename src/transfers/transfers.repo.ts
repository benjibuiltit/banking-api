import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTransferRequest } from './dto/create-transfer.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TransfersRepository {
  constructor(private prisma: PrismaService) {}

  async transferTransaction(createRequest: CreateTransferRequest) {
    try {
      return await this.prisma.$transaction(async (prisma: PrismaClient) => {
        // Decrement sending account balance
        const sendingAccount = await prisma.account.update({
          data: {
            balance: {
              decrement: createRequest.amount,
            },
          },
          where: {
            id: createRequest.fromAccountId,
          },
        });

        // Verify that the sending account's balance didn't go negative
        if (sendingAccount.balance < 0) {
          throw new ConflictException({
            message: 'Insufficient funds.',
          });
        }

        // Increment the receiving account balance
        await prisma.account.update({
          data: {
            balance: {
              increment: createRequest.amount,
            },
          },
          where: {
            id: createRequest.toAccountId,
          },
        });

        // Record & return the transfer
        return await this.prisma.transfer.create({
          data: {
            amount: createRequest.amount,
            toAccountId: createRequest.toAccountId,
            fromAccountId: createRequest.fromAccountId,
          },
        });
      });
    } catch (err) {
      if (err instanceof ConflictException) {
        throw err;
      } else {
        Logger.error(err);
        throw new InternalServerErrorException();
      }
    }
  }

  async getAccountTransfers(id: string) {
    try {
      return await this.prisma.transfer.findMany({
        where: {
          OR: [
            {
              fromAccountId: id,
            },
            {
              toAccountId: id,
            },
          ],
        },
      });
    } catch (err) {
      Logger.error(err);
      throw new InternalServerErrorException();
    }
  }
}
