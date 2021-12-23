import { BadRequestException, Injectable } from '@nestjs/common';
import { AccountsService } from 'src/accounts/accounts.service';
import { CreateTransferRequest } from './dto/create-transfer.dto';
import { TransfersRepository } from './transfers.repo';

@Injectable()
export class TransfersService {
  constructor(
    private accountsService: AccountsService,
    private transfersRepo: TransfersRepository,
  ) {}

  async create(transferRequest: CreateTransferRequest) {
    // Verify we're transferring between two separate accounts
    if (transferRequest.fromAccountId === transferRequest.toAccountId) {
      throw new BadRequestException({
        message: 'Cannot transfer from and to the same account.',
      });
    }

    // Verify the receiving account exist
    await this.accountsService.getAccountById({
      accountId: transferRequest.toAccountId,
    });

    return this.transfersRepo.transferTransaction(transferRequest);
  }

  findAll() {
    return `This action returns all transfers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transfer`;
  }
}
